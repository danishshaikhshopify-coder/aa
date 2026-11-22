// Every editable word of this universe lives here. All real story details are true;
// only the exact wording and visual framing have been written for this experience.

export const name = "Nabia";
export const partner = "Dani";

export const portal = {
  eyebrow: "ek choti si duniya",
  heading: "Nabia — The Midnight Universe",
  line1: "Ek choti si duniya... sirf tumhare liye.",
  line2: "Ready ho, Motuu?",
  cta: "Chalo, andar chalte hain",
};

export const map = {
  eyebrow: "the magical map",
  heading: "Kahan se shuru karein?",
  sub: "Har jagah ka apna mazaa hai — jahan dil chahe, wahan se chalo.",
  destinations: [
    { id: "memory-galaxy", anchor: "memory-galaxy", label: "Memory Galaxy", hint: "humari kahani", progressKey: "proposal" },
    { id: "fashion-kingdom", anchor: "fashion-kingdom", label: "Fashion Kingdom", hint: "Motuu ki styling", progressKey: "styling" },
    { id: "mystery-mansion", anchor: "mystery-mansion", label: "Mystery Mansion", hint: "do chhote games", progressKey: "mysteryMansion" },
    { id: "moonlight-garden", anchor: "moonlight-garden", label: "Moonlight Garden", hint: "phool aur chand", progressKey: "moon" },
    { id: "secret-room", anchor: "secret-room", label: "Secret Love Room", hint: "sabse khaas", progressKey: "finalLetter" },
  ],
};

export const memoryGalaxy = {
  eyebrow: "memory galaxy",
  heading: "Humari kahani, shuru se",
  sub: "Chhoti chhoti yaadein, jo ab ek poori kahani ban gayi hain.",
  moments: [
    {
      id: "tiktok",
      label: "TikTok wali shuruaat",
      caption: "Nabia ne Dani ki ek picture pe comment kiya — aur bas, baat chal padi.",
    },
    {
      id: "snapchat",
      label: "Pehli Snapchat",
      caption:
        "Hyderabad mein, Tayabu ke yahan dawat thi, Asr ka waqt tha. Dani pictures le raha tha ke Nabia ki Snap aayi. Khol ke dekha toh thodi der ke liye bol hi nahi paya — bas sharma gaya.",
    },
    {
      id: "behn-wifey",
      label: "\"Behn\" se \"Wifey\" tak",
      caption: "Shuru mein Dani mazaak mein Nabia ko apni behn bulata tha. Ab woh uski wifey hai. (Tap karo, badal ke dekho.)",
      before: "Behn",
      after: "Wifey",
    },
    {
      id: "proposal",
      label: "Proposal",
      caption: "Dani ne propose kiya. Nabia ne pehle mana kiya — lekin Dani ne feelings zahir karna nahi chhoda, aur phir usne haan kar di.",
      envelopeMessage: "Pehle \"nahi\"... phir \"haan\". Aur us din se, sab kuch badal gaya.",
    },
    {
      id: "support",
      label: "Ek doosre ka saath",
      caption: "Jab Dani akela mehsoos karta tha, Nabia uske saath khadi hoti thi. Tabhi pata chala — yeh sirf online dosti nahi thi.",
    },
  ],
};

export const fashionKingdom = {
  eyebrow: "fashion kingdom",
  heading: "Motuu ki styling",
  sub: "Dress, bag, heels — jo dil kare pehno.",
  dresses: [
    { id: "neon-pink", label: "Neon Rose Gown", color: "var(--pink-deep)" },
    { id: "violet", label: "Violet Dream", color: "var(--lavender-deep)" },
    { id: "rose-gold", label: "Rose Gold Shimmer", color: "var(--rose-gold)" },
    { id: "cream", label: "Moonlit Cream", color: "var(--cream-deep)" },
  ],
  bags: [
    { id: "pink", label: "Starlit Bag", color: "var(--pink-deep)" },
    { id: "lav", label: "Violet Bag", color: "var(--lavender-deep)" },
    { id: "gold", label: "Gold Bag", color: "var(--gold)" },
  ],
  heelColors: [
    { id: "pink", label: "Starlit Heels", color: "var(--pink-deep)" },
    { id: "lav", label: "Violet Heels", color: "var(--lavender-deep)" },
    { id: "gold", label: "Gold Heels", color: "var(--gold)" },
  ],
  finishLabel: "Look complete ✨",
  compliment: "Wow Motuu, ekdum shahzaadi lag rahi ho.",
};

export const mysteryMansion = {
  eyebrow: "mystery mansion",
  heading: "Do chhote games, bas tumhare liye",
  sub: "Koi pressure nahi — bas thoda khel lo, thoda haso.",
};

export const starGame = {
  heading: "Catch the Stars",
  sub: "30 second mein jitne sitaare pakad sako, pakad lo.",
  duration: 30,
  target: 15,
  start: "Start karo",
  restart: "Phir se khelo",
  winMessage: "Motuu, tumne toh poora aasman hi apna bana liya!",
  timeUpMessage: "Koi baat nahi — sitaare kahin nahi jaate, phir try karo.",
};

export const memoryGame = {
  heading: "Our Little Memory Match",
  sub: "Sab jode milao — har card ke peeche hamari koi nishani hai.",
  reset: "Dobara khelo",
  winMessage: "Hamari yaadein bhi aise hi milti hain — chhoti chhoti, par sab ek doosre se judi hui.",
};

export const moonlightGarden = {
  eyebrow: "moonlight garden",
  heading: "Chand ki roshni mein",
  sub: "Phool ko tap karo, har ek ke peeche ek baat hai.",
  flowers: [
    { id: 1, petal: "var(--pink-deep)", message: "Tum mujhse zyada meri fikar karti ho, jitni main khud karta hoon." },
    { id: 2, petal: "var(--lavender-deep)", message: "Tumhari chidhai bhi pyaari lagti hai — pata nahi kaise." },
    { id: 3, petal: "var(--rose-gold)", message: "Jab main thoda bhi hurt hota hoon, tumhari aankhon mein pehle fikar aati hai." },
    { id: 4, petal: "var(--pink)", message: "Tumhari aankhein sab kuch bata deti hain, bina kuch kahe." },
    { id: 5, petal: "var(--lavender)", message: "Jab main pareshan hota hoon, sirf tumhara samjhana sab theek kar deta hai." },
  ],
  moon: {
    label: "Chand ko chhoo ke dekho",
    hint: "(tap karo)",
    message: "Chaand bhi tumhari roshni ke aage thodi dim pad jaati hai, Motuu.",
  },
  secretEnvelope: {
    label: "ek chhota sa khat, phoolon ke beech chhupa hua",
    message: "Yeh dhoondhne ke liye shukriya — waise bhi, main chhoti chhoti baatein notice karta hoon. Tumhari bhi.",
  },
};

export const riceDisaster = {
  eyebrow: "the rice disaster",
  heading: "Woh wala chawal wala kissa",
  sub: "Dani ne chawal banaya — par namak dalna bhool gaya.",
  hint: "Namak dhoondho",
  revealMessage: "Mil gaya! Waise chawal phir bhi khaane padhe the — namak ke bina. Kabhi kabhi main aisa hi hota hoon.",
};

export const questBoard = {
  eyebrow: "the quest board",
  heading: "Ab tak kya kya dhoonda?",
  sub: "Koi jaldi nahi — jo chhoot jaaye, baad mein bhi aa sakte ho.",
  tasks: [
    { id: "moon", label: "Chhupa hua chand dhoondo" },
    { id: "secretEnvelope", label: "Secret envelope kholo" },
    { id: "memoryMatch", label: "Saare memory cards milao" },
    { id: "starGame", label: "Girte hue sitaare pakdo" },
    { id: "flower", label: "Koi ek phool dhoondo" },
    { id: "styling", label: "Fashion styling complete karo" },
    { id: "salt", label: "Gayab namak dhoondo" },
  ],
};

export const future = {
  eyebrow: "the future constellation",
  heading: "Hamara aane wala kal",
  sub: "Makkah aur Madina — hamara sabse khaas khwaab.",
  lines: [
    "Ek simple si zindagi — kaam ke baad baatein karna.",
    "Main kitchen mein tumhara haath bataunga, aur tumhe apne haath se khilaunga.",
    "Chhoti chhoti zimmedariyan, dono mil ke uthayenge.",
    "Mushkil waqt mein, main tumhare saath khada rahunga.",
  ],
};

export const secretRoom = {
  eyebrow: "secret love room",
  heading: "Ek khat, sirf tumhare liye",
  dateLabel: "[date daal lena, agar chaho]",
  body: [
    `Dear Motuu,`,
    "Yeh likhte hue thoda darr lag raha hai, par main sahi waqt ka intezaar karna chhod raha hoon.",
    "Pichle kuch waqt se kaam aur business mein itna uljha raha ke tumhein woh time aur attention nahi de paaya jiski tum haqdaar ho.",
    "Mujhe pata hai iski wajah se humare beech thodi doori aa gayi hai, aur kabhi kabhi tum keh nahi paati jo andar chal raha hota hai. Main chahta hoon tum mujhse bina darr ke sab kuch keh sako.",
    "Yeh koi promise nahi ke sab raat-o-raat perfect ho jayega. Bas itna hai ke main thoda zyada honest hoke saamne aana chahta hoon.",
    "Tum ab bhi utni hi important ho, jitni meri busy schedule se lagta nahi.",
  ],
  promises: [
    "Main tumse shaadi karna chahta hoon.",
    "Tum meri aakhri mohabbat ho, aur main sirf tumhara rahunga.",
    "Achhe aur bure, har waqt mein tumhara saath dunga.",
    "Apna time aur tawajjo tumhe zyada consistent tareeke se dunga.",
    "Jhagde se pehle, sunna aur samajhna seekhunga.",
  ],
  promisesIntro: "Kuch waade, jo main nibhana chahta hoon:",
  closing: [
    "Chaand bhi thoda kam chamke,",
    "par tumhari muskaan kabhi kam na ho —",
    "Chipkali tumhara, hamesha.",
  ],
  signature: "Dani ♡",
};
