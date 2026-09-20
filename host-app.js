/**
 * Core PeerJS Host Engine & State Sync
 * Decoupled from question data (expects global QUIZ_DATASET array)
 */

let currentQuestionIndex = 0;
let activePeers = {};
let questionTimer = null;
let timeLeft = 0;

// 1. Initialize PeerJS Host with a random 4-digit Room Code
const roomCode = Math.floor(1000 + Math.random() * 9000).toString();
const peer = new Peer(roomCode);

peer.on('open', (id) => {
  console.log('Host initialized with Room Code:', id);
  const roomEl = document.getElementById('room-code-display');
  if (roomEl) roomEl.innerText = id;
});

// 2. Manage incoming player connections
peer.on('connection', (conn) => {
  conn.on('open', () => {
    activePeers[conn.peer] = conn;
    console.log(`Player connected: ${conn.peer} (${conn.metadata?.name || 'Anonymous'})`);
    updatePlayerCount();
  });

  conn.on('data', (data) => {
    if (data.type === 'SUBMIT_ANSWER') {
      handlePlayerAnswer(conn.peer, data.answerIndex, conn.metadata?.name);
    }
  });

  conn.on('close', () => {
    delete activePeers[conn.peer];
    updatePlayerCount();
  });
});

// 3. Broadcast Payload & Unlock Mobile Controls
function sendNextQuestion() {
  if (typeof QUIZ_DATASET === 'undefined' || !QUIZ_DATASET.length) {
    alert('No question dataset loaded for this grade level!');
    return;
  }

  if (currentQuestionIndex >= QUIZ_DATASET.length) {
    broadcast({ type: 'QUIZ_END' });
    alert('Quiz completed!');
    return;
  }

  clearInterval(questionTimer);
  const currentQ = QUIZ_DATASET[currentQuestionIndex];
  timeLeft = currentQ.timeLimit || 15;

  // Render question locally on Host UI
  const hostQText = document.getElementById('host-question-text');
  if (hostQText) hostQText.innerText = `Q${currentQuestionIndex + 1}: ${currentQ.question}`;

  // BROADCAST TO ALL PLAYERS
  // Explicitly passing isTimeUp = false prevents mobile button freeze bugs
  broadcast({
    type: 'NEW_QUESTION',
    payload: {
      id: currentQ.id || `q${currentQuestionIndex + 1}`,
      question: currentQ.question,
      options: currentQ.options,
      timeLimit: timeLeft,
      isTimeUp: false // Forced state unlock for iOS/Android WebViews
    }
  });

  startTimer();
  currentQuestionIndex++;
}

// 4. Synchronized Timer Loop
function startTimer() {
  const timerEl = document.getElementById('timer-display');
  
  questionTimer = setInterval(() => {
    timeLeft--;
    if (timerEl) timerEl.innerText = `${timeLeft}s`;

    // Periodic time sync to keep player clocks aligned
    broadcast({
      type: 'TIMER_SYNC',
      payload: { timeLeft: timeLeft }
    });

    if (timeLeft <= 0) {
      clearInterval(questionTimer);
      broadcast({ type: 'TIME_UP' });
    }
  }, 1000);
}

// 5. Utility Broadcast Helper
function broadcast(data) {
  Object.values(activePeers).forEach((conn) => {
    if (conn.open) conn.send(data);
  });
}

function updatePlayerCount() {
  const countEl = document.getElementById('player-count-display');
  if (countEl) countEl.innerText = Object.keys(activePeers).length;
}

function handlePlayerAnswer(peerId, answerIndex, playerName) {
  console.log(`Answer from ${playerName || peerId}: Option ${answerIndex}`);
  // Add scoring / leaderboard logic here
}
