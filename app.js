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
    mode478Title: '4-7-8（ゆっくり眠るとき）',
    mode478Desc: '息を吸って・止めて・長く吐く。',
    modeBoxTitle: 'ボックス呼吸（落ち着きたいとき）',
    modeBoxDesc: '4秒ずつ均等にゆっくり。',
    modeSimpleTitle: 'シンプル呼吸（やさしく整える）',
    modeSimpleDesc: '4秒吸って、4秒吐くだけ。',
    breatheDurationTitle: 'どのくらいの時間にする？',
    breatheBack: 'もどる',
    breatheFinishMsg: 'お疲れさまでした。\n少しは落ち着かれましたか？',
    breatheFinishRecord: '気分を記録する 📝',
    breatheFinishShelter: 'まだ心が苦しくてどうしようもない',
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
    deleteConfirmMsg: 'この きろくを けす？\nもとには もどせないよ。',
    deleteYes: 'けす',
    deleteNo: 'やめる',
    editTitle: 'きろくを 直す',
    editSave: 'ほぞん',
    editCancel: 'やめる',
    bigFontLabel: '大きめ文字',
    themeLabel: '🌙 ダークモード',
    themeSystem: '端末にあわせる',
    themeLight: 'ライト',
    themeDark: 'ダーク',
    bandStart: '30日前',
    bandEnd: '今日',
    // ── 2026-07-15 追加（ハードコード撤去でキー化） ──
    calendarTitle: '📅 きろくを見る',
    breatheScreenTitle: '🌬️ 深呼吸',
    breatheRemaining: '残り {t}', // {t} は残り時間 m:ss に置換
    minuteUnit: '分', // 数字に後置（例「5分」）
    edit: '編集',
    delete: '削除',
    hotlineTrust: '', // ホットライン下の一文（jaはホットライン非表示のため空）
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
    mode478Title: '4-7-8 (for falling asleep)',
    mode478Desc: 'Breathe in, hold, then exhale slowly.',
    modeBoxTitle: 'Box Breathing (to calm down)',
    modeBoxDesc: 'Equal 4-second counts, slow and steady.',
    modeSimpleTitle: 'Simple Breathing (gently settle)',
    modeSimpleDesc: 'Just inhale 4s, then exhale 4s.',
    breatheDurationTitle: 'How long?',
    breatheBack: 'Back',
    breatheFinishMsg: 'Thank you for taking that time.\nAre you feeling a little calmer?',
    breatheFinishRecord: 'Record how you feel 📝',
    breatheFinishShelter: 'My heart still aches and I don\'t know what to do',
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
    deleteConfirmMsg: "Delete this note?\nThis can't be undone.",
    deleteYes: 'Delete',
    deleteNo: 'Keep',
    editTitle: 'Edit note',
    editSave: 'Save',
    editCancel: 'Cancel',
    bigFontLabel: 'Large text',
    themeLabel: '🌙 Dark mode',
    themeSystem: 'System',
    themeLight: 'Light',
    themeDark: 'Dark',
    bandStart: '30 days ago',
    bandEnd: 'Today',
    // ── 2026-07-15 追加（ハードコード撤去でキー化） ──
    calendarTitle: '📅 Records',
    breatheScreenTitle: '🌬️ Breathe',
    breatheRemaining: '{t} left',
    minuteUnit: ' min', // 先頭スペース付き（例「5 min」・従来表示を維持）
    edit: 'Edit',
    delete: 'Delete',
    hotlineTrust: 'Or talk to someone you trust.',
  },
  // ─────────────────────────────────────────────
  // 以下、12言語（2026-07-15 人手翻訳で注入・Flutter版と共通の翻訳表）。
  // web と Flutter で原文が違うキー（呼吸法の名称/説明・kigenMsg 等）は
  // web の en/ja 原文から訳し分けている。store/i18n_keys.md 参照。
  // ─────────────────────────────────────────────
  ar: {
    appTitle: '🌿 Soyogi Note',
    greetingMorning: 'صباح الخير.',
    greetingAfternoon: 'طاب يومك.',
    greetingEvening: 'مساء الخير.',
    headingQ: 'كيف شعورك اليوم؟',
    memoPlaceholder: 'كلمة أو كلمتان (اختياري)',
    save: 'تسجيل',
    recordedLabel: 'تم التسجيل!',
    resetBtn: 'تسجيل مرة أخرى',
    navCalendar: 'عرض السجلّات',
    navBreathing: 'تنفّس بعمق',
    navNote: 'اقرأ مدوّنتنا (باليابانية)',
    navArt: 'مشاهدة اللوحات (باليابانية)',
    soyogiLink: '',
    mood1: 'لم أعد أحتمل', mood2: 'صعب', mood3: 'متعب', mood4: 'عادي', mood5: 'لا بأس',
    moodMemoOnly: 'ملاحظة فقط',
    breatheTitle: 'كيف تحب أن تتنفّس؟',
    breatheStop: 'إنهاء',
    phaseInhale: 'شهيق', phaseHold: 'حبس', phaseExhale: 'زفير',
    mode478Title: '4-7-8 (للنوم بهدوء)',
    mode478Desc: 'خذ شهيقًا، احبسه، ثم أخرجه ببطء.',
    modeBoxTitle: 'تنفّس الصندوق (للتهدئة)',
    modeBoxDesc: 'أربع ثوانٍ لكل مرحلة، ببطء وثبات.',
    modeSimpleTitle: 'تنفّس بسيط (لاستعادة الهدوء)',
    modeSimpleDesc: 'فقط شهيق 4 ثوانٍ ثم زفير 4 ثوانٍ.',
    breatheDurationTitle: 'كم من الوقت؟',
    breatheBack: 'رجوع',
    breatheFinishMsg: 'شكرًا لأنك منحت نفسك هذا الوقت.\nهل تشعر بهدوء أكبر قليلًا؟',
    breatheFinishRecord: 'سجّل شعورك 📝',
    breatheFinishShelter: 'ما زال قلبي يتألم ولا أعرف ماذا أفعل',
    calTitle: (y, m) => `${String(m).padStart(2,'0')} / ${y}`,
    calWeekdays: ['أحد','اثنين','ثلاثاء','أربعاء','خميس','جمعة','سبت'],
    calNoRecord: 'لا يوجد تسجيل لهذا اليوم.\nلا بأس في تخطّي يوم.',
    calNoData: 'لا توجد تسجيلات بعد.\nجرّب تسجيل شعورك اليوم.',
    modalClose: 'إغلاق',
    welcomeBack: 'أهلًا بعودتك.\nلا داعي لتسجيل أي شيء، نحن هنا متى احتجت إلينا.',
    kigenMsg: 'لست وحدك.\nنرجو أن تتواصل مع خط مساعدة للأزمات:',
    shelterBtn: '',
    laterBtn: 'إغلاق',
    moreCountries: 'المزيد من البلدان ←',
    tsuraiMsg: 'يبدو أن الأيام الأخيرة كانت قاسية عليك.\nلا داعي لأن تكتم كل شيء في داخلك.\nجرّب أن تتحدث مع شخص تثق به.\n\nوخذ لنفسك بعض الوقت أيضًا.',
    okayNow: 'أنا بخير الآن.',
    shindoiMsg: 'هل تشعر ببعض الإرهاق مؤخرًا؟\nلا بأس أن ترتاح وتتعامل مع الأمور بهدوء.\nإذا أحببت أن تتحدث، جرّب التواصل مع صديق أو شخص قريب منك.\n\nخذ لنفسك بعض الوقت.',
    okayNowShort: 'شكرًا لسؤالك عني',
    mildMsg: 'كيف حالك في الآونة الأخيرة؟\nالضغوط الصغيرة قد تتراكم مع الوقت.\nتذكّر أن تمنح نفسك بعض الوقت، وأن تستند إلى من تثق به إذا ثقل عليك شيء.',
    mildRead: '',
    mildOk: 'حسنًا',
    deleteConfirmMsg: 'هل تريد حذف هذا التسجيل؟\nلا يمكن التراجع عن ذلك.',
    deleteYes: 'حذف',
    deleteNo: 'احتفظ به',
    editTitle: 'تعديل التسجيل',
    editSave: 'حفظ',
    editCancel: 'إلغاء',
    bigFontLabel: 'خط كبير',
    themeLabel: '🌙 الوضع الداكن',
    themeSystem: 'حسب الجهاز',
    themeLight: 'فاتح',
    themeDark: 'داكن',
    bandStart: 'قبل 30 يومًا',
    bandEnd: 'اليوم',
    calendarTitle: '📅 السجلّات',
    breatheScreenTitle: '🌬️ تنفّس',
    breatheRemaining: 'المتبقي {t}',
    minuteUnit: ' د',
    edit: 'تعديل',
    delete: 'حذف',
    hotlineTrust: 'أو تحدّث مع شخص تثق به.',
  },
  bn: {
    appTitle: '🌿 Soyogi Note',
    greetingMorning: 'শুভ সকাল।',
    greetingAfternoon: 'শুভ দুপুর।',
    greetingEvening: 'শুভ সন্ধ্যা।',
    headingQ: 'আজ মন কেমন আছে?',
    memoPlaceholder: 'দু-এক কথা (না লিখলেও চলবে)',
    save: 'লিখে রাখুন',
    recordedLabel: 'লেখা হয়েছে!',
    resetBtn: 'আবার লিখুন',
    navCalendar: 'লেখাগুলো দেখুন',
    navBreathing: 'গভীর শ্বাস নিন',
    navNote: 'আমাদের ব্লগ পড়ুন (জাপানি)',
    navArt: 'ছবি দেখুন (জাপানি)',
    soyogiLink: '',
    mood1: 'আর পারছি না', mood2: 'কষ্ট হচ্ছে', mood3: 'ক্লান্ত', mood4: 'মোটামুটি', mood5: 'ভালো',
    moodMemoOnly: 'শুধু মেমো',
    breatheTitle: 'কীভাবে শ্বাস নিতে চান?',
    breatheStop: 'থামুন',
    phaseInhale: 'শ্বাস নিন', phaseHold: 'ধরে রাখুন', phaseExhale: 'শ্বাস ছাড়ুন',
    mode478Title: '4-7-8 (ঘুমানোর আগে)',
    mode478Desc: 'শ্বাস নিন, ধরে রাখুন, তারপর ধীরে ছাড়ুন।',
    modeBoxTitle: 'বক্স ব্রিদিং (শান্ত হতে)',
    modeBoxDesc: 'প্রতি ধাপে 4 সেকেন্ড, ধীরে ও সমানভাবে।',
    modeSimpleTitle: 'সহজ শ্বাস (আলতো করে গুছিয়ে নিতে)',
    modeSimpleDesc: 'শুধু 4 সেকেন্ড শ্বাস নিন, 4 সেকেন্ড ছাড়ুন।',
    breatheDurationTitle: 'কতক্ষণ করবেন?',
    breatheBack: 'ফিরে যান',
    breatheFinishMsg: 'নিজেকে সময় দেওয়ার জন্য ধন্যবাদ।\nএখন কি একটু শান্ত লাগছে?',
    breatheFinishRecord: 'মনের অবস্থা লিখে রাখুন 📝',
    breatheFinishShelter: 'মনটা এখনও ভারী, কী করব বুঝতে পারছি না',
    calTitle: (y, m) => `${String(m).padStart(2,'0')} / ${y}`,
    calWeekdays: ['রবি','সোম','মঙ্গল','বুধ','বৃহ','শুক্র','শনি'],
    calNoRecord: 'এই দিনের কোনো লেখা নেই।\nএকদিন বাদ গেলেও কিছু হয় না।',
    calNoData: 'এখনও কোনো লেখা নেই।\nআজকের মনটা লিখে রাখুন না।',
    modalClose: 'বন্ধ করুন',
    welcomeBack: 'ফিরে আসায় ভালো লাগল।\nলিখতেই হবে এমন নয়, দরকার হলেই আমরা আছি।',
    kigenMsg: 'আপনি একা নন।\nঅনুগ্রহ করে কোনো ক্রাইসিস হেল্পলাইনে যোগাযোগ করুন:',
    shelterBtn: '',
    laterBtn: 'বন্ধ করুন',
    moreCountries: 'আরও দেশ →',
    tsuraiMsg: 'মনে হচ্ছে ইদানীং সময়টা কঠিন যাচ্ছে।\nসব কষ্ট নিজের ভেতরে চেপে রাখতে হবে না।\nবিশ্বাস করেন এমন কারও সঙ্গে কথা বলে দেখুন।\n\nনিজের জন্যও একটু সময় রাখুন।',
    okayNow: 'এখন ঠিক আছি।',
    shindoiMsg: 'ইদানীং কি একটু ক্লান্ত লাগছে?\nবিশ্রাম নিলে বা একটু ধীরে চললে কোনো ক্ষতি নেই।\nকথা বলতে ইচ্ছে করলে বন্ধু বা কাছের কারও সঙ্গে যোগাযোগ করে দেখুন।\n\nনিজের জন্য একটু সময় রাখুন।',
    okayNowShort: 'খোঁজ নেওয়ার জন্য ধন্যবাদ',
    mildMsg: 'ইদানীং কেমন কাটছে?\nছোট ছোট চাপ ধীরে ধীরে জমে যেতে পারে।\nনিজের জন্য সময় রাখতে ভুলবেন না, আর মন ভারী লাগলে বিশ্বাসের কারও ওপর ভরসা করুন।',
    mildRead: '',
    mildOk: 'ঠিক আছে',
    deleteConfirmMsg: 'এই লেখাটি মুছে ফেলবেন?\nমুছে ফেললে আর ফেরানো যাবে না।',
    deleteYes: 'মুছে ফেলুন',
    deleteNo: 'রেখে দিন',
    editTitle: 'লেখাটি ঠিক করুন',
    editSave: 'সংরক্ষণ',
    editCancel: 'বাতিল',
    bigFontLabel: 'বড় হরফ',
    themeLabel: '🌙 ডার্ক মোড',
    themeSystem: 'ডিভাইস অনুযায়ী',
    themeLight: 'লাইট',
    themeDark: 'ডার্ক',
    bandStart: '30 দিন আগে',
    bandEnd: 'আজ',
    calendarTitle: '📅 লেখাগুলো',
    breatheScreenTitle: '🌬️ শ্বাস',
    breatheRemaining: 'বাকি {t}',
    minuteUnit: ' মিনিট',
    edit: 'সম্পাদনা',
    delete: 'মুছে ফেলা',
    hotlineTrust: 'অথবা বিশ্বাস করেন এমন কারও সঙ্গে কথা বলুন।',
  },
  de: {
    appTitle: '🌿 Soyogi Note',
    greetingMorning: 'Guten Morgen.',
    greetingAfternoon: 'Guten Tag.',
    greetingEvening: 'Guten Abend.',
    headingQ: 'Wie fühlst du dich heute?',
    memoPlaceholder: 'Ein paar Worte (optional)',
    save: 'Eintragen',
    recordedLabel: 'Eingetragen!',
    resetBtn: 'Noch einmal eintragen',
    navCalendar: 'Einträge ansehen',
    navBreathing: 'Durchatmen',
    navNote: 'Unser Blog (Japanisch)',
    navArt: 'Bilder ansehen (Japanisch)',
    soyogiLink: '',
    mood1: 'Am Limit', mood2: 'Schwer', mood3: 'Müde', mood4: 'Okay', mood5: 'Ganz gut',
    moodMemoOnly: 'Nur Notiz',
    breatheTitle: 'Wie möchtest du atmen?',
    breatheStop: 'Beenden',
    phaseInhale: 'Einatmen', phaseHold: 'Halten', phaseExhale: 'Ausatmen',
    mode478Title: '4-7-8 (zum Einschlafen)',
    mode478Desc: 'Einatmen, halten, dann langsam ausatmen.',
    modeBoxTitle: 'Box-Atmung (zum Beruhigen)',
    modeBoxDesc: 'Gleichmäßig je 4 Sekunden, ruhig und stetig.',
    modeSimpleTitle: 'Einfaches Atmen (sanft zur Ruhe kommen)',
    modeSimpleDesc: 'Einfach 4s einatmen, dann 4s ausatmen.',
    breatheDurationTitle: 'Wie lange?',
    breatheBack: 'Zurück',
    breatheFinishMsg: 'Schön, dass du dir diese Zeit genommen hast.\nFühlst du dich etwas ruhiger?',
    breatheFinishRecord: 'Eintragen, wie du dich fühlst 📝',
    breatheFinishShelter: 'Mir ist immer noch schwer ums Herz und ich weiß nicht weiter',
    calTitle: (y, m) => `${String(m).padStart(2,'0')}/${y}`,
    calWeekdays: ['So','Mo','Di','Mi','Do','Fr','Sa'],
    calNoRecord: 'Kein Eintrag für diesen Tag.\nEinen Tag auszulassen ist völlig okay.',
    calNoData: 'Noch keine Einträge.\nHalte doch fest, wie du dich heute fühlst.',
    modalClose: 'Schließen',
    welcomeBack: 'Schön, dass du wieder da bist.\nDu musst nichts eintragen. Wir sind einfach da, wenn du uns brauchst.',
    kigenMsg: 'Du bist nicht allein.\nBitte wende dich an eine Krisen-Hotline:',
    shelterBtn: '',
    laterBtn: 'Schließen',
    moreCountries: 'Weitere Länder →',
    tsuraiMsg: 'Es klingt, als wäre es zuletzt schwer für dich gewesen.\nDu musst nicht alles allein tragen.\nSprich mit jemandem, dem du vertraust.\n\nUnd nimm dir auch etwas Zeit für dich.',
    okayNow: 'Mir geht es gerade okay.',
    shindoiMsg: 'In letzter Zeit etwas erschöpft?\nEs ist okay, sich auszuruhen und es ruhig anzugehen.\nWenn du reden möchtest, wende dich an einen Freund oder jemanden, der dir nahesteht.\n\nNimm dir etwas Zeit für dich.',
    okayNowShort: 'Danke der Nachfrage',
    mildMsg: 'Wie geht es dir in letzter Zeit?\nKleine Belastungen können sich mit der Zeit ansammeln.\nDenk daran, dir Zeit für dich zu nehmen, und lehn dich an jemanden, dem du vertraust, wenn es schwer wird.',
    mildRead: '',
    mildOk: 'Alles gut',
    deleteConfirmMsg: 'Diesen Eintrag löschen?\nDas kann nicht rückgängig gemacht werden.',
    deleteYes: 'Löschen',
    deleteNo: 'Behalten',
    editTitle: 'Eintrag bearbeiten',
    editSave: 'Speichern',
    editCancel: 'Abbrechen',
    bigFontLabel: 'Große Schrift',
    themeLabel: '🌙 Dunkelmodus',
    themeSystem: 'Systemeinstellung',
    themeLight: 'Hell',
    themeDark: 'Dunkel',
    bandStart: 'Vor 30 Tagen',
    bandEnd: 'Heute',
    calendarTitle: '📅 Einträge',
    breatheScreenTitle: '🌬️ Durchatmen',
    breatheRemaining: 'Noch {t}',
    minuteUnit: ' Min.',
    edit: 'Bearbeiten',
    delete: 'Löschen',
    hotlineTrust: 'Oder sprich mit jemandem, dem du vertraust.',
  },
  es: {
    appTitle: '🌿 Soyogi Note',
    greetingMorning: 'Buenos días.',
    greetingAfternoon: 'Buenas tardes.',
    greetingEvening: 'Buenas noches.',
    headingQ: '¿Cómo te sientes hoy?',
    memoPlaceholder: 'Unas palabras (opcional)',
    save: 'Registrar',
    recordedLabel: '¡Registrado!',
    resetBtn: 'Registrar otra vez',
    navCalendar: 'Ver registros',
    navBreathing: 'Respirar',
    navNote: 'Nuestro blog (en japonés)',
    navArt: 'Ver arte (en japonés)',
    soyogiLink: '',
    mood1: 'Al límite', mood2: 'Mal', mood3: 'Cansado', mood4: 'Normal', mood5: 'Bastante bien',
    moodMemoOnly: 'Solo nota',
    breatheTitle: '¿Cómo quieres respirar?',
    breatheStop: 'Parar',
    phaseInhale: 'Inhala', phaseHold: 'Retén', phaseExhale: 'Exhala',
    mode478Title: '4-7-8 (para dormir)',
    mode478Desc: 'Inhala, retén y exhala despacio.',
    modeBoxTitle: 'Respiración cuadrada (para calmarte)',
    modeBoxDesc: 'Tiempos iguales de 4 segundos, lento y constante.',
    modeSimpleTitle: 'Respiración simple (suave y sencilla)',
    modeSimpleDesc: 'Solo inhala 4s y exhala 4s.',
    breatheDurationTitle: '¿Cuánto tiempo?',
    breatheBack: 'Volver',
    breatheFinishMsg: 'Gracias por tomarte este tiempo.\n¿Te sientes un poco más en calma?',
    breatheFinishRecord: 'Registra cómo te sientes 📝',
    breatheFinishShelter: 'Todavía me duele el corazón y no sé qué hacer',
    calTitle: (y, m) => `${String(m).padStart(2,'0')}/${y}`,
    calWeekdays: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
    calNoRecord: 'No hay registro para este día.\nNo pasa nada por saltarse un día.',
    calNoData: 'Aún no hay registros.\nPrueba a registrar cómo te sientes hoy.',
    modalClose: 'Cerrar',
    welcomeBack: 'Qué bueno verte de nuevo.\nNo hace falta registrar nada. Aquí estamos cuando lo necesites.',
    kigenMsg: 'No estás solo.\nPor favor, contacta con una línea de ayuda:',
    shelterBtn: '',
    laterBtn: 'Cerrar',
    moreCountries: 'Más países →',
    tsuraiMsg: 'Parece que últimamente las cosas han sido difíciles.\nNo tienes que guardártelo todo.\nHabla con alguien de confianza.\n\nY tómate también un tiempo para ti.',
    okayNow: 'Por ahora estoy bien.',
    shindoiMsg: '¿Un poco agotado últimamente?\nEstá bien descansar y tomarse las cosas con calma.\nSi quieres hablar, acude a un amigo o a alguien cercano.\n\nTómate un tiempo para ti.',
    okayNowShort: 'Gracias por preguntar',
    mildMsg: '¿Cómo te ha ido últimamente?\nLas pequeñas tensiones se acumulan con el tiempo.\nRecuerda dedicarte un tiempo, y apóyate en alguien de confianza si algo te pesa.',
    mildRead: '',
    mildOk: 'De acuerdo',
    deleteConfirmMsg: '¿Eliminar este registro?\nNo se puede deshacer.',
    deleteYes: 'Eliminar',
    deleteNo: 'Conservar',
    editTitle: 'Editar registro',
    editSave: 'Guardar',
    editCancel: 'Cancelar',
    bigFontLabel: 'Texto grande',
    themeLabel: '🌙 Modo oscuro',
    themeSystem: 'Según el sistema',
    themeLight: 'Claro',
    themeDark: 'Oscuro',
    bandStart: 'Hace 30 días',
    bandEnd: 'Hoy',
    calendarTitle: '📅 Registros',
    breatheScreenTitle: '🌬️ Respirar',
    breatheRemaining: 'Quedan {t}',
    minuteUnit: ' min',
    edit: 'Editar',
    delete: 'Eliminar',
    hotlineTrust: 'O habla con alguien de confianza.',
  },
  fr: {
    appTitle: '🌿 Soyogi Note',
    greetingMorning: 'Bonjour.',
    greetingAfternoon: 'Bon après-midi.',
    greetingEvening: 'Bonsoir.',
    headingQ: 'Comment te sens-tu aujourd’hui ?',
    memoPlaceholder: 'Quelques mots (facultatif)',
    save: 'Enregistrer',
    recordedLabel: 'Enregistré !',
    resetBtn: 'Enregistrer à nouveau',
    navCalendar: 'Voir l’historique',
    navBreathing: 'Respirer',
    navNote: 'Notre blog (en japonais)',
    navArt: 'Regarder des œuvres (en japonais)',
    soyogiLink: '',
    mood1: 'À bout', mood2: 'Difficile', mood3: 'Fatigué·e', mood4: 'Ça va', mood5: 'Plutôt bien',
    moodMemoOnly: 'Note seule',
    breatheTitle: 'Comment veux-tu respirer ?',
    breatheStop: 'Arrêter',
    phaseInhale: 'Inspire', phaseHold: 'Retiens', phaseExhale: 'Expire',
    mode478Title: '4-7-8 (pour s’endormir)',
    mode478Desc: 'Inspire, retiens, puis expire lentement.',
    modeBoxTitle: 'Respiration carrée (pour se calmer)',
    modeBoxDesc: 'Des temps égaux de 4 secondes, lentement.',
    modeSimpleTitle: 'Respiration simple (en douceur)',
    modeSimpleDesc: 'Inspire 4s, puis expire 4s, c’est tout.',
    breatheDurationTitle: 'Combien de temps ?',
    breatheBack: 'Retour',
    breatheFinishMsg: 'Merci d’avoir pris ce temps.\nTe sens-tu un peu plus calme ?',
    breatheFinishRecord: 'Note comment tu te sens 📝',
    breatheFinishShelter: 'J’ai encore le cœur lourd et je ne sais pas quoi faire',
    calTitle: (y, m) => `${String(m).padStart(2,'0')}/${y}`,
    calWeekdays: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
    calNoRecord: 'Pas de note pour ce jour.\nCe n’est pas grave de sauter un jour.',
    calNoData: 'Pas encore de note.\nEssaie d’enregistrer comment tu te sens aujourd’hui.',
    modalClose: 'Fermer',
    welcomeBack: 'Bon retour.\nRien ne t’oblige à écrire. On est là si tu en as besoin.',
    kigenMsg: 'Tu n’es pas seul·e.\nContacte une ligne d’écoute, s’il te plaît :',
    shelterBtn: '',
    laterBtn: 'Fermer',
    moreCountries: 'Plus de pays →',
    tsuraiMsg: 'On dirait que ces derniers temps ont été difficiles.\nTu n’es pas obligé·e de tout garder pour toi.\nParle à quelqu’un en qui tu as confiance.\n\nEt prends aussi un peu de temps pour toi.',
    okayNow: 'Ça va pour l’instant.',
    shindoiMsg: 'Un peu fatigué·e ces derniers temps ?\nC’est normal de se reposer et de ralentir.\nSi tu as envie de parler, tourne-toi vers un ami ou un proche.\n\nPrends un peu de temps pour toi.',
    okayNowShort: 'Merci de prendre des nouvelles',
    mildMsg: 'Comment vas-tu ces derniers temps ?\nLes petits stress peuvent s’accumuler peu à peu.\nPense à prendre du temps pour toi, et appuie-toi sur une personne de confiance si c’est lourd.',
    mildRead: '',
    mildOk: 'D’accord',
    deleteConfirmMsg: 'Supprimer cette note ?\nImpossible de revenir en arrière.',
    deleteYes: 'Supprimer',
    deleteNo: 'Garder',
    editTitle: 'Modifier la note',
    editSave: 'Enregistrer',
    editCancel: 'Annuler',
    bigFontLabel: 'Grand texte',
    themeLabel: '🌙 Mode sombre',
    themeSystem: 'Système',
    themeLight: 'Clair',
    themeDark: 'Sombre',
    bandStart: 'Il y a 30 jours',
    bandEnd: 'Aujourd’hui',
    calendarTitle: '📅 Historique',
    breatheScreenTitle: '🌬️ Respirer',
    breatheRemaining: 'Encore {t}',
    minuteUnit: ' min',
    edit: 'Modifier',
    delete: 'Supprimer',
    hotlineTrust: 'Ou parle à quelqu’un en qui tu as confiance.',
  },
  hi: {
    appTitle: '🌿 Soyogi Note',
    greetingMorning: 'सुप्रभात।',
    greetingAfternoon: 'नमस्ते।',
    greetingEvening: 'शुभ संध्या।',
    headingQ: 'आज आपका मन कैसा है?',
    memoPlaceholder: 'दो-चार शब्द (लिखना ज़रूरी नहीं)',
    save: 'दर्ज करें',
    recordedLabel: 'दर्ज हो गया!',
    resetBtn: 'फिर से दर्ज करें',
    navCalendar: 'रिकॉर्ड देखें',
    navBreathing: 'गहरी साँस लें',
    navNote: 'हमारा ब्लॉग पढ़ें (जापानी)',
    navArt: 'चित्र देखें (जापानी)',
    soyogiLink: '',
    mood1: 'अब और नहीं', mood2: 'मुश्किल', mood3: 'थकान', mood4: 'ठीक-ठाक', mood5: 'अच्छा',
    moodMemoOnly: 'सिर्फ़ नोट',
    breatheTitle: 'कैसे साँस लेना चाहेंगे?',
    breatheStop: 'समाप्त करें',
    phaseInhale: 'साँस लें', phaseHold: 'रोकें', phaseExhale: 'साँस छोड़ें',
    mode478Title: '4-7-8 (नींद के लिए)',
    mode478Desc: 'साँस लें, रोकें, फिर धीरे-धीरे छोड़ें।',
    modeBoxTitle: 'बॉक्स ब्रीदिंग (शांत होने के लिए)',
    modeBoxDesc: 'हर चरण 4 सेकंड, धीरे और समान रूप से।',
    modeSimpleTitle: 'सरल साँस (हल्के से सँभलने के लिए)',
    modeSimpleDesc: 'बस 4 से. साँस लें, फिर 4 से. छोड़ें।',
    breatheDurationTitle: 'कितनी देर?',
    breatheBack: 'वापस',
    breatheFinishMsg: 'खुद को समय देने के लिए धन्यवाद।\nक्या अब थोड़ा शांत महसूस हो रहा है?',
    breatheFinishRecord: 'अपना मन दर्ज करें 📝',
    breatheFinishShelter: 'मन अब भी भारी है, समझ नहीं आता क्या करूँ',
    calTitle: (y, m) => `${String(m).padStart(2,'0')} / ${y}`,
    calWeekdays: ['रवि','सोम','मंगल','बुध','गुरु','शुक्र','शनि'],
    calNoRecord: 'इस दिन का कोई रिकॉर्ड नहीं है।\nकोई दिन छूट जाए तो भी ठीक है।',
    calNoData: 'अभी कोई रिकॉर्ड नहीं है।\nआज का मन दर्ज करके देखिए।',
    modalClose: 'बंद करें',
    welcomeBack: 'वापसी पर स्वागत है।\nलिखना ज़रूरी नहीं। जब ज़रूरत हो, हम यहीं हैं।',
    kigenMsg: 'आप अकेले नहीं हैं।\nकृपया किसी हेल्पलाइन से संपर्क करें:',
    shelterBtn: '',
    laterBtn: 'बंद करें',
    moreCountries: 'और देश →',
    tsuraiMsg: 'लगता है हाल के दिन मुश्किल रहे हैं।\nसब कुछ अंदर दबाकर रखना ज़रूरी नहीं।\nकिसी भरोसेमंद व्यक्ति से बात करके देखिए।\n\nअपने लिए भी थोड़ा समय निकालिए।',
    okayNow: 'अभी ठीक हूँ।',
    shindoiMsg: 'क्या इन दिनों कुछ थकान महसूस हो रही है?\nआराम करना और धीमे चलना बिल्कुल ठीक है।\nअगर बात करने का मन हो, तो किसी दोस्त या करीबी से बात कीजिए।\n\nअपने लिए थोड़ा समय निकालिए।',
    okayNowShort: 'पूछने के लिए धन्यवाद',
    mildMsg: 'इन दिनों आप कैसे हैं?\nछोटे-छोटे तनाव धीरे-धीरे जमा हो सकते हैं।\nअपने लिए समय निकालना न भूलें, और मन भारी लगे तो किसी भरोसेमंद का सहारा लीजिए।',
    mildRead: '',
    mildOk: 'ठीक है',
    deleteConfirmMsg: 'यह रिकॉर्ड हटाएँ?\nइसे वापस नहीं लाया जा सकेगा।',
    deleteYes: 'हटाएँ',
    deleteNo: 'रहने दें',
    editTitle: 'रिकॉर्ड बदलें',
    editSave: 'सहेजें',
    editCancel: 'रद्द करें',
    bigFontLabel: 'बड़े अक्षर',
    themeLabel: '🌙 डार्क मोड',
    themeSystem: 'डिवाइस के अनुसार',
    themeLight: 'लाइट',
    themeDark: 'डार्क',
    bandStart: '30 दिन पहले',
    bandEnd: 'आज',
    calendarTitle: '📅 रिकॉर्ड',
    breatheScreenTitle: '🌬️ साँस',
    breatheRemaining: '{t} बाकी',
    minuteUnit: ' मिनट',
    edit: 'बदलें',
    delete: 'हटाएँ',
    hotlineTrust: 'या किसी भरोसेमंद व्यक्ति से बात करें।',
  },
  id: {
    appTitle: '🌿 Soyogi Note',
    greetingMorning: 'Selamat pagi.',
    greetingAfternoon: 'Selamat siang.',
    greetingEvening: 'Selamat malam.',
    headingQ: 'Bagaimana perasaanmu hari ini?',
    memoPlaceholder: 'Sepatah kata (boleh dikosongkan)',
    save: 'Catat',
    recordedLabel: 'Tercatat!',
    resetBtn: 'Catat lagi',
    navCalendar: 'Lihat catatan',
    navBreathing: 'Tarik napas',
    navNote: 'Baca blog kami (bahasa Jepang)',
    navArt: 'Lihat karya seni (bahasa Jepang)',
    soyogiLink: '',
    mood1: 'Tak sanggup lagi', mood2: 'Berat', mood3: 'Lelah', mood4: 'Biasa saja', mood5: 'Cukup baik',
    moodMemoOnly: 'Hanya catatan',
    breatheTitle: 'Mau bernapas seperti apa?',
    breatheStop: 'Berhenti',
    phaseInhale: 'Tarik', phaseHold: 'Tahan', phaseExhale: 'Buang',
    mode478Title: '4-7-8 (untuk membantu tidur)',
    mode478Desc: 'Tarik napas, tahan, lalu buang perlahan.',
    modeBoxTitle: 'Napas kotak (untuk menenangkan diri)',
    modeBoxDesc: 'Masing-masing 4 detik, pelan dan teratur.',
    modeSimpleTitle: 'Napas sederhana (menenangkan lembut)',
    modeSimpleDesc: 'Cukup tarik 4 dtk, lalu buang 4 dtk.',
    breatheDurationTitle: 'Berapa lama?',
    breatheBack: 'Kembali',
    breatheFinishMsg: 'Terima kasih sudah meluangkan waktu ini.\nApakah sekarang terasa sedikit lebih tenang?',
    breatheFinishRecord: 'Catat perasaanmu 📝',
    breatheFinishShelter: 'Hatiku masih sesak dan aku tak tahu harus bagaimana',
    calTitle: (y, m) => `${String(m).padStart(2,'0')}/${y}`,
    calWeekdays: ['Min','Sen','Sel','Rab','Kam','Jum','Sab'],
    calNoRecord: 'Tidak ada catatan untuk hari ini.\nMelewatkan sehari juga tidak apa-apa.',
    calNoData: 'Belum ada catatan.\nCoba catat perasaanmu hari ini.',
    modalClose: 'Tutup',
    welcomeBack: 'Selamat datang kembali.\nTidak harus mencatat, kok. Kami ada saat kamu membutuhkan.',
    kigenMsg: 'Kamu tidak sendirian.\nHubungi saluran bantuan krisis, ya:',
    shelterBtn: '',
    laterBtn: 'Tutup',
    moreCountries: 'Negara lainnya →',
    tsuraiMsg: 'Sepertinya akhir-akhir ini terasa berat, ya.\nTidak perlu memendam semuanya sendiri.\nCoba bicara dengan orang yang kamu percaya.\n\nLuangkan juga waktu untuk dirimu sendiri.',
    okayNow: 'Sekarang aku baik-baik saja.',
    shindoiMsg: 'Akhir-akhir ini terasa agak lelah?\nBeristirahat dan berjalan pelan-pelan itu tidak apa-apa.\nKalau ingin bercerita, coba hubungi teman atau orang terdekat.\n\nLuangkan waktu untuk dirimu sendiri.',
    okayNowShort: 'Terima kasih sudah menanyakan',
    mildMsg: 'Bagaimana kabarmu akhir-akhir ini?\nStres kecil bisa menumpuk seiring waktu.\nIngatlah meluangkan waktu untuk dirimu, dan bersandarlah pada orang yang kamu percaya bila terasa berat.',
    mildRead: '',
    mildOk: 'Baiklah',
    deleteConfirmMsg: 'Hapus catatan ini?\nTidak bisa dikembalikan lagi.',
    deleteYes: 'Hapus',
    deleteNo: 'Biarkan',
    editTitle: 'Ubah catatan',
    editSave: 'Simpan',
    editCancel: 'Batal',
    bigFontLabel: 'Huruf besar',
    themeLabel: '🌙 Mode gelap',
    themeSystem: 'Ikuti perangkat',
    themeLight: 'Terang',
    themeDark: 'Gelap',
    bandStart: '30 hari lalu',
    bandEnd: 'Hari ini',
    calendarTitle: '📅 Catatan',
    breatheScreenTitle: '🌬️ Bernapas',
    breatheRemaining: 'Sisa {t}',
    minuteUnit: ' menit',
    edit: 'Ubah',
    delete: 'Hapus',
    hotlineTrust: 'Atau bicaralah dengan orang yang kamu percaya.',
  },
  it: {
    appTitle: '🌿 Soyogi Note',
    greetingMorning: 'Buongiorno.',
    greetingAfternoon: 'Buon pomeriggio.',
    greetingEvening: 'Buonasera.',
    headingQ: 'Come ti senti oggi?',
    memoPlaceholder: 'Due parole (facoltativo)',
    save: 'Annota',
    recordedLabel: 'Annotato!',
    resetBtn: 'Annota di nuovo',
    navCalendar: 'Vedi il diario',
    navBreathing: 'Respira',
    navNote: 'Il nostro blog (in giapponese)',
    navArt: 'Guarda le opere (in giapponese)',
    soyogiLink: '',
    mood1: 'Al limite', mood2: 'Pesante', mood3: 'Stanchezza', mood4: 'Normale', mood5: 'Abbastanza bene',
    moodMemoOnly: 'Solo nota',
    breatheTitle: 'Come vuoi respirare?',
    breatheStop: 'Interrompi',
    phaseInhale: 'Inspira', phaseHold: 'Trattieni', phaseExhale: 'Espira',
    mode478Title: '4-7-8 (per addormentarsi)',
    mode478Desc: 'Inspira, trattieni, poi espira lentamente.',
    modeBoxTitle: 'Respirazione quadrata (per calmarsi)',
    modeBoxDesc: 'Tempi uguali di 4 secondi, con calma.',
    modeSimpleTitle: 'Respirazione semplice (con dolcezza)',
    modeSimpleDesc: 'Basta inspirare 4s e poi espirare 4s.',
    breatheDurationTitle: 'Per quanto tempo?',
    breatheBack: 'Indietro',
    breatheFinishMsg: 'Grazie per questo momento.\nVa un po’ meglio adesso?',
    breatheFinishRecord: 'Annota come ti senti 📝',
    breatheFinishShelter: 'Ho ancora il cuore pesante e non so cosa fare',
    calTitle: (y, m) => `${String(m).padStart(2,'0')}/${y}`,
    calWeekdays: ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'],
    calNoRecord: 'Nessuna annotazione per questo giorno.\nSaltare un giorno va benissimo.',
    calNoData: 'Ancora nessuna annotazione.\nProva ad annotare come ti senti oggi.',
    modalClose: 'Chiudi',
    welcomeBack: 'Che bello rivederti.\nNon devi annotare per forza. Siamo qui quando ti serve.',
    kigenMsg: 'Non sei solo.\nContatta una linea di ascolto, per favore:',
    shelterBtn: '',
    laterBtn: 'Chiudi',
    moreCountries: 'Altri Paesi →',
    tsuraiMsg: 'Sembra che ultimamente sia stata dura.\nNon devi tenerti tutto dentro.\nProva a parlarne con una persona di cui ti fidi.\n\nE prenditi anche un po’ di tempo per te.',
    okayNow: 'Per ora sto bene.',
    shindoiMsg: 'Ti senti un po’ stanco ultimamente?\nVa bene riposare e prendersela con calma.\nSe hai voglia di parlare, rivolgiti a un amico o a una persona vicina.\n\nPrenditi un po’ di tempo per te.',
    okayNowShort: 'Grazie per il pensiero',
    mildMsg: 'Come va ultimamente?\nI piccoli stress possono accumularsi col tempo.\nRicorda di prenderti del tempo per te, e appoggiati a una persona fidata se senti il peso.',
    mildRead: '',
    mildOk: 'Va bene',
    deleteConfirmMsg: 'Eliminare questa annotazione?\nNon si può annullare.',
    deleteYes: 'Elimina',
    deleteNo: 'Conserva',
    editTitle: 'Modifica annotazione',
    editSave: 'Salva',
    editCancel: 'Annulla',
    bigFontLabel: 'Testo grande',
    themeLabel: '🌙 Tema scuro',
    themeSystem: 'Sistema',
    themeLight: 'Chiaro',
    themeDark: 'Scuro',
    bandStart: '30 giorni fa',
    bandEnd: 'Oggi',
    calendarTitle: '📅 Diario',
    breatheScreenTitle: '🌬️ Respira',
    breatheRemaining: 'Ancora {t}',
    minuteUnit: ' min',
    edit: 'Modifica',
    delete: 'Elimina',
    hotlineTrust: 'Oppure parla con una persona di cui ti fidi.',
  },
  ko: {
    appTitle: '🌿 Soyogi Note',
    greetingMorning: '좋은 아침이에요.',
    greetingAfternoon: '안녕하세요.',
    greetingEvening: '편안한 저녁이에요.',
    headingQ: '오늘 기분은 어때요?',
    memoPlaceholder: '한마디 (안 써도 괜찮아요)',
    save: '기록하기',
    recordedLabel: '기록했어요!',
    resetBtn: '다시 기록하기',
    navCalendar: '기록 보기',
    navBreathing: '심호흡하기',
    navNote: '공식 노트 읽기 (일본어)',
    navArt: '그림 감상하기 (일본어)',
    soyogiLink: '',
    mood1: '한계', mood2: '힘듦', mood3: '지침', mood4: '보통', mood5: '꽤 좋음',
    moodMemoOnly: '메모만',
    breatheTitle: '어떻게 호흡해 볼까요?',
    breatheStop: '그만하기',
    phaseInhale: '들이쉬기', phaseHold: '멈추기', phaseExhale: '내쉬기',
    mode478Title: '4-7-8 (잠들고 싶을 때)',
    mode478Desc: '들이쉬고, 멈추고, 천천히 내쉬어요.',
    modeBoxTitle: '박스 호흡 (차분해지고 싶을 때)',
    modeBoxDesc: '4초씩 고르게, 천천히.',
    modeSimpleTitle: '심플 호흡 (부드럽게 가다듬기)',
    modeSimpleDesc: '4초 들이쉬고 4초 내쉬면 끝.',
    breatheDurationTitle: '얼마나 할까요?',
    breatheBack: '뒤로',
    breatheFinishMsg: '수고하셨어요.\n마음이 조금은 가라앉았나요?',
    breatheFinishRecord: '기분 기록하기 📝',
    breatheFinishShelter: '아직도 마음이 괴로워서 어떻게 해야 할지 모르겠어요',
    calTitle: (y, m) => `${y}년 ${m}월`,
    calWeekdays: ['일','월','화','수','목','금','토'],
    calNoRecord: '이 날의 기록이 없어요.\n하루쯤 건너뛰어도 괜찮아요.',
    calNoData: '아직 기록이 없어요.\n오늘의 기분을 기록해 보세요.',
    modalClose: '닫기',
    welcomeBack: '다시 만나 반가워요.\n무리해서 기록하지 않아도 괜찮아요.',
    kigenMsg: '당신은 혼자가 아니에요.\n위기 상담 전화에 연락해 보세요:',
    shelterBtn: '',
    laterBtn: '닫기',
    moreCountries: '다른 나라 보기 →',
    tsuraiMsg: '요즘 힘든 일이 많았나 봐요.\n혼자 다 끌어안지 않아도 괜찮아요.\n믿을 수 있는 사람에게 이야기해 보세요.\n\n자신을 위한 시간도 가져 보세요.',
    okayNow: '지금은 괜찮아요.',
    shindoiMsg: '요즘 조금 지치셨나요?\n쉬어 가도, 천천히 가도 괜찮아요.\n이야기하고 싶을 때는 친구나 가까운 사람에게 연락해 보세요.\n\n자신을 위한 시간을 가져 보세요.',
    okayNowShort: '물어봐 줘서 고마워요',
    mildMsg: '요즘 어떻게 지내세요?\n작은 스트레스도 쌓이다 보면 커질 수 있어요.\n자신을 위한 시간을 잊지 마시고, 마음이 무거울 때는 믿을 수 있는 사람에게 기대어 보세요.',
    mildRead: '',
    mildOk: '괜찮아요',
    deleteConfirmMsg: '이 기록을 지울까요?\n지우면 되돌릴 수 없어요.',
    deleteYes: '지우기',
    deleteNo: '그대로 두기',
    editTitle: '기록 고치기',
    editSave: '저장',
    editCancel: '취소',
    bigFontLabel: '큰 글자',
    themeLabel: '🌙 다크 모드',
    themeSystem: '기기 설정에 맞춤',
    themeLight: '라이트',
    themeDark: '다크',
    bandStart: '30일 전',
    bandEnd: '오늘',
    calendarTitle: '📅 기록',
    breatheScreenTitle: '🌬️ 심호흡',
    breatheRemaining: '남은 시간 {t}',
    minuteUnit: '분',
    edit: '수정',
    delete: '삭제',
    hotlineTrust: '또는 믿을 수 있는 사람에게 이야기해 보세요.',
  },
  pt: {
    appTitle: '🌿 Soyogi Note',
    greetingMorning: 'Bom dia.',
    greetingAfternoon: 'Boa tarde.',
    greetingEvening: 'Boa noite.',
    headingQ: 'Como você está se sentindo hoje?',
    memoPlaceholder: 'Umas palavras (opcional)',
    save: 'Registrar',
    recordedLabel: 'Registrado!',
    resetBtn: 'Registrar de novo',
    navCalendar: 'Ver registros',
    navBreathing: 'Respirar',
    navNote: 'Nosso blog (em japonês)',
    navArt: 'Ver arte (em japonês)',
    soyogiLink: '',
    mood1: 'No limite', mood2: 'Difícil', mood3: 'Cansaço', mood4: 'Normal', mood5: 'Bem',
    moodMemoOnly: 'Apenas nota',
    breatheTitle: 'Como você quer respirar?',
    breatheStop: 'Parar',
    phaseInhale: 'Inspire', phaseHold: 'Segure', phaseExhale: 'Expire',
    mode478Title: '4-7-8 (para adormecer)',
    mode478Desc: 'Inspire, segure e expire devagar.',
    modeBoxTitle: 'Respiração quadrada (para acalmar)',
    modeBoxDesc: 'Tempos iguais de 4 segundos, devagar e constante.',
    modeSimpleTitle: 'Respiração simples (suavemente)',
    modeSimpleDesc: 'Só inspirar 4s e expirar 4s.',
    breatheDurationTitle: 'Por quanto tempo?',
    breatheBack: 'Voltar',
    breatheFinishMsg: 'Que bom que você reservou esse tempo.\nEstá se sentindo um pouco mais leve?',
    breatheFinishRecord: 'Registre como você se sente 📝',
    breatheFinishShelter: 'Meu coração ainda dói e não sei o que fazer',
    calTitle: (y, m) => `${String(m).padStart(2,'0')}/${y}`,
    calWeekdays: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
    calNoRecord: 'Nenhum registro para este dia.\nTudo bem pular um dia.',
    calNoData: 'Ainda não há registros.\nQue tal registrar como você se sente hoje?',
    modalClose: 'Fechar',
    welcomeBack: 'Que bom te ver de novo.\nNão precisa registrar nada. Estamos aqui quando você precisar.',
    kigenMsg: 'Você não está só.\nPor favor, procure uma linha de apoio:',
    shelterBtn: '',
    laterBtn: 'Fechar',
    moreCountries: 'Mais países →',
    tsuraiMsg: 'Parece que as coisas andam difíceis ultimamente.\nVocê não precisa guardar tudo para si.\nTente conversar com alguém de confiança.\n\nE reserve também um tempo para você.',
    okayNow: 'Por enquanto estou bem.',
    shindoiMsg: 'Um pouco cansado ultimamente?\nTudo bem descansar e ir com calma.\nSe quiser conversar, procure um amigo ou alguém próximo.\n\nReserve um tempo para você.',
    okayNowShort: 'Agradeço a preocupação',
    mildMsg: 'Como você tem passado ultimamente?\nPequenos estresses podem se acumular com o tempo.\nLembre-se de reservar um tempo para você, e conte com alguém de confiança se o peso aumentar.',
    mildRead: '',
    mildOk: 'Tudo bem',
    deleteConfirmMsg: 'Excluir este registro?\nNão dá para desfazer.',
    deleteYes: 'Excluir',
    deleteNo: 'Manter',
    editTitle: 'Editar registro',
    editSave: 'Salvar',
    editCancel: 'Cancelar',
    bigFontLabel: 'Texto grande',
    themeLabel: '🌙 Modo escuro',
    themeSystem: 'Sistema',
    themeLight: 'Claro',
    themeDark: 'Escuro',
    bandStart: 'Há 30 dias',
    bandEnd: 'Hoje',
    calendarTitle: '📅 Registros',
    breatheScreenTitle: '🌬️ Respirar',
    breatheRemaining: 'Faltam {t}',
    minuteUnit: ' min',
    edit: 'Editar',
    delete: 'Excluir',
    hotlineTrust: 'Ou converse com alguém de confiança.',
  },
  ru: {
    appTitle: '🌿 Soyogi Note',
    greetingMorning: 'Доброе утро.',
    greetingAfternoon: 'Добрый день.',
    greetingEvening: 'Добрый вечер.',
    headingQ: 'Как ты себя чувствуешь сегодня?',
    memoPlaceholder: 'Пара слов (необязательно)',
    save: 'Записать',
    recordedLabel: 'Записано!',
    resetBtn: 'Записать ещё раз',
    navCalendar: 'Мои записи',
    navBreathing: 'Подышать',
    navNote: 'Наш блог (на японском)',
    navArt: 'Посмотреть картины (на японском)',
    soyogiLink: '',
    mood1: 'На пределе', mood2: 'Тяжело', mood3: 'Усталость', mood4: 'Нормально', mood5: 'Неплохо',
    moodMemoOnly: 'Только заметка',
    breatheTitle: 'Как хочешь подышать?',
    breatheStop: 'Завершить',
    phaseInhale: 'Вдох', phaseHold: 'Пауза', phaseExhale: 'Выдох',
    mode478Title: '4-7-8 (чтобы уснуть)',
    mode478Desc: 'Вдохни, задержи дыхание, затем медленно выдохни.',
    modeBoxTitle: 'Квадратное дыхание (чтобы успокоиться)',
    modeBoxDesc: 'По 4 секунды на каждый шаг, медленно и ровно.',
    modeSimpleTitle: 'Простое дыхание (мягко прийти в себя)',
    modeSimpleDesc: 'Просто вдох 4 с, затем выдох 4 с.',
    breatheDurationTitle: 'Как долго?',
    breatheBack: 'Назад',
    breatheFinishMsg: 'Спасибо, что уделил(а) себе это время.\nСтало немного спокойнее?',
    breatheFinishRecord: 'Записать своё состояние 📝',
    breatheFinishShelter: 'На душе всё ещё тяжело, и я не знаю, что делать',
    calTitle: (y, m) => `${String(m).padStart(2,'0')}.${y}`,
    calWeekdays: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    calNoRecord: 'В этот день записей нет.\nПропустить день — это нормально.',
    calNoData: 'Записей пока нет.\nПопробуй записать, как ты себя чувствуешь сегодня.',
    modalClose: 'Закрыть',
    welcomeBack: 'С возвращением.\nНеобязательно что-то записывать. Мы рядом, когда нужно.',
    kigenMsg: 'Ты не остаёшься с этим в одиночестве.\nПожалуйста, обратись на линию помощи:',
    shelterBtn: '',
    laterBtn: 'Закрыть',
    moreCountries: 'Другие страны →',
    tsuraiMsg: 'Похоже, в последнее время тебе непросто.\nНеобязательно держать всё в себе.\nПопробуй поговорить с тем, кому доверяешь.\n\nИ найди немного времени для себя.',
    okayNow: 'Сейчас я в порядке.',
    shindoiMsg: 'Немного устаёшь в последнее время?\nОтдыхать и не спешить — это нормально.\nЕсли хочется поговорить, обратись к другу или близкому человеку.\n\nНайди немного времени для себя.',
    okayNowShort: 'Спасибо за заботу',
    mildMsg: 'Как твои дела в последнее время?\nМаленькие стрессы понемногу накапливаются.\nНе забывай оставлять время для себя, а если станет тяжело, обопрись на того, кому доверяешь.',
    mildRead: '',
    mildOk: 'Хорошо',
    deleteConfirmMsg: 'Удалить эту запись?\nОтменить это будет нельзя.',
    deleteYes: 'Удалить',
    deleteNo: 'Оставить',
    editTitle: 'Изменить запись',
    editSave: 'Сохранить',
    editCancel: 'Отмена',
    bigFontLabel: 'Крупный текст',
    themeLabel: '🌙 Тёмная тема',
    themeSystem: 'Как в системе',
    themeLight: 'Светлая',
    themeDark: 'Тёмная',
    bandStart: '30 дней назад',
    bandEnd: 'Сегодня',
    calendarTitle: '📅 Записи',
    breatheScreenTitle: '🌬️ Дыхание',
    breatheRemaining: 'Осталось {t}',
    minuteUnit: ' мин',
    edit: 'Изменить',
    delete: 'Удалить',
    hotlineTrust: 'Или поговори с тем, кому доверяешь.',
  },
  zh: {
    appTitle: '🌿 Soyogi Note',
    greetingMorning: '早上好。',
    greetingAfternoon: '下午好。',
    greetingEvening: '晚上好。',
    headingQ: '今天心情怎么样？',
    memoPlaceholder: '写一句话（不写也可以）',
    save: '记录',
    recordedLabel: '记好了！',
    resetBtn: '再记一条',
    navCalendar: '查看记录',
    navBreathing: '深呼吸',
    navNote: '阅读官方note（日语）',
    navArt: '欣赏画作（日语）',
    soyogiLink: '',
    mood1: '到极限了', mood2: '很难受', mood3: '有点累', mood4: '一般', mood5: '还不错',
    moodMemoOnly: '仅备注',
    breatheTitle: '想怎么呼吸？',
    breatheStop: '结束',
    phaseInhale: '吸气', phaseHold: '屏住', phaseExhale: '呼气',
    mode478Title: '4-7-8（助眠）',
    mode478Desc: '吸气、屏住，再慢慢呼出。',
    modeBoxTitle: '箱式呼吸（平复心情）',
    modeBoxDesc: '每步4秒，缓慢而均匀。',
    modeSimpleTitle: '简单呼吸（轻轻调整）',
    modeSimpleDesc: '只需吸气4秒，再呼气4秒。',
    breatheDurationTitle: '做多久？',
    breatheBack: '返回',
    breatheFinishMsg: '辛苦了。\n心情有没有平静一些？',
    breatheFinishRecord: '记录现在的心情 📝',
    breatheFinishShelter: '心里还是很难受，不知道该怎么办',
    calTitle: (y, m) => `${y}年${m}月`,
    calWeekdays: ['日','一','二','三','四','五','六'],
    calNoRecord: '这一天没有记录。\n偶尔跳过一天也没关系。',
    calNoData: '还没有记录。\n试着记下今天的心情吧。',
    modalClose: '关闭',
    welcomeBack: '欢迎回来。\n不必勉强记录，需要时我们都在。',
    kigenMsg: '你并不孤单。\n请联系心理援助热线：',
    shelterBtn: '',
    laterBtn: '关闭',
    moreCountries: '更多国家 →',
    tsuraiMsg: '最近的日子好像不太容易。\n不必把一切都憋在心里。\n试着和信任的人聊聊吧。\n\n也记得给自己留些时间。',
    okayNow: '现在还好。',
    shindoiMsg: '最近是不是有点累了？\n休息一下、放慢脚步也没关系。\n想说说话的时候，可以找朋友或亲近的人聊聊。\n\n给自己留一点时间。',
    okayNowShort: '谢谢关心',
    mildMsg: '最近过得怎么样？\n小小的压力也会日积月累。\n记得给自己留些时间；觉得沉重时，也可以依靠信任的人。',
    mildRead: '',
    mildOk: '好的',
    deleteConfirmMsg: '要删除这条记录吗？\n删除后无法恢复。',
    deleteYes: '删除',
    deleteNo: '保留',
    editTitle: '修改记录',
    editSave: '保存',
    editCancel: '取消',
    bigFontLabel: '大字号',
    themeLabel: '🌙 深色模式',
    themeSystem: '跟随系统',
    themeLight: '浅色',
    themeDark: '深色',
    bandStart: '30天前',
    bandEnd: '今天',
    calendarTitle: '📅 记录',
    breatheScreenTitle: '🌬️ 深呼吸',
    breatheRemaining: '剩余 {t}',
    minuteUnit: '分钟',
    edit: '编辑',
    delete: '删除',
    hotlineTrust: '或者，和你信任的人聊聊。',
  },
};

// そよぎ標準14言語のネイティブ表記名（言語ピッカーの表示用・翻訳テキストではない）。
// 実際にピッカーへ出るのは I18N にキーがある言語だけ（2026-07-15より全14言語）。
const LANG_NAMES = {
  ja: '日本語', en: 'English', ar: 'العربية', bn: 'বাংলা', de: 'Deutsch',
  es: 'Español', fr: 'Français', hi: 'हिन्दी', id: 'Bahasa Indonesia',
  it: 'Italiano', ko: '한국어', pt: 'Português', ru: 'Русский', zh: '中文',
};
const LANG_ORDER = ['ja','en','ar','bn','de','es','fr','hi','id','it','ko','pt','ru','zh'];
const RTL_LANGS = ['ar'];
function isRtlLang(code) { return RTL_LANGS.includes(code); }

let lang = localStorage.getItem('soyogi_lang') || 'ja';
if (!I18N[lang]) lang = 'ja'; // 保存値が未収録言語なら ja に丸める
function t(key) {
  return I18N[lang][key] ?? I18N.ja[key] ?? '';
}
// SOS/表示分岐は ja かどうかで統一（Flutter版 DbService.isJa と同一仕様）。
// シェルター誘導=jaのみ・非ja=ホットライン/findahelpline（代表判断）。
function isJa() { return lang === 'ja'; }

// 言語チップを I18N にある言語だけ動的生成（14言語対応・ネイティブ表記）。
function buildLangChips() {
  const box = $('lang-toggle');
  if (!box) return;
  const codes = LANG_ORDER.filter(c => I18N[c]);
  box.innerHTML = codes.map(c =>
    `<button class="lang-chip${c === lang ? ' active' : ''}" data-lang="${c}">${LANG_NAMES[c] || c}</button>`
  ).join('');
}

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

// 記録の削除
function deleteRecordById(id) {
  saveRecords(loadRecords().filter(r => r.id !== id));
}

// 記録の上書き（編集用）
function updateRecordById(id, patch) {
  const records = loadRecords();
  const i = records.findIndex(r => r.id === id);
  if (i >= 0) {
    records[i] = Object.assign({}, records[i], patch);
    saveRecords(records);
  }
}

// その日の記録を全件（新しい順）返す
function recordsForDate(dateObj) {
  const k = dateKey(dateObj);
  return allRecordsSorted().filter(r => dateKey(new Date(r.date)) === k);
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

function hasNegativeTrend10Days(jaKeywords, enKeywords) {
  const cutoff = Date.now() - 10 * 86400 * 1000;
  const recent = allRecordsSorted().filter(r => new Date(r.date).getTime() > cutoff);
  const distinctDays = new Set(recent.map(r => dateKey(new Date(r.date))));
  if (distinctDays.size < 5) return false;
  const negDays = new Set();
  for (const r of recent) {
    const memo = r.memo || '';
    // 日本語は部分一致、英語は単語境界マッチ
    if (jaKeywords.some(w => memo.includes(w)) || matchesEnglish(memo, enKeywords)) {
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
function moodBorder(score) {
  // ダーク背景では黒丸(score1)が沈むので明るいスレート縁で判別性を保つ
  if (score === 1 && resolvedDark()) return '#9AA3B2';
  return MOOD_BORDERS[score] ?? MOOD_BORDERS.null;
}
function moodLabel(score) {
  if (score == null) return t('moodMemoOnly');
  return t('mood' + score);
}

// ===== キーワード =====
const KW_TIER1 = ['死','殺','消えたい','消えてしまいたい','もう無理','助けて','終わりにしたい','生きていたくない','しぬ','しにたい','しのう','自殺','自傷'];
const KW_TIER2 = ['つらい','辛い','限界','さみしい','寂しい','孤独','ぼっち','毒親','親ガチャ失敗','孤立','絶望','希望がない','誰もわかってくれない'];
const KW_TIER3 = ['しんどい','だるい','疲れた','つかれた','うんざり','イライラ','いらいら','むかつく','嫌だ','やだ','不安','心配','怖い','悲しい','かなしい','落ち込む','落ち込んだ','ストレス','きつい'];
const KW_MILD = ['めんどう','めんどくさい','めんどい','ぼーっと','なんとなく','すっきりしない','モヤモヤ','もやもや','どんより','テンション低い','やる気ない','やる気でない',...KW_TIER3];

// 英語キーワード（UI言語に関係なく本文へ常時マッチ）
// ja「消えたい」「生きていたくない」相当の頻出表現を含む（2026-07-15 校閲追加）
const KW_TIER1_EN = ['want to die','kill myself','suicide','end my life','end it all','self harm','hurt myself','no reason to live','better off dead','disappear forever','want to disappear','wish i was dead','wish i were dead','tired of living',"don't want to live"];
const KW_TIER2_EN = ["can't take it anymore","can't go on",'give up','hopeless','worthless','hate myself','breaking down','falling apart'];
const KW_TIER3_EN = ['exhausted','lonely',"can't sleep",'empty','numb','overwhelmed','anxious'];

// 英語キーワードの単語境界マッチ。
// ・大文字小文字を無視
// ・単語境界(\b)を見るので "tired" が "retired" に誤反応しない
// ・カーリーアポストロフィ(’‘)を直線(')へ正規化して "can't" を拾う
// ・語句内の空白は\s+扱いにして連続空白・改行にも耐える
function matchesEnglish(text, keywords) {
  const normalized = String(text).replace(/[‘’]/g, "'");
  for (const w of keywords) {
    const pattern = w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/ /g, '\\s+');
    const re = new RegExp('\\b' + pattern + '\\b', 'i');
    if (re.test(normalized)) return true;
  }
  return false;
}

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
  // ar など RTL言語のときは右→左レイアウトへ。
  document.documentElement.dir = isRtlLang(lang) ? 'rtl' : 'ltr';
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
  // footer link（そよぎ相談リンクは日本語のみ表示）
  const fl = $('soyogi-link');
  if (isJa()) {
    fl.style.display = '';
    fl.textContent = t('soyogiLink');
  } else {
    fl.style.display = 'none';
  }
  // calendar weekdays
  const days = t('calWeekdays');
  $$('#cal-weekdays .cal-weekday').forEach((el, i) => el.textContent = days[i]);
  // breathing stop button
  $('breathing-stop').textContent = t('breatheStop');
  // breathing mode cards（モード選択カードの多言語化）
  $$('.breathing-mode').forEach(card => {
    const suffix = card.dataset.mode === '478' ? '478'
      : (card.dataset.mode === 'box' ? 'Box' : 'Simple');
    const titleEl = card.querySelector('.mode-title');
    const descEl = card.querySelector('.mode-desc');
    if (titleEl) titleEl.textContent = t('mode' + suffix + 'Title');
    if (descEl) descEl.textContent = t('mode' + suffix + 'Desc');
  });
  // breathing 時間選択・完了画面の多言語化
  $('breathing-duration-title').textContent = t('breatheDurationTitle');
  $('breathing-duration-back').textContent = t('breatheBack');
  // 時間ボタンは「数字＋minuteUnit」（en等は先頭スペース付き単位・ja/ko/zhは密着）
  $$('.breathing-min').forEach(el => { el.textContent = el.dataset.min + t('minuteUnit'); });
  $('breathing-finish-msg').textContent = t('breatheFinishMsg');
  $('breathing-finish-record').textContent = t('breatheFinishRecord');
  $('breathing-finish-shelter').textContent = t('breatheFinishShelter');
  $('breathing-finish-close').textContent = t('modalClose');
  // 大きめ文字ラベル
  const bfl = $('bigfont-label');
  if (bfl) bfl.textContent = t('bigFontLabel');
  // ダークモード（設定）ラベル
  const tl = $('theme-label');
  if (tl) tl.textContent = t('themeLabel');
  const ts = $('theme-system'); if (ts) ts.textContent = t('themeSystem');
  const tli = $('theme-light'); if (tli) tli.textContent = t('themeLight');
  const td = $('theme-dark'); if (td) td.textContent = t('themeDark');
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
    if (name === 'calendar') $('app-title').textContent = t('calendarTitle');
    else if (name === 'breathing') $('app-title').textContent = t('breatheScreenTitle');
  }
  if (name === 'calendar') renderCalendar();
  if (name === 'breathing') {
    stopBreathing();
    showBreathingStep('select');
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// ===== 気分セレクター =====
let selectedScore = null;
function updateMoodUI() {
  $$('#mood-selector .mood-option').forEach(el => {
    el.classList.toggle('selected', Number(el.dataset.score) === selectedScore);
  });
  updateSaveDisabled();
}

// ===== 大きめ文字（CSSクラス切替＋localStorage保存） =====
let bigFont = localStorage.getItem('soyogi_big_font') === '1';
function applyBigFont() {
  const app = document.getElementById('app');
  if (app) app.classList.toggle('big-font', bigFont);
  const cb = $('bigfont-toggle');
  if (cb) cb.checked = bigFont;
}

// ===== ダークモード（深夜モード）=====
// 'system'（端末にあわせる・既定）/ 'light' / 'dark' を body クラスで切替。
// prefers-color-scheme: dark を既定にしつつ、明示選択で上書きできる。
let themePref = localStorage.getItem('soyogi_theme') || 'system';
function resolvedDark() {
  if (themePref === 'dark') return true;
  if (themePref === 'light') return false;
  return window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
}
function applyTheme() {
  document.body.classList.remove('theme-system', 'theme-light', 'theme-dark');
  document.body.classList.add('theme-' + themePref);
  // 選択中ボタンをハイライト
  $$('.theme-seg-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.theme === themePref));
  // ステータスバー色（モバイル）
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', resolvedDark() ? '#2E5D3E' : '#81C784');
  // JSでインライン着色している丸（カレンダー・色帯）を塗り直す
  if (currentView === 'calendar') renderCalendar();
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
  // 日本語は部分一致、英語は単語境界マッチ。両リストを常時チェックする。
  const hasTier1 = KW_TIER1.some(w => memoRaw.includes(w)) || matchesEnglish(memoRaw, KW_TIER1_EN);
  const hasTier2 = !hasTier1 && (KW_TIER2.some(w => memoRaw.includes(w)) || matchesEnglish(memoRaw, KW_TIER2_EN));
  const hasTier3 = !hasTier1 && !hasTier2 && (KW_TIER3.some(w => memoRaw.includes(w)) || matchesEnglish(memoRaw, KW_TIER3_EN));

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
    noGreatMoodIn10Days() || hasNegativeTrend10Days(KW_MILD, KW_TIER3_EN)
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
      <div style="margin-top:8px; font-size:13px;">${t('hotlineTrust')}</div>
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

// 限界ポップアップ（非ja=ホットライン＋findahelpline / ja=シェルター誘導）
function showKigenDialog() {
  if (!isJa()) {
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
  if (!isJa()) {
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
  if (!isJa()) {
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
  if (!isJa()) {
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

// 直近30日の気分をそっと眺める色帯（今日が右端・記録が無い日は控えめな空丸）
// タップ・数値・グラフ化はしない。評価ではなく、眺めるためのもの。
function renderMiniBand() {
  const band = $('mini-band');
  if (!band) return;
  const map = recordsByDateMap();
  const today = new Date();
  const base = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  let cells = '';
  for (let i = 0; i < 30; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() - (29 - i)); // i=0が29日前 … i=29が今日
    const rec = map[dateKey(d)];
    if (rec) {
      cells += `<div class="mini-band-cell"><div class="mini-band-dot" style="background:${moodColor(rec.score)};border-color:${moodBorder(rec.score)}"></div></div>`;
    } else {
      cells += `<div class="mini-band-cell"><div class="mini-band-dot empty"></div></div>`;
    }
  }
  // 中身は固定の色とi18nラベルのみ（利用者入力は含まない）
  band.innerHTML =
    `<div class="mini-band-labels"><span>${t('bandStart')}</span><span>${t('bandEnd')}</span></div>` +
    `<div class="mini-band-row">${cells}</div>`;
}

function renderCalendar() {
  renderMiniBand();
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

  // 詳細（選択日の記録を全件・各件を編集/削除できる）
  const cont = $('cal-detail-container');
  cont.innerHTML = '';
  if (calSelected) {
    const recs = recordsForDate(calSelected);
    if (recs.length) {
      const list = document.createElement('div');
      list.className = 'cal-detail-list';
      for (const rec of recs) {
        list.appendChild(buildRecordCard(rec));
      }
      cont.appendChild(list);
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

// 記録カード（丸＋ラベル＋日時＋メモ、編集/削除ボタン付き）
function buildRecordCard(rec) {
  const box = document.createElement('div');
  box.className = 'cal-detail';

  const head = document.createElement('div');
  head.className = 'cal-detail-head';

  const circle = document.createElement('div');
  circle.className = 'big-circle';
  circle.style.background = moodColor(rec.score);
  circle.style.borderColor = moodBorder(rec.score);

  const info = document.createElement('div');
  info.className = 'cal-detail-info';
  const label = document.createElement('div');
  label.className = 'cal-detail-label';
  label.textContent = moodLabel(rec.score);
  const dt = new Date(rec.date);
  const hhmm = String(dt.getHours()).padStart(2, '0') + ':' + String(dt.getMinutes()).padStart(2, '0');
  const date = document.createElement('div');
  date.className = 'cal-detail-date';
  date.textContent = `${dt.getFullYear()}/${dt.getMonth() + 1}/${dt.getDate()}  ${hhmm}`;
  info.appendChild(label);
  info.appendChild(date);

  const actions = document.createElement('div');
  actions.className = 'cal-detail-actions';
  const editBtn = document.createElement('button');
  editBtn.className = 'card-icon-btn';
  editBtn.textContent = '✏️';
  editBtn.setAttribute('aria-label', t('edit'));
  editBtn.addEventListener('click', () => openEditModal(rec.id));
  const delBtn = document.createElement('button');
  delBtn.className = 'card-icon-btn';
  delBtn.textContent = '🗑';
  delBtn.setAttribute('aria-label', t('delete'));
  delBtn.addEventListener('click', () => confirmDelete(rec.id));
  actions.appendChild(editBtn);
  actions.appendChild(delBtn);

  head.appendChild(circle);
  head.appendChild(info);
  head.appendChild(actions);
  box.appendChild(head);

  if (rec.memo) {
    const memo = document.createElement('div');
    memo.className = 'cal-detail-memo';
    memo.textContent = rec.memo;
    box.appendChild(memo);
  }
  return box;
}

// 削除の確認（やさしい確認ダイアログを既存モーダルで表示）
function confirmDelete(id) {
  openModal({
    message: t('deleteConfirmMsg'),
    actions: [
      { label: t('deleteNo'), kind: 'outline' },
      {
        label: t('deleteYes'),
        kind: 'primary',
        onClick: () => { deleteRecordById(id); renderCalendar(); },
      },
    ],
  });
}

// ===== 記録の編集モーダル =====
let editingId = null;
let editSelectedScore = null;

function openEditModal(id) {
  const rec = loadRecords().find(r => r.id === id);
  if (!rec) return;
  editingId = id;
  editSelectedScore = rec.score;
  $('edit-title').textContent = t('editTitle');
  const memo = $('edit-memo');
  memo.value = rec.memo || '';
  memo.placeholder = t('memoPlaceholder');
  updateEditMoodUI();
  $('edit-save').textContent = t('editSave');
  $('edit-cancel').textContent = t('editCancel');
  $('edit-backdrop').classList.add('active');
}

function updateEditMoodUI() {
  $$('#edit-mood-selector .mood-option').forEach(el => {
    el.classList.toggle('selected', Number(el.dataset.score) === editSelectedScore);
  });
}

function closeEditModal() {
  $('edit-backdrop').classList.remove('active');
  editingId = null;
}

function saveEdit() {
  if (!editingId) return;
  const memo = $('edit-memo').value.trim();
  if (editSelectedScore == null && memo.length === 0) { closeEditModal(); return; }
  updateRecordById(editingId, { score: editSelectedScore, memo: memo.length ? memo : null });
  closeEditModal();
  renderCalendar();
}

// ===== 深呼吸 =====
const BREATHING_MODES = {
  '478':    [['inhale', 4000], ['hold', 7000], ['exhale', 8000]],
  'box':    [['inhale', 4000], ['hold', 4000], ['exhale', 4000], ['hold', 4000]],
  'simple': [['inhale', 4000], ['exhale', 4000]],
};

let breathingTimer = null;
let breathingCountdown = null;
let breathingActive = false;
let breathingMode = null;
let breathingDurationMin = 0;
let breathingMsLeft = 0;

// 深呼吸の画面ステップ切替（select=呼吸法 / duration=時間 / play=実行 / finish=完了）
function showBreathingStep(step) {
  $('breathing-select').style.display = step === 'select' ? '' : 'none';
  $('breathing-duration').style.display = step === 'duration' ? '' : 'none';
  $('breathing-play').style.display = step === 'play' ? '' : 'none';
  $('breathing-finish').style.display = step === 'finish' ? '' : 'none';
}

// step1: 呼吸法を選ぶ → 時間選択へ
function chooseBreathingMode(mode) {
  breathingMode = mode;
  showBreathingStep('duration');
}

function clearBreathingTimers() {
  if (breathingTimer) { clearTimeout(breathingTimer); breathingTimer = null; }
  if (breathingCountdown) { clearInterval(breathingCountdown); breathingCountdown = null; }
}

function resetBall() {
  const ball = $('breathing-ball');
  ball.style.transition = 'none';
  ball.style.transform = '';
  ball.style.opacity = '';
}

function updateRemaining() {
  const sec = Math.max(0, Math.ceil(breathingMsLeft / 1000));
  const m = Math.floor(sec / 60);
  const s = String(sec % 60).padStart(2, '0');
  $('breathing-remaining').textContent = t('breatheRemaining').replace('{t}', `${m}:${s}`);
}

// step2: 時間（分）を選んで開始
function startBreathing(minutes) {
  breathingDurationMin = minutes;
  breathingMsLeft = minutes * 60 * 1000;
  breathingActive = true;
  showBreathingStep('play');
  const seq = BREATHING_MODES[breathingMode];
  let idx = 0;
  const ball = $('breathing-ball');
  const phase = $('breathing-phase');
  // 開始時はしぼんだ小さい状態にしておく（最初の「吸う」で小→大に膨らむように）
  ball.style.transition = 'none';
  ball.style.transform = 'scale(0.6)';
  ball.style.opacity = '0.55';
  void ball.offsetWidth; // 強制リフロー：次のtransitionが必ず小さい状態から始まる
  updateRemaining();
  breathingCountdown = setInterval(() => {
    breathingMsLeft -= 1000;
    updateRemaining();
    if (breathingMsLeft <= 0) finishBreathing();
  }, 1000);
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

// 完走 → 完了画面（シェルター誘導は5分完走時のみ表示）
function finishBreathing() {
  if (!breathingActive) return;
  breathingActive = false;
  clearBreathingTimers();
  resetBall();
  $('breathing-finish-shelter').style.display = breathingDurationMin >= 5 ? '' : 'none';
  showBreathingStep('finish');
}

// 途中でやめる
function stopBreathing() {
  breathingActive = false;
  clearBreathingTimers();
  resetBall();
}

// ===== イベント登録 =====
function bindEvents() {
  // 言語チップ
  $$('.lang-chip').forEach(el => el.addEventListener('click', () => {
    lang = el.dataset.lang;
    localStorage.setItem('soyogi_lang', lang);
    applyI18n();
  }));
  // 気分セレクター（ホームのみ・編集モーダルの.mood-optionには効かせない）
  $$('#mood-selector .mood-option').forEach(el => el.addEventListener('click', () => {
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
  $$('.breathing-mode').forEach(el => el.addEventListener('click', () => chooseBreathingMode(el.dataset.mode)));
  $$('.breathing-min').forEach(el => el.addEventListener('click', () => startBreathing(Number(el.dataset.min))));
  $('breathing-duration-back').addEventListener('click', () => showBreathingStep('select'));
  $('breathing-stop').addEventListener('click', () => {
    stopBreathing();
    showBreathingStep('select');
  });
  $('breathing-finish-record').addEventListener('click', () => showView('home'));
  $('breathing-finish-shelter').addEventListener('click', () => window.open(isJa() ? 'https://soyogi.hp.peraichi.com/shelter' : 'https://findahelpline.com', '_blank', 'noopener'));
  $('breathing-finish-close').addEventListener('click', () => showBreathingStep('select'));
  // モーダル背景クリックで閉じる
  $('modal-backdrop').addEventListener('click', (e) => {
    if (e.target === $('modal-backdrop')) closeModal();
  });
  // 大きめ文字トグル
  $('bigfont-toggle').addEventListener('change', (e) => {
    bigFont = e.target.checked;
    localStorage.setItem('soyogi_big_font', bigFont ? '1' : '0');
    applyBigFont();
  });
  // ダークモード（端末にあわせる／ライト／ダーク）
  $$('.theme-seg-btn').forEach(el => el.addEventListener('click', () => {
    themePref = el.dataset.theme;
    localStorage.setItem('soyogi_theme', themePref);
    applyTheme();
  }));
  // 「端末にあわせる」選択中は端末のダーク切替に追従
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (themePref === 'system') applyTheme();
    });
  }
  // 編集モーダル：気分選択・保存・キャンセル・背景クリック
  $$('#edit-mood-selector .mood-option').forEach(el => el.addEventListener('click', () => {
    editSelectedScore = Number(el.dataset.score);
    updateEditMoodUI();
  }));
  $('edit-save').addEventListener('click', saveEdit);
  $('edit-cancel').addEventListener('click', closeEditModal);
  $('edit-backdrop').addEventListener('click', (e) => {
    if (e.target === $('edit-backdrop')) closeEditModal();
  });
}

// ===== 起動 =====
function init() {
  buildLangChips(); // 言語チップを先に生成してから bindEvents で click を張る
  bindEvents();
  applyTheme();
  applyI18n();
  applyBigFont();
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
