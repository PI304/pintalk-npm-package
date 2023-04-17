export declare class SocketClient {
    private socket;
    private readonly uri;
    private readonly name;
    constructor(cookie: string, name: string);
    connect(): Promise<void>;
    getDatetime(): string;
    sendMessage(data: any): void;
    disconnect(): void;
}
