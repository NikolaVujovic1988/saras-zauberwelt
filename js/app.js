/* Saras Zauberwelt — shell: navigation, ambient magic, PWA */
const App = (() => {
  const screens = () => document.querySelectorAll(".screen");

  function go(name) {
    screens().forEach((s) => s.classList.toggle("is-active", s.id === "screen-" + name));
    const hud = document.getElementById("hud");
    if (name === "karte") {
      hud.classList.add("is-visible");
      hud.classList.remove("kompakt");
    } else if (name === "eltern" || name === "eltern-gate") {
      hud.classList.remove("is-visible");
    } else {
      hud.classList.add("is-visible", "kompakt");
    }
    if (name === "album" && typeof Album !== "undefined") Album.refresh();
  }

  function init() {
    document.querySelectorAll("[data-go]").forEach((btn) => {
      btn.addEventListener("pointerup", (e) => {
        Klang.pop();
        Funkel.burst(e.clientX, e.clientY, { count: 6 });
        go(btn.dataset.go);
      });
    });

    window.addEventListener("pointerdown", () => Klang.unlock(), { once: true });

    /* ambient floating stars */
    const ambient = document.getElementById("ambient");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const STAR = 'M12 2 l2.8 6 6.2 .9 -4.5 4.3 1.1 6.3 -5.6 -3 -5.6 3 1.1 -6.3 -4.5 -4.3 6.2 -.9 Z';
    const starCount = reduced ? 6 : 16;
    for (let i = 0; i < starCount; i++) {
      const d = document.createElement("div");
      d.className = "ambient-star";
      const size = 8 + Math.random() * 14;
      d.style.left = Math.random() * 100 + "vw";
      d.style.top = Math.random() * 100 + "vh";
      d.style.animationDelay = Math.random() * 3.4 + "s";
      d.style.animationDuration = 2.6 + Math.random() * 2.4 + "s";
      d.innerHTML = `<svg viewBox="0 0 24 24" style="width:${size}px;height:${size}px"><path d="${STAR}" fill="currentColor"/></svg>`;
      ambient.appendChild(d);
    }

    document.addEventListener("gesturestart", (e) => e.preventDefault());
    document.addEventListener("contextmenu", (e) => e.preventDefault());

    Staat.updateHud();
    Karte.init();
    Malen.init();
    Anziehen.init();
    Garten.init();
    Trank.init();
    Stall.init();
    Album.init();
    Eltern.init();
    go("karte");

    if ("serviceWorker" in navigator && location.protocol === "https:") {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }
  }

  init();
  return { go };
})();
