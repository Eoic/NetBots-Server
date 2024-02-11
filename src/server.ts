import ws from 'ws';
import express from 'express';
import { getConfig } from './config';

const config = getConfig();
const app = express();

const webSocketServer = new ws.Server({ noServer: true });

webSocketServer.on('connection', (socket) => {
    socket.on('message', (message) => {
        console.log("Received:", message.toString('utf-8'));
    });
});

const server = app.listen(config.port, () => {
    console.log(`Server started at: http://127.0.0.1:${config.port}`)
    console.info(`Web socket server running on ws://127.0.0.1:${config.port}.`);
});

app.get('/', (request ,response) => {
    response.send("OK.");
});

server.on('upgrade', (request, socket, head) => {
    webSocketServer.handleUpgrade(request, socket, head, (socket) => {
        webSocketServer.emit('connection', socket, request);
    });
});