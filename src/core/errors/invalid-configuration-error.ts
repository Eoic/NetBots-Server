export class InvalidConfigurationError extends Error {
    constructor() {
        super("Invalid configuration.");
        Object.setPrototypeOf(this, InvalidConfigurationError.prototype);
    }
}