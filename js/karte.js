/* Zauberkarte — home hub with glowing place-orbs */
const Karte = (() => {
  const OUT = "#4a3a6e";

  const ORTE = [
    {
      id: "anziehen", label: "Schloss", x: 48, y: 43, orb: 215,
      icon: `<svg viewBox="0 0 96 96">
        <ellipse cx="48" cy="81" rx="36" ry="7" fill="#241640" opacity=".18"/>
        <path d="M15 35 L23 16 L31 35 Z" fill="#9d7bec" stroke="${OUT}" stroke-width="2.6" stroke-linejoin="round"/>
        <path d="M65 35 L73 16 L81 35 Z" fill="#9d7bec" stroke="${OUT}" stroke-width="2.6" stroke-linejoin="round"/>
        <path d="M38 25 L48 6 L58 25 Z" fill="#b78ae6" stroke="${OUT}" stroke-width="2.6" stroke-linejoin="round"/>
        <rect x="16" y="34" width="15" height="43" rx="4" fill="#b99ce0" stroke="${OUT}" stroke-width="2.6"/>
        <rect x="65" y="34" width="15" height="43" rx="4" fill="#b99ce0" stroke="${OUT}" stroke-width="2.6"/>
        <rect x="24" y="43" width="48" height="34" rx="5" fill="#cbb3ea" stroke="${OUT}" stroke-width="2.6"/>
        <rect x="40" y="25" width="16" height="30" rx="4" fill="#dcc9f2" stroke="${OUT}" stroke-width="2.6"/>
        <path d="M48 8 L48 1 L60 5 L48 9 Z" fill="#f5d76e" stroke="${OUT}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M40 77 L40 62 A8 8 0 0 1 56 62 L56 77 Z" fill="#7c5cc9" stroke="${OUT}" stroke-width="2.6"/>
        <path d="M48 62 L48 76" stroke="#f0dcae" stroke-width="2" stroke-linecap="round" opacity=".8"/>
        <g fill="#f5d76e">
          <circle cx="24" cy="49" r="3"/><circle cx="72" cy="49" r="3"/>
          <path d="M48 39 l2 4.2 4.6 .7 -3.3 3.1 .8 4.5 -4.1 -2.2 -4.1 2.2 .8 -4.5 -3.3 -3.1 4.6 -.7 Z"/>
          <circle cx="35" cy="18" r="2.4"/><circle cx="62" cy="24" r="2"/>
        </g>
      </svg>` },
    {
      id: "trank", label: "Zauberturm", x: 76, y: 31, orb: 126,
      icon: `<svg viewBox="0 0 96 96">
        <ellipse cx="48" cy="82" rx="28" ry="6" fill="#241640" opacity=".18"/>
        <path d="M28 77 C34 68 62 68 68 77 L70 84 L26 84 Z" fill="#8d6bb0" stroke="${OUT}" stroke-width="2.4" stroke-linejoin="round"/>
        <rect x="33" y="30" width="30" height="49" rx="7" fill="#b99ce0" stroke="${OUT}" stroke-width="2.8"/>
        <path d="M29 31 L48 6 L67 31 Z" fill="#9d7bec" stroke="${OUT}" stroke-width="2.8" stroke-linejoin="round"/>
        <path d="M37 42 C43 39 53 39 59 42" fill="none" stroke="#dcc9f2" stroke-width="3" stroke-linecap="round" opacity=".9"/>
        <circle cx="48" cy="54" r="11" fill="#7fd4ae" stroke="${OUT}" stroke-width="2.5"/>
        <path d="M39 56 C45 60 52 60 58 56" fill="none" stroke="#fdf3fb" stroke-width="2.2" stroke-linecap="round" opacity=".9"/>
        <path d="M48 11 L48 1" stroke="#f5d76e" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="48" cy="8" r="4" fill="#f5d76e"/>
        <g fill="#f5d76e">
          <path d="M75 19 l2 4.2 4.6 .7 -3.3 3.1 .8 4.5 -4.1 -2.2 -4.1 2.2 .8 -4.5 -3.3 -3.1 4.6 -.7 Z"/>
          <circle cx="23" cy="24" r="2.8"/><circle cx="68" cy="56" r="2.3"/>
        </g>
      </svg>` },
    {
      id: "malen", label: "Mal-Atelier", x: 23, y: 68, orb: 196,
      icon: `<svg viewBox="0 0 96 96">
        <ellipse cx="48" cy="82" rx="32" ry="6" fill="#241640" opacity=".15"/>
        <path d="M18 73 C12 58 20 30 47 22 C73 14 86 33 81 49 C77 63 62 59 56 65 C50 71 59 79 47 83 C36 86 25 82 18 73 Z" fill="#fdf3fb" stroke="${OUT}" stroke-width="2.8" stroke-linejoin="round"/>
        <circle cx="36" cy="42" r="8" fill="#f78fb3" stroke="${OUT}" stroke-width="2"/>
        <circle cx="58" cy="36" r="8" fill="#9d7bec" stroke="${OUT}" stroke-width="2"/>
        <circle cx="34" cy="60" r="8" fill="#f5d76e" stroke="${OUT}" stroke-width="2"/>
        <circle cx="65" cy="52" r="8" fill="#7fd4ae" stroke="${OUT}" stroke-width="2"/>
        <circle cx="48" cy="67" r="5.5" fill="#7ec8e3" stroke="${OUT}" stroke-width="1.8"/>
        <path d="M70 63 L84 78" stroke="#c99b6f" stroke-width="8" stroke-linecap="round"/>
        <path d="M77 70 L88 59" stroke="#fdf3fb" stroke-width="10" stroke-linecap="round"/>
        <path d="M77 70 L88 59" stroke="${OUT}" stroke-width="2.4" stroke-linecap="round"/>
        <g fill="#f5d76e">
          <path d="M20 20 l2.2 4.8 5.2 .8 -3.8 3.6 .9 5.1 -4.5 -2.5 -4.5 2.5 .9 -5.1 -3.8 -3.6 5.2 -.8 Z"/>
          <circle cx="75" cy="21" r="2.5"/><circle cx="82" cy="38" r="2"/>
        </g>
      </svg>` },
    {
      id: "garten", label: "Zaubergarten", x: 50, y: 81, orb: 188,
      icon: `<svg viewBox="0 0 96 96">
        <ellipse cx="48" cy="82" rx="31" ry="8" fill="#8d6bb0" opacity=".45"/>
        <path d="M48 82 L48 45" stroke="#3f8f5f" stroke-width="6.5" stroke-linecap="round"/>
        <path d="M49 67 C35 68 28 57 29 50 C40 50 49 57 49 67 Z" fill="#6fcf97" stroke="${OUT}" stroke-width="2.2" stroke-linejoin="round"/>
        <path d="M48 70 C61 69 67 59 66 52 C56 52 48 60 48 70 Z" fill="#7fd4ae" stroke="${OUT}" stroke-width="2.2" stroke-linejoin="round"/>
        <g fill="#f78fb3" stroke="${OUT}" stroke-width="2">
          <circle cx="48" cy="18" r="10"/><circle cx="63" cy="29" r="10"/><circle cx="58" cy="46" r="10"/><circle cx="38" cy="46" r="10"/><circle cx="33" cy="29" r="10"/>
        </g>
        <circle cx="48" cy="32" r="9" fill="#f5d76e" stroke="${OUT}" stroke-width="2"/>
        <g fill="#f5d76e">
          <circle cx="22" cy="37" r="2.4"/><circle cx="75" cy="38" r="2.4"/>
          <path d="M68 12 l1.8 3.7 4.1 .6 -3 2.9 .7 4.1 -3.6 -2 -3.6 2 .7 -4.1 -3 -2.9 4.1 -.6 Z"/>
        </g>
      </svg>` },
    {
      id: "stall", label: "Einhorn-Stall", x: 72, y: 70, orb: 132,
      icon: `<svg viewBox="0 0 96 96">
        <ellipse cx="52" cy="82" rx="34" ry="6" fill="#241640" opacity=".15"/>
        <path fill="url(#m-mane2)" stroke="${OUT}" stroke-width="2.2" d="M30 36 C22 42 20 54 24 64 C27 72 34 78 43 80 C37 71 35 63 37 54 C39 47 36 40 30 36 Z"/>
        <path fill="url(#m-horn)" stroke="${OUT}" stroke-width="2.1" d="M46 30 C45 22 48 12 53 6 C55 14 55 24 52 31 Z"/>
        <path d="M49 17 L54 19 M47 25 L52 27" stroke="#fff6cf" stroke-width="1.6" stroke-linecap="round"/>
        <path fill="#fff" stroke="${OUT}" stroke-width="2.2" d="M60 26 C62 20 67 15 73 14 C72 21 68 27 63 30 Z"/>
        <path fill="#fff" stroke="${OUT}" stroke-width="2.5" d="M38 40 C44 32 56 30 65 34 C74 38 79 46 80 55 C81 62 77 69 70 72 C74 74 76 77 76 81 L48 81 C38 80 31 72 30 62 C29 52 33 46 38 40 Z"/>
        <path d="M48 78 C49 72 55 72 56 80 M65 78 C66 73 71 73 72 81" stroke="#efe6f8" stroke-width="4" stroke-linecap="round"/>
        <circle cx="52" cy="52" r="5" fill="#3d2b66"/>
        <circle cx="54" cy="50" r="1.7" fill="#fff"/>
        <ellipse cx="45" cy="62" rx="5" ry="3.6" fill="#f8a8c8" opacity=".65"/>
        <path fill="url(#m-mane)" stroke="${OUT}" stroke-width="2.1" d="M40 34 C46 26 58 24 66 28 C60 30 56 34 54 39 C59 36 65 36 69 39 C63 41 60 45 59 50 C56 44 51 40 45 40 C47 44 47 49 45 53 C42 47 40 40 40 34 Z"/>
        <g fill="#f5d76e">
          <path d="M76 26 l2 4.2 4.6 .7 -3.3 3.1 .8 4.5 -4.1 -2.2 -4.1 2.2 .8 -4.5 -3.3 -3.1 4.6 -.7 Z"/>
          <circle cx="24" cy="24" r="2.5"/><circle cx="84" cy="57" r="2"/>
        </g>
      </svg>` },
    {
      id: "album", label: "Sticker-Album", x: 89, y: 56, orb: 116,
      icon: `<svg viewBox="0 0 96 96">
        <ellipse cx="50" cy="81" rx="32" ry="6" fill="#241640" opacity=".15"/>
        <rect x="17" y="17" width="62" height="61" rx="11" fill="#fdf3fb" stroke="${OUT}" stroke-width="2.7"/>
        <rect x="17" y="17" width="13" height="61" rx="6.5" fill="#e0537a" stroke="${OUT}" stroke-width="2.2"/>
        <path d="M31 25 L73 25 M31 70 L73 70" stroke="#dcc9f2" stroke-width="2.5" stroke-linecap="round" opacity=".8"/>
        <path d="M53 30 l3.6 7.6 8.3 1.2 -6 5.8 1.4 8.2 -7.3 -4 -7.3 4 1.4 -8.2 -6 -5.8 8.3 -1.2 Z" fill="#f5d76e" stroke="${OUT}" stroke-width="2" stroke-linejoin="round"/>
        <circle cx="41" cy="63" r="7.5" fill="#f78fb3" stroke="${OUT}" stroke-width="1.8"/>
        <path d="M66 56 c8 6 5 17 -4 19 c-9 -2 -12 -13 -4 -19 c3 -2 5 -2 8 0 Z" fill="#7fd4ae" stroke="${OUT}" stroke-width="1.8"/>
        <g fill="#f5d76e">
          <circle cx="76" cy="18" r="2.6"/><circle cx="18" cy="82" r="2.2"/>
        </g>
      </svg>` },
  ];

  function init() {
    const wrap = document.getElementById("karte-orbs");
    wrap.innerHTML = "";
    ORTE.forEach((o) => {
      const b = document.createElement("button");
      b.className = "ort";
      b.classList.add("ort-" + o.id);
      b.style.left = o.x + "%";
      b.style.top = o.y + "%";
      b.style.setProperty("--orb", `clamp(104px, ${o.orb / 8}vmin, ${o.orb}px)`);
      b.innerHTML = `<span class="ort-orb">${o.icon}</span><span class="ort-label">${o.label}</span>`;
      b.addEventListener("pointerup", (e) => {
        Klang.pop();
        Funkel.burst(e.clientX, e.clientY, { count: 8 });
        App.go(o.id);
      });
      wrap.appendChild(b);
    });
  }

  return { init };
})();
