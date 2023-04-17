export class SocketClient {
  private socket: WebSocket | null;
  private readonly uri: string;
  private readonly name: string;

  constructor(cookie: string, name: string) {
    this.uri = cookie;
    this.socket = null;
    this.name = name;
  }

  async connect() {
    await new Promise<void>((resolve, reject) => {
      this.socket = new WebSocket(`wss://api.pintalk.app/ws/chat/${this.uri}/`);

      this.socket.addEventListener('open', () => {
        console.log('Socket connected');
        console.log(this.name);
        resolve();
      });

      this.socket.addEventListener('error', (error) => {
        reject(error);
      });

      this.socket.addEventListener('close', (event) => {
        console.log(
          'Socket disconnected',
          event.wasClean,
          event.code,
          event.reason
        );
      });

      this.socket.addEventListener('message', (event) => {
        const data = JSON.parse(event.data);
        console.log(this.name);
        console.log('Socket received data:', data);
      });
    });
  }

  getDatetime() {
    const now = new Date();
    now.setHours(now.getHours() + 9);
    return now.toISOString().substring(0, 19);
  }

  sendMessage(data: any) {
    if (this.socket != null && this.socket.readyState === WebSocket.OPEN) {
      const message = JSON.stringify({
        type: 'chat_message',
        is_host: false,
        message: data,
        datetime: this.getDatetime(),
      });
      console.log('Sending message:', message);
      this.socket.send(message);
    } else {
      console.log('Socket is not connected');
    }
  }

  disconnect() {
    if (this.socket != null && this.socket.readyState === WebSocket.OPEN) {
      this.socket.close();
      this.socket = null;
    }
  }
}
