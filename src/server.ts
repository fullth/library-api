import { App } from './app';

const TaeHwanServer = async function(): Promise<void> {
    try {
        const app = new App();
        const port = 3000;
        await app.createServer(port);
    } catch (err: Error | any) {
        console.error(err);
    }
}

TaeHwanServer();

/*
async await vs Promise
async await combine Promise
*/