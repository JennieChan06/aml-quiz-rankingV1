# 🚀 Render 部署完整指南

本指南將詳細說明如何將好好證券洗錢防制排位賽部署到 Render 平台。

## 📋 部署前準備

### 1. 確認文件結構
確保您的項目包含以下文件：
```
aml-quiz-ranking/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── server.js
├── package.json
├── render.yaml
├── README.md
├── .gitignore
└── DEPLOYMENT.md
```

### 2. 檢查必要文件
- ✅ `package.json` - 包含所有依賴
- ✅ `server.js` - Express 服務器
- ✅ `render.yaml` - Render 配置
- ✅ `public/` 目錄 - 前端文件

## 🌐 方法一：GitHub + Render Dashboard

### 步驟 1：準備 GitHub 倉庫

1. **創建 GitHub 倉庫**
   ```bash
   # 在 GitHub 上創建新倉庫：aml-quiz-ranking
   ```

2. **初始化本地 Git**
   ```bash
   cd /path/to/your/project
   git init
   git add .
   git commit -m "Initial commit: AML Quiz Ranking System"
   ```

3. **連接遠程倉庫**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/aml-quiz-ranking.git
   git branch -M main
   git push -u origin main
   ```

### 步驟 2：在 Render 上部署

1. **登錄 Render**
   - 訪問 [render.com](https://render.com)
   - 點擊 "Get Started for Free"
   - 使用 GitHub 帳號登錄

2. **創建新的 Web Service**
   - 點擊 Dashboard 中的 "New +"
   - 選擇 "Web Service"
   - 選擇 "Connect a repository"

3. **連接 GitHub 倉庫**
   - 授權 Render 訪問您的 GitHub
   - 選擇 `aml-quiz-ranking` 倉庫
   - 點擊 "Connect"

4. **配置服務設置**
   ```
   Name: aml-quiz-ranking
   Environment: Node
   Region: Singapore (或選擇最近的區域)
   Branch: main
   Build Command: npm install
   Start Command: npm start
   ```

5. **選擇計劃**
   - 選擇 "Free" 計劃（適合測試）
   - 或選擇付費計劃（生產環境推薦）

6. **高級設置**（可選）
   - Auto-Deploy: Yes
   - Environment Variables:
     ```
     NODE_ENV=production
     ```

7. **部署**
   - 點擊 "Create Web Service"
   - 等待部署完成（通常需要 3-5 分鐘）

## 🔧 方法二：使用 render.yaml（推薦）

### 步驟 1：確認 render.yaml 配置

確保 `render.yaml` 文件內容正確：
```yaml
services:
  - type: web
    name: aml-quiz-ranking
    env: node
    plan: free
    buildCommand: npm install
    startCommand: npm start
    healthCheckPath: /api/health
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 10000
    autoDeploy: true
    branch: main
```

### 步驟 2：使用 Blueprint 部署

1. **推送代碼到 GitHub**
   ```bash
   git add .
   git commit -m "Add render.yaml configuration"
   git push origin main
   ```

2. **在 Render 中創建 Blueprint**
   - 登錄 Render Dashboard
   - 點擊 "New +" → "Blueprint"
   - 選擇您的 GitHub 倉庫
   - Render 會自動讀取 `render.yaml`
   - 點擊 "Apply"

## 📊 部署後驗證

### 1. 檢查部署狀態
- 在 Render Dashboard 中查看部署日誌
- 確認服務狀態為 "Live"

### 2. 測試應用功能
訪問您的應用 URL（例如：`https://aml-quiz-ranking.onrender.com`）

測試以下功能：
- ✅ 首頁加載正常
- ✅ 輸入姓名並開始測驗
- ✅ 答題功能正常
- ✅ 分數計算正確
- ✅ 排行榜顯示（需要多人參與）
- ✅ Socket.IO 即時更新

### 3. API 端點測試
```bash
# 健康檢查
curl https://your-app.onrender.com/api/health

# 獲取排行榜
curl https://your-app.onrender.com/api/leaderboard

# 獲取統計數據
curl https://your-app.onrender.com/api/stats
```

## 🔧 常見問題與解決方案

### 問題 1：部署失敗 - "Build failed"

**可能原因：**
- Node.js 版本不兼容
- 依賴安裝失敗

**解決方案：**
```bash
# 檢查 package.json 中的 engines 字段
"engines": {
  "node": ">=18.0.0"
}

# 確保所有依賴版本正確
npm install
npm audit fix
```

### 問題 2：應用啟動失敗 - "Start command failed"

**可能原因：**
- 端口配置錯誤
- 環境變量缺失

**解決方案：**
確保 `server.js` 中的端口配置：
```javascript
const PORT = process.env.PORT || 3000;
```

### 問題 3：Socket.IO 連接失敗

**可能原因：**
- CORS 配置問題
- WebSocket 支持問題

**解決方案：**
檢查 `server.js` 中的 CORS 配置：
```javascript
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
```

### 問題 4：靜態文件無法訪問

**可能原因：**
- 靜態文件路徑配置錯誤

**解決方案：**
確保 Express 靜態文件配置：
```javascript
app.use(express.static(path.join(__dirname, 'public')));
```

## 🔄 更新部署

### 自動部署
如果啟用了 Auto-Deploy：
```bash
git add .
git commit -m "Update: your changes"
git push origin main
# Render 會自動重新部署
```

### 手動部署
在 Render Dashboard 中：
1. 進入您的服務頁面
2. 點擊 "Manual Deploy"
3. 選擇 "Deploy latest commit"

## 📈 性能優化建議

### 1. 升級到付費計劃
- Free 計劃有 15 分鐘無活動自動休眠
- 付費計劃提供更好的性能和可靠性

### 2. 啟用 CDN
- 在 Render 設置中啟用 CDN
- 加速靜態資源加載

### 3. 數據庫優化
- 考慮使用外部數據庫（PostgreSQL）
- 當前使用的 SQLite 適合小規模使用

## 🔒 安全設置

### 1. 環境變量
在 Render Dashboard 中設置：
```
NODE_ENV=production
DATABASE_URL=your_database_url (如果使用外部數據庫)
SECRET_KEY=your_secret_key (如果需要)
```

### 2. 自定義域名（付費功能）
- 在 Render 中添加自定義域名
- 配置 SSL 證書（自動提供）

## 📞 支持與監控

### 1. 查看日誌
在 Render Dashboard 中：
- 點擊您的服務
- 查看 "Logs" 標籤
- 監控錯誤和性能

### 2. 設置警報
- 配置服務健康檢查
- 設置郵件通知

### 3. 監控指標
- CPU 使用率
- 內存使用率
- 響應時間
- 錯誤率

## 🎯 部署檢查清單

部署前確認：
- [ ] 所有文件已提交到 GitHub
- [ ] `package.json` 配置正確
- [ ] `render.yaml` 配置完整
- [ ] 本地測試通過
- [ ] 環境變量設置正確

部署後驗證：
- [ ] 應用可以正常訪問
- [ ] 所有功能正常工作
- [ ] API 端點響應正常
- [ ] Socket.IO 連接成功
- [ ] 排行榜實時更新

---

🎉 **恭喜！您的洗錢防制排位賽已成功部署到 Render！**

現在您可以分享應用 URL 給同事們，開始進行即時排位賽了！ 