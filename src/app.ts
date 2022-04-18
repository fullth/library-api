import 'reflect-metadata'; // comes here after you imported the reflect-metadata package!
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import router from './routes/index'
import {Request, Response} from 'express';
import winston from 'winston';
import expressWinston from 'express-winston';

export class App {
    private app: express.Application;
    constructor() {
        // 순서랑은 관계 없을 것.
        this.app = express();
        this.setRoutes(); 
        this.setMiddleware();
        this.setLogger();
    }

    private setMiddleware(): void {
        // console.log(this)
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