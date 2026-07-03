/* Mal-Atelier — Zauber-Ausmalbilder + Sticker */
const Malen = (() => {
  const OUT = "#4a3a6e";
  const S = `stroke="${OUT}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"`;
  const R = 'class="fill-region" fill="#ffffff"';
  const N = 'pointer-events="none"';

  const PAGES = [
    {
      id: "einhorn",
      svg: `
      <path ${R} ${S} d="M70 66 l7 15 16 2.3 -11.6 11.2 2.8 16 -14.2 -7.8 -14.2 7.8 2.8 -16 -11.6 -11.2 16 -2.3 Z"/>
      <path ${R} ${S} d="M382 100 l6 13 14 2 -10 9.6 2.4 13.8 -12.4 -6.7 -12.4 6.7 2.4 -13.8 -10 -9.6 14 -2 Z"/>
      <path ${R} ${S} d="M78 300 c-10 -14 8 -30 20 -18 c12 -12 30 4 20 18 c-6 9 -14 15 -20 19 c-6 -4 -14 -10 -20 -19 Z"/>
      <rect ${R} ${S} x="196" y="290" width="24" height="80" rx="11"/>
      <rect ${R} ${S} x="238" y="298" width="24" height="76" rx="11"/>
      <rect ${R} ${S} x="286" y="298" width="24" height="76" rx="11"/>
      <rect ${R} ${S} x="322" y="290" width="24" height="80" rx="11"/>
      <path ${R} ${S} d="M342 240 C 392 214 406 262 376 284 C 398 300 376 334 348 318 C 362 296 356 262 342 240 Z"/>
      <path ${R} ${S} d="M192 238 L238 232 L216 138 L178 152 Z"/>
      <circle ${R} ${S} cx="232" cy="116" r="24"/>
      <circle ${R} ${S} cx="244" cy="158" r="26"/>
      <circle ${R} ${S} cx="250" cy="202" r="26"/>
      <ellipse ${R} ${S} cx="258" cy="262" rx="94" ry="60"/>
      <path ${R} ${S} d="M198 96 L214 58 L228 98 Z"/>
      <path ${R} ${S} d="M172 94 L156 28 L198 88 Z"/>
      <ellipse ${R} ${S} cx="180" cy="130" rx="49" ry="39"/>
      <ellipse ${R} ${S} cx="146" cy="144" rx="23" ry="16"/>
      <g ${N}>
        <path d="M165 43 L190 84 M175 63 L205 94" fill="none" ${S} stroke-width="3.2"/>
        <path d="M212 67 C221 76 226 87 226 99" fill="none" ${S} stroke-width="3.2"/>
        <path d="M223 115 C236 127 242 142 244 158 M230 160 C242 174 247 190 246 207" fill="none" ${S} stroke-width="3.2"/>
        <path d="M222 226 C248 238 290 238 320 226" fill="none" ${S} stroke-width="3.2"/>
        <path d="M203 366 C209 360 216 360 221 366 M245 370 C250 364 257 364 262 370 M293 370 C298 364 305 364 310 370 M329 366 C334 360 341 360 346 366" fill="none" ${S} stroke-width="3"/>
        <path d="M348 256 C362 250 376 252 385 263 M354 284 C366 281 377 286 382 296" fill="none" ${S} stroke-width="3"/>
      </g>
      <circle cx="168" cy="122" r="6.5" fill="${OUT}"/>
      <circle cx="170.5" cy="119.5" r="2" fill="#ffffff"/>
      <circle cx="140" cy="146" r="3.5" fill="${OUT}"/>
      <path d="M130 154 Q138 161 148 158" fill="none" ${S}/>`,
    },
    {
      id: "prinzessin",
      svg: `
      <path ${R} ${S} d="M60 90 l6 13 14 2 -10 9.6 2.4 13.8 -12.4 -6.7 -12.4 6.7 2.4 -13.8 -10 -9.6 14 -2 Z"/>
      <path ${R} ${S} d="M378 210 l6 13 14 2 -10 9.6 2.4 13.8 -12.4 -6.7 -12.4 6.7 2.4 -13.8 -10 -9.6 14 -2 Z"/>
      <path ${R} ${S} d="M158 132 C 144 62 296 62 282 132 C 296 172 288 208 268 224 L 152 224 C 132 208 124 172 138 132 Z"/>
      <path ${R} ${S} d="M198 176 L222 176 L222 214 L198 214 Z"/>
      <circle ${R} ${S} cx="210" cy="132" r="52"/>
      <path ${R} ${S} d="M178 82 L186 52 L200 74 L210 46 L220 74 L234 52 L242 82 Z"/>
      <path ${R} ${S} d="M186 214 C176 206 164 210 160 220 C156 232 164 242 176 242 Z"/>
      <path ${R} ${S} d="M234 214 C244 206 256 210 260 220 C264 232 256 242 244 242 Z"/>
      <path ${R} ${S} d="M186 210 L234 210 C240 228 242 248 240 264 L180 264 C178 248 180 228 186 210 Z"/>
      <path ${R} ${S} d="M180 264 L240 264 C 290 320 312 376 322 410 C 250 424 170 424 98 410 C 108 376 130 320 180 264 Z"/>
      <path ${R} ${S} d="M204 336 c-8 -11 6 -24 16 -14 c10 -10 24 3 16 14 c-5 7 -11 12 -16 15 c-5 -3 -11 -8 -16 -15 Z"/>
      <ellipse ${R} ${S} cx="148" cy="424" rx="20" ry="10"/>
      <ellipse ${R} ${S} cx="272" cy="424" rx="20" ry="10"/>
      <g ${N}>
        <path d="M154 134 C168 94 252 94 266 134" fill="none" ${S} stroke-width="3.2"/>
        <path d="M171 116 C164 148 170 184 190 210 M249 116 C256 148 250 184 230 210" fill="none" ${S} stroke-width="3.1"/>
        <circle cx="210" cy="66" r="4.5" fill="none" ${S} stroke-width="3"/>
        <path d="M190 224 C200 238 220 238 230 224" fill="none" ${S} stroke-width="3"/>
        <path d="M180 264 C164 304 152 354 148 414 M210 266 C210 312 210 358 210 420 M240 264 C256 304 268 354 272 414" fill="none" ${S} stroke-width="3.2"/>
        <path d="M132 402 C176 390 244 390 288 402" fill="none" ${S} stroke-width="3.2"/>
      </g>
      <circle cx="192" cy="130" r="5.5" fill="${OUT}"/>
      <circle cx="228" cy="130" r="5.5" fill="${OUT}"/>
      <circle cx="194" cy="127.5" r="1.8" fill="#ffffff"/>
      <circle cx="230" cy="127.5" r="1.8" fill="#ffffff"/>
      <path d="M196 154 Q210 164 224 154" fill="none" ${S}/>`,
    },
    {
      id: "schloss",
      svg: `
      <circle ${R} ${S} cx="66" cy="66" r="30"/>
      <path ${R} ${S} d="M330 60 a20 20 0 0 1 38 -6 a16 16 0 0 1 26 12 a14 14 0 0 1 -6 27 l-62 0 a17 17 0 0 1 4 -33 Z"/>
      <rect ${R} ${S} x="20" y="380" width="400" height="42" rx="10"/>
      <rect ${R} ${S} x="95" y="150" width="55" height="232"/>
      <rect ${R} ${S} x="290" y="150" width="55" height="232"/>
      <rect ${R} ${S} x="160" y="190" width="120" height="192"/>
      <path ${R} ${S} d="M150 190 L220 118 L290 190 Z"/>
      <path ${R} ${S} d="M85 150 L122.5 82 L160 150 Z"/>
      <path ${R} ${S} d="M280 150 L317.5 82 L355 150 Z"/>
      <path ${R} ${S} d="M198 382 L198 318 A 22 22 0 0 1 242 318 L242 382 Z"/>
      <path ${R} ${S} d="M112 210 L112 190 A 10.5 10.5 0 0 1 133 190 L133 210 Z"/>
      <path ${R} ${S} d="M307 210 L307 190 A 10.5 10.5 0 0 1 328 190 L328 210 Z"/>
      <path ${R} ${S} d="M204 240 c-7 -10 5 -21 14 -12 c9 -9 21 2 14 12 c-4 6 -10 10 -14 13 c-4 -3 -10 -7 -14 -13 Z"/>
      <path d="M220 118 L220 62" fill="none" ${S}/>
      <path ${R} ${S} d="M220 62 L262 74 L220 88 Z"/>
      <g ${N}>
        <path d="M95 230 L150 230 M95 270 L150 270 M95 310 L150 310 M290 230 L345 230 M290 270 L345 270 M290 310 L345 310" fill="none" ${S} stroke-width="3"/>
        <path d="M170 230 L280 230 M170 270 L280 270 M170 310 L280 310" fill="none" ${S} stroke-width="3"/>
        <path d="M204 382 L204 326 M236 382 L236 326 M220 326 L220 382" fill="none" ${S} stroke-width="3"/>
        <path d="M64 48 A18 18 0 0 0 82 66" fill="none" ${S} stroke-width="3.2"/>
        <path d="M330 72 C346 64 368 64 386 76" fill="none" ${S} stroke-width="3"/>
        <circle cx="220" cy="350" r="3.5" fill="${OUT}"/>
      </g>`,
    },
    {
      id: "regenbogen",
      svg: `
      <path ${R} ${S} d="M14 420 A 206 206 0 0 1 426 420 L 396 420 A 176 176 0 0 0 44 420 Z"/>
      <path ${R} ${S} d="M44 420 A 176 176 0 0 1 396 420 L 366 420 A 146 146 0 0 0 74 420 Z"/>
      <path ${R} ${S} d="M74 420 A 146 146 0 0 1 366 420 L 336 420 A 116 116 0 0 0 104 420 Z"/>
      <path ${R} ${S} d="M104 420 A 116 116 0 0 1 336 420 L 306 420 A 86 86 0 0 0 134 420 Z"/>
      <path ${R} ${S} d="M134 420 A 86 86 0 0 1 306 420 L 276 420 A 56 56 0 0 0 164 420 Z"/>
      <circle ${R} ${S} cx="382" cy="64" r="30"/>
      <path ${R} ${S} d="M20 400 a22 22 0 0 1 40 -8 a18 18 0 0 1 30 12 a15 15 0 0 1 -6 28 l-70 0 a19 19 0 0 1 6 -32 Z"/>
      <path ${R} ${S} d="M350 400 a22 22 0 0 1 40 -8 a18 18 0 0 1 30 12 a15 15 0 0 1 -6 28 l-70 0 a19 19 0 0 1 6 -32 Z"/>
      <path ${R} ${S} d="M206 34 l7 15 16 2.3 -11.6 11.2 2.8 16 -14.2 -7.8 -14.2 7.8 2.8 -16 -11.6 -11.2 16 -2.3 Z"/>
      <g ${N}>
        <path d="M36 416 C48 408 68 408 80 416 M362 416 C374 408 394 408 406 416" fill="none" ${S} stroke-width="3.1"/>
        <path d="M54 420 C88 366 120 332 156 314 M384 420 C350 366 318 332 282 314" fill="none" ${S} stroke-width="3.1"/>
        <path d="M382 44 A19 19 0 0 0 397 74" fill="none" ${S} stroke-width="3.1"/>
        <path d="M84 114 l4 8.5 9.2 1.3 -6.6 6.4 1.6 9.1 -8.2 -4.5 -8.2 4.5 1.6 -9.1 -6.6 -6.4 9.2 -1.3 Z" fill="none" ${S} stroke-width="3"/>
        <path d="M334 112 l3 6.3 6.9 1 -5 4.8 1.2 6.8 -6.1 -3.3 -6.1 3.3 1.2 -6.8 -5 -4.8 6.9 -1 Z" fill="none" ${S} stroke-width="3"/>
      </g>`,
    },
    {
      id: "fee",
      svg: `
      <path ${R} ${S} d="M64 84 l6 13 14 2 -10 9.6 2.4 13.8 -12.4 -6.7 -12.4 6.7 2.4 -13.8 -10 -9.6 14 -2 Z"/>
      <path ${R} ${S} d="M150 190 C96 150 56 168 52 208 C49 238 74 260 108 254 C90 262 86 284 100 294 C120 308 152 290 162 250 Z"/>
      <path ${R} ${S} d="M270 190 C324 150 364 168 368 208 C371 238 346 260 312 254 C330 262 334 284 320 294 C300 308 268 290 258 250 Z"/>
      <path ${R} ${S} d="M164 120 C152 62 268 62 256 120 C266 152 262 180 246 194 L174 194 C158 180 154 152 164 120 Z"/>
      <path ${R} ${S} d="M198 158 L222 158 L222 192 L198 192 Z"/>
      <circle ${R} ${S} cx="210" cy="118" r="46"/>
      <circle ${R} ${S} cx="210" cy="62" r="14"/>
      <path ${R} ${S} d="M184 192 L236 192 C248 226 254 268 252 306 L242 296 L230 310 L218 296 L210 312 L202 296 L190 310 L178 296 L168 306 C166 268 172 226 184 192 Z"/>
      <path d="M148 250 L106 230" fill="none" ${S}/>
      <path ${R} ${S} d="M96 214 l5 10.6 11.6 1.7 -8.4 8.2 2 11.6 -10.2 -5.4 -10.2 5.4 2 -11.6 -8.4 -8.2 11.6 -1.7 Z"/>
      <path d="M186 350 L182 408 M234 350 L238 408" fill="none" ${S}/>
      <ellipse ${R} ${S} cx="178" cy="418" rx="18" ry="9"/>
      <ellipse ${R} ${S} cx="242" cy="418" rx="18" ry="9"/>
      <g ${N}>
        <path d="M154 205 C118 184 82 195 68 226 M157 226 C122 228 101 248 98 284" fill="none" ${S} stroke-width="3.1"/>
        <path d="M266 205 C302 184 338 195 352 226 M263 226 C298 228 319 248 322 284" fill="none" ${S} stroke-width="3.1"/>
        <path d="M180 222 C192 236 228 236 240 222" fill="none" ${S} stroke-width="3"/>
        <path d="M190 248 C202 264 218 264 230 248 M186 282 C200 294 220 294 234 282" fill="none" ${S} stroke-width="3"/>
        <path d="M180 118 C192 92 228 92 240 118" fill="none" ${S} stroke-width="3"/>
        <path d="M210 48 l2.5 5.4 5.8 .8 -4.2 4 1 5.8 -5.1 -2.8 -5.1 2.8 1 -5.8 -4.2 -4 5.8 -.8 Z" fill="none" ${S} stroke-width="2.7"/>
      </g>
      <circle cx="194" cy="116" r="5" fill="${OUT}"/>
      <circle cx="226" cy="116" r="5" fill="${OUT}"/>
      <circle cx="196" cy="114" r="1.7" fill="#ffffff"/>
      <circle cx="228" cy="114" r="1.7" fill="#ffffff"/>
      <path d="M198 138 Q210 147 222 138" fill="none" ${S}/>`,
    },
    {
      id: "schmetterling",
      svg: `
      <path ${R} ${S} d="M70 60 l6 13 14 2 -10 9.6 2.4 13.8 -12.4 -6.7 -12.4 6.7 2.4 -13.8 -10 -9.6 14 -2 Z"/>
      <path ${R} ${S} d="M366 336 l6 13 14 2 -10 9.6 2.4 13.8 -12.4 -6.7 -12.4 6.7 2.4 -13.8 -10 -9.6 14 -2 Z"/>
      <path ${R} ${S} d="M196 210 C150 130 74 108 46 150 C22 186 52 238 120 252 C70 262 52 304 76 330 C104 360 172 336 200 268 Z"/>
      <path ${R} ${S} d="M244 210 C290 130 366 108 394 150 C418 186 388 238 320 252 C370 262 388 304 364 330 C336 360 268 336 240 268 Z"/>
      <circle ${R} ${S} cx="118" cy="180" r="22"/>
      <circle ${R} ${S} cx="322" cy="180" r="22"/>
      <circle ${R} ${S} cx="124" cy="296" r="16"/>
      <circle ${R} ${S} cx="316" cy="296" r="16"/>
      <path ${R} ${S} d="M204 200 C192 216 190 288 204 306 C210 314 230 314 236 306 C250 288 248 216 236 200 C230 192 210 192 204 200 Z"/>
      <circle ${R} ${S} cx="220" cy="168" r="30"/>
      <path d="M204 146 C192 128 178 118 164 116 M236 146 C248 128 262 118 276 116" fill="none" ${S}/>
      <circle ${R} ${S} cx="160" cy="112" r="9"/>
      <circle ${R} ${S} cx="280" cy="112" r="9"/>
      <g ${N}>
        <path d="M192 218 C148 206 104 180 70 146 M192 242 C140 244 96 226 62 198 M198 264 C160 294 122 322 82 330" fill="none" ${S} stroke-width="3.1"/>
        <path d="M248 218 C292 206 336 180 370 146 M248 242 C300 244 344 226 378 198 M242 264 C280 294 318 322 358 330" fill="none" ${S} stroke-width="3.1"/>
        <path d="M118 178 l3.5 7.5 8.2 1.2 -6 5.8 1.4 8.1 -7.1 -3.9 -7.1 3.9 1.4 -8.1 -6 -5.8 8.2 -1.2 Z" fill="none" ${S} stroke-width="2.8"/>
        <path d="M322 178 l3.5 7.5 8.2 1.2 -6 5.8 1.4 8.1 -7.1 -3.9 -7.1 3.9 1.4 -8.1 -6 -5.8 8.2 -1.2 Z" fill="none" ${S} stroke-width="2.8"/>
        <path d="M220 204 L220 304" fill="none" ${S} stroke-width="3"/>
      </g>
      <circle cx="208" cy="164" r="5" fill="${OUT}"/>
      <circle cx="232" cy="164" r="5" fill="${OUT}"/>
      <path d="M210 182 Q220 189 230 182" fill="none" ${S}/>`,
    },
  ];

  /* mini tab art = the page itself, shrunk */
  const COLORS = [
    "#ef6461", "#f79256", "#f5d76e", "#8bc98a", "#a8e6cf",
    "#7ec8e3", "#6494ed", "#9b7ede", "#f78fb3", "#b98a67", "#ffffff",
  ];
  const RAINBOW = "url(#regenbogen-fill)";
  const GLITZER = "url(#glitzer-fill)";

  const STICKER = {
    stern:  `<path fill="#f5d76e" stroke="${OUT}" stroke-width="2.2" stroke-linejoin="round" d="M24 2 l5.6 11.9 12.9 1.6 -9.4 9 2.4 12.9 -11.5 -6.2 -11.5 6.2 2.4 -12.9 -9.4 -9 12.9 -1.6 Z"/><path fill="#fff6cf" opacity=".8" d="M24 10 l2.4 7.2 7.1 .8 -5.3 4.4 1.6 7 -5.8 -3.9 -5.8 3.9 1.6 -7 -5.3 -4.4 7.1 -.8 Z"/>`,
    herz:   `<path fill="#e0537a" stroke="${OUT}" stroke-width="2.2" stroke-linejoin="round" d="M24 42 C14 34 4 26 4 16 C4 8 10 4 16 4 C20 4 23 6 24 9 C25 6 28 4 32 4 C38 4 44 8 44 16 C44 26 34 34 24 42 Z"/><path d="M13 15 C15 10 20 10 23 15" fill="none" stroke="#ffb6cf" stroke-width="3" stroke-linecap="round"/><path fill="#f5d76e" d="M36 27 l1.6 3.4 3.7 .5 -2.7 2.6 .7 3.7 -3.3 -1.8 -3.3 1.8 .7 -3.7 -2.7 -2.6 3.7 -.5 Z"/>`,
    blume:  `<g fill="#f78fb3" stroke="${OUT}" stroke-width="1.8"><circle cx="24" cy="10" r="8"/><circle cx="37" cy="19" r="8"/><circle cx="32" cy="34" r="8"/><circle cx="16" cy="34" r="8"/><circle cx="11" cy="19" r="8"/></g><circle cx="24" cy="22" r="7.5" fill="#f5d76e" stroke="${OUT}" stroke-width="1.8"/><path d="M24 15 L24 29 M17 21 L31 23" fill="none" stroke="#fff6cf" stroke-width="2" stroke-linecap="round" opacity=".8"/>`,
    falter: `<path fill="#9d7bec" stroke="${OUT}" stroke-width="1.8" stroke-linejoin="round" d="M22 24 C16 12 6 9 3 15 C0 21 6 28 15 30 C8 31 6 37 9 41 C13 45 20 41 23 32 Z"/><path fill="#c9a8f7" stroke="${OUT}" stroke-width="1.8" stroke-linejoin="round" d="M26 24 C32 12 42 9 45 15 C48 21 42 28 33 30 C40 31 42 37 39 41 C35 45 28 41 25 32 Z"/><ellipse cx="24" cy="27" rx="3.4" ry="10" fill="${OUT}"/><circle cx="14" cy="21" r="3" fill="#f5d76e"/><circle cx="34" cy="21" r="3" fill="#f5d76e"/><path d="M20 17 C17 11 13 8 9 8 M28 17 C31 11 35 8 39 8" fill="none" stroke="${OUT}" stroke-width="1.8" stroke-linecap="round"/>`,
    regenb: `<path d="M5 34 A19 19 0 0 1 43 34" fill="none" stroke="${OUT}" stroke-width="7" stroke-linecap="round"/><path d="M6 34 A18 18 0 0 1 42 34" fill="none" stroke="#ef6461" stroke-width="5" stroke-linecap="round"/><path d="M12 34 A12 12 0 0 1 36 34" fill="none" stroke="#f5d76e" stroke-width="5" stroke-linecap="round"/><path d="M18 34 A6 6 0 0 1 30 34" fill="none" stroke="#7ec8e3" stroke-width="5" stroke-linecap="round"/><circle cx="9" cy="36" r="4" fill="#fff" stroke="${OUT}" stroke-width="1.5"/><circle cx="39" cy="36" r="4" fill="#fff" stroke="${OUT}" stroke-width="1.5"/><path fill="#f5d76e" d="M24 5 l1.8 3.8 4.2 .6 -3 2.9 .7 4.1 -3.7 -2 -3.7 2 .7 -4.1 -3 -2.9 4.2 -.6 Z"/>`,
    krone:  `<path fill="#f0c964" stroke="${OUT}" stroke-width="2" stroke-linejoin="round" d="M8 34 L11 14 C14 19 17 22 20 23 L24 9 L28 23 C31 22 34 19 37 14 L40 34 Z"/><rect x="8" y="34" width="32" height="6" rx="3" fill="#e9b64d" stroke="${OUT}" stroke-width="2"/><circle cx="24" cy="37" r="2.4" fill="#e0537a"/><circle cx="17" cy="31" r="2.2" fill="#9d7bec"/><circle cx="31" cy="31" r="2.2" fill="#7ec8e3"/><path d="M16 19 L21 27 M32 19 L27 27" stroke="#fff6cf" stroke-width="1.8" stroke-linecap="round" opacity=".8"/>`,
  };

  /* raster coloring pages (flood-fill on canvas) — any PNG/JPG line art
     dropped into img/ under one of these names is picked up automatically */
  const RASTER_KANDIDATEN = [
    { id: "r-einhorn1", srcs: ["img/einhorn-1.png", "img/einhorn-1.jpg", "img/coloring-page-outline-cute-unicorn.png", "img/coloring-page-outline-cute-unicorn.jpg"] },
    { id: "r-einhorn2", srcs: ["img/einhorn-2.png", "img/einhorn-2.jpg", "img/cute-unicorn-with-stars-outline.png", "img/cute-unicorn-with-stars-outline.jpg"] },
  ];

  let currentColor = "#f78fb3";
  let currentSticker = null; // sticker id or null (=painting)
  let currentPage = PAGES[0];
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem("sz-malen3") || "{}"); } catch (e) {}

  const wrap = () => document.getElementById("canvas-wrap");

  /* ---------- raster page engine ---------- */

  function ladeRasterSeiten() {
    RASTER_KANDIDATEN.forEach((k) => {
      const probier = (i) => {
        if (i >= k.srcs.length) return;
        const img = new Image();
        img.onload = () => {
          if (PAGES.some((p) => p.id === k.id)) return;
          PAGES.push({ id: k.id, raster: img });
          buildTabs();
          markTabs();
        };
        img.onerror = () => probier(i + 1);
        img.src = k.srcs[i];
      };
      probier(0);
    });
  }

  function hexZuRgb(hex) {
    return [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
  }

  /* scanline flood fill; returns bounding box of the filled area */
  function floodFill(ctx, w, h, sx, sy, fillRgb) {
    const bild = ctx.getImageData(0, 0, w, h);
    const d = bild.data;
    const idx = (x, y) => (y * w + x) * 4;
    const start = idx(sx, sy);
    const sr = d[start], sg = d[start + 1], sb = d[start + 2];
    // don't fill dark outlines
    if (sr + sg + sb < 240) return null;
    const [fr, fg, fb] = fillRgb;
    if (Math.abs(sr - fr) + Math.abs(sg - fg) + Math.abs(sb - fb) < 12) return null;
    const passt = (i) =>
      Math.abs(d[i] - sr) < 48 && Math.abs(d[i + 1] - sg) < 48 && Math.abs(d[i + 2] - sb) < 48;
    const stack = [[sx, sy]];
    let minX = sx, maxX = sx, minY = sy, maxY = sy, n = 0;
    const MAXPX = w * h;
    while (stack.length && n < MAXPX) {
      const [x0, y0] = stack.pop();
      let x = x0;
      while (x >= 0 && passt(idx(x, y0))) x--;
      x++;
      let oben = false, unten = false;
      while (x < w && passt(idx(x, y0))) {
        const i = idx(x, y0);
        d[i] = fr; d[i + 1] = fg; d[i + 2] = fb; d[i + 3] = 255;
        n++;
        if (x < minX) minX = x; if (x > maxX) maxX = x;
        if (y0 < minY) minY = y0; if (y0 > maxY) maxY = y0;
        if (y0 > 0) {
          const o = passt(idx(x, y0 - 1));
          if (o && !oben) { stack.push([x, y0 - 1]); oben = true; }
          if (!o) oben = false;
        }
        if (y0 < h - 1) {
          const u = passt(idx(x, y0 + 1));
          if (u && !unten) { stack.push([x, y0 + 1]); unten = true; }
          if (!u) unten = false;
        }
        x++;
      }
    }
    ctx.putImageData(bild, 0, 0);
    return n ? { minX, maxX, minY, maxY } : null;
  }

  /* paint a vertical rainbow / glitter over the just-filled region, clipped by the fill color */
  function spezialFuellung(ctx, box, art, fillRgb) {
    const { minX, minY, maxX, maxY } = box;
    const bild = ctx.getImageData(minX, minY, maxX - minX + 1, maxY - minY + 1);
    const d = bild.data;
    const wBox = maxX - minX + 1;
    const hBox = maxY - minY + 1;
    const RB = [[239, 100, 97], [245, 215, 110], [139, 201, 138], [126, 200, 227], [155, 126, 222]];
    for (let y = 0; y < hBox; y++) {
      for (let x = 0; x < wBox; x++) {
        const i = (y * wBox + x) * 4;
        if (Math.abs(d[i] - fillRgb[0]) < 6 && Math.abs(d[i + 1] - fillRgb[1]) < 6 && Math.abs(d[i + 2] - fillRgb[2]) < 6) {
          if (art === "rainbow") {
            const t = (y / hBox) * (RB.length - 1);
            const a = RB[Math.floor(t)], b = RB[Math.min(RB.length - 1, Math.floor(t) + 1)];
            const f = t - Math.floor(t);
            d[i] = a[0] + (b[0] - a[0]) * f;
            d[i + 1] = a[1] + (b[1] - a[1]) * f;
            d[i + 2] = a[2] + (b[2] - a[2]) * f;
          } else if (art === "glitzer" && Math.random() < 0.045) {
            d[i] = 255; d[i + 1] = 250; d[i + 2] = 220;
          }
        }
      }
    }
    ctx.putImageData(bild, minX, minY);
  }

  function openRaster(page) {
    currentPage = page;
    const img = page.raster;
    const w = wrap();
    w.innerHTML = "";
    const skala = Math.min(1, 900 / img.naturalWidth);
    const cw = Math.round(img.naturalWidth * skala);
    const ch = Math.round(img.naturalHeight * skala);
    const canvas = document.createElement("canvas");
    canvas.width = cw;
    canvas.height = ch;
    canvas.style.cssText = "height:100%;max-width:100%;object-fit:contain;background:#fff;border-radius:24px;box-shadow:0 14px 40px oklch(0.15 0.06 300 / .45)";
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const gespeichert = saved["raster-" + page.id];
    if (gespeichert) {
      const alt = new Image();
      alt.onload = () => ctx.drawImage(alt, 0, 0, cw, ch);
      alt.src = gespeichert;
    } else {
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, 0, 0, cw, ch);
    }
    w.appendChild(canvas);

    canvas.addEventListener("pointerdown", (e) => {
      const r = canvas.getBoundingClientRect();
      const x = Math.round(((e.clientX - r.left) / r.width) * cw);
      const y = Math.round(((e.clientY - r.top) / r.height) * ch);
      if (x < 0 || y < 0 || x >= cw || y >= ch) return;
      const spezial = currentColor === RAINBOW ? "rainbow" : currentColor === GLITZER ? "glitzer" : null;
      const basis = spezial ? "#f5d76e" : currentColor;
      const rgb = hexZuRgb(spezial === "rainbow" ? "#8bc98a" : basis);
      const box = floodFill(ctx, cw, ch, x, y, rgb);
      if (!box) return;
      if (spezial) spezialFuellung(ctx, box, spezial, rgb);
      if (spezial) { Klang.staub(); Funkel.burst(e.clientX, e.clientY, { count: 16, spread: 130 }); }
      else { Klang.chime(); Funkel.burst(e.clientX, e.clientY, { count: 10 }); }
      try {
        saved["raster-" + page.id] = canvas.toDataURL("image/png");
        localStorage.setItem("sz-malen3", JSON.stringify(saved));
      } catch (err) { /* storage full: skip persist */ }
    });
    markTabs();
  }

  function pageSvg(page, mini) {
    return `<svg viewBox="0 0 440 440" ${mini ? "" : 'id="malbild"'} xmlns="http://www.w3.org/2000/svg">${page.svg}<g class="sticker-ebene"></g></svg>`;
  }

  function persist() {
    if (currentPage && currentPage.raster) return; // raster pages persist on each fill
    const svg = wrap().querySelector("svg");
    if (!svg || !currentPage) return;
    const fills = [...svg.querySelectorAll(".fill-region")].map((r) => r.getAttribute("fill"));
    const stickers = [...svg.querySelectorAll(".sticker-ebene g")].map((g) => ({
      id: g.dataset.id, x: +g.dataset.x, y: +g.dataset.y,
    }));
    saved[currentPage.id] = { fills, stickers };
    try { localStorage.setItem("sz-malen3", JSON.stringify(saved)); } catch (e) {}
  }

  function applySaved(svg, id) {
    const data = saved[id];
    if (!data) return;
    const regions = svg.querySelectorAll(".fill-region");
    if (data.fills && data.fills.length === regions.length) {
      regions.forEach((r, i) => { if (data.fills[i]) r.setAttribute("fill", data.fills[i]); });
    }
    (data.stickers || []).forEach((st) => placeSticker(svg, st.id, st.x, st.y, false));
  }

  function placeSticker(svg, id, x, y, plopp = true) {
    const ebene = svg.querySelector(".sticker-ebene");
    if (!ebene || !STICKER[id]) return;
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.dataset.id = id; g.dataset.x = x; g.dataset.y = y;
    g.setAttribute("transform", `translate(${x - 24} ${y - 24})`);
    if (plopp) g.setAttribute("class", "sticker-plopp");
    g.innerHTML = STICKER[id];
    ebene.appendChild(g);
  }

  function vollstaendig(svg) {
    return [...svg.querySelectorAll(".fill-region")].every((r) => r.getAttribute("fill") !== "#ffffff");
  }

  function openPage(page) {
    currentPage = page;
    wrap().innerHTML = pageSvg(page, false);
    const svg = wrap().querySelector("svg");
    applySaved(svg, page.id);

    svg.addEventListener("pointerdown", (e) => {
      // sticker mode: place at tap point
      if (currentSticker) {
        const pt = svg.createSVGPoint();
        pt.x = e.clientX; pt.y = e.clientY;
        const loc = pt.matrixTransform(svg.getScreenCTM().inverse());
        placeSticker(svg, currentSticker, loc.x, loc.y);
        Klang.plopp();
        Funkel.burst(e.clientX, e.clientY, { count: 8 });
        persist();
        return;
      }
      const region = e.target.closest(".fill-region");
      if (!region) return;
      region.setAttribute("fill", currentColor);
      if (currentColor === GLITZER) {
        Klang.staub();
        Funkel.burst(e.clientX, e.clientY, { count: 18, spread: 140 });
      } else {
        Klang.chime();
        Funkel.burst(e.clientX, e.clientY, { count: 10 });
      }
      persist();
      // completion reward
      if (vollstaendig(svg) && Staat.bildBelohnt(page.id)) {
        Staat.stat("bilder");
        Klang.fanfare();
        const r = svg.getBoundingClientRect();
        Funkel.burst(r.left + r.width / 2, r.top + r.height / 2, { count: 26, spread: 220 });
        Staat.addDust(5, r.left + r.width / 2, r.top + r.height / 2);
      }
    });
    markTabs();
  }

  function markTabs() {
    document.querySelectorAll(".malen-tab").forEach((t) => {
      t.classList.toggle("is-active", t.dataset.id === currentPage.id);
    });
  }

  function zeige(p) {
    if (p.raster) openRaster(p);
    else openPage(p);
  }

  function buildTabs() {
    const kopf = document.getElementById("malen-tabs");
    kopf.innerHTML = "";
    PAGES.forEach((p) => {
      const b = document.createElement("button");
      b.className = "malen-tab";
      b.dataset.id = p.id;
      b.setAttribute("aria-label", p.id);
      if (p.raster) {
        const t = document.createElement("img");
        t.src = p.raster.src;
        t.style.cssText = "width:100%;height:100%;object-fit:contain;background:#fff;border-radius:12px";
        b.appendChild(t);
      } else {
        b.innerHTML = pageSvg(p, true);
      }
      b.addEventListener("pointerup", () => {
        Klang.pop();
        persist();
        zeige(p);
      });
      kopf.appendChild(b);
    });
  }

  function buildSticker() {
    const grid = document.getElementById("sticker-grid");
    grid.innerHTML = "";
    Object.keys(STICKER).forEach((id) => {
      const b = document.createElement("button");
      b.className = "sticker-knopf";
      b.dataset.id = id;
      b.setAttribute("aria-label", "Sticker " + id);
      b.innerHTML = `<svg viewBox="0 0 48 48">${STICKER[id]}</svg>`;
      b.addEventListener("pointerdown", () => {
        currentSticker = currentSticker === id ? null : id;
        grid.querySelectorAll(".sticker-knopf").forEach((k) => k.classList.toggle("is-active", k.dataset.id === currentSticker));
        document.querySelectorAll(".swatch").forEach((s) => s.classList.toggle("is-active", !currentSticker && s.dataset.fill === currentColor));
        Klang.pop();
      });
      grid.appendChild(b);
    });
  }

  function buildPalette() {
    const pal = document.getElementById("palette");
    pal.innerHTML = "";
    const mk = (cls, fill, label) => {
      const b = document.createElement("button");
      b.className = "swatch" + (cls ? " " + cls : "");
      if (fill) b.style.background = fill;
      b.setAttribute("aria-label", label);
      b.addEventListener("pointerdown", () => {
        currentColor = b.dataset.fill;
        currentSticker = null;
        document.querySelectorAll(".sticker-knopf").forEach((k) => k.classList.remove("is-active"));
        pal.querySelectorAll(".swatch").forEach((sw) => sw.classList.remove("is-active"));
        b.classList.add("is-active");
        Klang.pop();
      });
      pal.appendChild(b);
      return b;
    };
    COLORS.forEach((c) => { mk("", c, "Farbe " + c).dataset.fill = c; });
    mk("swatch-rainbow", "", "Regenbogen").dataset.fill = RAINBOW;
    mk("swatch-glitzer", "", "Glitzer").dataset.fill = GLITZER;
    const pink = [...pal.children].find((sw) => sw.dataset.fill === "#f78fb3");
    if (pink) pink.classList.add("is-active");
  }

  function init() {
    buildTabs();
    buildSticker();
    buildPalette();
    openPage(PAGES[0]);
    ladeRasterSeiten();
    document.getElementById("btn-reset").addEventListener("pointerup", (e) => {
      if (currentPage.raster) {
        delete saved["raster-" + currentPage.id];
        try { localStorage.setItem("sz-malen3", JSON.stringify(saved)); } catch (err) {}
        openRaster(currentPage);
      } else {
        const svg = wrap().querySelector("svg");
        if (!svg) return;
        svg.querySelectorAll(".fill-region").forEach((r) => r.setAttribute("fill", "#ffffff"));
        const ebene = svg.querySelector(".sticker-ebene");
        if (ebene) ebene.innerHTML = "";
        delete saved[currentPage.id];
        try { localStorage.setItem("sz-malen3", JSON.stringify(saved)); } catch (err) {}
      }
      Klang.pop();
      Funkel.burst(e.clientX, e.clientY, { count: 8, colors: ["#ffffff", "#c9a8f7"] });
    });
  }

  return { init };
})();
