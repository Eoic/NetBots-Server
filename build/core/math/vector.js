"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
class Vector {
    static get zero() {
        return new Vector(0, 0, 0);
    }
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
exports.Vector = Vector;
//# sourceMappingURL=vector.js.map