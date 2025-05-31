// AML Quiz Questions Data with Explanations
const questions = [
    {
        id: 1,
        question: "客戶為自然人時，下列何者非防制洗錢審查必要取得之資訊？",
        options: [
            "最高學歷",
            "出生日期",
            "國籍",
            "戶籍或居住地址"
        ],
        correct: 0, // A
        explanation: "防制洗錢審查必要取得之資訊包括出生日期、國籍、戶籍或居住地址等，但最高學歷並非必要取得之資訊。"
    },
    {
        id: 2,
        question: "為防制洗錢目的，有關證券商與客戶建立業務關係之敘述，下列何者錯誤？",
        options: [
            "新建立業務關係之客戶，應確定其風險等級",
            "既有客戶已知風險等級，即無庸再進行評估",
            "當高風險客戶進行交易時，應持續進行評估",
            "高風險客戶應至少每年檢視一次、更新資料"
        ],
        correct: 1, // B
        explanation: "即使是既有客戶已知風險等級，仍需定期進行評估，因為客戶的風險狀況可能會隨時間改變。"
    },
    {
        id: 3,
        question: "下列何項表徵與利用保險業洗錢之態樣較無直接關聯？",
        options: [
            "躉繳大額保費",
            "現金繳交保費",
            "大額溢繳保費",
            "對理賠條款詳加詢問"
        ],
        correct: 3, // D
        explanation: "對理賠條款詳加詢問是正常的客戶行為，而躉繳大額保費、現金繳交保費和大額溢繳保費都可能是洗錢的表徵。"
    },
    {
        id: 4,
        question: "下列何者不屬於重要政治性職務人士？",
        options: [
            "總統",
            "里長",
            "地方議會議長",
            "行政院院長"
        ],
        correct: 1, // B
        explanation: "里長屬於基層行政職務，不屬於重要政治性職務人士(PEPs)的範圍。"
    },
    {
        id: 5,
        question: "當客戶拒絕提供審核客戶身分措施相關文件時，以下應對方式，何者不正確？",
        options: [
            "留存紀錄備查",
            "婉拒服務並報告主管",
            "應先完成開戶，有交易時再補資料，以免客訴",
            "如有可靠獨立來源確實查證身分屬實者仍得接受開戶"
        ],
        correct: 2, // C
        explanation: "當客戶拒絕提供身分相關文件時，不應先完成開戶再補資料，這違反了防制洗錢的基本原則。"
    },
    {
        id: 6,
        question: "證券商為防制洗錢及資恐風險，當員工有下列何種情形時，應對其經辦事務予以抽查?",
        options: [
            "不接受主管指令",
            "已排定休假而無故不休假",
            "工作時間買賣股票",
            "與同事發生爭執"
        ],
        correct: 1, // B
        explanation: "員工已排定休假而無故不休假可能是為了持續處理特定交易，這是洗錢防制中需要特別注意的異常行為。"
    },
    {
        id: 7,
        question: "下列何者不是「證券商評估洗錢及資助恐怖主義風險及訂定相關防制計畫指引」所定具體的風險評估項目指標?",
        options: [
            "地域風險",
            "客戶風險",
            "資安風險",
            "產品風險"
        ],
        correct: 2, // C
        explanation: "「證券商評估洗錢及資助恐怖主義風險及訂定相關防制計畫指引」中的風險評估項目包括地域風險、客戶風險、產品風險等，但不包括資安風險。"
    },
    {
        id: 8,
        question: "證券商評估客戶洗錢及資恐風險之等級，至少應有幾級之風險級數?",
        options: [
            "一級",
            "二級",
            "三級",
            "四級"
        ],
        correct: 2, // C
        explanation: "依規定，證券商評估客戶洗錢及資恐風險之等級，至少應有三級之風險級數，通常分為高、中、低風險。"
    },
    {
        id: 9,
        question: "依重要政治性職務之人與其家庭成員及有密切關係之人範圍認定標準，重要政治性職務之人範圍不包括下列何人?",
        options: [
            "行政院政務委員",
            "最高法院法官",
            "與立法委員相當於配偶之同居伴侶",
            "與直轄市議會副議長為同一合夥事業之合夥人"
        ],
        correct: 1, // B
        explanation: "最高法院法官不在重要政治性職務之人的範圍內，其他選項都屬於重要政治性職務之人或其關係人。"
    },
    {
        id: 10,
        question: "金融機構應婉拒建立業務關係或交易之情境，不包括下列何者?",
        options: [
            "客戶拒絕提供審核客戶身分措施相關文件",
            "客戶為資恐防制法指定制裁之個人、法人或團體",
            "建立業務關係或交易時，有其他異常情形，客戶無法提出合理說明",
            "確認客戶身分經風險評分為洗錢或資恐高風險之客戶"
        ],
        correct: 3, // D
        explanation: "高風險客戶不一定要被婉拒服務，而是需要採取加強審查措施。其他三項情況則應婉拒建立業務關係或交易。"
    },
    {
        id: 11,
        question: "金融機構之客戶或其實質受益人若為現任國外政府之重要政治性職務之人，應將客戶直接視為下列何類型之客戶",
        options: [
            "低風險客戶",
            "中風險客戶",
            "高風險客戶",
            "非常高風險客戶"
        ],
        correct: 2, // C
        explanation: "現任國外政府之重要政治性職務之人應直接視為高風險客戶，需要採取加強審查措施。"
    },
    {
        id: 12,
        question: "下列何者非證券商公會發布之疑似洗錢或資恐交易態樣？",
        options: [
            "客戶大額買賣有價證券者",
            "使用數個非本人或擔任代理人之帳戶分散大額交易者",
            "無正當理由短期內連續大量買賣特定股票",
            "新開戶或一定期間無交易之帳戶突然小額交易者"
        ],
        correct: 3, // D
        explanation: "新開戶或一定期間無交易之帳戶突然小額交易者，不屬於證券商公會發布之疑似洗錢或資恐交易態樣。"
    },
    {
        id: 13,
        question: "利用人頭於金融機構開戶進行洗錢之手法，較常見的疑似洗錢交易態樣中，以下何者錯誤？",
        options: [
            "資金停泊時間通常較長",
            "存款帳戶密集存入多筆款項",
            "存款金額與身分收入、顯不相當",
            "開戶後立即有特定金額款項存入"
        ],
        correct: 0, // A
        explanation: "利用人頭帳戶洗錢時，資金停泊時間通常較短而非較長，因為洗錢者希望快速轉移資金以避免被追蹤。"
    },
    {
        id: 14,
        question: "金融機構在客戶持續審查時，對於高風險客戶應至少多久要檢視一次？",
        options: [
            "六個月",
            "一年",
            "三年",
            "五年"
        ],
        correct: 1, // B
        explanation: "依規定，金融機構對於高風險客戶應至少每年檢視一次，以確保風險管理的有效性。"
    },
    {
        id: 15,
        question: "以下好好證券之客戶，哪些人可能會被進行加強審查?",
        options: [
            "Jennie去北韓觀光，且在當地登入好好證券官網，委託申購野村高科技基金",
            "Jim更新個人基本資料，行業類別：虛擬資產業，職銜：董監事",
            "Lewis陳家宏改名為陳水扁",
            "Fionn當選中華民國總統",
            "以上皆是"
        ],
        correct: 4, // E
        explanation: "所有選項都可能需要加強審查：北韓是高風險國家、虛擬資產業被視為高風險行業、改名為政治人物可能在姓名簡何時命中、當選總統則屬於重要政治性職務人士。"
    },
    {
        id: 16,
        question: "金融機構經過評估，如果發現客戶屬於較高風險的國內重要政治性職務之人，應執行的強化客戶審查措施，下列何者錯誤？",
        options: [
            "取得高階主管的核准",
            "採取合理措施，以瞭解客戶之財富來源及交易資金來源",
            "對業務關係進行持續的強化監控",
            "立即向法務部調查局申報"
        ],
        correct: 3, // D
        explanation: "發現客戶為高風險的國內重要政治性職務之人時，不需要立即向法務部調查局申報，而是需要採取加強審查措施。只有在發現疑似洗錢交易時才需要申報。"
    },
    {
        id: 17,
        question: "下列哪一個國家目前屬於洗錢或資恐高風險國家？",
        options: [
            "敘利亞",
            "以色列",
            "中國",
            "伊朗"
        ],
        correct: 3, // D
        explanation: "伊朗被國際防制洗錢組織(FATF)列為高風險國家，需要採取加強審查措施。"
    },
    {
        id: 18,
        question: "關於確認客戶身分的時點，下列何者錯誤？",
        options: [
            "與客戶建立業務關係時",
            "新臺幣三萬元以上的國內匯款時",
            "發現疑似洗錢或資恐交易時",
            "對客戶資料真實性有所懷疑時"
        ],
        correct: 1, // B
        explanation: "辦理新臺幣三萬元（含等值外幣）以上之跨境匯款時是確認客戶身分的必要時點"
    },
    {
        id: 19,
        question: "客戶為國內外重要政治性職務人士(PEPs)時，下列敘述何者正確？",
        options: [
            "客戶若為現任國內 PEPs，應將客戶直接視為高風險客戶",
            "客戶若為現任國外政府 PEPs，應將客戶直接視為高風險客戶",
            "無論國內或國外政府，只要是現任 PEPs 即視為高風險客戶",
            "國際組織現任 PEPs 才需要直接視為高風險客戶"
        ],
        correct: 1, // B
        explanation: "依規定，客戶若為現任國外政府的重要政治性職務人士，應直接視為高風險客戶。國內PEPs則需要經過風險評估。"
    },
    {
        id: 20,
        question: "下列何者應執行強化確認客戶身分之措施？",
        options: [
            "客戶之家族親屬每人均於同一銀行分別開立帳戶",
            "客戶經營小吃店，經常匯款至菲律賓購買木材",
            "客戶為學生，每月以現金存款 1,500 元",
            "客戶以其薪資之一部分支付其所購買之人壽保單長達五年"
        ],
        correct: 1, // B
        explanation: "客戶經營小吃店卻經常匯款至菲律賓購買木材，業務性質與交易行為不符，屬於異常交易模式，應執行強化確認客戶身分之措施。"
    }
];

// Quiz state
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let playerName = '';
let startTime = null;
let socket = null;
let questionAnswered = false;

// Socket.IO 連接 - 安全初始化
function initializeSocket() {
    try {
        if (typeof io !== 'undefined') {
            socket = io();
            
            socket.on('connect', () => {
                console.log('已連接到伺服器');
            });
            
            socket.on('leaderboard-update', (leaderboard) => {
                updateLeaderboardDisplay(leaderboard);
            });
            
            socket.on('live-score-update', (data) => {
                console.log(`${data.playerName} 目前分數: ${data.currentScore}`);
            });
        } else {
            console.log('Socket.IO 未載入，使用離線模式');
        }
    } catch (error) {
        console.log('Socket.IO 初始化失敗，使用離線模式:', error);
    }
}

// Start quiz function
function startQuiz() {
    console.log('startQuiz 函數被調用');
    
    const nameInput = document.getElementById('playerNameInput');
    const name = nameInput.value.trim();
    
    console.log('輸入的姓名:', name);
    
    if (!name) {
        console.log('姓名為空，顯示警告');
        alert('請輸入您的姓名');
        nameInput.focus();
        return;
    }
    
    if (name.length > 20) {
        console.log('姓名過長，顯示警告');
        alert('姓名長度不能超過20個字元');
        nameInput.focus();
        return;
    }
    
    console.log('開始初始化測驗...');
    
    playerName = name;
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    score = 0;
    startTime = new Date();
    
    console.log('測驗狀態初始化完成');
    
    // 更新顯示
    const playerNameDisplay = document.getElementById('playerNameDisplay');
    const totalQuestions = document.getElementById('totalQuestions');
    
    if (playerNameDisplay) {
        playerNameDisplay.textContent = playerName;
        console.log('玩家姓名顯示已更新');
    }
    
    if (totalQuestions) {
        totalQuestions.textContent = questions.length;
        console.log('總題數顯示已更新');
    }
    
    console.log('隱藏所有容器...');
    hideAllContainers();
    
    const quizContainer = document.getElementById('quizContainer');
    if (quizContainer) {
        quizContainer.style.display = 'block';
        console.log('測驗容器已顯示');
    } else {
        console.error('未找到測驗容器');
    }
    
    console.log('顯示第一題...');
    showQuestion();
    updateProgress();
    updateNavigation();
    
    console.log('測驗開始完成');
}

// Initialize quiz
function initQuiz() {
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    score = 0;
    startTime = null;
    showQuestion();
    updateProgress();
    updateNavigation();
}

// Show current question
function showQuestion() {
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const question = questions[currentQuestionIndex];
    
    if (!questionText || !optionsContainer) {
        console.error('問題容器元素未找到');
        return;
    }
    
    const optionLetters = ['A', 'B', 'C', 'D', 'E'];
    
    // 設置問題文字
    questionText.textContent = question.question;
    
    // 生成選項
    optionsContainer.innerHTML = question.options.map((option, index) => `
        <div class="option" onclick="selectOption(${index})" data-option="${index}">
            <span class="option-letter">${optionLetters[index]}</span>
            <span class="option-text">${option}</span>
        </div>
    `).join('');
    
    // 添加解析區域（如果不存在）
    let explanationDiv = document.getElementById('questionExplanation');
    if (!explanationDiv) {
        explanationDiv = document.createElement('div');
        explanationDiv.id = 'questionExplanation';
        explanationDiv.className = 'question-explanation';
        explanationDiv.style.display = 'none';
        explanationDiv.innerHTML = `
            <div class="explanation-title">解析：</div>
            <div class="explanation-content">${question.explanation}</div>
        `;
        optionsContainer.parentNode.appendChild(explanationDiv);
    } else {
        explanationDiv.innerHTML = `
            <div class="explanation-title">解析：</div>
            <div class="explanation-content">${question.explanation}</div>
        `;
        explanationDiv.style.display = 'none';
    }
    
    // Reset question answered state
    questionAnswered = false;
    
    // Restore previous selection if exists
    if (userAnswers[currentQuestionIndex] !== null) {
        const selectedOption = document.querySelector(`[data-option="${userAnswers[currentQuestionIndex]}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
            showQuestionExplanation();
            questionAnswered = true;
        }
    }
}

// Select an option
function selectOption(optionIndex) {
    if (questionAnswered) return; // Prevent changing answer after explanation is shown
    
    // Remove previous selection
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    const selectedOption = document.querySelector(`[data-option="${optionIndex}"]`);
    selectedOption.classList.add('selected');
    
    // Store user answer
    userAnswers[currentQuestionIndex] = optionIndex;
    questionAnswered = true;
    
    // Show explanation immediately
    showQuestionExplanation();
    
    // Update navigation
    updateNavigation();
}

// Show explanation for current question
function showQuestionExplanation() {
    const explanationDiv = document.getElementById('questionExplanation');
    explanationDiv.style.display = 'block';
    
    // Add visual feedback for correct/incorrect answer
    const question = questions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    const correctAnswer = question.correct;
    const isCorrect = userAnswer === correctAnswer;
    
    // Recalculate total score up to current question
    score = 0;
    for (let i = 0; i <= currentQuestionIndex; i++) {
        if (userAnswers[i] !== null && userAnswers[i] === questions[i].correct) {
            score += 5;
        }
    }
    
    // Update score display in header
    updateScoreDisplay();
    
    // Highlight correct and incorrect options
    document.querySelectorAll('.option').forEach((option, index) => {
        if (index === correctAnswer) {
            option.classList.add('correct');
        } else if (index === userAnswer && index !== correctAnswer) {
            option.classList.add('incorrect');
        }
        // Disable further clicking
        option.style.pointerEvents = 'none';
    });
}

// Update score display in header
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById('scoreDisplay');
    const currentScore = document.getElementById('currentScore');
    
    // Show score display if not visible
    if (scoreDisplay && scoreDisplay.style.display === 'none') {
        scoreDisplay.style.display = 'block';
    }
    
    // Update score value
    if (currentScore) {
        currentScore.textContent = `目前總分：${score} / 100`;
    }
}

// Update progress bar
function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const questionNumber = document.getElementById('questionNumber');
    
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    if (progressFill) {
        progressFill.style.width = `${progress}%`;
    }
    if (questionNumber) {
        questionNumber.textContent = currentQuestionIndex + 1;
    }
}

// Update navigation buttons
function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // Previous button
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Next/Submit button
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
        submitBtn.disabled = userAnswers[currentQuestionIndex] === null;
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
        nextBtn.disabled = userAnswers[currentQuestionIndex] === null;
    }
}

// Go to previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
        updateProgress();
        updateNavigation();
    }
}

// Go to next question
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1 && userAnswers[currentQuestionIndex] !== null) {
        currentQuestionIndex++;
        showQuestion();
        updateProgress();
        updateNavigation();
    }
}

// Submit quiz
async function submitQuiz() {
    if (userAnswers.length !== questions.length) {
        alert('請完成所有題目');
        return;
    }
    
    const endTime = new Date();
    const timeTaken = Math.floor((endTime - startTime) / 1000);
    const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].correct).length;
    
    // 嘗試提交到後端，如果失敗則使用本地模式
    try {
        const response = await fetch('/api/submit-quiz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                playerName: playerName,
                score: score,
                correctAnswers: correctAnswers,
                totalQuestions: questions.length,
                timeTaken: timeTaken,
                answers: userAnswers
            })
        });
        
        if (response.ok) {
            const result = await response.json();
            showResult(correctAnswers, timeTaken, result.rank);
        } else {
            throw new Error('後端提交失敗');
        }
    } catch (error) {
        console.log('使用離線模式顯示結果:', error);
        // 離線模式 - 不顯示排名
        showResult(correctAnswers, timeTaken, null);
    }
}

// Calculate score and show results
function showResult(correctAnswers, timeTaken, rank) {
    hideAllContainers();
    document.getElementById('resultContainer').style.display = 'block';
    
    // Update result display
    document.getElementById('resultPlayerName').textContent = playerName;
    document.getElementById('finalScore').textContent = score;
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('totalCount').textContent = questions.length;
    document.getElementById('timeTaken').textContent = timeTaken;
    
    // Get feedback based on score
    const feedbackMessage = getFeedbackMessage(score);
    document.getElementById('feedbackMessage').textContent = feedbackMessage;
    
    // Show rank if available
    if (rank) {
        document.getElementById('rankDisplay').style.display = 'block';
        document.getElementById('currentRank').textContent = `#${rank}`;
    }
}

// Get feedback message based on score
function getFeedbackMessage(score) {
    if (score === 100) {
        return "恭喜你，是好好證券洗錢防制的專業大師，不過我也沒有獎勵可以給你 ：）";
    } else if (score >= 81) {
        return "很棒！你是洗錢防制小尖兵，給你一個讚";
    } else if (score >= 61) {
        return "不錯，你對於洗錢防制有深入的認識，為你拍拍手";
    } else if (score >= 41) {
        return "你對於洗錢防制有一定的了解但還需要再更熟悉，可以再多多複習今天的教育訓練內容";
    } else if (score >= 21) {
        return "哎呀，你對於洗錢防制的知識可能還不熟悉，可以再多多複習今天的教育訓練內容";
    } else {
        return "哎呀，你需要再多多加強洗錢防制的知識，有洗錢防制的問題可以問問專責主管Jim";
    }
}

// Restart quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;
    startTime = null;
    
    document.getElementById('playerNameInput').value = '';
    showNameInput();
}

// Review answers
function reviewAnswers() {
    hideAllContainers();
    document.getElementById('reviewContainer').style.display = 'block';
    
    document.getElementById('reviewPlayerName').textContent = playerName;
    
    const reviewContent = document.getElementById('reviewContent');
    reviewContent.innerHTML = '';
    
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = question.correct;
        const isCorrect = userAnswer === correctAnswer;
        
        const questionDiv = document.createElement('div');
        questionDiv.className = `review-question ${isCorrect ? 'correct' : 'incorrect'}`;
        
        const userAnswerText = userAnswer !== undefined ? question.options[userAnswer] : '未作答';
        const correctAnswerText = question.options[correctAnswer];
        
        questionDiv.innerHTML = `
            <div class="review-question-text">
                ${index + 1}. ${question.question}
            </div>
            <div class="review-answer">
                <p><strong>正確答案：</strong> <span class="correct-answer">${String.fromCharCode(65 + correctAnswer)}. ${correctAnswerText}</span></p>
                <p><strong>您的答案：</strong> <span class="user-answer ${isCorrect ? 'correct' : ''}">${userAnswer !== undefined ? String.fromCharCode(65 + userAnswer) + '. ' + userAnswerText : '未作答'}</span></p>
            </div>
            <div class="review-explanation">
                <h4>📝 解析</h4>
                <p>${question.explanation}</p>
            </div>
        `;
        
        reviewContent.appendChild(questionDiv);
    });
}

// Back to result from review
function backToResult() {
    hideAllContainers();
    document.getElementById('resultContainer').style.display = 'block';
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('頁面載入完成，開始初始化...');
    
    try {
        console.log('初始化Socket.IO...');
        initializeSocket();
    } catch (error) {
        console.log('Socket.IO初始化失敗:', error);
    }
    
    try {
        console.log('設置事件監聽器...');
        setupEventListeners();
    } catch (error) {
        console.error('事件監聽器設置失敗:', error);
    }
    
    try {
        console.log('生成QR Code...');
        generateQRCode();
    } catch (error) {
        console.log('QR Code生成失敗:', error);
    }
    
    try {
        console.log('顯示姓名輸入畫面...');
        showNameInput();
    } catch (error) {
        console.error('顯示姓名輸入畫面失敗:', error);
    }
    
    console.log('初始化完成');
});

// 設置事件監聽器
function setupEventListeners() {
    console.log('設置事件監聽器...');
    
    // 姓名輸入相關
    const startQuizBtn = document.getElementById('startQuizBtn');
    const playerNameInput = document.getElementById('playerNameInput');
    
    if (startQuizBtn) {
        console.log('找到開始測驗按鈕，設置點擊事件');
        startQuizBtn.addEventListener('click', function(e) {
            console.log('開始測驗按鈕被點擊');
            e.preventDefault();
            startQuiz();
        });
    } else {
        console.error('未找到開始測驗按鈕');
    }
    
    if (playerNameInput) {
        playerNameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                console.log('Enter鍵被按下，開始測驗');
                e.preventDefault();
                startQuiz();
            }
        });
    }
    
    // 測驗導航
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    if (prevBtn) prevBtn.addEventListener('click', previousQuestion);
    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
    if (submitBtn) submitBtn.addEventListener('click', submitQuiz);
    
    // 排行榜相關
    const viewLeaderboardBtn = document.getElementById('viewLeaderboardBtn');
    const backToQuizBtn = document.getElementById('backToQuizBtn');
    const viewFinalLeaderboardBtn = document.getElementById('viewFinalLeaderboardBtn');
    
    if (viewLeaderboardBtn) viewLeaderboardBtn.addEventListener('click', showLeaderboard);
    if (backToQuizBtn) backToQuizBtn.addEventListener('click', backToQuiz);
    if (viewFinalLeaderboardBtn) viewFinalLeaderboardBtn.addEventListener('click', showLeaderboard);
    
    // 結果頁面
    const reviewBtn = document.getElementById('reviewBtn');
    const restartBtn = document.getElementById('restartBtn');
    const reviewRestartBtn = document.getElementById('reviewRestartBtn');
    const backToResultBtn = document.getElementById('backToResultBtn');
    
    if (reviewBtn) reviewBtn.addEventListener('click', reviewAnswers);
    if (restartBtn) restartBtn.addEventListener('click', restartQuiz);
    if (reviewRestartBtn) reviewRestartBtn.addEventListener('click', restartQuiz);
    if (backToResultBtn) backToResultBtn.addEventListener('click', backToResult);
    
    console.log('事件監聽器設置完成');
}

// 顯示姓名輸入畫面
function showNameInput() {
    hideAllContainers();
    document.getElementById('nameInputContainer').style.display = 'flex';
}

// 顯示排行榜
async function showLeaderboard() {
    hideAllContainers();
    document.getElementById('leaderboardContainer').style.display = 'block';
    
    try {
        // 載入統計資料
        const statsResponse = await fetch('/api/stats');
        const stats = await statsResponse.json();
        
        document.getElementById('totalParticipants').textContent = stats.totalParticipants || 0;
        document.getElementById('averageScore').textContent = stats.averageScore ? Math.round(stats.averageScore) : '-';
        document.getElementById('highestScore').textContent = stats.highestScore || '-';
        
        // 載入排行榜
        const leaderboardResponse = await fetch('/api/leaderboard');
        const leaderboard = await leaderboardResponse.json();
        
        updateLeaderboardDisplay(leaderboard);
    } catch (error) {
        console.log('離線模式 - 無法載入排行榜:', error);
        
        // 離線模式顯示
        document.getElementById('totalParticipants').textContent = '-';
        document.getElementById('averageScore').textContent = '-';
        document.getElementById('highestScore').textContent = '-';
        
        const leaderboardList = document.getElementById('leaderboardList');
        leaderboardList.innerHTML = `
            <div class="loading" style="text-align: center; padding: 20px; color: #666;">
                <p>🔌 離線模式</p>
                <p>排行榜功能需要網路連線</p>
                <p>您的測驗結果已保存在本地</p>
            </div>
        `;
    }
}

// 更新排行榜顯示
function updateLeaderboardDisplay(leaderboard) {
    const leaderboardList = document.getElementById('leaderboardList');
    
    if (!leaderboard || leaderboard.length === 0) {
        leaderboardList.innerHTML = '<div class="loading">暫無排行榜資料</div>';
        return;
    }
    
    leaderboardList.innerHTML = leaderboard.map((item, index) => {
        const completionDate = new Date(item.completion_time).toLocaleDateString('zh-TW');
        const timeTaken = item.time_taken ? `${item.time_taken}秒` : '-';
        
        let itemClass = 'leaderboard-item';
        if (index === 0) itemClass += ' top-1';
        else if (index < 3) itemClass += ' top-3';
        
        return `
            <div class="${itemClass}">
                <div class="rank-number">#${item.rank}</div>
                <div class="player-name-rank">${item.player_name}</div>
                <div class="score-rank">${item.score}</div>
                <div class="correct-answers">${item.correct_answers}/${item.total_questions}</div>
                <div class="completion-time">${completionDate}</div>
            </div>
        `;
    }).join('');
}

// 返回測驗
function backToQuiz() {
    hideAllContainers();
    document.getElementById('quizContainer').style.display = 'block';
}

// 隱藏所有容器
function hideAllContainers() {
    const containers = [
        'nameInputContainer',
        'quizContainer', 
        'leaderboardContainer',
        'resultContainer',
        'reviewContainer'
    ];
    
    containers.forEach(id => {
        document.getElementById(id).style.display = 'none';
    });
}

// 生成 QR Code - 安全版本
function generateQRCode() {
    const qrCodeElement = document.getElementById('qrcode');
    
    if (!qrCodeElement) {
        console.log('QR Code 元素未找到，跳過QR Code生成');
        return;
    }
    
    // 檢查 QRCode 庫是否已載入
    if (typeof QRCode === 'undefined') {
        console.log('QRCode 庫未載入，顯示替代內容');
        qrCodeElement.innerHTML = '<p style="color: #999; font-size: 0.8rem; text-align: center;">QR Code 載入中...</p>';
        
        // 延遲重試，但不要無限重試
        let retryCount = 0;
        const maxRetries = 3;
        
        const retryInterval = setInterval(() => {
            retryCount++;
            if (typeof QRCode !== 'undefined') {
                clearInterval(retryInterval);
                generateQRCodeActual();
            } else if (retryCount >= maxRetries) {
                clearInterval(retryInterval);
                qrCodeElement.innerHTML = '<p style="color: #999; font-size: 0.8rem; text-align: center;">QR Code 載入失敗</p>';
            }
        }, 1000);
        
        return;
    }
    
    generateQRCodeActual();
}

// 實際生成QR Code的函數
function generateQRCodeActual() {
    const currentUrl = window.location.href;
    const qrCodeElement = document.getElementById('qrcode');
    
    try {
        // 清空現有內容
        qrCodeElement.innerHTML = '';
        
        // 生成 QR Code
        QRCode.toCanvas(qrCodeElement, currentUrl, {
            width: 150,
            height: 150,
            margin: 2,
            color: {
                dark: '#333333',
                light: '#FFFFFF'
            }
        }, function (error) {
            if (error) {
                console.error('QR Code 生成失敗:', error);
                qrCodeElement.innerHTML = '<p style="color: #999; font-size: 0.8rem; text-align: center;">QR Code 載入失敗</p>';
            } else {
                console.log('QR Code 生成成功');
            }
        });
    } catch (error) {
        console.error('QR Code 生成錯誤:', error);
        qrCodeElement.innerHTML = '<p style="color: #999; font-size: 0.8rem; text-align: center;">QR Code 載入失敗</p>';
    }
} 