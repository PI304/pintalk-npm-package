export class SocketClient {
  private socket: WebSocket | null;

  constructor(cookie: string) {
    this.socket = new WebSocket(`wss://api.pintalk.app/ws/chat/${cookie}/`);
    // this.onMessageCallback = null;
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

  // setOnMessageCallback(callback: (data: any) => void) {
  //   this.onMessageCallback = callback;
  // }

  disconnect() {
    if (this.socket != null && this.socket.readyState === WebSocket.OPEN) {
      this.socket.close();
      this.socket = null;
      console.log('Socket disconnected');
    }
  }
}
