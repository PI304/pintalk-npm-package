export declare class SocketClient {
    private clientSocket;
    private statusSocket;
    private readonly cookie;
    private readonly uuid;
    private readonly name;
    private readonly client;
    private oldestMsgDatetime;
    private appendBack;
    private isInitialized;
    constructor(cookie: string, client: clientResult | undefined);
    connect(): Promise<void>;
    setAppendBack(appendBack: boolean): void;
    getIsInitialized(): boolean;
    createMsgBox(data: receivedMsg): HTMLDivElement;
    createElement(isHost: boolean, timeStamp: string, msg: string): HTMLDivElement;
    getDatetime(): string;
    formatTimeStamp(datetime: string): string;
    sendMessage(data: any): void;
    requestPastMessages(): void;
    disconnect(): void;
}
