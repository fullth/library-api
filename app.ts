import express from 'express';
import http from 'http';

import winston from 'winston';
import expressWinston from 'express-winston';
import cors from 'cors';
import {CommonRoutesConfig} from './common/common.routes.config';
import {BooksRoutes} from './domain/books/config/books.routes.config';
import debug from 'debug';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

// json parsing 미들웨어 사용
app.use(express.json());

// cross-origin requests 허용
app.use(cors());

// expressWinston 미들웨어 설정.
// Express.js에서 핸들링하는 모든 HTTP요청에 대한 자동로그.
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

app.use(expressWinston.logger(loggerOptions));

// 라우팅 배열에 BooksRoutes추가
routes.push(new BooksRoutes(app));

const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage)
});

server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
    console.log(runningMessage);
});