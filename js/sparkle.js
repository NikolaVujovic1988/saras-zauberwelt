/* Funkel-Effekte — the finger is the wand */
const Funkel = (() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  const SVG_NS = "http://www.w3.org/2000/svg";
  const STAR = 'M12 2 l2.8 6 6.2 .9 -4.5 4.3 1.1 6.3 -5.6 -3 -5.6 3 1.1 -6.3 -4.5 -4.3 6.2 -.9 Z';
  const DIAMOND = "M12 1.8 15.2 8.8 22.2 12 15.2 15.2 12 22.2 8.8 15.2 1.8 12 8.8 8.8Z";
  const DOT_COLORS = ["#fff7bd", "#ffffff", "#ffd5e6", "#d8c4ff", "#b8f5df"];
  const COLORS = ["#f5d76e", "#ffffff", "#f7a8c4", "#c9a8f7", "#a8e6cf"];
  const HEART_COLORS = ["#ff6ea9", "#ff8dc7", "#f7a8c4", "#ffb1dd"];
  const DUST_COLORS = ["#f5d76e", "#fff7bd", "#ffffff", "#ffd98f"];
  let nextId = 0;

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function pick(list, i) {
    return list[i % list.length];
  }

  function svgEl(name) {
    return document.createElementNS(SVG_NS, name);
  }

  function addStop(grad, offset, color, opacity) {
    const stop = svgEl("stop");
    stop.setAttribute("offset", offset);
    stop.setAttribute("stop-color", color);
    stop.setAttribute("stop-opacity", opacity);
    grad.appendChild(stop);
  }

  function removeOnFinish(anim, el) {
    anim.onfinish = () => el.remove();
  }

  function makeStar(color, size, variant = "star") {
    const svg = svgEl("svg");
    const gradId = "funkel-grad-" + nextId++;
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.style.width = size + "px";
    svg.style.height = size + "px";
    svg.style.display = "block";
    svg.style.overflow = "visible";
    svg.style.filter = `drop-shadow(0 0 ${Math.max(5, size * 0.32)}px ${color})`;

    const defs = svgEl("defs");
    const grad = svgEl("radialGradient");
    grad.setAttribute("id", gradId);
    grad.setAttribute("cx", "35%");
    grad.setAttribute("cy", "28%");
    grad.setAttribute("r", "75%");
    addStop(grad, "0%", "#ffffff", ".98");
    addStop(grad, "38%", color, ".98");
    addStop(grad, "100%", color, ".38");
    defs.appendChild(grad);
    svg.appendChild(defs);

    const p = svgEl("path");
    p.setAttribute("d", variant === "diamond" ? DIAMOND : STAR);
    p.setAttribute("fill", `url(#${gradId})`);
    p.setAttribute("stroke", "#ffffff");
    p.setAttribute("stroke-opacity", ".7");
    p.setAttribute("stroke-width", ".65");
    p.setAttribute("stroke-linejoin", "round");
    svg.appendChild(p);

    if (variant === "star") {
      const core = svgEl("circle");
      core.setAttribute("cx", "12");
      core.setAttribute("cy", "12");
      core.setAttribute("r", "2.2");
      core.setAttribute("fill", "#ffffff");
      core.setAttribute("opacity", ".9");
      svg.appendChild(core);
    }

    return svg;
  }

  function makeOrb(color, size) {
    const el = document.createElement("div");
    el.style.width = size + "px";
    el.style.height = size + "px";
    el.style.borderRadius = "50%";
    el.style.background = `radial-gradient(circle at 35% 30%, #ffffff 0 18%, ${color} 42%, transparent 72%)`;
    el.style.boxShadow = `0 0 ${Math.max(8, size)}px ${color}`;
    return el;
  }

  function makeHeart(size, color) {
    const svg = svgEl("svg");
    const gradId = "heart-grad-" + nextId++;
    svg.setAttribute("viewBox", "0 0 32 30");
    svg.style.width = size + "px";
    svg.style.height = Math.round(size * 0.94) + "px";
    svg.style.display = "block";
    svg.style.overflow = "visible";
    svg.style.filter = `drop-shadow(0 4px ${Math.max(6, size * 0.24)}px rgba(118, 35, 105, .34))`;

    const defs = svgEl("defs");
    const grad = svgEl("radialGradient");
    grad.setAttribute("id", gradId);
    grad.setAttribute("cx", "34%");
    grad.setAttribute("cy", "24%");
    grad.setAttribute("r", "82%");
    addStop(grad, "0%", "#ffffff", ".95");
    addStop(grad, "34%", color, "1");
    addStop(grad, "100%", "#d93f88", ".9");
    defs.appendChild(grad);
    svg.appendChild(defs);

    const heart = svgEl("path");
    heart.setAttribute("d", "M16 27.5C8.2 21.1 3.2 16.5 3.2 10.5 3.2 6.7 6 4 9.7 4c2.2 0 4.4 1.1 5.7 2.9C16.8 5.1 19 4 21.3 4 25 4 28.8 6.7 28.8 10.5c0 6-5 10.6-12.8 17Z");
    heart.setAttribute("fill", `url(#${gradId})`);
    heart.setAttribute("stroke", "#ffffff");
    heart.setAttribute("stroke-opacity", ".66");
    heart.setAttribute("stroke-width", "1.2");
    svg.appendChild(heart);

    const shine = svgEl("path");
    shine.setAttribute("d", "M9 8.8c1.8-1.8 4.6-.9 5.4 1.3");
    shine.setAttribute("fill", "none");
    shine.setAttribute("stroke", "#ffffff");
    shine.setAttribute("stroke-linecap", "round");
    shine.setAttribute("stroke-width", "1.8");
    shine.setAttribute("opacity", ".65");
    svg.appendChild(shine);

    return svg;
  }

  function makeSpark(x, y, size, color, variant = "star") {
    const el = document.createElement("div");
    el.className = "spark";
    el.style.left = x - size / 2 + "px";
    el.style.top = y - size / 2 + "px";
    el.style.width = size + "px";
    el.style.height = size + "px";
    el.style.transformOrigin = "50% 50%";
    el.appendChild(variant === "orb" ? makeOrb(color, size) : makeStar(color, size, variant));
    document.body.appendChild(el);
    return el;
  }

  function pulseRing(x, y, color, size = 42) {
    const ring = document.createElement("div");
    ring.className = "spark";
    ring.style.left = x - size / 2 + "px";
    ring.style.top = y - size / 2 + "px";
    ring.style.width = size + "px";
    ring.style.height = size + "px";
    ring.style.borderRadius = "50%";
    ring.style.border = `2px solid ${color}`;
    ring.style.background = `radial-gradient(circle, ${color} 0 9%, transparent 54%)`;
    ring.style.boxShadow = `0 0 ${Math.round(size * 0.46)}px ${color}`;
    ring.style.opacity = "0";
    document.body.appendChild(ring);

    const anim = ring.animate(
      [
        { transform: "scale(.18)", opacity: 0 },
        { transform: "scale(.75)", opacity: .72, offset: .28 },
        { transform: "scale(1.55)", opacity: 0 },
      ],
      { duration: reduced.matches ? 180 : 520, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" }
    );
    removeOnFinish(anim, ring);
  }

  function burst(x, y, { count = 12, colors = COLORS, spread = 110 } = {}) {
    if (reduced.matches) count = Math.min(count, 4);
    colors = colors && colors.length ? colors : COLORS;
    if (!reduced.matches && count > 5) pulseRing(x, y, pick(colors, 0), Math.min(72, spread * 0.5));

    for (let i = 0; i < count; i++) {
      const size = rand(7, 24);
      const color = pick(colors, i);
      const variant = i % 5 === 0 ? "diamond" : (i % 4 === 0 ? "orb" : "star");
      const el = makeSpark(x, y, size, color, variant);

      const ang = (i / Math.max(count, 1)) * Math.PI * 2 + rand(-0.55, 0.55);
      const dist = spread * rand(0.34, 1.04);
      const dx = Math.cos(ang) * dist;
      const dy = Math.sin(ang) * dist - rand(18, 44);
      const arc = rand(-24, 24);
      const spin = rand(160, 420) * (Math.random() > 0.5 ? 1 : -1);
      const dur = rand(620, 1050);

      const anim = el.animate(
        [
          { transform: `translate(0,0) scale(.18) rotate(${-spin * 0.2}deg)`, opacity: 0 },
          { transform: `translate(${dx * 0.22}px, ${dy * 0.22}px) scale(1.2) rotate(${spin * 0.25}deg)`, opacity: 1, offset: 0.18 },
          { transform: `translate(${dx * 0.72 + arc}px, ${dy * 0.72 - 12}px) scale(.9) rotate(${spin * 0.72}deg)`, opacity: .9, offset: 0.62 },
          { transform: `translate(${dx}px, ${dy + 38}px) scale(.08) rotate(${spin}deg)`, opacity: 0 },
        ],
        { duration: reduced.matches ? 250 : dur, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" }
      );
      removeOnFinish(anim, el);

      if (!reduced.matches && i % 3 === 0) {
        const moteSize = rand(4, 8);
        const mote = makeSpark(x + rand(-6, 6), y + rand(-6, 6), moteSize, pick(DOT_COLORS, i), "orb");
        const moteAnim = mote.animate(
          [
            { transform: "translate(0,0) scale(.2)", opacity: .9 },
            { transform: `translate(${dx * 0.45}px, ${dy * 0.45}px) scale(1)`, opacity: .7, offset: .45 },
            { transform: `translate(${dx * 0.62 + rand(-12, 12)}px, ${dy * 0.62 + 22}px) scale(.1)`, opacity: 0 },
          ],
          { duration: dur * 0.74, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" }
        );
        removeOnFinish(moteAnim, mote);
      }
    }
  }

  function drops(el, count = 7) {
    const r = el.getBoundingClientRect();
    if (reduced.matches) count = Math.min(count, 3);

    for (let i = 0; i < count; i++) {
      const d = document.createElement("div");
      d.className = "drop";
      const size = rand(8, 14);
      const startX = r.left + r.width * rand(0.24, 0.76);
      const startY = r.top + r.height * 0.06 + rand(-4, 4);
      const fall = r.height * rand(0.48, 0.72) + rand(10, 26);
      const drift = rand(-14, 14);
      const delay = i * (reduced.matches ? 45 : 64);
      const dur = reduced.matches ? 320 : rand(560, 860);

      d.style.position = "fixed";
      d.style.left = startX - size / 2 + "px";
      d.style.top = startY - size / 2 + "px";
      d.style.width = size + "px";
      d.style.height = Math.round(size * 1.42) + "px";
      d.style.opacity = "0";
      d.style.transformOrigin = "50% 20%";
      d.style.background = "radial-gradient(circle at 32% 22%, #ffffff 0 12%, oklch(0.91 0.05 235 / .94) 34%, oklch(0.67 0.13 236 / .86) 100%)";
      d.style.boxShadow = "0 0 12px oklch(0.76 0.11 235 / .62), inset -2px -4px 8px oklch(0.54 0.11 238 / .28)";

      const shine = document.createElement("span");
      shine.style.position = "absolute";
      shine.style.left = "25%";
      shine.style.top = "18%";
      shine.style.width = "28%";
      shine.style.height = "24%";
      shine.style.borderRadius = "50%";
      shine.style.background = "rgba(255,255,255,.78)";
      shine.style.pointerEvents = "none";
      d.appendChild(shine);
      document.body.appendChild(d);

      const anim = d.animate(
        [
          { transform: `translate(0, -4px) scale(.38) rotate(${rand(-10, 10)}deg)`, opacity: 0 },
          { transform: `translate(${drift * 0.18}px, ${fall * 0.18}px) scale(1.05) rotate(${rand(-4, 4)}deg)`, opacity: .98, offset: 0.22 },
          { transform: `translate(${drift}px, ${fall}px) scale(.78) rotate(${rand(-8, 8)}deg)`, opacity: .45, offset: 0.76 },
          { transform: `translate(${drift + rand(-8, 8)}px, ${fall + 12}px) scale(.18) rotate(${rand(-12, 12)}deg)`, opacity: 0 },
        ],
        { duration: dur, delay, easing: "cubic-bezier(.3,.02,.65,1)", fill: "forwards" }
      );
      removeOnFinish(anim, d);

      if (!reduced.matches && i % 2 === 0) {
        window.setTimeout(() => {
          const splash = makeSpark(startX + drift, startY + fall + 4, rand(5, 8), "#bff5ff", "orb");
          const splashAnim = splash.animate(
            [
              { transform: "translate(0,0) scale(.2)", opacity: .8 },
              { transform: `translate(${rand(-10, 10)}px, ${rand(-8, -3)}px) scale(1)`, opacity: .62, offset: .35 },
              { transform: `translate(${rand(-16, 16)}px, ${rand(3, 12)}px) scale(.08)`, opacity: 0 },
            ],
            { duration: 360, easing: "ease-out", fill: "forwards" }
          );
          removeOnFinish(splashAnim, splash);
        }, delay + dur * 0.72);
      }
    }
  }

  function flyToJar(x, y, jarEl, onArrive) {
    const r = jarEl.getBoundingClientRect();
    const tx = r.left + r.width / 2;
    const ty = r.top + r.height / 2;
    const n = reduced.matches ? 1 : 6;
    let remaining = n;

    for (let i = 0; i < n; i++) {
      const size = rand(8, 21);
      const color = pick(DUST_COLORS, i);
      const variant = i % 3 === 0 ? "diamond" : (i % 2 === 0 ? "star" : "orb");
      const startX = x + rand(-8, 8);
      const startY = y + rand(-8, 8);
      const el = makeSpark(startX, startY, size, color, variant);
      const midX = (startX + tx) / 2 + rand(-92, 92);
      const midY = Math.min(startY, ty) - rand(58, 136);
      const endX = tx + (reduced.matches ? 0 : rand(-8, 8));
      const endY = ty + (reduced.matches ? 0 : rand(-8, 8));
      const spin = rand(180, 460) * (Math.random() > 0.5 ? 1 : -1);
      const delay = reduced.matches ? 0 : i * 34;
      const dur = reduced.matches ? 230 : 720 + i * 72 + rand(0, 110);

      const anim = el.animate(
        [
          { transform: `translate(0,0) scale(.28) rotate(${-spin * 0.15}deg)`, opacity: 0 },
          { transform: `translate(${(midX - startX) * 0.22}px, ${(midY - startY) * 0.22}px) scale(1) rotate(${spin * 0.18}deg)`, opacity: 1, offset: 0.16 },
          { transform: `translate(${midX - startX}px, ${midY - startY}px) scale(1.24) rotate(${spin * 0.62}deg)`, opacity: 1, offset: 0.56 },
          { transform: `translate(${endX - startX}px, ${endY - startY}px) scale(.16) rotate(${spin}deg)`, opacity: .12 },
        ],
        { duration: dur, delay, easing: "cubic-bezier(.42,0,.22,1)", fill: "forwards" }
      );
      anim.onfinish = () => {
        el.remove();
        remaining--;
        if (remaining === 0) {
          if (!reduced.matches) pulseRing(tx, ty, "#f5d76e", 46);
          if (onArrive) onArrive();
        }
      };
    }
  }

  /* soap bubbles floating up from (x,y) */
  function bubbles(x, y, count = 8) {
    if (reduced.matches) count = 3;
    for (let i = 0; i < count; i++) {
      const b = document.createElement("div");
      b.className = "seifen-blase";
      const size = rand(14, 40);
      const startX = x + rand(-58, 58);
      const startY = y + rand(-22, 18);
      const rise = -rand(110, 190);
      const drift1 = rand(-34, 34);
      const drift2 = drift1 + rand(-44, 44);
      const delay = i * (reduced.matches ? 65 : 86);
      const dur = reduced.matches ? 650 : rand(1250, 2050);
      b.style.width = b.style.height = size + "px";
      b.style.left = startX - size / 2 + "px";
      b.style.top = startY - size / 2 + "px";
      b.style.borderWidth = Math.max(1.5, size * 0.08) + "px";
      b.style.background = "radial-gradient(circle at 30% 26%, rgba(255,255,255,.82) 0 13%, transparent 18%), radial-gradient(circle at 68% 72%, oklch(0.90 0.09 190 / .34), transparent 34%), radial-gradient(circle at 45% 42%, oklch(0.99 0.01 320 / .34), oklch(0.80 0.06 250 / .12) 66%, transparent 100%)";
      b.style.boxShadow = "inset -5px -7px 12px oklch(0.58 0.10 250 / .14), inset 3px 4px 9px oklch(1 0 0 / .42), 0 0 18px oklch(0.80 0.06 250 / .30)";
      b.style.opacity = "0";

      if (!reduced.matches && i % 3 === 0) {
        const glint = document.createElement("span");
        glint.style.position = "absolute";
        glint.style.right = "18%";
        glint.style.top = "22%";
        glint.style.width = "22%";
        glint.style.height = "22%";
        glint.style.borderRadius = "50%";
        glint.style.background = "rgba(255,255,255,.62)";
        glint.style.pointerEvents = "none";
        b.appendChild(glint);
      }

      document.body.appendChild(b);
      const anim = b.animate(
        [
          { transform: "translate(0, 12px) scale(.32)", opacity: 0 },
          { transform: `translate(${drift1 * 0.25}px, ${rise * 0.2}px) scale(.88)`, opacity: .86, offset: 0.22 },
          { transform: `translate(${drift1}px, ${rise * 0.62}px) scale(1.06)`, opacity: .78, offset: 0.62 },
          { transform: `translate(${drift2}px, ${rise}px) scale(.62)`, opacity: 0 },
        ],
        { duration: dur, delay, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" }
      );
      removeOnFinish(anim, b);
    }
  }

  /* floating hearts */
  function hearts(x, y, count = 4) {
    if (reduced.matches) count = 2;
    for (let i = 0; i < count; i++) {
      const h = document.createElement("div");
      h.className = "schweb-herz";
      const size = rand(25, 38);
      const startX = x + rand(-44, 44);
      const startY = y + rand(-6, 8);
      const lift = -rand(105, 175);
      const sway1 = rand(-28, 28);
      const sway2 = sway1 + rand(-26, 26);
      const delay = i * (reduced.matches ? 80 : 115);
      const dur = reduced.matches ? 620 : rand(1120, 1620);
      const spin = rand(-18, 18);

      h.style.left = startX - size / 2 + "px";
      h.style.top = startY - size / 2 + "px";
      h.style.width = size + "px";
      h.style.height = size + "px";
      h.style.transformOrigin = "50% 78%";
      h.style.opacity = "0";
      h.appendChild(makeHeart(size, pick(HEART_COLORS, i)));

      if (!reduced.matches && i % 2 === 0) {
        const twinkle = makeStar("#fff7bd", Math.max(8, size * 0.28), "diamond");
        twinkle.style.position = "absolute";
        twinkle.style.right = "-18%";
        twinkle.style.top = "4%";
        twinkle.style.width = Math.max(8, size * 0.28) + "px";
        twinkle.style.height = Math.max(8, size * 0.28) + "px";
        h.appendChild(twinkle);
      }

      document.body.appendChild(h);
      const anim = h.animate(
        [
          { transform: `translate(0, 8px) scale(.34) rotate(${-spin}deg)`, opacity: 0 },
          { transform: `translate(${sway1 * 0.28}px, ${lift * 0.18}px) scale(1.05) rotate(${spin * 0.5}deg)`, opacity: 1, offset: 0.18 },
          { transform: `translate(${sway1}px, ${lift * 0.62}px) scale(1.12) rotate(${-spin * 0.35}deg)`, opacity: .92, offset: 0.58 },
          { transform: `translate(${sway2}px, ${lift}px) scale(.72) rotate(${spin}deg)`, opacity: 0 },
        ],
        { duration: dur, delay, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" }
      );
      removeOnFinish(anim, h);
    }
  }

  return { burst, drops, flyToJar, bubbles, hearts };
})();
