# Nabia — The Midnight Universe

A dark-fantasy, Barbie-inspired interactive experience with two playable mini-games, a quest board, and a real story told in Roman Urdu — built with React, Vite, TypeScript, GSAP and Framer Motion. No stock photos, downloaded illustrations, AI-generated images, or emoji-as-assets: every moon, flower, dress, gift box and star is hand-built SVG/CSS.

## Run it

```
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## What's inside

Ten chapters, navigated by smooth-scrolling or via the Magical Map (no page reloads):

1. **Portal** (`#portal`) — cinematic galaxy opening with a spinning portal ring.
2. **The Magical Map** (`#map`) — 5 destinations, each marked "discovered" once its chapter is explored.
3. **Memory Galaxy** (`#memory-galaxy`) — the real story as a timeline: TikTok, the first Snapchat, "Behn" → "Wifey", the proposal (interactive envelope), and their support for each other.
4. **Fashion Kingdom** (`#fashion-kingdom`) — style a mannequin: dress/bag/heel color, sunglasses, necklace.
5. **Mystery Mansion** (`#mystery-mansion`) — two playable mini-games: **Catch the Stars** (30s arcade game) and **Our Little Memory Match** (a 6-pair flip-card game).
6. **Moonlight Garden** (`#moonlight-garden`) — clickable flowers + a moon you can dim, plus a hidden secret envelope.
7. **The Rice Disaster** (`#rice-disaster`) — a short, funny find-the-salt scene.
8. **The Quest Board** (`#quest-board`) — a checklist tracking which of the 7 discoveries/games have been completed (saved in the browser's local storage).
9. **Future Constellation** (`#future`) — their shared dreams, including Makkah & Madina.
10. **Secret Love Room** (`#secret-room`) — the final personal letter, with real promises and a closing couplet.

## Personalize it

- **[src/content.ts](src/content.ts)** — every line of Roman Urdu copy lives here: the timeline moments, mini-game text, flower/garden messages, quest labels, and the final letter + promises. Replace the `[bracketed]` date placeholder freely; nothing else is invented.
- **public/music.mp3** — drop an audio file here (if you have one you have rights to use) and the "play music" button in the final section will pick it up automatically. Until then it shows a friendly hint instead of breaking.
- **Colors/fonts** — [src/styles/tokens.css](src/styles/tokens.css) holds the full dark-galaxy palette (midnight/plum/neon-pink/lavender/rose-gold) and type scale as CSS variables.
- **Progress/quest state** — stored in `localStorage` under the key `nabia-universe-progress`; clearing site data resets the Quest Board and Map badges.

## Build for production

```
npm run build
```
