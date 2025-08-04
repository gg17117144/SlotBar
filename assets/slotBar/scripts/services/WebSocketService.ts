import {ServiceBase} from "db://assets/slotBar/scripts/services/ServiceBase";

export class WebSocketService {
    private static socket: WebSocket | null = null;

    // 建立 WebSocket 連線
    static connectWebSocket(onMessage: (msg: any) => void): void {
        console.log("ServiceBase.Websocket_BASE" + ServiceBase.Websocket_BASE)
        console.log("ServiceBase.token" + ServiceBase.token)
        console.log("檢查路徑" + `${ServiceBase.Websocket_BASE}?token=${ServiceBase.token}`)
        this.socket = new WebSocket(`${ServiceBase.Websocket_BASE}?token=${ServiceBase.token}`);

        this.socket.onopen = () => {
            console.log("✅ WebSocket 已連線");
        };

        this.socket.onmessage = (event) => {
            const msg = JSON.parse(event.data);
            onMessage(msg); // 交給外部處理
        };

        this.socket.onerror = (e) => {
            console.error("WebSocket 錯誤", e);
        };

        this.socket.onclose = () => {
            console.log("WebSocket 已關閉");
        };
    }

    // 發送 SpinStart 資料
    static spinStart(bet: number): void {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
            throw new Error("WebSocket 尚未連線");
        }

        const payload = {
            event: "SpinStart",
            data: {bet}
        };

        this.socket.send(JSON.stringify(payload));
    }
}
