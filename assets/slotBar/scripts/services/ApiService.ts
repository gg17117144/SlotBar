// assets/scripts/services/ApiService.ts
import {ServiceBase} from "db://assets/slotBar/scripts/services/ServiceBase";

export class ApiService {
    // 註冊
    static async register(username: string, password: string, email: string): Promise<{
        success: boolean;
        message?: string
    }> {
        try {
            const response = await fetch(`${ServiceBase.API_BASE}/register`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, password, email})
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null); // 解析失敗也不會爆
                const message = errorData?.message || `註冊失敗：${response.status}`;
                return {success: false, message};
            }

            return {success: true};
        } catch (error: any) {
            return {success: false, message: error.message || '網路錯誤，請稍後再試'};
        }
    }

    // 登入並儲存 token
    static async login(username: string, password: string): Promise<{ success: boolean; message?: string }> {
        try {
            const response = await fetch(`${ServiceBase.API_BASE}/login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, password})
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null); // 解析失敗也不會爆
                const message = errorData?.message || `登入失敗：${response.status}`;
                return {success: false, message};
            }
            const json = await response.json();
            console.log("取得token成功：", json.data.token);
            ServiceBase.token = json.data.token;
            return {success: true};
        } catch (error: any) {
            return {success: false, message: error.message || '網路錯誤，請稍後再試'};
        }
    }

    // 拿目前登入的使用者資訊
    static async getMe(): Promise<any> {
        if (!ServiceBase.token) throw new Error("尚未登入");

        const response = await fetch(`${ServiceBase.API_BASE}/me`, {
            headers: {'Authorization': `Bearer ${ServiceBase.token}`}
        });

        if (!response.ok) {
            throw new Error(`取得使用者資訊失敗：${response.status}`);
        }

        return await response.json();
    }
}