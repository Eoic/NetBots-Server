"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameObject = void 0;
const uuid_1 = require("uuid");
const transform_js_1 = require("./transform.js");
class GameObject {
    constructor() {
        this.id = (0, uuid_1.v4)();
        this.transform = new transform_js_1.Transform();
    }
}
exports.GameObject = GameObject;
//# sourceMappingURL=game-object.js.map