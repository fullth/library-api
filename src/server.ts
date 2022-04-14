import { App } from './app';

try {
    const app = new App();
    const port = 3000;
    app.createServer(port);
} catch (err: Error | any) {
    console.error(err);
}