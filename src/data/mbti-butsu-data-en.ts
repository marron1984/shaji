import type { MbtiResult, MbtiQuestion } from "./mbti-butsu-data";

export const mbtiResultsEn: Record<string, MbtiResult> = {
  INTJ: {
    type: "INTJ",
    typeName: "Architect",
    deity: "大日如来",
    deitySlug: "dainichi-nyorai",
    emoji: "☀️",
    description:
      "You are Dainichi Nyorai, the cosmic architect of the universe! Seated at the very center of all Buddhas, Dainichi Nyorai holds a grand vision that governs all of existence — a true embodiment of the INTJ spirit. With meticulous planning and profound insight, you see through to the essence of things and envision a future far beyond what others can imagine. Unmoved by fleeting emotions, you quietly yet surely shape the world through logic and conviction. Even when others don't understand you, you keep drawing your own mandala — that's what makes you an INTJ.",
    advice:
      "Your brilliant light will illuminate the world in time. Don't rush, but never stop — walk your path with quiet determination.",
  },
  INTP: {
    type: "INTP",
    typeName: "Logician",
    deity: "文殊菩薩",
    deitySlug: "monju-bosatsu",
    emoji: "🗡️",
    description:
      "Monju Bosatsu, the bodhisattva wielding the sword of wisdom, is your perfect match! Just as the Japanese proverb says \"Three heads are better than Monju's wisdom,\" intellectual exploration is your reason for being. You slice through every question with \"But why?\" and dissect truth with the blade of logic — just like Monju sitting serenely atop a lion. People might think you argue for the sake of arguing, but at your core lies a pure love for truth. Your slightly quirky pace? That's just part of your charm.",
    advice:
      "Wisdom shines brightest when put into practice. Every now and then, try putting those perfect answers in your head into actual words.",
  },
  ENTJ: {
    type: "ENTJ",
    typeName: "Commander",
    deity: "不動明王",
    deitySlug: "fudo-myoo",
    emoji: "🔥",
    description:
      "Fudo Myoo — the immovable king wreathed in blazing flames, cutting through evil with unwavering resolve — that's you, ENTJ. Once you set a goal, you charge forward without a shred of hesitation, naturally rallying everyone around you with sheer presence. Behind that intensity lies deep compassion; your anger is pure passion directed at guiding others the right way. You hold others to high standards, but no one holds themselves to higher ones than you — classic ENTJ energy.",
    advice:
      "It's wonderful that your flames light the way for others. But sometimes, sheathing your sword and simply listening can be a powerful form of training too.",
  },
  ENTP: {
    type: "ENTP",
    typeName: "Debater",
    deity: "弁財天",
    deitySlug: "benzaiten",
    emoji: "🎵",
    description:
      "Benzaiten — goddess of music, learning, eloquence, and all the arts — is the ENTP personified! Strumming her biwa lute while sparking intellectual fireworks, you love catching people off guard with unexpected ideas. You thrive in debates and can improvise a compelling argument on virtually any topic — a gift of gab worthy of the goddess of speech herself. Some might say you play devil's advocate just for fun, but hey, it's all part of your mental workout routine, right?",
    advice:
      "Your gift with words is a treasure. Use that talent not to win arguments, but to make the world a more fascinating place.",
  },
  INFJ: {
    type: "INFJ",
    typeName: "Advocate",
    deity: "観世音菩薩",
    deitySlug: "kannon-bosatsu",
    emoji: "🌊",
    description:
      "Kannon Bosatsu — the bodhisattva who \"perceives the sounds of the world\" — dwells within you, the deeply empathetic and idealistic INFJ. Hearing the cries of all who suffer and appearing in whatever form is needed to help — that's exactly what you do every day. You notice others' pain before your own, with a sensitivity that's both a gift and a burden, yet you never give up. As one of the rarest types, you're often misunderstood, but your insight and love are exactly what this world needs.",
    advice:
      "Save yourself first. Compassion can only overflow from a cup that is already full.",
  },
  INFP: {
    type: "INFP",
    typeName: "Mediator",
    deity: "弥勒菩薩",
    deitySlug: "miroku-bosatsu",
    emoji: "🌸",
    description:
      "Miroku Bosatsu — the bodhisattva who promised to appear in the distant future to save all beings — is the perfect match for you, the INFP dreamer. That famous pose with one hand resting gently on the cheek, lost deep in thought? That's basically your daily life. You don't quite fit into the world as it is, but you carry an unwavering vision of an ideal world in your heart. You might be a bit slow to act (after all, Miroku is scheduled to arrive 5.67 billion years from now!), but that pure heart of yours is untouchable.",
    advice:
      "Dreaming of the future is a beautiful thing. But your kindness can also reach the people right here, right now. Try taking one small step today.",
  },
  ENFJ: {
    type: "ENFJ",
    typeName: "Protagonist",
    deity: "釈迦如来",
    deitySlug: "shaka-nyorai",
    emoji: "🪷",
    description:
      "Shakyamuni Buddha — history's greatest coach and teacher — is the ultimate ENFJ. You believe in people's potential, guide each person with exactly the right words, and before you know it, everyone has gathered around you. That's the natural charisma of an ENFJ. When the Buddha attained enlightenment, he didn't slip away into nirvana alone — he stood up and said \"I will share this teaching.\" That was a quintessential ENFJ move. Watching others grow brings you the deepest joy, and you can't help but quietly support people even when no one asks.",
    advice:
      "Your light touches so many lives. But don't burn out — please take care of yourself too. Even the Buddha needed to rest under the Bodhi tree.",
  },
  ENFP: {
    type: "ENFP",
    typeName: "Campaigner",
    deity: "孔雀明王",
    deitySlug: "kujaku-myoo",
    emoji: "🦚",
    description:
      "Kujaku Myoo — riding a magnificent peacock, purifying poisons and bringing good fortune — is your perfect deity! While other Wisdom Kings wear fierce expressions, Kujaku Myoo alone has a gentle smile, just like an ENFP who can turn any situation into something positive. Your dazzling energy transforms the vibe of any room and lifts everyone's spirits with an almost magical power. Your curiosity is boundless and your enthusiasm for new things is unmatched — though, admittedly, some projects might get left half-finished...",
    advice:
      "Your positive energy has the power to neutralize even poison. Spread those wings and carry your light to as many people as you can!",
  },
  ISTJ: {
    type: "ISTJ",
    typeName: "Logistician",
    deity: "四天王",
    deitySlug: "shitenno",
    emoji: "⚔️",
    description:
      "The Four Heavenly Kings — guardians of the north, south, east, and west — embody the ISTJ's devotion to responsibility and order. Standing at temple gates for hundreds of years without rest, their tireless watch mirrors the quiet dedication of an ISTJ. You respect rules and traditions, and when you commit to something, you see it through to the very end. That reliability is a source of deep comfort for everyone around you. You may not be flashy, but it's because of you that teams, organizations, and indeed the world keep running smoothly.",
    advice:
      "Your steadfastness is the foundation of the world. But sometimes, removing your armor to rest is an essential part of being able to protect for the long haul.",
  },
  ISFJ: {
    type: "ISFJ",
    typeName: "Defender",
    deity: "地蔵菩薩",
    deitySlug: "jizo-bosatsu",
    emoji: "🪨",
    description:
      "Jizo Bosatsu — the gentle stone figure standing quietly by the roadside, watching over travelers and children — that's you, ISFJ. Even when no one notices, you tirelessly support others from behind the scenes with unwavering devotion. Making others happy is your greatest joy, and you simply can't walk past someone in need. You say \"I'm fine\" when you're actually exhausted, but just like a Jizo statue that lights up when someone places a little hat or bib on it, small acts of appreciation warm your heart deeply.",
    advice:
      "Your quiet kindness accumulates into great blessings over time. But don't forget to be kind to yourself too.",
  },
  ESTJ: {
    type: "ESTJ",
    typeName: "Executive",
    deity: "毘沙門天",
    deitySlug: "bishamon-ten",
    emoji: "🏯",
    description:
      "Bishamon-ten — the only warrior among the Seven Lucky Gods — is the embodiment of the discipline-loving ESTJ. Holding a treasure pagoda and crushing evil underfoot, his commanding presence mirrors your leadership style: upholding rules, refusing to tolerate wrongdoing, and getting things done. The word \"can't\" isn't in your vocabulary, and your iron will ensures that every commitment is fulfilled. Some people might find you intimidating, but you know better than anyone that your strictness exists to protect your team.",
    advice:
      "Your strength protects many. Every now and then, try taking time to really listen to those around you — it'll attract even greater blessings your way.",
  },
  ESFJ: {
    type: "ESFJ",
    typeName: "Consul",
    deity: "大黒天",
    deitySlug: "daikoku-ten",
    emoji: "🎒",
    description:
      "Daikoku-ten — arriving with a big smile and an enormous sack, handing out blessings to everyone — is the perfect match for the warm and nurturing ESFJ! You have a genius-level ability to read the room, instantly sensing who needs what and jumping into action. If there's a gathering, you naturally become the organizer, making sure every single person leaves with a smile. When you're there, the whole atmosphere brightens up — that's the greatest gift that both Daikoku-ten and the ESFJ share.",
    advice:
      "To you who are so gifted at giving — learning to receive is an equally important virtue. Let yourself accept gratitude with an open heart.",
  },
  ISTP: {
    type: "ISTP",
    typeName: "Virtuoso",
    deity: "金剛力士",
    deitySlug: "nio",
    emoji: "💪",
    description:
      "The Nio guardians — those powerful, silent protectors at temple gates — are the perfect match for the action-oriented ISTP. Standing firm on either side of the entrance, they skip the small talk and let their presence do the talking, just like your philosophy of \"show, don't tell.\" The breathtaking muscular detail of their sculptures reflects a craftsman's obsessive dedication to technique — very ISTP. You may not say much, but your sheer presence commands the room.",
    advice:
      "Your actions speak louder than a thousand words. But every now and then, putting things into words helps others understand you even better.",
  },
  ISFP: {
    type: "ISFP",
    typeName: "Adventurer",
    deity: "馬頭観音",
    deitySlug: "bato-kannon",
    emoji: "🐴",
    description:
      "Bato Kannon — the unconventional bodhisattva crowned with a horse's head — is the ideal match for you, the free-spirited and creative ISFP. As a protector of travelers and animals, this deity shares your deep, soulful love for nature and all living things. Looking completely different from any other Kannon yet possessing a compassion that rivals them all — that's you. You choose intuition over rules and freedom over structure, but your rich sensitivity when encountering true beauty is your greatest superpower.",
    advice:
      "Your sensitivity gives you the power to see beauty in the world that others miss. Share more of that inner world — it will surely touch someone's heart.",
  },
  ESTP: {
    type: "ESTP",
    typeName: "Entrepreneur",
    deity: "愛染明王",
    deitySlug: "aizen-myoo",
    emoji: "❤️‍🔥",
    description:
      "Aizen Myoo — who transforms love and desire into the energy of enlightenment — is the perfect deity for the passionate, risk-embracing ESTP! With a blazing red body, a halo of flames, and six arms drawing a bow, Aizen Myoo embodies your full-throttle approach to seizing the moment. Rather than denying desire, this deity channels it into forward momentum — much like how you spot and grab opportunities with uncanny instinct. Acting before thinking might occasionally backfire, but honestly, that's part of your charm.",
    advice:
      "That passion is your greatest weapon. But if you pause just one heartbeat to aim before releasing the arrow, your hit rate will skyrocket.",
  },
  ESFP: {
    type: "ESFP",
    typeName: "Entertainer",
    deity: "帝釈天",
    deitySlug: "taishaku-ten",
    emoji: "⚡",
    description:
      "Taishaku-ten — the king of the gods — is the deity worthy of the spotlight-loving ESFP. Riding a white elephant and reigning over the heavens, his magnificent presence is that of a born star! Just as Taishaku-ten's famous temple in Shibamata has charmed generations of visitors, you have a mysterious ability to make everyone you meet break into a smile. Living fully in the present moment and spreading that joy to everyone around you — the ESFP is heaven's greatest entertainer.",
    advice:
      "Your smile is the greatest blessing you can give. Go all out and enjoy today — that's your spiritual practice and your offering to the heavens.",
  },
};

export const mbtiQuestionsEn: MbtiQuestion[] = [
  // E/I dimension
  {
    id: 1,
    question:
      "It's New Year's and the temple grounds are packed with people. How do you feel?",
    optionA: "This is exciting! I might even chat with some strangers",
    optionB: "A bit draining... I wish I'd come when it was less crowded",
    dimension: "EI",
    aValue: "E",
    bValue: "I",
  },
  {
    id: 2,
    question:
      "You've just finished a sutra-copying experience at a temple. What do you do next?",
    optionA: "Chat with the other participants and share impressions!",
    optionB: "Savor the peaceful afterglow on my own",
    dimension: "EI",
    aValue: "E",
    bValue: "I",
  },
  {
    id: 3,
    question:
      "While visiting temples to see Buddhist statues, you realize you've been...",
    optionA: "Striking up conversations with fellow visitors and companions",
    optionB: "Quietly communing with the Buddha statues on my own",
    dimension: "EI",
    aValue: "E",
    bValue: "I",
  },
  // S/N dimension
  {
    id: 4,
    question:
      "When you stand before a Buddhist statue, what catches your attention first?",
    optionA: "The intricate gold leaf work, the hand positions, the craftsmanship",
    optionB: "The deeper message this deity is trying to convey about the universe",
    dimension: "SN",
    aValue: "S",
    bValue: "N",
  },
  {
    id: 5,
    question:
      "When choosing a temple stamp book, what matters most to you?",
    optionA: "Paper quality, binding durability, and how practical it is to use",
    optionB: "The cover design and the story or atmosphere it evokes",
    dimension: "SN",
    aValue: "S",
    bValue: "N",
  },
  {
    id: 6,
    question:
      "As you watch the incense smoke rising...",
    optionA: "I think practically — which way is the smoke drifting, where should I waft it?",
    optionB: "I can't help but sense something profound in the way it spirals toward the sky",
    dimension: "SN",
    aValue: "S",
    bValue: "N",
  },
  // T/F dimension
  {
    id: 7,
    question:
      "How do you decide how much to offer at the temple?",
    optionA: "I research the lucky amounts (like 5 yen for 'good fortune') and choose logically",
    optionB: "I go with how I feel in the moment and how grateful I am",
    dimension: "TF",
    aValue: "T",
    bValue: "F",
  },
  {
    id: 8,
    question:
      "A friend is earnestly telling you about the power of their good-luck charm. Your reaction?",
    optionA: "I listen while thinking 'No scientific proof, but the belief itself probably helps'",
    optionB: "I get swept up in their feelings and start thinking the charm is pretty amazing too",
    dimension: "TF",
    aValue: "T",
    bValue: "F",
  },
  {
    id: 9,
    question:
      "You drew a 'Bad Luck' fortune at the temple. How do you react?",
    optionA: "Time to analyze — I carefully read the details and consider the probability of drawing this",
    optionB: "Ugh... I'm a little bummed and kind of want a friend to cheer me up",
    dimension: "TF",
    aValue: "T",
    bValue: "F",
  },
  // J/P dimension
  {
    id: 10,
    question:
      "You're planning a temple-hopping trip in Kyoto. What's your style?",
    optionA: "Map out every temple, route, and time slot in advance",
    optionB: "Pick a general area and just wander wherever the mood takes me",
    dimension: "JP",
    aValue: "J",
    bValue: "P",
  },
  {
    id: 11,
    question:
      "When it comes to organizing your temple stamp book, you...",
    optionA: "Need the stamps in proper chronological order or it bothers me",
    optionB: "As long as my favorite stamps are on pages I like, it's all good",
    dimension: "JP",
    aValue: "J",
    bValue: "P",
  },
  {
    id: 12,
    question:
      "You're about to leave the temple when you spot an intriguing little path. What do you do?",
    optionA: "Stick to the plan — I'll save that path for next time",
    optionB: "Change of plans! I'm definitely exploring that path right now",
    dimension: "JP",
    aValue: "J",
    bValue: "P",
  },
];
