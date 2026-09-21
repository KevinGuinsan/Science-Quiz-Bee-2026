import { questions as grade7 } from './grade7/questions.js';
import { rawQuestionBank as grade11 } from './grade11/questions.js';
import { createSession, recordScore, isScored, standings, answerText, scoresCSV } from './quiz-core.mjs';

const $ = id => document.getElementById(id);
const banks = {
  g7: { label: 'Grade 7 · Set A', questions: grade7 },
  'g11-1': { label: 'Grade 11 · Set A', questions: grade11[1] },
  'g11-2': { label: 'Grade 11 · Set B', questions: grade11[2] },
  'g11-3': { label: 'Grade 11 · Set C', questions: grade11[3] }
};
const storageKey = 'quizbee.paper.v1';
let sessions = [];
let session = null;
let storageReady = true;
let conflict = false;
try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
  if (!Array.isArray(saved) || saved.some(s => !s.id || !Array.isArray(s.questions) || !Array.isArray(s.participants) || !s.results || !s.revealed)) throw new Error('Invalid saved sessions');
  sessions = saved;
} catch {
  storageReady = false;
  notify('Saved sessions could not be read. Existing storage will not be overwritten. You can run a quiz and export CSV, but this quiz will not autosave.');
}
function notify(message) { $('notice').textContent = message; $('notice').hidden = !message; }
function save() {
  try {
    if (!storageReady) throw new Error('Storage unavailable');
    localStorage.setItem(storageKey, JSON.stringify(sessions));
    $('save-status').textContent = 'Saved in this browser · ' + new Date().toLocaleTimeString();
  } catch {
    $('save-status').textContent = 'Not saved — export scores before closing.';
    notify('Browser storage is unavailable or full. Keep this tab open and export your scores.');
  }
}
function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}
function button(text, action, className = 'secondary') {
  const node = element('button', text, className);
  node.type = 'button'; node.onclick = action; return node;
}
function question() { return session.questions[session.index]; }
function canLeave() { return session.status !== 'active' || isScored(session, question().id); }
function showSetup() {
  document.body.classList.remove('projecting');
  $('project').textContent = 'Projector view'; $('project').hidden = true;
  $('setup').hidden = false; $('workspace').hidden = true;
  $('saved-sessions').replaceChildren(...sessions.slice().reverse().map(s => {
    const opt = element('option', `${s.name} — ${s.set} (${s.status})`); opt.value = s.id; return opt;
  }));
  $('saved-wrap').hidden = !sessions.length;
  session = null;
}
function setInfo() {
  const qs = banks[$('set').value].questions;
  $('set-info').textContent = `${qs.length} questions · Original round points and time limits · Answers stay hidden until you reveal them.`;
}
$('set').onchange = setInfo;
const requestedGrade = new URLSearchParams(location.search).get('grade');
if (requestedGrade === '11') $('set').value = 'g11-1';
$('setup-title').textContent = requestedGrade === '11' ? 'Grade 11 Science Quiz Bee Controller' : requestedGrade === '7' ? 'Science 7 Quiz Bee Host' : 'Science Quiz Bee Host Controller';
setInfo(); showSetup();
$('create-form').onsubmit = event => {
  event.preventDefault();
  const name = $('session-name').value.trim();
  if (!name) return notify('Enter a session name.');
  const bank = banks[$('set').value];
  session = createSession(crypto.randomUUID(), name, bank.label, bank.questions);
  sessions.push(session); save(); render();
};
$('resume').onclick = () => {
  session = sessions.find(s => s.id === $('saved-sessions').value);
  if (session) { notify(''); render(); tick(); }
};
$('sessions').onclick = () => {
  if (session.timer?.end) {
    session.timer = { remaining: Math.max(0, session.timer.end - Date.now()) };
    save();
  }
  showSetup();
};
$('add-form').onsubmit = event => {
  event.preventDefault();
  if (session.status !== 'setup') return;
  const name = $('participant-name').value.trim();
  const section = $('participant-section').value.trim();
  if (!name) return notify('Enter a participant name.');
  if (session.participants.some(p => p.name.toLowerCase() === name.toLowerCase() && p.section.toLowerCase() === section.toLowerCase())) return notify('That name and section are already on the roster. Use a distinguishing name or section.');
  session.participants.push({ id: crypto.randomUUID(), name, section });
  $('participant-name').value = ''; notify(''); save(); render(); $('participant-name').focus();
};
$('begin').onclick = () => {
  if (!session.participants.length) return;
  session.status = 'active'; save(); render();
};
function render() {
  $('setup').hidden = true; $('workspace').hidden = false; $('project').hidden = false;
  $('session-title').textContent = session.name; $('session-set').textContent = session.set;
  const setup = session.status === 'setup'; const finished = session.status === 'finished';
  $('controller-title').textContent = session.set.startsWith('Grade 11') ? 'Grade 11 Science Quiz Bee Controller' : 'Science 7 Quiz Bee Host';
  $('roster-hint').hidden = !setup;
  $('round-counts').replaceChildren(...[['EASY', '🟢 Easy'], ['MODERATE', '🟡 Moderate'], ['DIFFICULT', '🔴 Difficult']].map(([category, label]) =>
    element('span', `${label}: ${session.questions.filter(q => q.category === category).length}`)));
  $('roster-panel').hidden = !setup;
  $('question-panel').hidden = setup || finished;
  $('navigation').hidden = setup || finished;
  $('finished').hidden = !finished;
  $('begin').disabled = !session.participants.length;
  $('roster').replaceChildren(...session.participants.map(p => {
    const li = element('li', `${p.name}${p.section ? ' · ' + p.section : ''}`);
    const remove = button('Remove', () => {
      if (session.status !== 'setup') return;
      session.participants = session.participants.filter(x => x.id !== p.id); save(); render();
    });
    remove.setAttribute('aria-label', `Remove ${p.name}`); li.append(remove); return li;
  }));
  $('scoring-panel').hidden = true;
  if (!setup && !finished) renderQuestion();
  renderBoard();
}
function renderQuestion() {
  const q = question(); const revealed = !!session.revealed[q.id];
  $('round').textContent = `${q.category} · ${q.points} ${q.points === 1 ? 'POINT' : 'POINTS'}`;
  $('round').className = 'badge ' + q.category.toLowerCase();
  $('progress').textContent = `${session.index + 1} / ${session.questions.length}`;
  $('question-number').textContent = `QUESTION ${String(session.index + 1).padStart(2, '0')}`;
  $('question-text').textContent = q.question;
  $('options').replaceChildren(...q.options.map((text, i) => {
    const node = element('div', undefined, 'option' + (revealed && q.answer === i ? ' correct' : ''));
    node.append(element('strong', String.fromCharCode(65 + i)), element('span', text)); return node;
  }));
  $('answer').hidden = !revealed;
  // Unrevealed answers are not inserted into the rendered document.
  $('answer-text').textContent = revealed ? answerText(q) : '';
  $('reveal').disabled = revealed;
  $('scoring-panel').hidden = !revealed;
  if (revealed) renderScores();
  renderNavigation(); renderTimer();
}
function renderTimer() {
  const q = question(); const revealed = !!session.revealed[q.id]; const t = session.timer;
  const running = !!t?.end;
  const remaining = running ? Math.max(0, t.end - Date.now()) : (t?.remaining ?? q.seconds * 1000);
  $('timer').textContent = revealed ? 'Checking' : (remaining <= 0 ? "Time’s up" : (remaining / 1000).toFixed(1) + 's');
  $('start-timer').disabled = revealed || running || remaining <= 0;
  $('start-timer').textContent = t && !running ? '⏱️ Resume Timer' : '⏱️ Start Timer';
  $('pause-timer').hidden = !running || revealed;
  $('paper-hint').textContent = revealed ? 'Check the papers and record points below.' : running ? 'Answer on paper. Pencils down when time is up.' : remaining <= 0 ? 'Pencils down. The host will reveal the answer.' : t ? 'Timer paused. Wait for the host.' : 'Write your answer on paper. Wait for the host to start the timer.';
}
$('start-timer').onclick = () => {
  if (session.status !== 'active' || session.revealed[question().id] || session.timer?.end) return;
  const remaining = session.timer?.remaining ?? question().seconds * 1000;
  if (remaining <= 0) return;
  session.timer = { end: Date.now() + remaining }; save(); renderTimer();
};
$('pause-timer').onclick = () => {
  if (!session.timer?.end) return;
  session.timer = { remaining: Math.max(0, session.timer.end - Date.now()) }; save(); renderTimer();
};
function tick() {
  if (conflict || !session || session.status !== 'active') return;
  if (session.timer?.end && session.timer.end <= Date.now()) { session.timer = { remaining: 0 }; save(); }
  renderTimer();
}
setInterval(tick, 100);
$('reveal').onclick = () => {
  if (session.revealed[question().id]) return;
  if (session.timer?.end && !confirm('The timer is still running. Stop it and reveal the answer now?')) return;
  session.timer = null; session.revealed[question().id] = true; save(); renderQuestion();
};
function commitScore(participantId, value) {
  try { recordScore(session, question().id, participantId, value); }
  catch (error) { notify(error.message); return false; }
  notify(''); save(); renderBoard(); renderNavigation(); return true;
}
function renderScores() {
  const q = question(); const results = session.results[q.id] || {};
  $('scored-count').textContent = `${session.participants.filter(p => Object.hasOwn(results, p.id)).length} / ${session.participants.length} marked`;
  $('zero-remaining').disabled = isScored(session, q.id);
  $('score-rows').replaceChildren(...session.participants.map(p => {
    const row = element('div', undefined, 'score-row');
    const name = element('div'); name.append(element('strong', p.name), element('small', p.section || 'Participant'));
    const value = results[p.id];
    const correct = button(`Correct +${q.points}`, () => { if (commitScore(p.id, q.points)) renderScores(); }, value === q.points ? 'selected' : 'secondary');
    correct.setAttribute('aria-label', `Mark ${p.name} correct`);
    const zero = button('0', () => { if (commitScore(p.id, 0)) renderScores(); }, value === 0 ? 'selected' : 'secondary');
    zero.setAttribute('aria-label', `Award ${p.name} zero points`);
    const label = element('label', 'Points'); const input = element('input');
    input.type = 'number'; input.min = '0'; input.max = String(q.points); input.step = 'any'; input.placeholder = 'Unmarked'; input.value = value ?? '';
    input.setAttribute('aria-label', `Points for ${p.name}`);
    input.onchange = () => {
      if (commitScore(p.id, input.value)) renderScores();
      else { input.value = results[p.id] ?? ''; input.focus(); }
    };
    label.append(input); row.append(name, correct, zero, label); return row;
  }));
}
$('zero-remaining').onclick = () => {
  for (const p of session.participants) if (!Object.hasOwn(session.results[question().id] || {}, p.id)) recordScore(session, question().id, p.id, 0);
  save(); renderScores(); renderBoard(); renderNavigation();
};
function renderBoard() {
  $('participant-count').textContent = session.participants.length;
  $('board-title').textContent = session.status === 'finished' ? '🏆 Final Leaderboard' : '🏆 Session Leaderboard';
  const marked = session.questions.filter(q => isScored(session, q.id)).length;
  $('board-note').textContent = `${marked} of ${session.questions.length} questions fully scored · Ties share a rank.`;
  const rows = standings(session).map(p => {
    const tr = element('tr'); const name = element('td');
    name.append(element('strong', p.name), element('small', p.section));
    tr.append(element('td', p.rank), name, element('td', p.total)); return tr;
  });
  if (!rows.length) { const tr = element('tr'); const td = element('td', 'Add participants to get started.'); td.colSpan = 3; tr.append(td); rows.push(tr); }
  $('leaderboard').replaceChildren(...rows);
}
function renderNavigation() {
  const scored = isScored(session, question().id);
  $('nav-buttons').replaceChildren(...session.questions.map((q, i) => {
    const nav = button(`Q${i + 1} (${q.category[0]})`, () => navigate(i), i === session.index ? 'active' : '');
    nav.disabled = !scored && i !== session.index;
    nav.setAttribute('aria-label', `Question ${i + 1}, ${q.category}${isScored(session, q.id) ? ', scored' : ''}`);
    if (i === session.index) nav.setAttribute('aria-current', 'step');
    return nav;
  }));
  $('previous').disabled = !scored || session.index === 0;
  $('next').disabled = !scored || session.index === session.questions.length - 1;
  $('finish').disabled = !scored;
  $('question-jump').disabled = !scored;
  $('question-jump').replaceChildren(...session.questions.map((q, i) => {
    const opt = element('option', `Q${i + 1} · ${q.category}${isScored(session, q.id) ? ' · scored' : ' · unscored'}`);
    opt.value = String(i); return opt;
  }));
  $('question-jump').value = String(session.index);
  $('navigation-hint').textContent = scored ? 'Scores saved. Continue, review another question, or finish before optional clinchers.' : 'Reveal the answer and mark every participant (including zero scores) before moving on.';
}
function navigate(index) {
  if (!canLeave() || index < 0 || index >= session.questions.length) return;
  session.index = index; session.timer = null; save(); render();
}
$('previous').onclick = () => navigate(session.index - 1);
$('next').onclick = () => navigate(session.index + 1);
$('question-jump').onchange = () => navigate(Number($('question-jump').value));
$('finish').onclick = () => {
  if (!canLeave()) return;
  const remaining = session.questions.filter(q => !isScored(session, q.id)).length;
  if (remaining && !confirm(`${remaining} questions are unscored, including any unused clinchers. Finish with the recorded scores?`)) return;
  session.status = 'finished'; session.timer = null; save(); render();
};
$('review').onclick = () => { session.status = 'active'; save(); render(); };
$('project').onclick = () => {
  const projecting = document.body.classList.toggle('projecting');
  $('project').textContent = projecting ? 'Exit projector view' : 'Projector view';
};
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') { document.body.classList.remove('projecting'); $('project').textContent = 'Projector view'; }
});
$('export').onclick = () => {
  const blob = new Blob([scoresCSV(session)], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob); const link = element('a'); link.href = url;
  link.download = `QuizBee-${session.name.replace(/[^a-z0-9_-]/gi, '_')}.csv`; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};
// A second host tab could overwrite the first tab's scores. Require a reload instead.
window.addEventListener('storage', event => {
  if (event.key === storageKey) {
    conflict = true;
    storageReady = false;
    notify('Sessions changed in another tab. Reload this tab before entering more scores. Use one host tab at a time.');
    document.querySelectorAll('button,input,select').forEach(control => { control.disabled = true; });
  }
});
