"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
;
const tryRead = (key) => {
    // TODO: Read and return or throw exception.
};
const getConfig = () => {
    return {
        port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
        env: process.env.ENV ? process.env.ENV : 'development',
    };
};
exports.getConfig = getConfig;
//# sourceMappingURL=config.js.map