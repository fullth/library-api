import 'reflect-metadata'; // comes here after you imported the reflect-metadata package!
import express from 'express';
import cors from 'cors';
import router from './routes/index';
import { Request, Response } from 'express';
import winston from 'winston';
import expressWinston from 'express-winston';

export class App {
  private app: express.Application;
  constructor() {
    this.app = express();
    this.setMiddleware();
    this.setRoutes();
    this.setLogger();
  }

  private setRoutes(): void {
    this.app.use('/api', router);
    this.app.use((req: Request, res: Response) => { res.status(404).send('NOT FOUND'); });
  }

  private setMiddleware(): void {
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  private setLogger(): void {
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