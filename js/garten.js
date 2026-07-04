/* Zaubergarten — pflanzen, gießen, ernten · Samen-Laden · Schmetterlinge */
const Garten = (() => {
  const PLOT_COUNT = 6;

  /* seed catalogue: what you can plant and what the bloom pays out */
  const SAAT = {
    wiese:  { name: "Wiesenblume", preis: 0,  lohn: 1, typen: ["tulpe", "rose"] },
    sonne:  { name: "Sonnenblume", preis: 3,  lohn: 3, typen: ["sonnenblume"] },
    zauber: { name: "Zauberblume", preis: 10, lohn: 6, typen: ["zauberblume"] },
  };
  const TULPE_COLORS = ["#ef6461", "#f78fb3", "#9b7ede", "#f79256"];

  /* growth stages: 0 empty · 1 seed · 2 sprout · 3 bud · 4 bloom */

  const mound = `
    <ellipse cx="60" cy="130" rx="34" ry="10" fill="#8a5a3b"/>
    <ellipse cx="60" cy="127" rx="26" ry="7" fill="#a5714a"/>`;
  const stemLeaves = (topY) => `
    <path d="M60 128 L60 ${topY}" stroke="#3f8f5f" stroke-width="6" stroke-linecap="round" fill="none"/>
    <path d="M60 112 C46 112 38 102 38 94 C50 94 58 100 60 112 Z" fill="#6fcf97"/>
    <path d="M60 118 C74 118 82 108 82 100 C70 100 62 106 60 118 Z" fill="#6fcf97"/>`;

  function flowerHead(type, color) {
    switch (type) {
      case "tulpe":
        return `
          <path fill="${color}" d="M40 66 C36 44 44 30 60 30 C76 30 84 44 80 66 C74 76 66 80 60 80 C54 80 46 76 40 66 Z"/>
          <path d="M52 36 C50 52 52 66 56 76 M68 36 C70 52 68 66 64 76" fill="none" stroke="#00000022" stroke-width="3" stroke-linecap="round"/>`;
      case "sonnenblume":
        return `
          <g fill="#f5d76e">
            <ellipse cx="60" cy="24" rx="8" ry="16"/>
            <ellipse cx="60" cy="24" rx="8" ry="16" transform="rotate(45 60 52)"/>
            <ellipse cx="60" cy="24" rx="8" ry="16" transform="rotate(90 60 52)"/>
            <ellipse cx="60" cy="24" rx="8" ry="16" transform="rotate(135 60 52)"/>
            <ellipse cx="60" cy="24" rx="8" ry="16" transform="rotate(180 60 52)"/>
            <ellipse cx="60" cy="24" rx="8" ry="16" transform="rotate(225 60 52)"/>
            <ellipse cx="60" cy="24" rx="8" ry="16" transform="rotate(270 60 52)"/>
            <ellipse cx="60" cy="24" rx="8" ry="16" transform="rotate(315 60 52)"/>
          </g>
          <circle cx="60" cy="52" r="15" fill="#7a4a2b"/>
          <g fill="#5d3820"><circle cx="55" cy="48" r="2"/><circle cx="65" cy="50" r="2"/><circle cx="58" cy="57" r="2"/><circle cx="66" cy="58" r="1.6"/></g>`;
      case "rose":
        return `
          <circle cx="60" cy="52" r="26" fill="#ef8fc0"/>
          <circle cx="44" cy="44" r="12" fill="#f8b4d6"/>
          <circle cx="74" cy="42" r="12" fill="#f8b4d6"/>
          <circle cx="70" cy="64" r="12" fill="#f8b4d6"/>
          <circle cx="46" cy="62" r="12" fill="#f8b4d6"/>
          <path d="M60 38 C48 42 44 54 50 62 C56 68 66 66 68 58 C69 52 64 48 59 50" fill="none" stroke="#d4548a" stroke-width="4" stroke-linecap="round"/>`;
      case "zauberblume":
        return `
          <g>
            <ellipse cx="60" cy="26" rx="11" ry="17" fill="#f78fb3"/>
            <ellipse cx="60" cy="26" rx="11" ry="17" fill="#f5d76e" transform="rotate(72 60 50)"/>
            <ellipse cx="60" cy="26" rx="11" ry="17" fill="#7ec8e3" transform="rotate(144 60 50)"/>
            <ellipse cx="60" cy="26" rx="11" ry="17" fill="#a8e6cf" transform="rotate(216 60 50)"/>
            <ellipse cx="60" cy="26" rx="11" ry="17" fill="#c9a8f7" transform="rotate(288 60 50)"/>
          </g>
          <circle cx="60" cy="50" r="13" fill="#fdf0c2"/>
          <path fill="#e9b64d" d="M60 43 l2.2 4.8 5.2 .8 -3.8 3.6 .9 5.2 -4.5 -2.5 -4.5 2.5 .9 -5.2 -3.8 -3.6 5.2 -.8 Z"/>
          <g fill="#f5d76e"><circle cx="30" cy="36" r="3"/><circle cx="92" cy="30" r="2.5"/><circle cx="88" cy="66" r="2.5"/></g>`;
    }
    return "";
  }

  function plantSvg(p) {
    let inner = "";
    if (p.stage === 0) {
      inner = `<ellipse cx="60" cy="130" rx="30" ry="9" fill="none" stroke="#ffffff" stroke-width="3" stroke-dasharray="7 8" opacity=".55"/>`;
    } else if (p.stage === 1) {
      inner = mound + `
        <ellipse cx="60" cy="120" rx="9" ry="12" fill="#b98a67"/>
        <ellipse cx="57" cy="116" rx="3" ry="5" fill="#d3a986"/>`;
    } else if (p.stage === 2) {
      inner = mound + stemLeaves(96);
    } else if (p.stage === 3) {
      inner = mound + stemLeaves(76) + `
        <ellipse fill="${p.color}" cx="60" cy="62" rx="15" ry="19"/>
        <ellipse fill="#ffffff" opacity=".3" cx="55" cy="56" rx="5" ry="8"/>
        <path fill="#6fcf97" d="M46 70 L60 82 L74 70 C70 79 50 79 46 70 Z"/>`;
    } else {
      inner = mound + `<g class="bloom-sway">${stemLeaves(78)}${flowerHead(p.type, p.color)}</g>`;
    }
    return `<svg viewBox="0 0 120 140"><g class="plant-in">${inner}</g></svg>`;
  }

  /* seed shop icons */
  function saatIcon(key) {
    if (key === "wiese") return `<svg viewBox="0 0 34 40"><path d="M17 38 L17 20" stroke="#3f8f5f" stroke-width="4" stroke-linecap="round"/><path fill="#f78fb3" d="M11 14 C10 6 13 2 17 2 C21 2 24 6 23 14 C21 18 18 19 17 19 C16 19 13 18 11 14 Z"/></svg>`;
    if (key === "sonne") return `<svg viewBox="0 0 34 40"><path d="M17 38 L17 22" stroke="#3f8f5f" stroke-width="4" stroke-linecap="round"/><g fill="#f5d76e"><ellipse cx="17" cy="5" rx="3.4" ry="6.5"/><ellipse cx="17" cy="5" rx="3.4" ry="6.5" transform="rotate(60 17 12)"/><ellipse cx="17" cy="5" rx="3.4" ry="6.5" transform="rotate(120 17 12)"/><ellipse cx="17" cy="5" rx="3.4" ry="6.5" transform="rotate(180 17 12)"/><ellipse cx="17" cy="5" rx="3.4" ry="6.5" transform="rotate(240 17 12)"/><ellipse cx="17" cy="5" rx="3.4" ry="6.5" transform="rotate(300 17 12)"/></g><circle cx="17" cy="12" r="5.4" fill="#7a4a2b"/></svg>`;
    return `<svg viewBox="0 0 34 40"><path d="M17 38 L17 22" stroke="#3f8f5f" stroke-width="4" stroke-linecap="round"/><g><ellipse cx="17" cy="5.5" rx="4" ry="6.5" fill="#f78fb3"/><ellipse cx="17" cy="5.5" rx="4" ry="6.5" fill="#f5d76e" transform="rotate(72 17 12)"/><ellipse cx="17" cy="5.5" rx="4" ry="6.5" fill="#7ec8e3" transform="rotate(144 17 12)"/><ellipse cx="17" cy="5.5" rx="4" ry="6.5" fill="#a8e6cf" transform="rotate(216 17 12)"/><ellipse cx="17" cy="5.5" rx="4" ry="6.5" fill="#c9a8f7" transform="rotate(288 17 12)"/></g><circle cx="17" cy="12" r="4.6" fill="#fdf0c2"/></svg>`;
  }

  /* ---------- state ---------- */
  let plots = Array.from({ length: PLOT_COUNT }, () => ({ stage: 0, type: null, color: null, lohn: 1 }));
  let saatwahl = "wiese";
  let busy = new Set();
  try {
    const s = JSON.parse(localStorage.getItem("sz-garten3") || "null");
    if (s && Array.isArray(s.plots) && s.plots.length === PLOT_COUNT) { plots = s.plots; saatwahl = s.saatwahl || "wiese"; }
  } catch (e) {}

  function persist() {
    try { localStorage.setItem("sz-garten3", JSON.stringify({ plots, saatwahl })); } catch (e) {}
  }

  function renderPlot(i) {
    const el = document.querySelector(`.plot[data-i="${i}"]`);
    if (el) el.innerHTML = plantSvg(plots[i]);
  }

  function celebrate() {
    const uni = document.getElementById("uni-fly");
    uni.hidden = false;
    uni.classList.remove("fly");
    void uni.getBoundingClientRect();
    uni.classList.add("fly");
    Klang.fanfare();
    uni.addEventListener("animationend", () => { uni.hidden = true; uni.classList.remove("fly"); }, { once: true });
  }

  function tapPlot(i, e) {
    if (busy.has(i)) return;
    const p = plots[i];
    const el = e.currentTarget;

    if (p.stage === 0) {
      const saat = SAAT[saatwahl];
      if (saat.preis > 0 && !Staat.spendDust(saat.preis)) {
        // not enough dust: wiggle the shop
        Klang.pop();
        const laden = document.getElementById("samen-laden");
        laden.animate([{ transform: "translateX(0)" }, { transform: "translateX(-8px)" }, { transform: "translateX(8px)" }, { transform: "translateX(0)" }], { duration: 300 });
        return;
      }
      const type = saat.typen[Math.floor(Math.random() * saat.typen.length)];
      p.stage = 1;
      p.type = type;
      p.lohn = saat.lohn;
      p.color = type === "tulpe" ? TULPE_COLORS[Math.floor(Math.random() * TULPE_COLORS.length)]
              : type === "rose" ? "#f78fb3"
              : type === "sonnenblume" ? "#f5d76e" : "#c9a8f7";
      renderPlot(i);
      Klang.pop();
      Funkel.burst(e.clientX, e.clientY, { count: 6, colors: ["#b98a67", "#8a5a3b", "#f5d76e"] });
      persist();
    } else if (p.stage < 4) {
      busy.add(i);
      Funkel.drops(el);
      Klang.wasser();
      setTimeout(() => {
        p.stage += 1;
        renderPlot(i);
        Klang.wachsen();
        if (p.stage === 4) {
          const r = el.getBoundingClientRect();
          Funkel.burst(r.left + r.width / 2, r.top + r.height / 2, { count: 14 });
        }
        busy.delete(i);
        persist();
      }, 650);
    } else {
      busy.add(i);
      const gain = p.lohn || 1;
      const magisch = p.type === "zauberblume";
      Klang.staub();
      Funkel.burst(e.clientX, e.clientY, { count: 16, spread: 130 });
      Staat.addDust(gain, e.clientX, e.clientY);
      Staat.stat("blumen");
      if (magisch || Staat.stats.blumen % 5 === 0) celebrate();
      plots[i] = { stage: 0, type: null, color: null, lohn: 1 };
      setTimeout(() => { renderPlot(i); busy.delete(i); }, 350);
      persist();
    }
  }

  function buildLaden() {
    const liste = document.getElementById("laden-liste");
    liste.innerHTML = "";
    Object.entries(SAAT).forEach(([key, s]) => {
      const b = document.createElement("button");
      b.className = "saat-zeile" + (key === saatwahl ? " is-active" : "");
      b.dataset.id = key;
      b.setAttribute("aria-label", s.name);
      b.innerHTML = `${saatIcon(key)}<span class="saat-preis">${
        s.preis === 0
          ? "frei"
          : `<svg viewBox="0 0 24 24"><path fill="#e9b64d" d="M12 1 l2.6 6.4 6.9 .8 -5.2 4.7 1.4 6.8 -5.7 -3.6 -5.7 3.6 1.4 -6.8 -5.2 -4.7 6.9 -.8 Z"/></svg> ${s.preis}`
      }</span>`;
      b.addEventListener("pointerup", () => {
        saatwahl = key;
        liste.querySelectorAll(".saat-zeile").forEach((z) => z.classList.toggle("is-active", z.dataset.id === saatwahl));
        Klang.pop();
        persist();
      });
      liste.appendChild(b);
    });
  }

  function buildFalter() {
    const wrap = document.getElementById("falter");
    wrap.innerHTML = "";
    [{ l: 18, t: 46, d: 0 }, { l: 52, t: 34, d: 3 }, { l: 72, t: 56, d: 6 }].forEach((f) => {
      const el = document.createElement("span");
      el.className = "falter";
      el.innerHTML = `<svg viewBox="0 0 48 42" aria-hidden="true">
        <path fill="#9d7bec" d="M22 22 C16 9 6 7 3 14 C0 21 7 29 17 30 C9 33 8 40 14 41 C19 42 23 35 24 29 Z"/>
        <path fill="#f8a8c8" d="M26 22 C32 9 42 7 45 14 C48 21 41 29 31 30 C39 33 40 40 34 41 C29 42 25 35 24 29 Z"/>
        <ellipse cx="24" cy="27" rx="3.4" ry="10" fill="#4a3a6e"/>
        <circle cx="15" cy="21" r="3" fill="#f5d76e"/>
        <circle cx="33" cy="21" r="3" fill="#f5d76e"/>
        <path d="M21 18 C18 11 14 8 10 8 M27 18 C30 11 34 8 38 8" fill="none" stroke="#4a3a6e" stroke-width="2" stroke-linecap="round"/>
      </svg>`;
      el.style.left = f.l + "%";
      el.style.top = f.t + "%";
      el.style.animationDelay = f.d + "s";
      wrap.appendChild(el);
    });
  }

  function init() {
    const wrap = document.getElementById("plots");
    wrap.innerHTML = "";
    for (let i = 0; i < PLOT_COUNT; i++) {
      const b = document.createElement("button");
      b.className = "plot";
      b.dataset.i = i;
      b.setAttribute("aria-label", "Beet " + (i + 1));
      b.addEventListener("pointerdown", (e) => tapPlot(i, e));
      wrap.appendChild(b);
      renderPlot(i);
    }
    buildLaden();
    buildFalter();
  }

  return { init };
})();
