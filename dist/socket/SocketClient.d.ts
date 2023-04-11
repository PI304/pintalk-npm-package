declare class SocketClient {
    private socket;
    constructor(cookie: string);
    getDatetime(): string;
    sendMessage(data: any): void;
    disconnect(): void;
}
export default SocketClient;
