/* Eltern-Ecke — hold-to-enter gate + Einstellungen */
const Eltern = (() => {
  const HALTEN = 3000; // ms
  const UMFANG = 326.7;
  let timer = null;
  let start = 0;
  let resetArm = false;

  function gateInit() {
    const kreis = document.getElementById("gate-kreis");
    const ring = document.getElementById("gate-progress");

    const tick = () => {
      const t = Math.min(1, (Date.now() - start) / HALTEN);
      ring.style.strokeDashoffset = UMFANG * (1 - t);
      if (t >= 1) {
        abbruch();
        Klang.chime();
        renderFortschritt();
        App.go("eltern");
      }
    };
    const los = (e) => {
      e.preventDefault();
      start = Date.now();
      clearInterval(timer);
      timer = setInterval(tick, 80);
    };
    const abbruch = () => {
      clearInterval(timer);
      timer = null;
      ring.style.strokeDashoffset = UMFANG;
    };
    kreis.addEventListener("pointerdown", los);
    kreis.addEventListener("pointerup", abbruch);
    kreis.addEventListener("pointerleave", abbruch);
    kreis.addEventListener("pointercancel", abbruch);
  }

  function renderFortschritt() {
    const s = Staat.stats;
    const alleSticker = 24;
    const freiSticker = Staat.albumFrei.length + 8; // 8 free base stickers
    document.getElementById("eltern-fortschritt").innerHTML = `
      <p><span>✨ Feenstaub gesamt</span><span class="wert">${Staat.dust}</span></p>
      <p><span>📖 Sticker gesammelt</span><span class="wert">${Math.min(freiSticker, alleSticker)} / ${alleSticker}</span></p>
      <p><span>🎨 Ausmalbilder fertig</span><span class="wert">${s.bilder || 0} / 6</span></p>
      <p><span>🌸 Blumen gezüchtet</span><span class="wert">${s.blumen || 0}</span></p>
      <p><span>🧪 Tränke gebraut</span><span class="wert">${s.traenke || 0}</span></p>
      <p><span>📸 Looks gespeichert</span><span class="wert">${s.looks || 0}</span></p>`;
  }

  function init() {
    gateInit();

    const musik = document.getElementById("opt-musik");
    const sound = document.getElementById("opt-sound");
    musik.checked = Staat.settings.musik;
    sound.checked = Staat.settings.sound;
    musik.addEventListener("change", () => {
      Staat.setSetting("musik", musik.checked);
      if (musik.checked) Klang.musikStart();
      else Klang.musikStop();
    });
    sound.addEventListener("change", () => {
      Staat.setSetting("sound", sound.checked);
      if (sound.checked) Klang.chime();
    });

    const reset = document.getElementById("btn-reset-all");
    reset.addEventListener("pointerup", () => {
      if (!resetArm) {
        resetArm = true;
        reset.textContent = "⚠️ Wirklich alles löschen? Nochmal tippen";
        setTimeout(() => {
          resetArm = false;
          reset.textContent = "↺ Fortschritt zurücksetzen";
        }, 3500);
        return;
      }
      Staat.resetAll();
    });
  }

  return { init, renderFortschritt };
})();
