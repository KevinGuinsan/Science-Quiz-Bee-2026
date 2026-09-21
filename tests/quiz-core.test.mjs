import test from 'node:test';
import assert from 'node:assert/strict';
import { createSession, recordScore, isScored, standings, scoresCSV, answerText } from '../quiz-core.mjs';
import { questions } from '../grade7/questions.js';
import { rawQuestionBank } from '../grade11/questions.js';
function fixture() {
  const s = createSession('s1', 'Final', 'Grade 7', questions);
  s.participants = [{id:'p1',name:'Alex',section:'A'},{id:'p2',name:'Bea',section:'B'}];
  s.revealed['1'] = true; return s;
}
test('score corrections replace rather than add, including zero', () => {
  const s = fixture(); recordScore(s,'1','p1',1); recordScore(s,'1','p1',1);
  assert.equal(standings(s)[0].total,1);
  recordScore(s,'1','p1',0); assert.equal(standings(s)[0].total,0);
});
test('unmarked and explicitly zero are different', () => {
  const s = fixture(); assert.equal(isScored(s,'1'),false);
  recordScore(s,'1','p1',0); assert.equal(isScored(s,'1'),false);
  recordScore(s,'1','p2',0); assert.equal(isScored(s,'1'),true);
});
test('scoring rejects hidden answers, unknown players and invalid points', () => {
  const s = fixture();
  for (const value of ['',null,NaN,Infinity,-1,2,'abc']) assert.throws(() => recordScore(s,'1','p1',value));
  assert.throws(() => recordScore(s,'2','p1',1));
  assert.throws(() => recordScore(s,'1','no-player',1));
  recordScore(s,'1','p1',0.5); assert.equal(standings(s)[0].total,0.5);
});
test('ties share competition rank and totals span questions', () => {
  const s = fixture(); s.participants.push({id:'p3',name:'Cal',section:''});
  recordScore(s,'1','p1',1); recordScore(s,'1','p2',1);
  assert.deepEqual(standings(s).map(p=>p.rank),[1,1,3]);
  s.revealed['4']=true; recordScore(s,'4','p2',2);
  assert.equal(standings(s)[0].name,'Bea'); assert.equal(standings(s)[0].total,3);
});
test('new sessions are isolated and JSON restoration preserves scores and question order', () => {
  const s = fixture(); recordScore(s,'1','p1',1);
  const restored = JSON.parse(JSON.stringify(s)); assert.deepEqual(standings(restored),standings(s));
  assert.deepEqual(restored.questions,s.questions);
  const next = createSession('s2','Next','Grade 7',questions);
  assert.deepEqual(next.results,{}); assert.deepEqual(next.participants,[]);
});
test('all existing sets retain original points, timers and answer types', () => {
  for (const bank of [questions,rawQuestionBank[1],rawQuestionBank[2],rawQuestionBank[3]]) {
    const s=createSession('s','Quiz','Set',bank);
    assert.equal(s.questions.length,bank.length);
    s.questions.forEach((q,i)=>{
      assert.equal(q.points,bank[i].points); assert.equal(q.seconds,bank[i].timeLimit ?? bank[i].timer);
      assert.ok(answerText(q)); assert.ok(!answerText(q).includes('undefined'));
    });
  }
});
test('CSV quotes names, neutralizes formulas, distinguishes unmarked from zero', () => {
  const s=fixture(); s.participants[0].name='=SUM(1,2)'; s.participants[1].name='Bea "B", Jr\nTeam';
  recordScore(s,'1','p1',0);
  const csv=scoresCSV(s);
  assert.ok(csv.includes('"\'=SUM(1,2)"')); assert.ok(csv.includes('"Bea ""B"", Jr\nTeam"'));
  assert.ok(csv.includes('"0","0",""')); assert.ok(csv.startsWith('\uFEFF'));
});
