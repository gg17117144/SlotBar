# 🎰 Slot Machine Game - Cocos (Frontend) + Golang (Backend)

本專案為一個使用 Cocos Creator 前端的拉霸機遊戲，**WebSocket 即時拉霸遊戲**。

後端專案 => https://github.com/gg17117144/go-login-jwt/tree/main
---

## 📦 功能介紹

### 🔐 使用者帳號系統
- 使用者註冊、登入
- 使用 JWT 實現安全驗證
- 支援 Email 驗證（可選）

### 🎮 拉霸機核心功能
- 3 軸符號轉動（水果機邏輯）
- 支援 WebSocket 即時溝通
- 控制轉動動畫、加速與減速效果

### 🧾 歷史紀錄
- 每一次拉霸結果都會寫入資料庫
- 使用者可查詢歷史紀錄

---

## 🚀 技術棧

| 技術         | 說明                                    |
|--------------|-----------------------------------------|
| Cocos Creator | 前端開發工具，用於製作遊戲畫面與 UI 操作 |
| TypeScript   | 前端語言，負責呼叫 API 與連接 WebSocket  |
