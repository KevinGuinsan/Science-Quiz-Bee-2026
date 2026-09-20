/**
 * Core Host Engine (host-app.js)
 * Shared WebRTC Controller, Category Tracker & Dynamic QR Generator
 */

let peer = null;
let roomCode = "";
let connectedPlayers = {}; // id -> { name, conn, scores: { EASY:0, MODERATE:0, DIFFICULT:0 } }
let currentQuestionIndex = 0;
let currentQuestion = null;
let timerInterval = null;
let remainingTime = 0;

/**
 * Initialize Host Session
 */
function initHostRoom() {
  roomCode = Math.random().toString(36).substring(2, 6).toUpperCase();
  const peerId = `quizbee-room-${roomCode}`;

  peer = new Peer(peerId);

  peer.on('open', () => {
    const codeDisplay = document.getElementById("room-code-display");
    if (codeDisplay) codeDisplay.textContent = roomCode;
    renderHostQRCode(roomCode);
  });

  peer.on('connection', (conn) => {
    conn.on('open', () => {
      const playerName = conn.metadata?.name || "Anonymous";
      connectedPlayers[conn.peer] = {
        name: playerName,
        conn: conn,
        scores: { EASY: 0, MODERATE: 0, DIFFICULT: 0 },
        currentAnswer: null
      };
      updatePlayerListUI();
    });

    conn.on('data', (payload) => {
      if (payload.type === "SUBMIT_ANSWER") {
        handlePlayerAnswer(conn.peer, payload.choiceIndex);
      }
    });

    conn.on('close', () => {
      delete connectedPlayers[conn.peer];
      updatePlayerListUI();
    });
  });
}

/**
 * Dynamic Root URL Resolver & QR Rendering
 */
function renderHostQRCode(code) {
  const qrContainer = document.getElementById("qrcode-container");
  if (!qrContainer) return;

  qrContainer.innerHTML = "";

  const origin = window.location.origin;
  const pathSegments = window.location.pathname.split('/').filter(Boolean);

  // Strip filenames and grade subfolders to cleanly resolve root player.html
  if (pathSegments.length > 0 && pathSegments[pathSegments.length - 1].endsWith('.html')) {
    pathSegments.pop();
  }
  if (pathSegments.length > 0 && pathSegments[pathSegments.length - 1].startsWith('grade')) {
    pathSegments.pop();
  }

  const basePath = pathSegments.length > 0 ? `/${pathSegments.join('/')}` : '';
  const playerTargetUrl = `${origin}${basePath}/player.html?room=${code}`;

  if (typeof QRCode !== "undefined") {
    new QRCode(qrContainer, {
      text: playerTargetUrl,
      width: 180,
      height: 180,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }
}

/**
 * Question Payload Dispatcher
 */
function sendQuestionToPlayers(questionIndex) {
  if (!QUIZ_DATASET || !QUIZ_DATASET[questionIndex]) return;

  currentQuestionIndex = questionIndex;
  currentQuestion = QUIZ_DATASET[questionIndex];
  
  // Reset player answers for this item
  Object.keys(connectedPlayers).forEach(id => {
    connectedPlayers[id].currentAnswer = null;
  });

  const payload = {
    type: "NEW_QUESTION",
    questionIndex: currentQuestionIndex,
    category: currentQuestion.category || "EASY",
    options: currentQuestion.options
  };

  broadcastPayload(payload);
  updateHostQuestionUI();
}

/**
 * Manual Timer Controls
 */
function startManualTimer() {
  clearInterval(timerInterval);
  remainingTime = currentQuestion ? currentQuestion.timeLimit || 15 : 15;

  timerInterval = setInterval(() => {
    remainingTime--;
    
    // Broadcast live relative clock sync
    broadcastPayload({ type: "TIMER_SYNC", timeRemaining: remainingTime });
    
    const timerDisplay = document.getElementById("timer-display");
    if (timerDisplay) timerDisplay.textContent = `${remainingTime}s`;

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      broadcastPayload({ type: "TIME_UP" });
      gradeCurrentQuestion();
    }
  }, 1000);
}

function handlePlayerAnswer(peerId, choiceIndex) {
  if (connectedPlayers[peerId] && remainingTime > 0) {
    connectedPlayers[peerId].currentAnswer = choiceIndex;
  }
}

function gradeCurrentQuestion() {
  const correctChoice = currentQuestion.correctAnswer;
  const cat = currentQuestion.category || "EASY";

  Object.keys(connectedPlayers).forEach(id => {
    const player = connectedPlayers[id];
    if (player.currentAnswer === correctChoice) {
      player.scores[cat] = (player.scores[cat] || 0) + 1;
    }
  });

  updateScoreboardUI();
}

function broadcastPayload(payload) {
  Object.keys(connectedPlayers).forEach(id => {
    connectedPlayers[id].conn.send(payload);
  });
}

function updatePlayerListUI() {
  const listEl = document.getElementById("player-list");
  if (!listEl) return;
  listEl.innerHTML = Object.values(connectedPlayers)
    .map(p => `<li>${p.name}</li>`).join("");
}

function updateScoreboardUI() {
  const boardEl = document.getElementById("scoreboard-display");
  if (!boardEl) return;
  boardEl.innerHTML = Object.values(connectedPlayers)
    .map(p => `<p><strong>${p.name}</strong> - Easy: ${p.scores.EASY} | Mod: ${p.scores.MODERATE} | Diff: ${p.scores.DIFFICULT}</p>`)
    .join("");
}

/**
 * CSV Score Exporter
 */
function exportScoresCSV() {
  let csvContent = "data:text/csv;charset=utf-8,Player Name,Easy,Moderate,Difficult,Total Score\n";

  Object.values(connectedPlayers).forEach(p => {
    const total = (p.scores.EASY || 0) + (p.scores.MODERATE || 0) + (p.scores.DIFFICULT || 0);
    csvContent += `"${p.name}",${p.scores.EASY},${p.scores.MODERATE},${p.scores.DIFFICULT},${total}\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `QuizBee_Scores_Room_${roomCode}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
