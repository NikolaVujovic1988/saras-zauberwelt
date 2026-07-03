/* Ankleidezimmer — Prinzessin Sara stylen (Layout per Claude Design board) */
const Anziehen = (() => {
  const OUT = "#4a3a6e";

  /* ---------- item art (doll coordinates, viewBox 0 0 320 520) ---------- */

  const HAIR = {
    blond: {
      back: `<path fill="url(#d-hairblond)" d="M104 92 C104 40 216 40 216 92 C226 130 224 190 214 234 C208 258 198 274 186 282 C192 258 194 236 192 214 L128 214 C126 236 128 258 134 282 C122 274 112 258 106 234 C96 190 94 130 104 92 Z"/>`,
      front: `<path fill="url(#d-hairblond)" d="M102 104 C100 56 128 38 160 38 C192 38 220 56 218 104 C210 84 196 72 182 70 C186 78 187 86 184 92 C176 74 158 66 140 70 C124 74 112 86 108 104 Z"/>`,
    },
    braun: {
      back: `
        <circle cx="98" cy="88" r="26" fill="url(#d-hairbraun)"/>
        <circle cx="98" cy="88" r="14" fill="none" stroke="#c08d5f" stroke-width="5"/>
        <circle cx="222" cy="88" r="26" fill="url(#d-hairbraun)"/>
        <circle cx="222" cy="88" r="14" fill="none" stroke="#c08d5f" stroke-width="5"/>`,
      front: `
        <path fill="url(#d-hairbraun)" d="M104 108 C102 54 130 40 160 40 C190 40 218 54 216 108 C208 80 192 68 160 68 C128 68 112 80 104 108 Z"/>
        <path d="M160 44 L160 66" stroke="#845234" stroke-width="4" stroke-linecap="round"/>`,
    },
    rosa: {
      back: `<path fill="url(#d-hairrosa)" d="M102 96 C100 44 128 36 160 36 C192 36 220 44 218 96 C230 130 228 176 216 214 C210 194 212 178 206 166 C212 196 206 226 192 248 C188 226 190 208 184 194 C188 224 178 254 160 266 C142 254 132 224 136 194 C130 208 132 226 128 248 C114 226 108 196 114 166 C108 178 110 194 104 214 C92 176 90 130 102 96 Z"/>`,
      front: `<path fill="url(#d-hairrosa)" d="M102 104 C100 52 128 38 160 38 C192 38 220 52 218 104 C210 82 198 72 186 70 C189 78 190 85 188 91 C178 74 160 68 144 72 C126 76 110 88 102 104 Z"/>`,
    },
    lila: {
      back: `
        <path fill="url(#d-hairlila)" d="M212 66 C238 58 252 84 250 116 C248 156 236 200 214 232 C222 196 222 158 210 128 C204 112 204 88 212 66 Z"/>
        <circle cx="216" cy="70" r="10" fill="#f5d76e"/>`,
      front: `<path fill="url(#d-hairlila)" d="M104 108 C100 50 130 38 160 38 C194 38 222 56 214 108 C204 82 196 74 184 70 C160 62 120 72 104 108 Z"/>`,
    },
  };

  const BODICE = (grad) => `<path fill="url(#${grad})" d="M120 196 C126 188 134 184 142 186 L178 186 C186 184 194 188 200 196 C206 204 206 214 200 220 C194 226 186 226 180 222 L182 268 L138 268 L140 222 C134 226 126 226 120 220 C114 214 114 204 120 196 Z"/>`;

  const DRESS = {
    rosen: `
      ${BODICE("d-dress1")}
      <path fill="url(#d-dress1)" d="M138 240 C90 320 74 390 70 448 C104 464 216 464 250 448 C246 390 230 320 182 240 Z"/>
      <path fill="#fdd3e5" d="M74 430 C120 446 200 446 246 430 C248 436 249 442 250 448 C216 464 104 464 70 448 C71 442 72 436 74 430 Z"/>
      <path fill="#fff" opacity=".35" d="M150 250 C130 300 118 360 114 420 C104 416 96 410 90 404 C98 348 116 294 150 250 Z"/>
      <path fill="#e0537a" d="M146 218 c-7 -9 5 -20 14 -12 c9 -8 21 3 14 12 c-4 6 -9 10 -14 13 c-5 -3 -10 -7 -14 -13 Z"/>`,
    sterne: `
      ${BODICE("d-dress2")}
      <path fill="url(#d-dress2)" d="M138 240 C102 310 88 380 84 440 C114 456 206 456 236 440 C232 380 218 310 182 240 Z"/>
      <path fill="#cfc0f2" d="M87 424 C124 438 196 438 233 424 C234 429 235 435 236 440 C206 456 114 456 84 440 C85 435 86 429 87 424 Z"/>
      <g fill="#f5d76e">
        <path d="M130 330 l4 8.6 9.4 1.4 -6.8 6.6 1.6 9.4 -8.2 -4.4 -8.2 4.4 1.6 -9.4 -6.8 -6.6 9.4 -1.4 Z"/>
        <path d="M186 376 l4 8.6 9.4 1.4 -6.8 6.6 1.6 9.4 -8.2 -4.4 -8.2 4.4 1.6 -9.4 -6.8 -6.6 9.4 -1.4 Z"/>
        <path d="M148 410 l3.2 6.9 7.5 1.1 -5.4 5.3 1.3 7.5 -6.6 -3.5 -6.6 3.5 1.3 -7.5 -5.4 -5.3 7.5 -1.1 Z"/>
        <path d="M196 300 a10 10 0 1 0 8 16 a8 8 0 1 1 -8 -16 Z"/>
        <circle cx="160" cy="228" r="4"/>
      </g>`,
    fee: `
      <path fill="url(#d-wing)" d="M116 210 C84 184 52 184 40 210 C32 228 44 248 68 256 C50 260 44 274 54 284 C66 296 92 292 110 274 Z"/>
      <path fill="url(#d-wing)" d="M204 210 C236 184 268 184 280 210 C288 228 276 248 252 256 C270 260 276 274 266 284 C254 296 228 292 210 274 Z"/>
      ${BODICE("d-dress3")}
      <path fill="url(#d-dress3)" d="M138 236 C118 280 104 330 100 372 C110 388 122 396 134 384 C142 396 154 402 160 402 C166 402 178 396 186 384 C198 396 210 388 220 372 C216 330 202 280 182 236 Z"/>
      <path fill="#5fbf98" d="M150 226 c-5 -7 4 -15 10 -8 c6 -7 15 1 10 8 c-3 4 -7 7 -10 9 c-3 -2 -7 -5 -10 -9 Z"/>
      <g fill="#fff" opacity=".7"><circle cx="130" cy="300" r="4"/><circle cx="188" cy="330" r="4"/><circle cx="152" cy="360" r="3"/></g>`,
    gold: `
      ${BODICE("d-dress4")}
      <path fill="url(#d-dress4)" d="M138 240 C90 320 74 390 70 448 C104 464 216 464 250 448 C246 390 230 320 182 240 Z"/>
      <path fill="#fdf3d0" d="M160 244 C140 310 130 380 128 446 C148 452 172 452 192 446 C190 380 180 310 160 244 Z"/>
      <path fill="none" stroke="#e6ac45" stroke-width="4" d="M160 244 C140 310 130 380 128 446 M160 244 C180 310 190 380 192 446"/>
      <circle cx="160" cy="226" r="6" fill="#e0537a"/>
      <circle cx="160" cy="300" r="5" fill="#e0537a"/>
      <circle cx="158" cy="360" r="5" fill="#e0537a"/>`,
  };

  const CROWN = {
    krone: `
      <path fill="url(#m-horn)" transform="translate(-3 0)" d="M126 52 C130 40 136 32 142 28 C146 36 148 44 147 52 C152 42 158 34 166 30 C170 38 171 46 169 54 C175 46 182 40 190 38 C192 46 191 54 187 60 L130 60 C127 58 126 55 126 52 Z"/>
      <rect x="124" y="56" width="66" height="10" rx="5" fill="#e9b64d"/>
      <circle cx="140" cy="61" r="3.4" fill="#e0537a"/>
      <circle cx="157" cy="61" r="3.4" fill="#7ec8e3"/>
      <circle cx="174" cy="61" r="3.4" fill="#e0537a"/>`,
    tiara: `
      <path fill="none" stroke="#dfe6f2" stroke-width="9" stroke-linecap="round" d="M118 62 A 58 58 0 0 1 202 62"/>
      <path fill="#7ec8e3" d="M160 18 C166 26 170 34 170 42 C170 50 166 56 160 56 C154 56 150 50 150 42 C150 34 154 26 160 18 Z"/>
      <circle cx="136" cy="40" r="5" fill="#dfe6f2"/>
      <circle cx="184" cy="40" r="5" fill="#dfe6f2"/>
      <circle cx="163" cy="30" r="3" fill="#fff"/>`,
    blumen: `
      <path fill="none" stroke="#7fb069" stroke-width="7" stroke-linecap="round" d="M112 70 C126 52 194 52 208 70"/>
      <g transform="translate(112 66)"><circle r="9" fill="#f78fb3"/><circle r="9" cx="9" cy="-4" fill="#f78fb3" opacity=".7"/><circle r="4" cx="3" cy="-1" fill="#fdf0c2"/></g>
      <g transform="translate(136 52)"><circle r="9" fill="#f5d76e"/><circle r="9" cx="8" cy="-4" fill="#f5d76e" opacity=".7"/><circle r="4" cx="3" cy="-1" fill="#fff"/></g>
      <g transform="translate(160 48)"><circle r="10" fill="#a8e6cf"/><circle r="10" cx="9" cy="-3" fill="#a8e6cf" opacity=".7"/><circle r="4.5" cx="3" cy="-1" fill="#fdf0c2"/></g>
      <g transform="translate(184 52)"><circle r="9" fill="#c9a8f7"/><circle r="9" cx="8" cy="-4" fill="#c9a8f7" opacity=".7"/><circle r="4" cx="3" cy="-1" fill="#fff"/></g>
      <g transform="translate(208 66)"><circle r="9" fill="#f78fb3"/><circle r="9" cx="9" cy="-4" fill="#f78fb3" opacity=".7"/><circle r="4" cx="3" cy="-1" fill="#fdf0c2"/></g>`,
    nichts: "",
  };

  const EXTRA = {
    stab: `
      <path stroke="#e9b64d" stroke-width="8" stroke-linecap="round" d="M226 314 L262 240"/>
      <path stroke="#f8a8c8" stroke-width="4" stroke-linecap="round" fill="none" d="M258 248 C250 258 252 270 246 280"/>
      <path stroke="#a8e6cf" stroke-width="4" stroke-linecap="round" fill="none" d="M264 252 C262 264 268 272 264 284"/>
      <path fill="#f5d76e" d="M266 214 l6 12.6 13.8 2 -10 9.7 2.4 13.8 -12.2 -6.5 -12.2 6.5 2.4 -13.8 -10 -9.7 13.8 -2 Z"/>
      <circle cx="248" cy="222" r="3.5" fill="#fff"/>
      <circle cx="284" cy="250" r="3" fill="#f5d76e"/>`,
    kette: `
      <path fill="none" stroke="#e9b64d" stroke-width="5" stroke-linecap="round" d="M134 192 Q160 224 186 192"/>
      <path fill="#e0537a" d="M150 214 c-6 -8 5 -17 10 -9 c5 -8 16 1 10 9 c-3 5 -7 8 -10 11 c-3 -3 -7 -6 -10 -11 Z"/>
      <circle cx="155" cy="216" r="2.5" fill="#fff" opacity=".8"/>`,
    einhorn: `
      <path fill="url(#m-mane)" d="M28 432 C14 424 8 438 20 448 C10 452 14 464 26 462 C20 470 30 478 38 472 L48 456 C38 450 32 442 28 432 Z"/>
      <path fill="#fff" d="M36 446 C36 424 56 410 78 412 C98 414 112 428 112 446 C112 462 100 474 82 476 L60 476 C46 474 36 462 36 446 Z"/>
      <path stroke="#fff" stroke-width="11" stroke-linecap="round" d="M52 470 L50 490 M70 474 L70 492 M88 472 L90 490"/>
      <path stroke="#e8ddf2" stroke-width="11" stroke-linecap="round" d="M104 468 L108 488"/>
      <circle cx="102" cy="416" r="20" fill="#fff"/>
      <path fill="#fff" d="M112 432 C122 432 128 438 128 444 C128 450 122 454 114 454 L102 454 Z"/>
      <path fill="#e9b64d" d="M104 396 C104 388 108 378 114 372 C116 380 116 390 112 397 Z"/>
      <path fill="#fff" d="M116 398 C120 392 126 388 132 388 C130 396 126 402 120 405 Z"/>
      <path fill="url(#m-mane)" d="M88 402 C82 408 80 418 84 428 C78 434 80 444 88 448 L96 440 C90 430 92 418 98 410 Z"/>
      <circle cx="106" cy="416" r="4.5" fill="#3d2b66"/>
      <circle cx="107.5" cy="414.5" r="1.5" fill="#fff"/>
      <ellipse cx="98" cy="426" rx="5" ry="3.5" fill="#f8a8c8" opacity=".6"/>`,
    nichts: "",
  };

  /* ---------- thumbnails + category icons (viewBox 0 0 48 48) ---------- */
  const thumbDress = (c) => `<path fill="${c}" d="M17 8 C19 5 22 4 24 5 C26 4 29 5 31 8 C33 11 32 14 30 15 L31 20 C36 28 39 36 40 42 C30 46 18 46 8 42 C9 36 12 28 17 20 L18 15 C16 14 15 11 17 8 Z"/>`;
  const thumbHair = (c) => `<path fill="${c}" d="M10 22 C10 8 38 8 38 22 C40 32 38 40 34 44 L14 44 C10 40 8 32 10 22 Z"/><circle fill="#fbe0c8" cx="24" cy="26" r="10"/>`;
  const THUMBS = {
    dress: { rosen: thumbDress("#fa9ec1"), sterne: thumbDress("#a98be8"), fee: thumbDress("#9fe0c2"), gold: thumbDress("#f0c964") },
    hair: { blond: thumbHair("#f8dc90"), braun: thumbHair("#a5714a"), rosa: thumbHair("#f8b4d6"), lila: thumbHair("#c9a4f2") },
    crown: {
      krone: `<path fill="#f0c964" d="M8 34 L11 15 C14 20 17 23 20 24 L24 10 L28 24 C31 23 34 20 37 15 L40 34 Z"/><rect x="8" y="34" width="32" height="6" rx="3" fill="#e9b64d"/><circle cx="24" cy="37" r="2.4" fill="#e0537a"/>`,
      tiara: `<path fill="none" stroke="#dfe6f2" stroke-width="5" stroke-linecap="round" d="M10 36 A 18 18 0 0 1 38 36"/><path fill="#7ec8e3" d="M24 12 C27 16 28 20 28 23 C28 27 26 29 24 29 C22 29 20 27 20 23 C20 20 21 16 24 12 Z"/>`,
      blumen: `<g><circle fill="#f78fb3" cx="12" cy="30" r="6"/><circle fill="#fdf0c2" cx="12" cy="30" r="2.5"/><circle fill="#f5d76e" cx="24" cy="24" r="6"/><circle fill="#fff" cx="24" cy="24" r="2.5"/><circle fill="#a8e6cf" cx="36" cy="30" r="6"/><circle fill="#fdf0c2" cx="36" cy="30" r="2.5"/></g>`,
      nichts: `<circle fill="none" stroke="#b9a6d8" stroke-width="3" cx="24" cy="24" r="14" stroke-dasharray="5 6"/>`,
    },
    extra: {
      stab: `<path stroke="#e9b64d" stroke-width="5" stroke-linecap="round" d="M14 40 L30 16"/><path fill="#f5d76e" d="M33 6 l3 6.4 7 1 -5 5 1.2 7 -6.2 -3.3 -6.2 3.3 1.2 -7 -5 -5 7 -1 Z"/>`,
      kette: `<path fill="none" stroke="#e9b64d" stroke-width="4" stroke-linecap="round" d="M10 16 Q24 34 38 16"/><path fill="#e0537a" d="M16 28 c-4 -6 3 -12 8 -6 c5 -6 12 0 8 6 c-2 4 -6 6 -8 8 c-2 -2 -6 -4 -8 -8 Z"/>`,
      einhorn: `<ellipse fill="#fff" cx="21" cy="32" rx="13" ry="9"/><circle fill="#fff" cx="33" cy="20" r="8"/><path fill="#e9b64d" d="M33 12 C33 8 35 4 38 1 C39 5 38 10 36 13 Z"/><path fill="#d98ae0" d="M26 16 C23 19 22 24 24 28 L28 25 C26 22 27 18 30 16 Z"/><circle fill="#3d2b66" cx="35" cy="20" r="2"/>`,
      nichts: `<circle fill="none" stroke="#b9a6d8" stroke-width="3" cx="24" cy="24" r="14" stroke-dasharray="5 6"/>`,
    },
  };

  const KATEGORIEN = [
    { id: "dress", titel: "Kleider", items: DRESS, icon: thumbDress("#fa9ec1") },
    { id: "hair", titel: "Frisuren", items: HAIR, icon: thumbHair("#f8dc90") },
    { id: "crown", titel: "Kronen", items: CROWN, icon: THUMBS.crown.krone },
    { id: "extra", titel: "Extras", items: EXTRA, icon: THUMBS.extra.stab },
  ];

  /* ---------- state ---------- */
  let outfit = { dress: "rosen", hair: "blond", crown: "krone", extra: "nichts" };
  try { outfit = { ...outfit, ...JSON.parse(localStorage.getItem("sz-outfit") || "{}") }; } catch (e) {}
  if (!DRESS[outfit.dress]) outfit.dress = "rosen";
  if (!HAIR[outfit.hair]) outfit.hair = "blond";
  if (!(outfit.crown in CROWN)) outfit.crown = "krone";
  if (!(outfit.extra in EXTRA)) outfit.extra = "nichts";

  let kategorie = "dress";

  const LAYERS = {
    dress: () => document.getElementById("layer-dress"),
    crown: () => document.getElementById("layer-crown"),
    extra: () => document.getElementById("layer-extra"),
  };

  function renderDoll(popLayer) {
    document.getElementById("layer-hair-back").innerHTML = HAIR[outfit.hair].back;
    document.getElementById("layer-hair-front").innerHTML = HAIR[outfit.hair].front;
    LAYERS.dress().innerHTML = DRESS[outfit.dress];
    LAYERS.crown().innerHTML = CROWN[outfit.crown];
    LAYERS.extra().innerHTML = EXTRA[outfit.extra];
    if (popLayer) {
      const el = popLayer === "hair"
        ? document.getElementById("layer-hair-back")
        : LAYERS[popLayer] ? LAYERS[popLayer]() : null;
      if (el) {
        el.classList.remove("wear-pop");
        void el.getBoundingClientRect();
        el.classList.add("wear-pop");
      }
    }
    markActive();
    try { localStorage.setItem("sz-outfit", JSON.stringify(outfit)); } catch (e) {}
  }

  function markActive() {
    document.querySelectorAll("#item-grid .item-btn").forEach((b) => {
      b.classList.toggle("is-active", outfit[kategorie] === b.dataset.id);
    });
  }

  function buildRail() {
    const rail = document.getElementById("kat-rail");
    rail.innerHTML = "";
    KATEGORIEN.forEach((k) => {
      const b = document.createElement("button");
      b.className = "kat-knopf" + (k.id === kategorie ? " is-active" : "");
      b.dataset.id = k.id;
      b.setAttribute("aria-label", k.titel);
      b.innerHTML = `<svg viewBox="0 0 48 48">${k.icon}</svg>`;
      b.addEventListener("pointerup", () => {
        kategorie = k.id;
        rail.querySelectorAll(".kat-knopf").forEach((x) => x.classList.toggle("is-active", x.dataset.id === kategorie));
        buildGrid();
        Klang.pop();
      });
      rail.appendChild(b);
    });
  }

  function buildGrid() {
    const kat = KATEGORIEN.find((k) => k.id === kategorie);
    document.getElementById("panel-titel").textContent = kat.titel;
    const grid = document.getElementById("item-grid");
    grid.innerHTML = "";
    Object.keys(kat.items).forEach((id) => {
      const b = document.createElement("button");
      b.className = "item-btn";
      b.dataset.id = id;
      b.setAttribute("aria-label", kat.titel + " " + id);
      b.innerHTML = `<svg viewBox="0 0 48 48">${THUMBS[kategorie][id]}</svg>`;
      b.addEventListener("pointerup", () => {
        outfit[kategorie] = id;
        renderDoll(kategorie);
        Klang.chime();
        const doll = document.getElementById("doll").getBoundingClientRect();
        Funkel.burst(doll.left + doll.width / 2, doll.top + doll.height / 2, { count: 12 });
      });
      grid.appendChild(b);
    });
    markActive();
  }

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  function init() {
    buildRail();
    buildGrid();
    renderDoll();

    document.getElementById("btn-zufall").addEventListener("pointerup", () => {
      outfit = {
        dress: pick(Object.keys(DRESS)),
        hair: pick(Object.keys(HAIR)),
        crown: pick(Object.keys(CROWN)),
        extra: pick(Object.keys(EXTRA)),
      };
      renderDoll("dress");
      Klang.staub();
      const doll = document.getElementById("doll").getBoundingClientRect();
      Funkel.burst(doll.left + doll.width / 2, doll.top + doll.height / 3, { count: 22, spread: 160 });
    });

    document.getElementById("btn-foto").addEventListener("pointerup", () => {
      const blitz = document.getElementById("foto-blitz");
      blitz.classList.remove("blitz");
      void blitz.getBoundingClientRect();
      blitz.classList.add("blitz");
      Klang.kamera();
      Staat.stat("looks");
      const doll = document.getElementById("doll").getBoundingClientRect();
      const cx = doll.left + doll.width / 2;
      Funkel.hearts(cx, doll.top + doll.height * 0.4, 5);
      Staat.addDust(1, cx, doll.top + doll.height * 0.4);
    });
  }

  return { init };
})();
