"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transform = void 0;
const vector_js_1 = require("../math/vector.js");
class Transform {
    constructor() {
        this.position = vector_js_1.Vector.zero;
        this.rotation = 0;
        this.scale = 1;
    }
}
exports.Transform = Transform;
//# sourceMappingURL=transform.js.map