import { App } from './app';

const server = async function (): Promise<void> {
  try {
    const app = new App();
    const port = 3000;
    await app.createServer(port);
  } catch (err: Error | any) {
    console.error(err);
  }
}

server();