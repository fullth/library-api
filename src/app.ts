import 'reflect-metadata'; // comes here after you imported the reflect-metadata package!
import express from 'express';
import cors from 'cors';
import router from './routes/index';
import bodyParser from 'body-parser';
import {Request, Response} from 'express';
import winston from 'winston';
import expressWinston from 'express-winston';

export class App {
    private app: express.Application = express();
    constructor() {
        /** @Issue setMiddleware()가 먼저 오면 요청 시 무한로딩. -> 순서랑은 관계 없을 것. But, 원인 못찾음. */
        //this.app = express();
        this.setRoutes(); 
        this.setMiddleware();
        this.setLogger();
    }

    private setRoutes(): void {
        /** @Issue setMiddleware()에서 설정 시 생성자 때와 비슷한 상황(body-parser가 동작하지 않음.) */
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use('/api', router);
        this.app.use((req: Request, res: Response, next) => { res.status(404).send('NOT FOUND'); });
    }

    private setMiddleware(): void {
        //this.app.use(bodyParser.urlencoded({ extended: true }));
        //this.app.use(bodyParser.json());
        this.app.use(cors());
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