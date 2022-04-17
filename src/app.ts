import 'reflect-metadata'; // comes here after you imported the reflect-metadata package!
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import router from './routes/index'
import {Request, Response} from 'express';
import winston from 'winston';
import expressWinston from 'express-winston';

export class App {
    private app: express.Application = express();
    constructor() {
        /** @Question setMiddleware()가 먼저 호출되면 라우트가 동작하지 않는 이유. */
        this.setRoutes(); 
        this.setMiddleware();
        this.setLogger();
    }

    private setMiddleware(): void {
        this.app.use(express.json);
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cors());
    }

    private setRoutes(): void {
        this.app.use('/api', router);
        this.app.use((req: Request, res: Response, next) => { res.status(404).send('NOT FOUND'); });
    }

    private setLogger(): void{
        const loggerOptions: expressWinston.LoggerOptions = {
            transports: [new winston.transports.Console()],
            format: winston.format.combine(
                winston.format.json(),
                winston.format.prettyPrint(),
                winston.format.colorize({ all: true })
            ),
        };
        if (!process.env.DEBUG) {
            loggerOptions.meta = false;
        }
        this.app.use(expressWinston.logger(loggerOptions));
    }

    public async createServer(port: number): Promise<void> {
        this.app.listen(port, () => {
            console.log(`Server is listening on http://localhost:${port}`);
        });
    }
}