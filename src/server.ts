import Fastify from "fastify";
import FastifyWS from "@fastify/websocket";
import { Executor } from "./game/simulator/executor.js";

const fastify = Fastify({ logger: false });

fastify.register(FastifyWS.default, {
    options: {
        maxPayload: 1048576
    }
});

const executor = new Executor();

fastify.register(async () => {
    fastify.get('/', { websocket: true }, (connection, request) => {
        connection.socket.on('message', (message) => {
            const json =  JSON.parse(message.toString());
            executor.runScript(json.script);
            connection.socket.send("DONE.");
        });
    });
}); 


fastify.listen({ port: 3000 }, (error, address) => {
    if (error) {
        fastify.log.error(error);
        process.exit(1);
    }

    console.log(`Server listening on port 3000.`);
});