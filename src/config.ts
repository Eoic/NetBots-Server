import dotenv from 'dotenv';
import { InvalidConfigurationError } from './core/errors';

dotenv.config();

export interface Config {
    port: number;
    env: string,
};

const tryRead = (key: string) => {
    const value = process.env[key];

    if (value === undefined)
        throw new InvalidConfigurationError();

    return value;
}

export const getConfig = (): Config => {
    return {
        port: parseInt(tryRead("PORT")),
        env: tryRead("ENVIRONMENT"),
    }
}