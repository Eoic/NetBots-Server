import isolatedVM from 'isolated-vm';
const { Isolate } = isolatedVM;

export class Executor {
    private isolate;
    private context;
    private jail;

    constructor() {
        this.isolate = new Isolate({ memoryLimit: 128 });
        this.context = this.isolate.createContextSync();
        this.jail = this.context.global;
        this.setupJail();
    }

    private setupJail() {
        this.jail.setSync('global', this.jail.derefInto());
        this.jail.setSync('log', (...args: any[]) => console.log(...args));
        this.jail.setSync('move', (x: number, y: number) => {
            this.context.global.set("position", { x, y });
        });
    }

    public runScript(content: string) {
        this.isolate
            .compileScriptSync(content)
            .run(this.context)
            .then(() => console.log("Script executed successfully.", this.context))
            .catch((error: any) => console.log(error));
    }
}