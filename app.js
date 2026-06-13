/* そよぎノート Web版 — app.js */

// ===== 多言語 =====
const I18N = {
  ja: {
    appTitle: '🌿 そよぎノート',
    greetingMorning: 'おはよう。',
    greetingAfternoon: 'こんにちは。',
    greetingEvening: 'こんばんは。',
    headingQ: '今日の気分はどう？',
    memoPlaceholder: 'ひとこと（書かなくてもOK）',
    save: 'きろくする',
    recordedLabel: 'きろくした！',
    resetBtn: 'もう一度記録する',
    navCalendar: 'きろくを見る',
    navBreathing: '深呼吸する',
    navNote: '公式noteを読む',
    navArt: '絵を眺める',
    soyogiLink: '困ったときは → そよぎに話してみる 🌿',
    mood1: '限界', mood2: 'つらい', mood3: 'しんどい', mood4: '普通', mood5: 'まあ良い',
    moodMemoOnly: 'メモのみ',
    breatheTitle: 'どんなふうに呼吸する？',
    breatheStop: 'やめる',
    phaseInhale: '吸う', phaseHold: '止める', phaseExhale: '吐く',
    calTitle: (y, m) => `${y}年${m}月`,
    calWeekdays: ['日','月','火','水','木','金','土'],
    calNoRecord: 'この日の記録はないよ。\n記録しなくても大丈夫。',
    calNoData: 'まだ記録がないよ。\n今日の気分を記録してみて。',
    modalClose: 'とじる',
    welcomeBack: 'おかえりなさい。\n無理に記録しなくても大丈夫ですよ。',
    kigenMsg: 'そのお気持ちのわずかでも\n私が軽くしてあげられませんでしょうか？\nもしよろしければ\nデジタルシェルターそよぎへ\nいらしてください。',
    shelterBtn: 'デジタルシェルターへ',
    laterBtn: '心の整理がついてから行けるかも…。',
    tsuraiMsg: 'おつらいことが続いたのですね。\n少しでもお気持ちを軽くできれば幸いです。\nもしよろしければ\nデジタルシェルターそよぎへ\nいらしてください。',
    okayNow: '今は大丈夫です。',
    shindoiMsg: '最近しんどそうですね？\n疲れてはいませんか？\nもしお話ししたいこと、愚痴りたいことがあれば\nぜひデジタルシェルターそよぎへ\nいらしてみてくださいね。',
    okayNowShort: '今は大丈夫',
    mildMsg: '最近の調子はいかがでしょうか？\n可もなく不可もなくといったところで\nあればいいのですが、\nもし見えないストレスをためている場合は\n注意してお過ごしくださいね。\n有料でよろしければ相談事業も\n行っていますのでぜひこちらをお読みくださいませ。',
    mildRead: 'こちらを読む',
    mildOk: '心配ありません😊',
  },
  en: {
    appTitle: '🌿 Soyogi Note',
    greetingMorning: 'Good morning.',
    greetingAfternoon: 'Good afternoon.',
    greetingEvening: 'Good evening.',
    headingQ: 'How are you feeling today?',
    memoPlaceholder: 'A word or two (optional)',
    save: 'Record',
    recordedLabel: 'Recorded!',
    resetBtn: 'Record again',
    navCalendar: 'View records',
    navBreathing: 'Breathe',
    navNote: 'Read our note (Japanese)',
    navArt: 'View art (Japanese)',
    soyogiLink: '',
    mood1: 'At limit', mood2: 'Hard', mood3: 'Tired', mood4: 'Okay', mood5: 'Good',
    moodMemoOnly: 'Memo only',
    breatheTitle: 'How would you like to breathe?',
    breatheStop: 'Stop',
    phaseInhale: 'Inhale', phaseHold: 'Hold', phaseExhale: 'Exhale',
    calTitle: (y, m) => `${y} / ${String(m).padStart(2,'0')}`,
    calWeekdays: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    calNoRecord: 'No record for this day.\nIt\'s okay to skip a day.',
    calNoData: 'No records yet.\nTry recording how you feel today.',
    modalClose: 'Close',
    welcomeBack: "Welcome back.\nNo pressure to record — just here when you need it.",
    kigenMsg: "You're not alone.\nPlease reach out to a crisis helpline:",
    shelterBtn: '',
    laterBtn: 'Close',
    moreCountries: 'More countries →',
    tsuraiMsg: "It sounds like things have been tough lately.\nYou don't have to hold it all in.\nTry talking to someone you trust.\n\nTake some time for yourself too.",
    okayNow: "I'm okay for now.",
    shindoiMsg: "Feeling a bit worn out lately?\nIt's okay to rest and take it easy.\nIf you'd like to talk, try reaching out to a friend or someone close to you.\n\nTake some time for yourself.",
    okayNowShort: 'Thanks for checking in',
    mildMsg: 'How have you been doing lately?\nSmall stresses can add up over time.\nRemember to take some time for yourself — and lean on someone you trust if things feel heavy.',
    mildRead: '',
    mildOk: 'Okay',
  },
};

let lang = localStorage.getItem('soyogi_lang') || 'ja';
function t(key) {
  return I18N[lang][key] ?? I18N.ja[key] ?? '';
}
function isEn() { return lang === 'en'; }

// ===== データ層 =====
const STORAGE_KEY = 'soyogi_mood_records';
const FIRST_LAUNCH_KEY = 'soyogi_first_launch_done';

function genUuid() {
  if (crypto && crypto.randomUUID) return crypto.randomUUID();
  return 'r-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2);
}

function loadRecords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch (_) { return []; }
}

function saveRecords(records) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function allRecordsSorted() {
  // 新しい順
  return loadRecords().sort((a, b) => new Date(b.date) - new Date(a.date));
}

function saveMood(record) {
  const records = loadRecords();
  records.push(record);
  saveRecords(records);
}

function dateKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function lastScore() {
  const records = allRecordsSorted();
  return records.length ? records[0].score : null;
}

function noRecordForHours(hours) {
  const records = allRecordsSorted();
  if (records.length === 0) return false;
  return (Date.now() - new Date(records[0].date).getTime()) / 1000 / 60 / 60 >= hours;
}

function recentScores(n) {
  return allRecordsSorted().slice(0, n).map(r => r.score);
}

function noGreatMoodIn10Days() {
  const cutoff = Date.now() - 10 * 86400 * 1000;
  const recent = allRecordsSorted().filter(r => new Date(r.date).getTime() > cutoff);
  const distinctDays = new Set(recent.map(r => dateKey(new Date(r.date))));
  if (distinctDays.size < 7) return false;
  return !recent.some(r => r.score === 5);
}

function hasNegativeTrend10Days(keywords) {
  const cutoff = Date.now() - 10 * 86400 * 1000;
  const recent = allRecordsSorted().filter(r => new Date(r.date).getTime() > cutoff);
  const distinctDays = new Set(recent.map(r => dateKey(new Date(r.date))));
  if (distinctDays.size < 5) return false;
  const negDays = new Set();
  for (const r of recent) {
    const memo = r.memo || '';
    if (keywords.some(w => memo.includes(w))) {
      negDays.add(dateKey(new Date(r.date)));
    }
  }
  let threshold = Math.ceil(distinctDays.size / 2);
  if (threshold < 5) threshold = 5;
  if (threshold > 10) threshold = 10;
  return negDays.size >= threshold;
}

// ===== 気分の色 =====
const MOOD_COLORS = {
  1: '#212121',
  2: '#9E9E9E',
  3: '#FFFFFF',
  4: '#FFF59D',
  5: '#FFD700',
  null: '#E0E0E0'
};
const MOOD_BORDERS = {
  1: '#212121',
  2: '#9E9E9E',
  3: '#BDBDBD',
  4: '#FFF59D',
  5: '#FFD700',
  null: '#BDBDBD'
};
function moodColor(score) { return MOOD_COLORS[score] ?? MOOD_COLORS.null; }
function moodBorder(score) { return MOOD_BORDERS[score] ?? MOOD_BORDERS.null; }
function moodLabel(score) {
  if (score == null) return t('moodMemoOnly');
  return t('mood' + score);
}

// ===== キーワード =====
const KW_TIER1 = ['死','殺','消えたい','消えてしまいたい','もう無理','助けて','終わりにしたい','生きていたくない','しぬ','しにたい','しのう','自殺','自傷'];
const KW_TIER2 = ['つらい','辛い','限界','さみしい','寂しい','孤独','ぼっち','毒親','親ガチャ失敗','孤立','絶望','希望がない','誰もわかってくれない'];
const KW_TIER3 = ['しんどい','だるい','疲れた','つかれた','うんざり','イライラ','いらいら','むかつく','嫌だ','やだ','不安','心配','怖い','悲しい','かなしい','落ち込む','落ち込んだ','ストレス','きつい'];
const KW_MILD = ['めんどう','めんどくさい','めんどい','ぼーっと','なんとなく','すっきりしない','モヤモヤ','もやもや','どんより','テンション低い','やる気ない','やる気でない',...KW_TIER3];

// ===== ホットライン =====
const HOTLINES = [
  { flag: '🇺🇸', country: 'US', num: '988', note: 'Call or Text' },
  { flag: '🇬🇧', country: 'UK', num: '116 123' },
  { flag: '🇨🇦', country: 'Canada', num: '988', note: 'Call or Text' },
  { flag: '🇦🇺', country: 'Australia', num: '13 11 14' },
  { flag: '🇳🇿', country: 'New Zealand', num: '1737' },
  { flag: '🇮🇪', country: 'Ireland', num: '116 123' },
];

// ===== DOM ヘルパー =====
const $ = (id) => document.getElementById(id);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// ===== ローカリゼーション適用 =====
function applyI18n() {
  document.documentElement.lang = lang;
  $('app-title').textContent = t('appTitle');
  $('greeting').textContent = greetingText();
  $('heading-q').textContent = t('headingQ');
  $('memo-input').placeholder = t('memoPlaceholder');
  $('save-label').textContent = t('save');
  $('recorded-label').textContent = t('recordedLabel');
  $('reset-btn').textContent = t('resetBtn');
  // mood labels
  $$('[data-i18n-key]').forEach(el => {
    const k = el.dataset.i18nKey;
    if (k === 'mood-1') el.textContent = t('mood1');
    else if (k === 'mood-2') el.textContent = t('mood2');
    else if (k === 'mood-3') el.textContent = t('mood3');
    else if (k === 'mood-4') el.textContent = t('mood4');
    else if (k === 'mood-5') el.textContent = t('mood5');
    else if (k === 'nav-calendar') el.textContent = t('navCalendar');
    else if (k === 'nav-breathing') el.textContent = t('navBreathing');
    else if (k === 'nav-note') el.textContent = t('navNote');
    else if (k === 'nav-art') el.textContent = t('navArt');
    else if (k === 'breathe-title') el.textContent = t('breatheTitle');
  });
  // language chips
  $$('.lang-chip').forEach(c => c.classList.toggle('active', c.dataset.lang === lang));
  // footer link
  const fl = $('soyogi-link');
  if (isEn()) {
    fl.style.display = 'none';
  } else {
    fl.style.display = '';
    fl.textContent = t('soyogiLink');
  }
  // calendar weekdays
  const days = t('calWeekdays');
  $$('#cal-weekdays .cal-weekday').forEach((el, i) => el.textContent = days[i]);
  // breathing stop button
  $('breathing-stop').textContent = t('breatheStop');
  // 再描画
  if (currentView === 'calendar') renderCalendar();
}

function greetingText() {
  const h = new Date().getHours();
  if (h >= 5 && h < 11) return t('greetingMorning');
  if (h >= 11 && h < 18) return t('greetingAfternoon');
  return t('greetingEvening');
}

// ===== ビュー切替 =====
let currentView = 'home';
function showView(name) {
  currentView = name;
  $$('.view').forEach(v => v.classList.remove('active'));
  $('view-' + name).classList.add('active');
  // header buttons
  const back = $('back-btn');
  const calBtn = $('open-calendar');
  if (name === 'home') {
    back.style.visibility = 'hidden';
    calBtn.style.visibility = 'visible';
    $('app-title').textContent = t('appTitle');
  } else {
    back.style.visibility = 'visible';
    calBtn.style.visibility = 'hidden';
    if (name === 'calendar') $('app-title').textContent = isEn() ? '📅 Records' : '📅 きろくを見る';
    else if (name === 'breathing') $('app-title').textContent = isEn() ? '🌬️ Breathe' : '🌬️ 深呼吸';
  }
  if (name === 'calendar') renderCalendar();
  if (name === 'breathing') {
    stopBreathing();
    $('breathing-select').style.display = '';
    $('breathing-play').style.display = 'none';
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// ===== 気分セレクター =====
let selectedScore = null;
function updateMoodUI() {
  $$('.mood-option').forEach(el => {
    el.classList.toggle('selected', Number(el.dataset.score) === selectedScore);
  });
  updateSaveDisabled();
}
function updateSaveDisabled() {
  const memo = $('memo-input').value.trim();
  $('save-btn').disabled = !(selectedScore !== null || memo.length > 0);
}

// ===== 保存・ポップアップ判定 =====
async function handleSave() {
  const memo = $('memo-input').value.trim();
  if (selectedScore == null && memo.length === 0) return;

  const memoRaw = $('memo-input').value;
  const hasTier1 = KW_TIER1.some(w => memoRaw.includes(w));
  const hasTier2 = !hasTier1 && KW_TIER2.some(w => memoRaw.includes(w));
  const hasTier3 = !hasTier1 && !hasTier2 && KW_TIER3.some(w => memoRaw.includes(w));

  const wasNoRecord48h = noRecordForHours(48);
  const prevScores = recentScores(2);

  const now = new Date();
  const record = {
    id: genUuid(),
    date: now.toISOString(),
    score: selectedScore,
    memo: memo.length ? memo : null,
    createdAt: now.toISOString(),
  };
  saveMood(record);

  // 完了画面表示
  $('record-mode').style.display = 'none';
  $('recorded-mode').style.display = '';
  const circle = $('recorded-circle');
  if (selectedScore != null) {
    circle.style.background = moodColor(selectedScore);
    circle.style.borderColor = moodBorder(selectedScore);
    circle.style.boxShadow = `0 0 14px ${moodBorder(selectedScore)}66`;
    circle.style.display = '';
  } else {
    circle.style.display = 'none';
  }

  await new Promise(r => setTimeout(r, 600));

  // ── 優先度順にポップアップ判定 ──
  const isCrisis = selectedScore === 1 || hasTier1;
  const isTsurai = !isCrisis && (
    (selectedScore === 2 && prevScores.length >= 1 && prevScores[0] === 2) ||
    hasTier2
  );
  const isShinDoi = !isCrisis && !isTsurai && (
    (selectedScore === 3 && prevScores.length >= 2 && prevScores[0] === 3 && prevScores[1] === 3) ||
    wasNoRecord48h || hasTier3
  );
  const mildTrigger = !isCrisis && !isTsurai && !isShinDoi && (
    noGreatMoodIn10Days() || hasNegativeTrend10Days(KW_MILD)
  );

  if (isCrisis) showKigenDialog();
  else if (isTsurai) showTsuraiDialog();
  else if (isShinDoi) showShinDoiDialog();
  else if (mildTrigger) showMildDialog();
}

function resetRecord() {
  selectedScore = null;
  $('memo-input').value = '';
  updateMoodUI();
  $('record-mode').style.display = '';
  $('recorded-mode').style.display = 'none';
}

// ===== モーダル =====
function openModal({ message, actions, hotlines = false }) {
  $('modal-message').textContent = message;
  // ホットライン
  const ho = $('modal-hotlines');
  if (hotlines) {
    ho.style.display = '';
    ho.innerHTML = `
      <div class="hotlines">
        ${HOTLINES.map(h => `
          <div class="hotline-row">
            <div class="country">${h.flag} ${h.country}</div>
            <div class="num">${h.num}${h.note ? `<span class="note">${h.note}</span>` : ''}</div>
          </div>
        `).join('')}
      </div>
      <div style="margin-top:8px; font-size:13px;">Or talk to someone you trust.</div>
    `;
  } else {
    ho.style.display = 'none';
    ho.innerHTML = '';
  }
  // ボタン
  const ac = $('modal-actions');
  ac.innerHTML = '';
  for (const a of actions) {
    const btn = document.createElement('button');
    btn.className = a.kind === 'primary' ? 'btn-primary' : (a.kind === 'outline' ? 'btn-outline' : 'btn-text');
    btn.textContent = a.label;
    btn.addEventListener('click', () => {
      closeModal();
      if (a.onClick) a.onClick();
    });
    ac.appendChild(btn);
  }
  $('modal-backdrop').classList.add('active');
}
function closeModal() {
  $('modal-backdrop').classList.remove('active');
}

// 限界ポップアップ
function showKigenDialog() {
  if (isEn()) {
    openModal({
      message: t('kigenMsg'),
      hotlines: true,
      actions: [
        { label: t('moreCountries'), kind: 'primary', onClick: () => window.open('https://findahelpline.com', '_blank', 'noopener') },
        { label: t('laterBtn'), kind: 'text' },
      ],
    });
  } else {
    openModal({
      message: t('kigenMsg'),
      actions: [
        { label: t('shelterBtn'), kind: 'primary', onClick: () => window.open('https://soyogi.hp.peraichi.com/shelter', '_blank', 'noopener') },
        { label: t('laterBtn'), kind: 'text' },
      ],
    });
  }
}
function showTsuraiDialog() {
  if (isEn()) {
    openModal({ message: t('tsuraiMsg'), actions: [{ label: t('okayNow'), kind: 'text' }] });
  } else {
    openModal({
      message: t('tsuraiMsg'),
      actions: [
        { label: t('shelterBtn'), kind: 'primary', onClick: () => window.open('https://soyogi.hp.peraichi.com/shelter', '_blank', 'noopener') },
        { label: t('okayNow'), kind: 'text' },
      ],
    });
  }
}
function showShinDoiDialog() {
  if (isEn()) {
    openModal({ message: t('shindoiMsg'), actions: [{ label: t('okayNowShort'), kind: 'text' }] });
  } else {
    openModal({
      message: t('shindoiMsg'),
      actions: [
        { label: t('shelterBtn'), kind: 'primary', onClick: () => window.open('https://soyogi.hp.peraichi.com/shelter', '_blank', 'noopener') },
        { label: t('okayNowShort'), kind: 'text' },
      ],
    });
  }
}
function showMildDialog() {
  if (isEn()) {
    openModal({ message: t('mildMsg'), actions: [{ label: t('mildOk'), kind: 'text' }] });
  } else {
    openModal({
      message: t('mildMsg'),
      actions: [
        { label: t('mildRead'), kind: 'primary', onClick: () => window.open('https://soyogi.hp.peraichi.com/top', '_blank', 'noopener') },
        { label: t('mildOk'), kind: 'text' },
      ],
    });
  }
}
function showWelcomeBack() {
  openModal({ message: t('welcomeBack'), actions: [{ label: t('modalClose'), kind: 'text' }] });
}

// ===== カレンダー =====
let calFocused = new Date();
calFocused.setDate(1);
let calSelected = null;

function recordsByDateMap() {
  const records = allRecordsSorted();
  const map = {};
  for (const r of records) {
    const k = dateKey(new Date(r.date));
    if (!map[k]) map[k] = r;
  }
  return map;
}

function renderCalendar() {
  const y = calFocused.getFullYear();
  const m = calFocused.getMonth();
  $('cal-title').textContent = t('calTitle')(y, m + 1);

  const grid = $('cal-grid');
  grid.innerHTML = '';

  const first = new Date(y, m, 1);
  const lastDay = new Date(y, m + 1, 0).getDate();
  const startWeekday = first.getDay();
  const map = recordsByDateMap();
  const todayKey = dateKey(new Date());

  // padding before
  for (let i = 0; i < startWeekday; i++) {
    const cell = document.createElement('div');
    cell.className = 'cal-cell outside';
    grid.appendChild(cell);
  }
  for (let d = 1; d <= lastDay; d++) {
    const dateObj = new Date(y, m, d);
    const k = dateKey(dateObj);
    const cell = document.createElement('button');
    cell.className = 'cal-cell';
    if (k === todayKey) cell.classList.add('today');
    if (calSelected && dateKey(calSelected) === k) cell.classList.add('selected');

    const circle = document.createElement('div');
    circle.className = 'cal-circle';
    const rec = map[k];
    if (rec) {
      circle.style.background = moodColor(rec.score);
      circle.style.borderColor = moodBorder(rec.score);
    } else {
      circle.classList.add('empty');
    }
    cell.appendChild(circle);

    const day = document.createElement('div');
    day.className = 'cal-day';
    day.textContent = d;
    cell.appendChild(day);

    cell.addEventListener('click', () => {
      calSelected = dateObj;
      renderCalendar();
    });
    grid.appendChild(cell);
  }

  // 詳細
  const cont = $('cal-detail-container');
  cont.innerHTML = '';
  if (calSelected) {
    const rec = map[dateKey(calSelected)];
    if (rec) {
      const box = document.createElement('div');
      box.className = 'cal-detail';
      box.innerHTML = `
        <div class="cal-detail-head">
          <div class="big-circle" style="background:${moodColor(rec.score)}; border-color:${moodBorder(rec.score)};"></div>
          <div>
            <div class="cal-detail-label">${moodLabel(rec.score)}</div>
            <div class="cal-detail-date">${calSelected.getFullYear()}/${calSelected.getMonth()+1}/${calSelected.getDate()}</div>
          </div>
        </div>
        ${rec.memo ? `<div class="cal-detail-memo"></div>` : ''}
      `;
      if (rec.memo) box.querySelector('.cal-detail-memo').textContent = rec.memo;
      cont.appendChild(box);
    } else {
      const empty = document.createElement('div');
      empty.className = 'cal-empty';
      empty.textContent = t('calNoRecord');
      cont.appendChild(empty);
    }
  } else if (Object.keys(map).length === 0) {
    const empty = document.createElement('div');
    empty.className = 'cal-empty';
    empty.textContent = t('calNoData');
    cont.appendChild(empty);
  }
}

// ===== 深呼吸 =====
const BREATHING_MODES = {
  '478':    [['inhale', 4000], ['hold', 7000], ['exhale', 8000]],
  'box':    [['inhale', 4000], ['hold', 4000], ['exhale', 4000], ['hold', 4000]],
  'simple': [['inhale', 4000], ['exhale', 4000]],
};

let breathingTimer = null;
let breathingActive = false;

function startBreathing(mode) {
  $('breathing-select').style.display = 'none';
  $('breathing-play').style.display = '';
  breathingActive = true;
  const seq = BREATHING_MODES[mode];
  let idx = 0;
  const ball = $('breathing-ball');
  const phase = $('breathing-phase');
  function step() {
    if (!breathingActive) return;
    const [name, ms] = seq[idx % seq.length];
    phase.textContent = name === 'inhale' ? t('phaseInhale') : (name === 'hold' ? t('phaseHold') : t('phaseExhale'));
    if (name === 'inhale') {
      ball.style.transition = `transform ${ms}ms ease-in-out, opacity ${ms}ms ease-in-out`;
      ball.style.transform = 'scale(1.5)';
      ball.style.opacity = '1';
    } else if (name === 'exhale') {
      ball.style.transition = `transform ${ms}ms ease-in-out, opacity ${ms}ms ease-in-out`;
      ball.style.transform = 'scale(0.6)';
      ball.style.opacity = '0.55';
    } else {
      ball.style.transition = `transform ${ms}ms linear`;
    }
    idx++;
    breathingTimer = setTimeout(step, ms);
  }
  step();
}

function stopBreathing() {
  breathingActive = false;
  if (breathingTimer) { clearTimeout(breathingTimer); breathingTimer = null; }
  const ball = $('breathing-ball');
  ball.style.transition = 'none';
  ball.style.transform = '';
  ball.style.opacity = '';
}

// ===== イベント登録 =====
function bindEvents() {
  // 言語チップ
  $$('.lang-chip').forEach(el => el.addEventListener('click', () => {
    lang = el.dataset.lang;
    localStorage.setItem('soyogi_lang', lang);
    applyI18n();
  }));
  // 気分セレクター
  $$('.mood-option').forEach(el => el.addEventListener('click', () => {
    selectedScore = Number(el.dataset.score);
    updateMoodUI();
  }));
  // メモ
  $('memo-input').addEventListener('input', updateSaveDisabled);
  // 保存・リセット
  $('save-btn').addEventListener('click', handleSave);
  $('reset-btn').addEventListener('click', resetRecord);
  // ナビ
  $('open-calendar').addEventListener('click', () => showView('calendar'));
  $('back-btn').addEventListener('click', () => showView('home'));
  $('nav-calendar').addEventListener('click', () => showView('calendar'));
  $('nav-breathing').addEventListener('click', () => showView('breathing'));
  $('nav-note').addEventListener('click', () => window.open('https://note.com/soudan_soyogi', '_blank', 'noopener'));
  $('nav-art').addEventListener('click', () => window.open('https://www.maimartprojectcatalog.com/', '_blank', 'noopener'));
  $('soyogi-link').addEventListener('click', () => window.open('https://soyogi.hp.peraichi.com/top', '_blank', 'noopener'));
  // カレンダー操作
  $('cal-prev').addEventListener('click', () => { calFocused.setMonth(calFocused.getMonth() - 1); renderCalendar(); });
  $('cal-next').addEventListener('click', () => { calFocused.setMonth(calFocused.getMonth() + 1); renderCalendar(); });
  // 深呼吸
  $$('.breathing-mode').forEach(el => el.addEventListener('click', () => startBreathing(el.dataset.mode)));
  $('breathing-stop').addEventListener('click', () => {
    stopBreathing();
    $('breathing-select').style.display = '';
    $('breathing-play').style.display = 'none';
  });
  // モーダル背景クリックで閉じる
  $('modal-backdrop').addEventListener('click', (e) => {
    if (e.target === $('modal-backdrop')) closeModal();
  });
}

// ===== 起動 =====
function init() {
  bindEvents();
  applyI18n();
  updateMoodUI();
  updateSaveDisabled();
  // 7日以上前の記録時の「おかえり」
  const records = allRecordsSorted();
  if (records.length > 0) {
    const daysSince = (Date.now() - new Date(records[0].date).getTime()) / 1000 / 60 / 60 / 24;
    if (daysSince >= 7) {
      setTimeout(showWelcomeBack, 400);
    }
  }
  localStorage.setItem(FIRST_LAUNCH_KEY, 'true');
}

document.addEventListener('DOMContentLoaded', init);
