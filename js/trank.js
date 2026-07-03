/* Zauberturm — Tränke mischen & rühren */
const Trank = (() => {
  const ZUTATEN = {
    bluete:    { name: "Blüten",     farbe: "#f78fb3", icon: `<g fill="#f78fb3"><circle cx="22" cy="12" r="7"/><circle cx="32" cy="20" r="7"/><circle cx="28" cy="32" r="7"/><circle cx="14" cy="32" r="7"/><circle cx="11" cy="20" r="7"/></g><circle cx="22" cy="23" r="6" fill="#fdf0c2"/>` },
    sternstaub:{ name: "Sternstaub", farbe: "#f5d76e", icon: `<path fill="#f5d76e" d="M22 4 l4.4 9.4 10.2 1.5 -7.4 7.2 1.8 10.2 -9 -4.8 -9 4.8 1.8 -10.2 -7.4 -7.2 10.2 -1.5 Z"/><circle cx="36" cy="8" r="2.6" fill="#f5d76e"/><circle cx="8" cy="34" r="2.2" fill="#f5d76e"/>` },
    tautropfen:{ name: "Tautropfen", farbe: "#7ec8e3", icon: `<path fill="#7ec8e3" d="M22 4 C28 14 34 22 34 29 C34 36 29 41 22 41 C15 41 10 36 10 29 C10 22 16 14 22 4 Z"/><ellipse cx="17" cy="27" rx="3" ry="5" fill="#fff" opacity=".6"/>` },
    regenbogen:{ name: "Regenbogen", farbe: "#c9a8f7", icon: `<path d="M6 32 A16 16 0 0 1 38 32" fill="none" stroke="#ef6461" stroke-width="4.6"/><path d="M11.5 32 A10.5 10.5 0 0 1 32.5 32" fill="none" stroke="#f5d76e" stroke-width="4.6"/><path d="M17 32 A5 5 0 0 1 27 32" fill="none" stroke="#7ec8e3" stroke-width="4.6"/>` },
  };

  /* recipe names by sorted ingredient combo */
  const REZEPTE = {
    "bluete": "Rosenzauber",
    "sternstaub": "Sternenglanz",
    "tautropfen": "Morgentau",
    "regenbogen": "Regenbogentraum",
    "bluete+sternstaub": "Goldene Rose",
    "bluete+tautropfen": "Blütenperle",
    "bluete+regenbogen": "Feenblüte",
    "sternstaub+tautropfen": "Sternensee",
    "regenbogen+sternstaub": "Funkelregen",
    "regenbogen+tautropfen": "Wolkentraum",
    "bluete+sternstaub+tautropfen": "Elfenelixier",
    "bluete+regenbogen+sternstaub": "Einhornglück",
    "bluete+regenbogen+tautropfen": "Zaubermorgen",
    "regenbogen+sternstaub+tautropfen": "Himmelslicht",
  };

  let mix = [];
  let brauend = false;
  let bubbleTimer = null;

  const slotsEl = () => document.getElementById("trank-slots");

  function mischFarbe() {
    if (!mix.length) return ["#9be8cf", "#5fc9a8"];
    const f = mix.map((z) => ZUTATEN[z].farbe);
    return [f[0], f[f.length - 1]];
  }

  function renderSlots() {
    const el = slotsEl();
    el.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const s = document.createElement("div");
      s.className = "slot" + (mix[i] ? " voll" : "");
      if (mix[i]) s.innerHTML = `<svg viewBox="0 0 44 44">${ZUTATEN[mix[i]].icon}</svg>`;
      el.appendChild(s);
    }
    document.getElementById("btn-brauen").hidden = mix.length < 2 || brauend;
    // liquid color follows the mix
    const [a, b] = mischFarbe();
    const grad = document.getElementById("trank-liquid");
    if (grad) grad.style.fill = a;
    const defGrad = document.querySelector("#trank-liquid");
    if (defGrad) defGrad.setAttribute("fill", a);
    void b;
  }

  function blase() {
    const kessel = document.getElementById("kessel");
    if (!kessel || document.hidden) return;
    const r = kessel.getBoundingClientRect();
    const b = document.createElement("div");
    b.className = "kessel-blase";
    const size = 8 + Math.random() * 16;
    b.style.width = b.style.height = size + "px";
    b.style.position = "fixed";
    b.style.left = r.left + r.width * (0.3 + Math.random() * 0.4) + "px";
    b.style.top = r.top + r.height * 0.42 + "px";
    b.style.zIndex = 20;
    document.body.appendChild(b);
    const anim = b.animate(
      [
        { transform: "translateY(0) scale(.6)", opacity: 0 },
        { opacity: .9, offset: .3 },
        { transform: "translateY(-46px) scale(1.1)", opacity: 0 },
      ],
      { duration: 900 + Math.random() * 500, easing: "ease-out", fill: "forwards" }
    );
    anim.onfinish = () => b.remove();
  }

  function flascheSvg() {
    const [a, b] = mischFarbe();
    return `<svg viewBox="0 0 100 130">
      <defs><linearGradient id="fl-${a.slice(1)}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/>
      </linearGradient></defs>
      <rect x="42" y="4" width="16" height="16" rx="4" fill="#c99b6f"/>
      <path d="M42 20 L58 20 L58 38 C74 46 84 62 84 80 C84 106 69 124 50 124 C31 124 16 106 16 80 C16 62 26 46 42 38 Z" fill="#ffffff" opacity=".35"/>
      <path d="M50 124 C31 124 16 106 16 80 C16 66 22 53 32 45 L68 45 C78 53 84 66 84 80 C84 106 69 124 50 124 Z" fill="url(#fl-${a.slice(1)})"/>
      <ellipse cx="38" cy="72" rx="7" ry="12" fill="#fff" opacity=".45"/>
      <path fill="#fff" d="M62 58 l1.8 3.9 4.2 .6 -3 2.9 .7 4.2 -3.7 -2 -3.7 2 .7 -4.2 -3 -2.9 4.2 -.6 Z"/>
    </svg>`;
  }

  function brauen() {
    if (brauend || mix.length < 2) return;
    brauend = true;
    document.getElementById("btn-brauen").hidden = true;
    const buehne = document.querySelector(".kessel-buehne");
    buehne.classList.add("ruehren");
    Klang.brodeln();
    const kessel = document.getElementById("kessel").getBoundingClientRect();
    const cx = kessel.left + kessel.width / 2;
    const cy = kessel.top + kessel.height * 0.4;
    let n = 0;
    const bt = setInterval(() => { blase(); if (++n > 14) clearInterval(bt); }, 120);

    setTimeout(() => {
      buehne.classList.remove("ruehren");
      Klang.fanfare();
      Funkel.burst(cx, cy, { count: 26, spread: 200 });
      const key = [...mix].sort().join("+");
      const name = REZEPTE[key] || "Wundertrank";
      const erg = document.getElementById("trank-ergebnis");
      erg.innerHTML = `<div class="ergebnis-karte">
        ${flascheSvg()}
        <p>${name}!</p>
        <span class="ergebnis-belohnung"><svg viewBox="0 0 24 24"><path fill="#e9b64d" d="M12 1 l2.6 6.4 6.9 .8 -5.2 4.7 1.4 6.8 -5.7 -3.6 -5.7 3.6 1.4 -6.8 -5.2 -4.7 6.9 -.8 Z"/></svg> +3</span>
      </div>`;
      erg.hidden = false;
      Staat.stat("traenke");
      Staat.addDust(3, cx, cy);
      erg.addEventListener("pointerup", () => {
        erg.hidden = true;
        mix = [];
        brauend = false;
        renderSlots();
      }, { once: true });
    }, 2100);
  }

  function buildZutaten() {
    const grid = document.getElementById("zutaten-grid");
    grid.innerHTML = "";
    Object.entries(ZUTATEN).forEach(([id, z]) => {
      const b = document.createElement("button");
      b.className = "zutat";
      b.setAttribute("aria-label", z.name);
      b.innerHTML = `<svg viewBox="0 0 44 44">${z.icon}</svg><span>${z.name}</span>`;
      b.addEventListener("pointerup", (e) => {
        if (brauend || mix.length >= 3) return;
        mix.push(id);
        Klang.plopp();
        blase(); blase();
        Funkel.burst(e.clientX, e.clientY, { count: 6, colors: [z.farbe, "#ffffff"] });
        renderSlots();
      });
      grid.appendChild(b);
    });
  }

  function init() {
    buildZutaten();
    renderSlots();
    document.getElementById("btn-brauen").addEventListener("pointerup", brauen);
    // idle bubbling while screen is visible
    bubbleTimer = setInterval(() => {
      const active = document.getElementById("screen-trank").classList.contains("is-active");
      if (active && Math.random() < 0.6) blase();
    }, 1400);
    void bubbleTimer;
  }

  return { init };
})();
