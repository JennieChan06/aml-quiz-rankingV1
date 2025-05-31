# 🏆 好好證券洗錢防制排位賽

一個即時互動的洗錢防制知識測驗系統，支持多人同時參與和即時排行榜更新。

## ✨ 功能特色

### 🎯 核心功能
- **20題專業測驗**：涵蓋洗錢防制核心知識點
- **即時排行榜**：多人同時參與，實時更新排名
- **智能評分**：每題5分，總分100分，附詳細解析
- **進度追蹤**：實時顯示答題進度和當前分數
- **答案檢視**：測驗完成後可檢視所有題目和解析

### 🌐 技術特色
- **響應式設計**：支持桌面和移動設備
- **即時通信**：使用 Socket.IO 實現即時排行榜更新
- **離線支持**：即使沒有網路也能完成測驗
- **安全防護**：包含速率限制、CORS 保護等安全措施
- **QR Code 分享**：方便移動設備快速參與

## 🚀 快速開始

### 本地開發

1. **克隆項目**
```bash
git clone <your-repo-url>
cd aml-quiz-ranking
```

2. **安裝依賴**
```bash
npm install
```

3. **啟動開發服務器**
```bash
npm run dev
```

4. **訪問應用**
```
http://localhost:3000
```

### 生產環境部署

```bash
npm start
```

## 🌍 Render 部署指南

### 方法一：使用 Render Dashboard

1. **登錄 Render**
   - 訪問 [render.com](https://render.com)
   - 使用 GitHub 帳號登錄

2. **創建新服務**
   - 點擊 "New +" → "Web Service"
   - 連接您的 GitHub 倉庫
   - 選擇此項目的倉庫

3. **配置服務**
   ```
   Name: aml-quiz-ranking
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   Plan: Free
   ```

4. **環境變量**（可選）
   ```
   NODE_ENV=production
   ```

5. **部署**
   - 點擊 "Create Web Service"
   - 等待部署完成（約3-5分鐘）

### 方法二：使用 render.yaml（推薦）

1. **推送代碼到 GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **在 Render 中導入**
   - 選擇 "Blueprint" 部署方式
   - 連接 GitHub 倉庫
   - Render 會自動讀取 `render.yaml` 配置

### 部署後訪問

部署成功後，您會獲得一個類似這樣的 URL：
```
https://aml-quiz-ranking.onrender.com
```

## 📱 使用說明

### 參與測驗

1. **輸入姓名**：在首頁輸入您的姓名
2. **開始測驗**：點擊"開始測驗"按鈕
3. **答題**：選擇您認為正確的答案
4. **查看解析**：每題答完後會顯示詳細解析
5. **提交結果**：完成所有題目後提交測驗
6. **查看排名**：在排行榜中查看您的排名

### 功能說明

- **即時分數**：答題過程中實時顯示當前總分
- **題目導航**：可以返回查看之前的題目
- **排行榜**：查看所有參與者的排名和統計
- **答案檢視**：詳細查看每題的正確答案和解析

## 🛠 技術架構

### 前端技術
- **HTML5 + CSS3**：響應式界面設計
- **Vanilla JavaScript**：純 JS 實現，無框架依賴
- **Socket.IO Client**：即時通信
- **QRCode.js**：二維碼生成

### 後端技術
- **Node.js + Express**：服務器框架
- **Socket.IO**：WebSocket 即時通信
- **SQLite**：輕量級數據庫
- **Helmet**：安全防護中間件

### 部署平台
- **Render**：雲端部署平台
- **GitHub**：代碼版本控制

## 📊 API 端點

### 測驗相關
- `POST /api/submit-quiz` - 提交測驗結果
- `GET /api/leaderboard` - 獲取排行榜
- `GET /api/stats` - 獲取統計數據
- `GET /api/health` - 健康檢查

### Socket.IO 事件
- `live-score-update` - 即時分數更新
- `leaderboard-update` - 排行榜更新
- `player-joined` - 玩家加入通知

## 🔒 安全特性

- **速率限制**：防止 API 濫用
- **CORS 保護**：跨域請求安全
- **輸入驗證**：防止惡意數據注入
- **CSP 頭部**：內容安全策略
- **Helmet 保護**：多重安全防護

## 📈 性能優化

- **Gzip 壓縮**：減少傳輸大小
- **靜態文件緩存**：提升加載速度
- **數據庫優化**：高效查詢設計
- **內存數據庫**：快速數據訪問

## 🎨 自定義配置

### 修改題目
編輯 `public/script.js` 中的 `questions` 數組：

```javascript
const questions = [
    {
        id: 1,
        question: "您的問題",
        options: ["選項A", "選項B", "選項C", "選項D"],
        correct: 0, // 正確答案索引
        explanation: "詳細解析"
    }
    // ... 更多題目
];
```

### 修改評分標準
在 `getFeedbackMessage()` 函數中調整分數區間和反饋信息。

### 自定義樣式
修改 `public/styles.css` 來調整界面外觀。

## 🐛 故障排除

### 常見問題

1. **部署失敗**
   - 檢查 `package.json` 中的依賴版本
   - 確認 Node.js 版本 >= 18.0.0

2. **Socket.IO 連接失敗**
   - 檢查防火牆設置
   - 確認 WebSocket 支持

3. **數據庫錯誤**
   - 檢查 SQLite 依賴安裝
   - 查看服務器日誌

### 調試模式

本地開發時啟用詳細日誌：
```bash
DEBUG=* npm run dev
```

## 📞 支持與反饋

如有問題或建議，請：
1. 查看 [Issues](https://github.com/your-repo/issues)
2. 創建新的 Issue
3. 聯繫開發團隊

## 📄 許可證

MIT License - 詳見 [LICENSE](LICENSE) 文件

## 🙏 致謝

感謝所有參與測試和反饋的同事們！

---

**好好證券** - 專業、安全、可靠的金融服務 