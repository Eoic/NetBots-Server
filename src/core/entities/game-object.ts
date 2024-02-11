import { v4 as UUIDv4 } from 'uuid';
import { Transform } from './transform.js';

export class GameObject {
    public readonly id: string = UUIDv4();
    public readonly transform: Transform = new Transform();
}