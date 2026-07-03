/* Zauberklänge — synthesized, no assets, works offline */
const Klang = (() => {
  let ctx = null;
  let musikTimer = null;

  const an = () => (typeof Staat === "undefined" ? true : Staat.settings.sound);

  function ac() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  function tone(freq, { start = 0, dur = 0.35, type = "sine", gain = 0.22 } = {}) {
    const a = ac();
    const t0 = a.currentTime + start;
    const osc = a.createOscillator();
    const g = a.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(a.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }

  const PENTA = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];

  /* gentle ambient music: slow pentatonic arpeggio */
  function musikStart() {
    if (musikTimer) return;
    try { ac(); } catch (e) { return; }
    const seq = [261.63, 329.63, 392.0, 523.25, 392.0, 329.63];
    let i = 0;
    musikTimer = setInterval(() => {
      if (typeof Staat !== "undefined" && !Staat.settings.musik) return;
      try {
        tone(seq[i % seq.length], { dur: 1.6, type: "sine", gain: 0.045 });
        tone(seq[i % seq.length] * 2, { start: 0.02, dur: 1.2, type: "triangle", gain: 0.02 });
        i++;
      } catch (e) {}
    }, 900);
  }
  function musikStop() {
    clearInterval(musikTimer);
    musikTimer = null;
  }

  return {
    unlock() { try { ac(); if (typeof Staat !== "undefined" && Staat.settings.musik) musikStart(); } catch (e) {} },
    musikStart, musikStop,

    chime() {
      if (!an()) return;
      try {
        const n = PENTA[Math.floor(Math.random() * PENTA.length)];
        tone(n, { dur: 0.4, type: "triangle", gain: 0.18 });
        tone(n * 2, { start: 0.02, dur: 0.3, type: "sine", gain: 0.08 });
      } catch (e) {}
    },

    pop() {
      if (!an()) return;
      try {
        tone(440, { dur: 0.12, type: "sine", gain: 0.15 });
        tone(660, { start: 0.05, dur: 0.12, type: "sine", gain: 0.12 });
      } catch (e) {}
    },

    plopp() {
      if (!an()) return;
      try {
        tone(300, { dur: 0.1, type: "sine", gain: 0.2 });
        tone(180, { start: 0.06, dur: 0.14, type: "sine", gain: 0.14 });
      } catch (e) {}
    },

    wasser() {
      if (!an()) return;
      try {
        [0, 0.09, 0.18].forEach((st, i) => tone(900 - i * 160, { start: st, dur: 0.14, type: "sine", gain: 0.1 }));
      } catch (e) {}
    },

    wachsen() {
      if (!an()) return;
      try {
        const a = ac();
        const t0 = a.currentTime;
        const osc = a.createOscillator();
        const g = a.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(300, t0);
        osc.frequency.exponentialRampToValueAtTime(750, t0 + 0.4);
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(0.15, t0 + 0.05);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.45);
        osc.connect(g).connect(a.destination);
        osc.start(t0); osc.stop(t0 + 0.5);
      } catch (e) {}
    },

    brodeln() {
      if (!an()) return;
      try {
        [0, 0.12, 0.22, 0.34, 0.5].forEach((st) =>
          tone(120 + Math.random() * 120, { start: st, dur: 0.18, type: "sine", gain: 0.12 }));
      } catch (e) {}
    },

    kamera() {
      if (!an()) return;
      try {
        tone(1400, { dur: 0.06, type: "square", gain: 0.08 });
        tone(900, { start: 0.07, dur: 0.08, type: "square", gain: 0.06 });
      } catch (e) {}
    },

    herz() {
      if (!an()) return;
      try {
        tone(659.25, { dur: 0.25, type: "sine", gain: 0.14 });
        tone(987.77, { start: 0.1, dur: 0.3, type: "sine", gain: 0.1 });
      } catch (e) {}
    },

    staub() {
      if (!an()) return;
      try {
        PENTA.slice(0, 5).forEach((n, i) => tone(n * 2, { start: i * 0.05, dur: 0.25, type: "sine", gain: 0.09 }));
      } catch (e) {}
    },

    fanfare() {
      if (!an()) return;
      try {
        const seq = [523.25, 659.25, 783.99, 1046.5, 783.99, 1046.5];
        seq.forEach((n, i) => {
          tone(n, { start: i * 0.14, dur: 0.34, type: "triangle", gain: 0.16 });
          tone(n / 2, { start: i * 0.14, dur: 0.34, type: "sine", gain: 0.07 });
        });
      } catch (e) {}
    },
  };
})();
