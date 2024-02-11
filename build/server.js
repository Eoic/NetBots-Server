"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const config = (0, config_1.getConfig)();
const app = (0, express_1.default)();
const webSocketServer = new ws_1.default.Server({ noServer: true });
webSocketServer.on('connection', (socket) => {
    socket.on('message', (message) => {
        console.log("Received:", message.toString('utf-8'));
    });
});
const server = app.listen(config.port, () => {
    console.log(`Server started at: http://127.0.0.1:${config.port}`);
    console.info(`Web socket server running on ws://127.0.0.1:${config.port}.`);
});
app.get('/', (request, response) => {
    response.send("OK.");
});
server.on('upgrade', (request, socket, head) => {
    webSocketServer.handleUpgrade(request, socket, head, (socket) => {
        webSocketServer.emit('connection', socket, request);
    });
});
//# sourceMappingURL=server.js.map