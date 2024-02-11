"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Executor = void 0;
const isolated_vm_1 = __importDefault(require("isolated-vm"));
const { Isolate } = isolated_vm_1.default;
class Executor {
    constructor() {
        this.isolate = new Isolate({ memoryLimit: 128 });
        this.context = this.isolate.createContextSync();
        this.jail = this.context.global;
        this.setupJail();
    }
    setupJail() {
        this.jail.setSync('global', this.jail.derefInto());
        this.jail.setSync('log', (...args) => console.log(...args));
        this.jail.setSync('move', (x, y) => {
            this.context.global.set("position", { x, y });
        });
    }
    runScript(content) {
        this.isolate
            .compileScriptSync(content)
            .run(this.context)
            .then(() => console.log("Script executed successfully.", this.context))
            .catch((error) => console.log(error));
    }
}
exports.Executor = Executor;
//# sourceMappingURL=executor.js.map