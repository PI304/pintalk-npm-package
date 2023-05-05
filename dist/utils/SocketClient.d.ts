export declare class SocketClient {
    private clientSocket;
    private statusSocket;
    private readonly cookie;
    private readonly uuid;
    private readonly name;
    constructor(cookie: string, uuid: string | undefined);
    connect(): Promise<void>;
    getDatetime(): string;
    sendMessage(data: any): void;
    disconnect(): void;
}
