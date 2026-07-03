/* Funkel-Effekte — the finger is the wand */
const Funkel = (() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  const STAR = 'M12 2 l2.8 6 6.2 .9 -4.5 4.3 1.1 6.3 -5.6 -3 -5.6 3 1.1 -6.3 -4.5 -4.3 6.2 -.9 Z';
  const COLORS = ["#f5d76e", "#ffffff", "#f7a8c4", "#c9a8f7", "#a8e6cf"];

  function makeStar(color, size) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.style.width = size + "px";
    svg.style.height = size + "px";
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("d", STAR);
    p.setAttribute("fill", color);
    svg.appendChild(p);
    return svg;
  }

  function burst(x, y, { count = 12, colors = COLORS, spread = 110 } = {}) {
    if (reduced.matches) count = Math.min(count, 4);
    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.className = "spark";
      const size = 10 + Math.random() * 18;
      el.appendChild(makeStar(colors[i % colors.length], size));
      el.style.left = x - size / 2 + "px";
      el.style.top = y - size / 2 + "px";
      document.body.appendChild(el);

      const ang = Math.random() * Math.PI * 2;
      const dist = spread * (0.35 + Math.random() * 0.65);
      const dx = Math.cos(ang) * dist;
      const dy = Math.sin(ang) * dist - 20;
      const dur = 600 + Math.random() * 500;

      const anim = el.animate(
        [
          { transform: "translate(0,0) scale(.4) rotate(0deg)", opacity: 1 },
          { transform: `translate(${dx * 0.7}px, ${dy * 0.7}px) scale(1.1) rotate(${120 + Math.random() * 180}deg)`, opacity: 1, offset: 0.55 },
          { transform: `translate(${dx}px, ${dy + 40}px) scale(.2) rotate(${240 + Math.random() * 240}deg)`, opacity: 0 },
        ],
        { duration: reduced.matches ? 250 : dur, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" }
      );
      anim.onfinish = () => el.remove();
    }
  }

  function drops(el, count = 7) {
    const r = el.getBoundingClientRect();
    for (let i = 0; i < count; i++) {
      const d = document.createElement("div");
      d.className = "drop";
      d.style.left = r.left + r.width * (0.25 + Math.random() * 0.5) + "px";
      d.style.top = r.top + r.height * 0.05 + "px";
      document.body.appendChild(d);
      const anim = d.animate(
        [
          { transform: "translateY(0)", opacity: 0 },
          { opacity: 1, offset: 0.2 },
          { transform: `translateY(${r.height * 0.6 + Math.random() * 20}px)`, opacity: 0 },
        ],
        { duration: 500 + Math.random() * 300, delay: i * 60, easing: "ease-in", fill: "forwards" }
      );
      anim.onfinish = () => d.remove();
    }
  }

  function flyToJar(x, y, jarEl, onArrive) {
    const r = jarEl.getBoundingClientRect();
    const tx = r.left + r.width / 2;
    const ty = r.top + r.height / 2;
    const n = reduced.matches ? 1 : 5;
    for (let i = 0; i < n; i++) {
      const size = 16 + Math.random() * 10;
      const el = document.createElement("div");
      el.className = "spark";
      el.appendChild(makeStar("#f5d76e", size));
      el.style.left = x + "px";
      el.style.top = y + "px";
      document.body.appendChild(el);
      const midX = (x + tx) / 2 + (Math.random() - 0.5) * 120;
      const midY = Math.min(y, ty) - 60 - Math.random() * 80;
      const anim = el.animate(
        [
          { transform: "translate(0,0) scale(1)", opacity: 1 },
          { transform: `translate(${midX - x}px, ${midY - y}px) scale(1.2)`, opacity: 1, offset: 0.5 },
          { transform: `translate(${tx - x}px, ${ty - y}px) scale(.3)`, opacity: 0.9 },
        ],
        { duration: reduced.matches ? 200 : 700 + i * 90, easing: "cubic-bezier(.4,0,.6,1)", fill: "forwards" }
      );
      anim.onfinish = () => { el.remove(); if (i === n - 1 && onArrive) onArrive(); };
    }
  }

  /* soap bubbles floating up from (x,y) */
  function bubbles(x, y, count = 8) {
    if (reduced.matches) count = 3;
    for (let i = 0; i < count; i++) {
      const b = document.createElement("div");
      b.className = "seifen-blase";
      const size = 14 + Math.random() * 26;
      b.style.width = b.style.height = size + "px";
      b.style.left = x + (Math.random() - 0.5) * 120 + "px";
      b.style.top = y + (Math.random() - 0.5) * 40 + "px";
      document.body.appendChild(b);
      const anim = b.animate(
        [
          { transform: "translateY(0) scale(.5)", opacity: 0 },
          { opacity: 1, offset: 0.25 },
          { transform: `translate(${(Math.random() - 0.5) * 60}px, ${-90 - Math.random() * 80}px) scale(1)`, opacity: 0 },
        ],
        { duration: 1200 + Math.random() * 700, delay: i * 90, easing: "ease-out", fill: "forwards" }
      );
      anim.onfinish = () => b.remove();
    }
  }

  /* floating hearts */
  function hearts(x, y, count = 4) {
    if (reduced.matches) count = 2;
    for (let i = 0; i < count; i++) {
      const h = document.createElement("div");
      h.className = "schweb-herz";
      h.textContent = "💗";
      h.style.left = x + (Math.random() - 0.5) * 90 + "px";
      h.style.top = y + "px";
      document.body.appendChild(h);
      const anim = h.animate(
        [
          { transform: "translateY(0) scale(.5)", opacity: 0 },
          { opacity: 1, offset: 0.2 },
          { transform: `translate(${(Math.random() - 0.5) * 50}px, ${-100 - Math.random() * 60}px) scale(1.15)`, opacity: 0 },
        ],
        { duration: 1100 + Math.random() * 500, delay: i * 120, easing: "ease-out", fill: "forwards" }
      );
      anim.onfinish = () => h.remove();
    }
  }

  return { burst, drops, flyToJar, bubbles, hearts };
})();
