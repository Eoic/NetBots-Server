import { Vector } from '../math/vector.js';

export class Transform {
    public position: Vector = Vector.zero;
    public rotation: number = 0;
    public scale: number = 1;
}