/* Einhorn-Stall — Luna pflegen & verwöhnen */
const Stall = (() => {
  const MAX = 5;
  let glueck = 0;
  let busy = false;
  try { glueck = Math.min(MAX, +(localStorage.getItem("sz-glueck") || 0)); } catch (e) {}

  const WERKZEUG = [
    { id: "apfel", label: "Apfel füttern", icon: `<path fill="#ef6461" d="M24 12 C30 6 40 8 42 18 C44 28 36 40 24 42 C12 40 4 28 6 18 C8 8 18 6 24 12 Z"/><path d="M24 11 C24 6 27 3 31 2" fill="none" stroke="#7a4a2b" stroke-width="3.4" stroke-linecap="round"/><path fill="#6fcf97" d="M30 6 C34 3 39 3 42 6 C39 9 34 9 30 6 Z"/>` },
    { id: "buerste", label: "Mähne bürsten", icon: `<rect x="8" y="24" width="32" height="10" rx="5" fill="#c99b6f"/><g stroke="#9d7bec" stroke-width="3.4" stroke-linecap="round"><path d="M12 22 L12 12"/><path d="M19 22 L19 10"/><path d="M26 22 L26 12"/><path d="M33 22 L33 10"/></g>` },
    { id: "seife", label: "Waschen", icon: `<ellipse cx="22" cy="30" rx="15" ry="10" fill="#f8b4d6"/><ellipse cx="18" cy="27" rx="5" ry="3" fill="#fff" opacity=".7"/><circle cx="34" cy="12" r="5" fill="none" stroke="#7ec8e3" stroke-width="2.6"/><circle cx="42" cy="20" r="3.4" fill="none" stroke="#7ec8e3" stroke-width="2.4"/>` },
    { id: "schleife", label: "Schleife", icon: `<path fill="#e0537a" d="M22 22 C14 14 4 16 2 24 C8 28 16 29 22 26 C16 32 16 40 22 44 C28 40 30 32 26 26 C32 29 40 28 46 24 C44 16 34 14 26 22 C25 21 23 21 22 22 Z"/><circle cx="24" cy="24" r="5" fill="#f78fb3"/>` },
  ];

  function renderHerzen(neu) {
    const el = document.getElementById("glueck-herzen");
    el.innerHTML = "";
    for (let i = 0; i < MAX; i++) {
      const s = document.createElement("span");
      s.textContent = i < glueck ? "💗" : "🤍";
      if (i >= glueck) s.className = "herz-leer";
      if (neu && i === glueck - 1) s.classList.add("neu");
      el.appendChild(s);
    }
    try { localStorage.setItem("sz-glueck", glueck); } catch (e) {}
  }

  function uniMitte() {
    const r = document.getElementById("stall-uni").getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2, r };
  }

  function blinzeln() {
    const offen = document.getElementById("uni-auge-offen");
    const zu = document.getElementById("uni-auge-zu");
    offen.setAttribute("hidden", "");
    zu.removeAttribute("hidden");
    setTimeout(() => {
      zu.setAttribute("hidden", "");
      offen.removeAttribute("hidden");
    }, 260);
  }

  function belohnung() {
    const { x, y } = uniMitte();
    const uni = document.getElementById("stall-uni");
    uni.classList.remove("happy");
    void uni.getBoundingClientRect();
    uni.classList.add("happy");
    Klang.fanfare();
    Funkel.burst(x, y, { count: 26, spread: 200 });
    Staat.addDust(5, x, y);
    Staat.stat("herzen", MAX);
    setTimeout(() => { glueck = 0; renderHerzen(); }, 1600);
  }

  function plusHerz() {
    if (glueck >= MAX) return;
    glueck++;
    Klang.herz();
    renderHerzen(true);
    if (glueck >= MAX) setTimeout(belohnung, 500);
  }

  function aktion(id) {
    if (busy) return;
    busy = true;
    setTimeout(() => { busy = false; }, 1100);
    const { x, y, r } = uniMitte();

    if (id === "apfel") {
      const futter = document.getElementById("uni-futter");
      futter.innerHTML = `<circle cx="262" cy="122" r="12" fill="#ef6461"/><path d="M262 112 C262 108 264 106 267 105" stroke="#7a4a2b" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
      futter.removeAttribute("hidden");
      Klang.plopp();
      blinzeln();
      setTimeout(() => { futter.setAttribute("hidden", ""); Funkel.hearts(x + r.width * 0.3, y, 3); plusHerz(); }, 700);
    } else if (id === "buerste") {
      // sparkles sweeping along the mane
      [0, 1, 2].forEach((i) =>
        setTimeout(() => Funkel.burst(x + r.width * (0.1 - i * 0.06), y - r.height * (0.25 - i * 0.1), { count: 7, colors: ["#f9a8cf", "#c9a8f7", "#ffffff"] }), i * 180));
      Klang.chime();
      setTimeout(plusHerz, 620);
    } else if (id === "seife") {
      Funkel.bubbles(x, y, 10);
      Klang.wasser();
      setTimeout(plusHerz, 700);
    } else if (id === "schleife") {
      const schleife = document.getElementById("uni-schleife");
      const an = schleife.hasAttribute("hidden");
      if (an) schleife.removeAttribute("hidden");
      else schleife.setAttribute("hidden", "");
      Klang.chime();
      Funkel.burst(x + r.width * 0.15, y - r.height * 0.2, { count: 10 });
      if (an) plusHerz();
    }
  }

  function init() {
    renderHerzen();
    const bar = document.getElementById("pflege");
    bar.innerHTML = "";
    WERKZEUG.forEach((w) => {
      const b = document.createElement("button");
      b.className = "pflege-knopf";
      b.setAttribute("aria-label", w.label);
      b.innerHTML = `<svg viewBox="0 0 48 48">${w.icon}</svg>`;
      b.addEventListener("pointerup", () => aktion(w.id));
      bar.appendChild(b);
    });
    // idle blink
    setInterval(() => {
      if (document.getElementById("screen-stall").classList.contains("is-active")) blinzeln();
    }, 4200);
  }

  return { init };
})();
