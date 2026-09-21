// Pure session rules, shared by the host and the regression tests.
export function normalizeQuestions(questions) {
  return questions.map((q, index) => ({
    id: String(index + 1), question: q.question, options: q.options || [],
    answer: q.answer, category: (q.category || q.round.replace(/ Round$/i, '')).toUpperCase(),
    points: q.points ?? 1, seconds: q.timeLimit ?? q.timer ?? 10
  }));
}

export function createSession(id, name, set, questions) {
  return { id, name, set, created: new Date().toISOString(), participants: [],
    questions: normalizeQuestions(questions), results: {}, revealed: {}, index: 0,
    status: 'setup', timer: null };
}

export function recordScore(session, questionId, participantId, value) {
  const question = session.questions.find(q => q.id === questionId);
  if (!question || !session.participants.some(p => p.id === participantId)) throw new Error('Unknown question or participant.');
  if (!session.revealed[questionId]) throw new Error('Reveal the answer before scoring.');
  if (value === '' || value === null || !Number.isFinite(Number(value)) || Number(value) < 0 || Number(value) > question.points) {
    throw new Error(`Enter points from 0 to ${question.points}.`);
  }
  // Assignment, never accumulation: revisiting a question cannot double-count it.
  (session.results[questionId] ??= {})[participantId] = Number(value);
}

export function isScored(session, questionId) {
  return session.participants.length > 0 && session.participants.every(p =>
    Object.hasOwn(session.results[questionId] || {}, p.id));
}

export function standings(session) {
  const rows = session.participants.map(p => {
    const categories = {};
    for (const q of session.questions) categories[q.category] = (categories[q.category] || 0) + (session.results[q.id]?.[p.id] || 0);
    return { ...p, categories, total: Object.values(categories).reduce((a, b) => a + b, 0) };
  }).sort((a, b) => b.total - a.total || a.name.localeCompare(b.name));
  let rank = 0;
  return rows.map((p, i) => {
    if (!i || p.total !== rows[i - 1].total) rank = i + 1;
    return { ...p, rank };
  });
}

export function answerText(question) {
  return typeof question.answer === 'number'
    ? `${String.fromCharCode(65 + question.answer)}. ${question.options[question.answer]}`
    : String(question.answer);
}

export function scoresCSV(session) {
  const cell = value => {
    let text = String(value ?? '');
    if (/^[\s]*[=+@-]/.test(text)) text = "'" + text; // Spreadsheet formula injection.
    return '"' + text.replaceAll('"', '""') + '"';
  };
  const rows = [['Session', 'Question set', 'Rank', 'Participant', 'Section', 'Total',
    ...session.questions.map((q, i) => `Q${i + 1} ${q.category} (max ${q.points})`)]];
  for (const p of standings(session)) rows.push([session.name, session.set, p.rank, p.name, p.section, p.total,
    ...session.questions.map(q => session.results[q.id]?.[p.id] ?? '')]);
  return '\uFEFF' + rows.map(row => row.map(cell).join(',')).join('\r\n');
}
