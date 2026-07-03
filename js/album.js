/* Sticker-Album — sammeln & mit Feenstaub freischalten */
const Album = (() => {
  const OUT = "#4a3a6e";

  const mini = (inner, vb = "0 0 48 48") => `<svg viewBox="${vb}">${inner}</svg>`;

  const KATEGORIEN = [
    {
      id: "einhoerner", emoji: "🦄", name: "Einhörner",
      sticker: [
        { id: "e1", preis: 0,  art: `<circle cx="24" cy="24" r="16" fill="#fff"/><path fill="#e9b64d" d="M24 8 C24 4 26 0 29 -2 L30 6 C29 8 26 9 24 8 Z" transform="translate(0 6)"/><path fill="#d98ae0" d="M14 16 C11 21 11 28 14 33 L19 29 C17 25 17 20 20 16 Z"/><circle cx="28" cy="24" r="3" fill="#3d2b66"/><ellipse cx="21" cy="30" rx="3.4" ry="2.4" fill="#f8a8c8"/>` },
        { id: "e2", preis: 0,  art: `<ellipse cx="22" cy="30" rx="15" ry="10" fill="#fff"/><circle cx="35" cy="18" r="9" fill="#fff"/><path fill="#e9b64d" d="M35 9 C35 5 37 1 40 -1 L41 7 C40 9 37 10 35 9 Z"/><path fill="#f9a8cf" d="M27 13 C24 17 23 23 25 28 L29 24 C27 21 28 16 31 13 Z"/><circle cx="37" cy="18" r="2.2" fill="#3d2b66"/>` },
        { id: "e3", preis: 10, art: `<g fill="none" stroke-linecap="round"><path d="M4 22 C12 18 20 17 27 19" stroke="#f78fb3" stroke-width="3.4"/><path d="M5 27 C13 24 20 23 27 25" stroke="#f5d76e" stroke-width="3.4"/><path d="M6 32 C14 30 20 29 27 31" stroke="#a8e6cf" stroke-width="3.4"/></g><ellipse cx="30" cy="26" rx="12" ry="8" fill="#fff"/><circle cx="40" cy="17" r="7" fill="#fff"/><path fill="#e9b64d" d="M41 10 C41 7 42 4 45 2 L45 8 C44 10 42 11 41 10 Z"/><circle cx="42" cy="17" r="1.9" fill="#3d2b66"/>` },
        { id: "e4", preis: 10, art: `<circle cx="24" cy="26" r="15" fill="#fff"/><path fill="url(#m-mane)" d="M12 18 C9 24 9 32 13 38 L18 33 C15 29 15 23 19 18 Z"/><path fill="#e9b64d" d="M25 11 C25 6 27 2 31 -1 L32 7 C31 10 27 12 25 11 Z"/><circle cx="29" cy="26" r="3" fill="#3d2b66"/><path d="M20 33 Q24 36 28 33" stroke="#8d6bb0" stroke-width="2.4" fill="none" stroke-linecap="round"/><path fill="#e0537a" d="M15 12 c-3 -4 2 -8 5 -4 c3 -4 8 0 5 4 c-1.5 2 -3.5 3.5 -5 4.5 c-1.5 -1 -3.5 -2.5 -5 -4.5 Z"/>` },
        { id: "e5", preis: 15, art: `<ellipse cx="24" cy="42" rx="14" ry="3" fill="#3d2b66" opacity=".2"/><ellipse cx="22" cy="28" rx="13" ry="9" fill="#fff"/><path stroke="#fff" stroke-width="5" stroke-linecap="round" d="M14 34 L13 42 M22 36 L22 43 M30 34 L31 42"/><circle cx="33" cy="18" r="8" fill="#fff"/><path fill="#e9b64d" d="M34 10 C34 6 36 3 39 1 L40 7 C39 9 36 11 34 10 Z"/><path fill="#f9a8cf" d="M26 13 C23 16 22 21 24 25 L28 22 C26 19 27 15 30 13 Z"/><circle cx="35" cy="18" r="2" fill="#3d2b66"/><path fill="#f5d76e" d="M9 8 l1.8 3.8 4.2 .6 -3 2.9 .7 4.1 -3.7 -1.9 -3.7 1.9 .7 -4.1 -3 -2.9 4.2 -.6 Z"/>` },
        { id: "e6", preis: 20, art: `<circle cx="24" cy="24" r="17" fill="#f3ecfa"/><circle cx="24" cy="24" r="13" fill="#fff"/><path fill="#e9b64d" d="M24 10 C24 6 26 3 29 1 L30 7 C29 9 26 11 24 10 Z"/><path fill="url(#m-mane)" d="M14 16 C11 21 11 29 15 34 L19 30 C17 26 17 20 21 16 Z"/><circle cx="28" cy="23" r="2.6" fill="#3d2b66"/><g fill="#f5d76e"><circle cx="9" cy="12" r="2"/><circle cx="40" cy="15" r="2.4"/><circle cx="38" cy="36" r="2"/></g>` },
      ],
    },
    {
      id: "kronen", emoji: "👑", name: "Kronen",
      sticker: [
        { id: "k1", preis: 0,  art: `<path fill="#f0c964" d="M8 34 L11 15 C14 20 17 23 20 24 L24 10 L28 24 C31 23 34 20 37 15 L40 34 Z"/><rect x="8" y="34" width="32" height="6" rx="3" fill="#e9b64d"/><circle cx="24" cy="37" r="2.4" fill="#e0537a"/>` },
        { id: "k2", preis: 0,  art: `<path fill="none" stroke="#dfe6f2" stroke-width="5" stroke-linecap="round" d="M8 36 A 20 20 0 0 1 40 36"/><path fill="#7ec8e3" d="M24 10 C27 14 28 19 28 22 C28 26 26 28 24 28 C22 28 20 26 20 22 C20 19 21 14 24 10 Z"/><circle cx="13" cy="27" r="3" fill="#dfe6f2"/><circle cx="35" cy="27" r="3" fill="#dfe6f2"/>` },
        { id: "k3", preis: 10, art: `<path fill="none" stroke="#7fb069" stroke-width="4" stroke-linecap="round" d="M6 34 C14 24 34 24 42 34"/><circle fill="#f78fb3" cx="10" cy="31" r="5"/><circle fill="#f5d76e" cx="19" cy="26" r="5"/><circle fill="#a8e6cf" cx="29" cy="26" r="5"/><circle fill="#c9a8f7" cx="38" cy="31" r="5"/><g fill="#fff"><circle cx="10" cy="31" r="1.8"/><circle cx="19" cy="26" r="1.8"/><circle cx="29" cy="26" r="1.8"/><circle cx="38" cy="31" r="1.8"/></g>` },
        { id: "k4", preis: 15, art: `<path fill="#c9a8f7" d="M8 36 L12 14 L20 24 L24 8 L28 24 L36 14 L40 36 Z"/><rect x="8" y="36" width="32" height="5" rx="2.5" fill="#9d7bec"/><circle cx="24" cy="19" r="3" fill="#fff"/>` },
        { id: "k5", preis: 15, art: `<path fill="#f0c964" d="M6 38 L9 16 C13 22 18 25 24 25 C30 25 35 22 39 16 L42 38 Z"/><rect x="6" y="38" width="36" height="5" rx="2.5" fill="#e9b64d"/><circle cx="14" cy="32" r="2.4" fill="#7ec8e3"/><circle cx="24" cy="30" r="3" fill="#e0537a"/><circle cx="34" cy="32" r="2.4" fill="#7ec8e3"/>` },
        { id: "k6", preis: 20, art: `<circle cx="24" cy="26" r="15" fill="none" stroke="#f0c964" stroke-width="4"/><path fill="#f0c964" d="M24 4 l2.4 5.2 5.6 .8 -4 4 1 5.6 -5 -2.7 -5 2.7 1 -5.6 -4 -4 5.6 -.8 Z"/><circle cx="24" cy="26" r="5" fill="#e0537a"/>` },
      ],
    },
    {
      id: "blumen", emoji: "🌸", name: "Blumen",
      sticker: [
        { id: "b1", preis: 0,  art: `<g fill="#f78fb3"><circle cx="24" cy="10" r="8"/><circle cx="37" cy="19" r="8"/><circle cx="32" cy="34" r="8"/><circle cx="16" cy="34" r="8"/><circle cx="11" cy="19" r="8"/></g><circle cx="24" cy="22" r="7" fill="#f5d76e"/>` },
        { id: "b2", preis: 0,  art: `<g fill="#f5d76e"><ellipse cx="24" cy="8" rx="5" ry="10"/><ellipse cx="24" cy="8" rx="5" ry="10" transform="rotate(60 24 22)"/><ellipse cx="24" cy="8" rx="5" ry="10" transform="rotate(120 24 22)"/><ellipse cx="24" cy="8" rx="5" ry="10" transform="rotate(180 24 22)"/><ellipse cx="24" cy="8" rx="5" ry="10" transform="rotate(240 24 22)"/><ellipse cx="24" cy="8" rx="5" ry="10" transform="rotate(300 24 22)"/></g><circle cx="24" cy="22" r="8" fill="#7a4a2b"/>` },
        { id: "b3", preis: 10, art: `<circle cx="24" cy="22" r="14" fill="#ef8fc0"/><circle cx="15" cy="17" r="7" fill="#f8b4d6"/><circle cx="32" cy="16" r="7" fill="#f8b4d6"/><circle cx="30" cy="29" r="7" fill="#f8b4d6"/><circle cx="17" cy="28" r="7" fill="#f8b4d6"/><path d="M24 14 C17 16 15 23 18 28" fill="none" stroke="#d4548a" stroke-width="2.6" stroke-linecap="round"/>` },
        { id: "b4", preis: 10, art: `<path fill="#ef6461" d="M14 22 C12 10 16 4 24 4 C32 4 36 10 34 22 C31 28 27 30 24 30 C21 30 17 28 14 22 Z"/><path d="M20 8 C19 16 20 24 22 28 M28 8 C29 16 28 24 26 28" stroke="#00000022" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M24 30 L24 44" stroke="#3f8f5f" stroke-width="3.4" stroke-linecap="round"/>` },
        { id: "b5", preis: 15, art: `<g><ellipse cx="24" cy="9" rx="6" ry="10" fill="#f78fb3"/><ellipse cx="24" cy="9" rx="6" ry="10" fill="#f5d76e" transform="rotate(72 24 22)"/><ellipse cx="24" cy="9" rx="6" ry="10" fill="#7ec8e3" transform="rotate(144 24 22)"/><ellipse cx="24" cy="9" rx="6" ry="10" fill="#a8e6cf" transform="rotate(216 24 22)"/><ellipse cx="24" cy="9" rx="6" ry="10" fill="#c9a8f7" transform="rotate(288 24 22)"/></g><circle cx="24" cy="22" r="7" fill="#fdf0c2"/><path fill="#e9b64d" d="M24 18 l1.4 3 3.2 .5 -2.3 2.2 .5 3.2 -2.8 -1.5 -2.8 1.5 .5 -3.2 -2.3 -2.2 3.2 -.5 Z"/>` },
        { id: "b6", preis: 20, art: `<path d="M10 42 C14 32 20 26 30 22" stroke="#3f8f5f" stroke-width="3.4" fill="none" stroke-linecap="round"/><g fill="#c9a8f7"><circle cx="32" cy="14" r="6"/><circle cx="40" cy="20" r="6"/><circle cx="36" cy="28" r="6"/><circle cx="26" cy="24" r="6"/><circle cx="28" cy="12" r="6"/></g><circle cx="32" cy="20" r="5" fill="#f5d76e"/><path fill="#f5d76e" d="M10 10 l1.6 3.4 3.8 .5 -2.7 2.6 .6 3.8 -3.3 -1.8 -3.3 1.8 .6 -3.8 -2.7 -2.6 3.8 -.5 Z"/>` },
      ],
    },
    {
      id: "traenke", emoji: "🧪", name: "Tränke",
      sticker: [
        { id: "t1", preis: 0,  art: `<rect x="20" y="2" width="8" height="8" rx="2" fill="#c99b6f"/><path d="M20 10 L28 10 L28 18 C34 22 38 28 38 33 C38 40 32 45 24 45 C16 45 10 40 10 33 C10 28 14 22 20 18 Z" fill="#f78fb3"/><ellipse cx="19" cy="30" rx="3" ry="5" fill="#fff" opacity=".5"/>` },
        { id: "t2", preis: 0,  art: `<rect x="20" y="2" width="8" height="8" rx="2" fill="#c99b6f"/><path d="M20 10 L28 10 L28 18 C34 22 38 28 38 33 C38 40 32 45 24 45 C16 45 10 40 10 33 C10 28 14 22 20 18 Z" fill="#7ec8e3"/><path fill="#fff" d="M24 24 l1.6 3.4 3.8 .5 -2.7 2.6 .6 3.8 -3.3 -1.8 -3.3 1.8 .6 -3.8 -2.7 -2.6 3.8 -.5 Z"/>` },
        { id: "t3", preis: 10, art: `<rect x="20" y="2" width="8" height="8" rx="2" fill="#c99b6f"/><path d="M20 10 L28 10 L28 18 C34 22 38 28 38 33 C38 40 32 45 24 45 C16 45 10 40 10 33 C10 28 14 22 20 18 Z" fill="#f5d76e"/><g fill="#fff"><circle cx="18" cy="28" r="2"/><circle cx="28" cy="32" r="2.4"/><circle cx="22" cy="38" r="1.8"/></g>` },
        { id: "t4", preis: 15, art: `<rect x="20" y="2" width="8" height="8" rx="2" fill="#c99b6f"/><path d="M20 10 L28 10 L28 18 C34 22 38 28 38 33 C38 40 32 45 24 45 C16 45 10 40 10 33 C10 28 14 22 20 18 Z" fill="#a8e6cf"/><path d="M14 30 Q19 26 24 30 T34 30" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>` },
        { id: "t5", preis: 15, art: `<rect x="20" y="2" width="8" height="8" rx="2" fill="#c99b6f"/><path d="M20 10 L28 10 L28 18 C34 22 38 28 38 33 C38 40 32 45 24 45 C16 45 10 40 10 33 C10 28 14 22 20 18 Z" fill="#c9a8f7"/><path fill="#f5d76e" d="M24 22 l2 4.3 4.7 .7 -3.4 3.3 .8 4.7 -4.1 -2.2 -4.1 2.2 .8 -4.7 -3.4 -3.3 4.7 -.7 Z"/>` },
        { id: "t6", preis: 20, art: `<rect x="20" y="2" width="8" height="8" rx="2" fill="#c99b6f"/><path d="M20 10 L28 10 L28 18 C34 22 38 28 38 33 C38 40 32 45 24 45 C16 45 10 40 10 33 C10 28 14 22 20 18 Z" fill="#ef6461"/><path fill="#fff" d="M24 26 c-4 -5 3 -10 6 -5 c3 -5 10 0 6 5 c-2 3 -4.5 5 -6 6 c-1.5 -1 -4 -3 -6 -6 Z" transform="translate(-6 0)"/>` },
      ],
    },
  ];

  let kategorie = KATEGORIEN[0].id;

  function frei(st) {
    return st.preis === 0 || Staat.albumFrei.includes(st.id);
  }

  function renderSeite() {
    const kat = KATEGORIEN.find((k) => k.id === kategorie);
    const seite = document.getElementById("album-seite");
    const freiZahl = kat.sticker.filter(frei).length;
    seite.innerHTML = `
      <div class="seite-kopf">
        <span>${kat.emoji} ${kat.name}</span>
        <div class="seite-balken"><div style="transform:scaleX(${freiZahl / kat.sticker.length})"></div></div>
        <span>${freiZahl}/${kat.sticker.length}</span>
      </div>
      <div class="sticker-raster"></div>`;
    const raster = seite.querySelector(".sticker-raster");
    kat.sticker.forEach((st) => {
      const karte = document.createElement("button");
      const istFrei = frei(st);
      karte.className = "album-karte" + (istFrei ? "" : " gesperrt");
      if (istFrei) {
        karte.innerHTML = mini(st.art);
      } else {
        karte.innerHTML = `<span class="karte-schloss">🔒<span class="preis"><svg viewBox="0 0 24 24"><path fill="#e9b64d" d="M12 1 l2.6 6.4 6.9 .8 -5.2 4.7 1.4 6.8 -5.7 -3.6 -5.7 3.6 1.4 -6.8 -5.2 -4.7 6.9 -.8 Z"/></svg> ${st.preis}</span></span>`;
        karte.addEventListener("pointerup", (e) => {
          if (!Staat.spendDust(st.preis)) {
            Klang.pop();
            karte.animate([{ transform: "translateX(0)" }, { transform: "translateX(-7px)" }, { transform: "translateX(7px)" }, { transform: "translateX(0)" }], { duration: 280 });
            return;
          }
          Staat.freischalten(st.id);
          Klang.staub();
          Funkel.burst(e.clientX, e.clientY, { count: 18, spread: 140 });
          buildTabs();
          renderSeite();
          const neu = [...seite.querySelectorAll(".album-karte")].find((k) => k.querySelector("svg") && !k.classList.contains("gesperrt"));
          void neu;
        });
      }
      raster.appendChild(karte);
    });
  }

  function buildTabs() {
    const tabs = document.getElementById("album-tabs");
    tabs.innerHTML = "";
    KATEGORIEN.forEach((k) => {
      const freiZahl = k.sticker.filter(frei).length;
      const b = document.createElement("button");
      b.className = "album-tab" + (k.id === kategorie ? " is-active" : "");
      b.dataset.id = k.id;
      b.innerHTML = `<span class="tab-emoji">${k.emoji}</span><span>${freiZahl}/${k.sticker.length}</span>`;
      b.addEventListener("pointerup", () => {
        kategorie = k.id;
        Klang.pop();
        buildTabs();
        renderSeite();
      });
      tabs.appendChild(b);
    });
  }

  function refresh() {
    buildTabs();
    renderSeite();
  }

  function init() { refresh(); }

  return { init, refresh };
})();
