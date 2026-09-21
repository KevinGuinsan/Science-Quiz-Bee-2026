# Science Quiz Bee 2026 — paper quiz host

Participants answer on paper. The host uses one shared screen to show questions and manually record points. No QR code, player device, PeerJS connection, or account is needed in the host workflow.

## Run

Open `host.html` through a static web server (ES modules require HTTP), or use an existing GitHub Pages deployment. For local use with Node.js:

```sh
npm start
```

Visit http://127.0.0.1:4173/host.html. The portal and the existing Grade 7 / Grade 11 host URLs lead to this shared host.

## Host workflow

1. Name the session and choose Grade 7 Set A or Grade 11 Set A, B, or C. The original question text, answers, points, and timers are retained; questions stay in their original order.
2. Add every participant or team, optionally with a section. Remove mistakes before starting. The roster locks when the session begins.
3. Start the session, read the question, and start the timer. Pause/resume if needed. Participants write on paper.
4. At time-up, ask for pencils down. Click **Reveal answer & score** when ready; the timer never reveals the answer automatically.
5. For each paper, choose **Correct**, **0**, or enter partial points from zero to that question's maximum. Scores update immediately. **Mark remaining as 0** records zeros only for unmarked participants.
6. Mark everyone before moving to another question. Reviewing and editing a score replaces the previous value rather than adding it again.
7. Finish the session to show final standings. You can finish before unused clinchers with an explicit confirmation, or review/correct scores afterward. Tied totals share a competition rank (1, 1, 3).
8. Export the CSV for a record of totals and every question's scores. Blank CSV cells mean unscored; zero means explicitly awarded zero.

**Projector view** enlarges the question and hides host controls. Click **Exit projector view** (or press Escape) to score or navigate. Names and the session leaderboard are visible on the shared screen.

## Saved sessions

All sessions are saved in this browser's local storage, including the question snapshot, roster, reveal state, scores, and timer. Refresh the page and choose **Open saved session**. **Sessions / new quiz** pauses a running timer and lets you open another session or create a fresh one. New sessions have their own roster and scores.

Use one host tab at a time. A tab detecting changes from another tab stops accepting edits and asks for a reload. Storage failure is visibly reported. This is local browser storage, not cloud sync: switching computers, changing the site address, private browsing, or clearing browser data can make saved sessions unavailable. Export CSV after each session. CSV is a results report, not a restorable backup.

The legacy player page and question-conversion sandbox are retained, but the portal no longer offers device joining. Only grades with question banks present in this repository are linked.

## Verification

```sh
npm test
```

Tests cover replacement scoring, explicit zero versus unmarked, invalid scores, ties, session isolation/restoration, both question-bank formats, and CSV escaping. In a restricted environment that blocks test worker processes, use `node --test --test-isolation=none tests/quiz-core.test.mjs`.

No external runtime libraries or CDNs are needed by the new host. Publishing the files does not itself enable GitHub Pages on a newly forked repository.
