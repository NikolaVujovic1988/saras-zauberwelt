/* Mal-Atelier — Zauber-Ausmalbilder + Sticker */
const Malen = (() => {
  const OUT = "#4a3a6e";
  const S = `stroke="${OUT}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"`;
  const S3 = `stroke="${OUT}" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round" fill="none"`;
  const R = 'class="fill-region" fill="#ffffff"';
  const N = 'pointer-events="none"';

  /* kleine Form-Helfer für Sterne & Herzen */
  function stern(cx, cy, r) {
    const p = [];
    for (let i = 0; i < 10; i++) {
      const rad = i % 2 === 0 ? r : r * 0.45;
      const a = -Math.PI / 2 + (i * Math.PI) / 5;
      p.push((cx + rad * Math.cos(a)).toFixed(1) + " " + (cy + rad * Math.sin(a)).toFixed(1));
    }
    return "M" + p.join(" L") + " Z";
  }
  function herz(cx, cy, s) {
    return `M${cx} ${cy + s * 0.85} C ${cx - s * 1.1} ${cy + s * 0.15} ${cx - s * 0.95} ${cy - s * 0.75} ${cx - s * 0.42} ${cy - s * 0.6} C ${cx - s * 0.18} ${cy - s * 0.53} ${cx} ${cy - s * 0.28} ${cx} ${cy - s * 0.12} C ${cx} ${cy - s * 0.28} ${cx + s * 0.18} ${cy - s * 0.53} ${cx + s * 0.42} ${cy - s * 0.6} C ${cx + s * 0.95} ${cy - s * 0.75} ${cx + s * 1.1} ${cy + s * 0.15} ${cx} ${cy + s * 0.85} Z`;
  }

  const PAGES = [
    {
    id: "einhorn",
    svg: `
    <path ${R} ${S} d="${stern(56, 74, 24)}"/>
    <path ${R} ${S} d="${stern(396, 118, 17)}"/>
    <path ${R} ${S} d="${stern(400, 320, 13)}"/>
    <path ${R} ${S} d="${herz(64, 300, 18)}"/>
    <path ${R} ${S} d="M352 258 C 392 234 424 258 412 288 C 428 302 416 334 390 332 C 398 350 376 366 358 352 C 340 340 340 314 352 298 C 342 282 342 264 352 258 Z"/>
    <rect ${R} ${S} x="212" y="336" width="30" height="76" rx="14"/>
    <rect ${R} ${S} x="258" y="344" width="30" height="72" rx="14"/>
    <rect ${R} ${S} x="304" y="336" width="30" height="76" rx="14"/>
    <path ${R} ${S} d="M186 250 C 196 232 236 220 278 224 C 330 228 364 256 364 296 C 364 338 328 362 284 362 C 240 362 202 348 190 314 C 183 292 182 268 186 250 Z"/>
    <path ${R} ${S} d="M196 232 C 162 242 124 228 108 198 C 92 168 100 128 128 108 C 156 88 198 90 222 112 C 242 130 250 160 242 186 C 235 209 217 226 196 232 Z"/>
    <ellipse ${R} ${S} cx="110" cy="190" rx="25" ry="18"/>
    <path ${R} ${S} d="M196 98 C 198 76 212 62 228 66 C 228 86 218 100 202 106 Z"/>
    <path ${R} ${S} d="M150 96 L 164 24 L 188 88 C 176 96 162 98 150 96 Z"/>
    <path ${R} ${S} d="M146 98 C 128 86 108 90 100 104 C 114 112 134 110 146 106 Z"/>
    <path ${R} ${S} d="M198 96 C 238 74 282 88 292 126 C 300 156 284 186 254 194 C 264 168 258 138 234 124 C 240 150 232 176 210 188 C 216 162 208 132 188 118 Z"/>
    <path ${R} ${S} d="M244 176 C 278 168 306 186 306 216 C 306 240 288 258 264 258 C 276 236 270 208 248 196 Z"/>
    <g ${N}>
      <path d="M158 74 L 178 66 M 156 56 L 173 48 M 160 38 L 169 34" ${S3}/>
      <path d="M104 188 a2.6 2.6 0 1 0 .1 0" fill="${OUT}"/>
      <path d="M94 198 Q 104 206 116 202" ${S3}/>
      <circle cx="130" cy="176" r="8" ${S3} stroke-width="3"/>
      <path d="M218 396 L 236 396 M 264 400 L 282 400 M 310 396 L 328 396" ${S3}/>
      <path d="M360 276 C 372 270 384 272 392 280 M 362 306 C 372 302 382 304 388 310" ${S3} stroke-width="3"/>
      <path d="M134 130 L 122 120 M 142 122 L 134 110" ${S3} stroke-width="3"/>
    </g>
    <circle cx="152" cy="152" r="11" fill="${OUT}"/>
    <circle cx="156" cy="147" r="4" fill="#ffffff"/>
    <circle cx="148" cy="157" r="2" fill="#ffffff"/>`,
    },
    {
    id: "prinzessin",
    svg: `
    <path ${R} ${S} d="${stern(52, 120, 20)}"/>
    <path ${R} ${S} d="${stern(390, 90, 17)}"/>
    <path ${R} ${S} d="${herz(388, 250, 16)}"/>
    <path ${R} ${S} d="${herz(48, 320, 14)}"/>
    <path ${R} ${S} d="M210 64 C 156 64 122 106 126 158 C 128 198 120 226 104 242 C 130 252 154 244 168 226 L 252 226 C 266 244 290 252 316 242 C 300 226 292 198 294 158 C 298 106 264 64 210 64 Z"/>
    <rect ${R} ${S} x="200" y="204" width="20" height="24" rx="8"/>
    <circle ${R} ${S} cx="168" cy="242" r="17"/>
    <circle ${R} ${S} cx="252" cy="242" r="17"/>
    <path ${R} ${S} d="M162 254 C 148 268 140 282 138 296 C 146 302 156 300 162 294 C 168 282 172 270 176 260 Z"/>
    <path ${R} ${S} d="M258 254 C 272 268 280 282 282 296 C 274 302 264 300 258 294 C 252 282 248 270 244 260 Z"/>
    <path ${R} ${S} d="M184 228 L 236 228 L 246 268 L 174 268 Z"/>
    <path ${R} ${S} d="M174 268 L 246 268 C 294 306 318 354 326 398 C 250 416 170 416 94 398 C 102 354 126 306 174 268 Z"/>
    <circle ${R} ${S} cx="210" cy="150" r="54"/>
    <path ${R} ${S} d="M156 140 C 158 96 180 76 210 76 C 240 76 262 96 264 140 C 250 114 232 104 210 104 C 188 104 170 114 156 140 Z"/>
    <path ${R} ${S} d="M174 70 L 182 36 L 198 56 L 210 30 L 222 56 L 238 36 L 246 70 Z"/>
    <rect ${R} ${S} x="170" y="66" width="80" height="15" rx="7.5"/>
    <path ${R} ${S} d="${herz(210, 330, 17)}"/>
    <g ${N}>
      <circle cx="182" cy="42" r="4" ${S3} stroke-width="2.6"/>
      <circle cx="210" cy="36" r="4" ${S3} stroke-width="2.6"/>
      <circle cx="238" cy="42" r="4" ${S3} stroke-width="2.6"/>
      <circle cx="210" cy="73.5" r="3" fill="${OUT}"/>
      <path d="M182 132 L 170 128 M 238 132 L 250 128" ${S3} stroke-width="3"/>
      <circle cx="178" cy="168" r="7" ${S3} stroke-width="3"/>
      <circle cx="242" cy="168" r="7" ${S3} stroke-width="3"/>
      <path d="M196 176 Q 210 188 224 176" ${S3}/>
      <path d="M188 236 C 196 242 224 242 232 236" ${S3} stroke-width="3"/>
      <path d="M174 300 C 158 332 148 366 144 400 M 246 300 C 262 332 272 366 276 400 M 210 272 L 210 410" ${S3}/>
      <path d="M112 388 C 132 380 152 386 160 396 M 328 388 C 308 380 288 386 280 396" ${S3} stroke-width="3"/>
    </g>`,
    },
    {
    id: "schloss",
    svg: `
    <circle ${R} ${S} cx="382" cy="66" r="28"/>
    <path ${R} ${S} d="M36 86 a19 19 0 0 1 36 -7 a15 15 0 0 1 26 10 a13 13 0 0 1 -6 25 l-54 0 a16 16 0 0 1 -2 -28 Z"/>
    <path ${R} ${S} d="${stern(330, 44, 14)}"/>
    <path ${R} ${S} d="M18 414 C 110 394 330 394 422 414 L 422 428 L 18 428 Z"/>
    <rect ${R} ${S} x="140" y="286" width="160" height="128"/>
    <rect ${R} ${S} x="98" y="212" width="54" height="202"/>
    <rect ${R} ${S} x="288" y="212" width="54" height="202"/>
    <path ${R} ${S} d="M88 212 L 125 148 L 162 212 Z"/>
    <path ${R} ${S} d="M278 212 L 315 148 L 352 212 Z"/>
    <rect ${R} ${S} x="180" y="176" width="80" height="238"/>
    <path ${R} ${S} d="M168 176 L 220 104 L 272 176 Z"/>
    <path ${R} ${S} d="M220 100 L 220 54 L 258 66 L 220 78 Z"/>
    <path ${R} ${S} d="M125 148 L 125 122 L 152 130 L 125 138 Z"/>
    <path ${R} ${S} d="M315 148 L 315 122 L 342 130 L 315 138 Z"/>
    <path ${R} ${S} d="M198 414 L 198 342 A 22 22 0 0 1 242 342 L 242 414 Z"/>
    <path ${R} ${S} d="M112 262 L 112 244 A 13 13 0 0 1 138 244 L 138 262 Z"/>
    <path ${R} ${S} d="M302 262 L 302 244 A 13 13 0 0 1 328 244 L 328 262 Z"/>
    <path ${R} ${S} d="${herz(220, 232, 16)}"/>
    <circle ${R} ${S} cx="220" cy="308" r="14"/>
    <g ${N}>
      <path d="M382 30 L 382 18 M 382 102 L 382 114 M 346 66 L 334 66 M 418 66 L 430 66 M 357 41 L 348 32 M 407 41 L 416 32 M 357 91 L 348 100 M 407 91 L 416 100" ${S3}/>
      <path d="M140 306 L 180 306 M 260 306 L 300 306 M 140 336 L 180 336 M 260 336 L 300 336" ${S3} stroke-width="3"/>
      <path d="M112 290 L 138 290 M 112 316 L 138 316 M 302 290 L 328 290 M 302 316 L 328 316" ${S3} stroke-width="3"/>
      <path d="M220 328 L 220 414 M 204 348 L 204 414 M 236 348 L 236 414" ${S3} stroke-width="3"/>
      <circle cx="228" cy="376" r="3.2" fill="${OUT}"/>
      <path d="M60 410 C 120 398 180 396 220 396 M 260 396 C 320 396 370 402 396 410" ${S3} stroke-width="3"/>
    </g>`,
    },
    {
    id: "regenbogen",
    svg: `
    <path ${R} ${S} d="M28 400 A 192 192 0 0 1 412 400 L 382 400 A 162 162 0 0 0 58 400 Z"/>
    <path ${R} ${S} d="M58 400 A 162 162 0 0 1 382 400 L 352 400 A 132 132 0 0 0 88 400 Z"/>
    <path ${R} ${S} d="M88 400 A 132 132 0 0 1 352 400 L 322 400 A 102 102 0 0 0 118 400 Z"/>
    <path ${R} ${S} d="M118 400 A 102 102 0 0 1 322 400 L 292 400 A 72 72 0 0 0 148 400 Z"/>
    <path ${R} ${S} d="M148 400 A 72 72 0 0 1 292 400 L 262 400 A 42 42 0 0 0 178 400 Z"/>
    <path ${R} ${S} d="M18 388 a24 24 0 0 1 42 -12 a20 20 0 0 1 36 8 a17 17 0 0 1 12 30 a15 15 0 0 1 -14 10 l-62 0 a19 19 0 0 1 -14 -36 Z"/>
    <path ${R} ${S} d="M332 388 a24 24 0 0 1 42 -12 a20 20 0 0 1 36 8 a17 17 0 0 1 12 30 a15 15 0 0 1 -14 10 l-62 0 a19 19 0 0 1 -14 -36 Z"/>
    <circle ${R} ${S} cx="66" cy="70" r="30"/>
    <path ${R} ${S} d="${stern(220, 56, 24)}"/>
    <path ${R} ${S} d="${stern(140, 130, 13)}"/>
    <path ${R} ${S} d="${stern(302, 128, 13)}"/>
    <path ${R} ${S} d="${herz(360, 62, 16)}"/>
    <g ${N}>
      <path d="M66 26 L 66 14 M 66 114 L 66 126 M 22 70 L 10 70 M 110 70 L 122 70 M 35 39 L 26 30 M 97 39 L 106 30 M 35 101 L 26 110 M 97 101 L 106 110" ${S3}/>
      <path d="M40 400 C 52 392 72 392 84 400 M 354 400 C 366 392 386 392 398 400" ${S3} stroke-width="3"/>
      <path d="M254 132 C 262 126 272 128 278 134" ${S3} stroke-width="3"/>
      <path d="M162 148 C 170 142 180 144 186 150" ${S3} stroke-width="3"/>
    </g>`,
    },
    {
    id: "fee",
    svg: `
    <path ${R} ${S} d="${stern(56, 90, 20)}"/>
    <path ${R} ${S} d="${herz(60, 380, 15)}"/>
    <path ${R} ${S} d="${stern(388, 396, 15)}"/>
    <path ${R} ${S} d="M162 208 C 110 168 62 182 58 222 C 55 254 84 276 122 268 C 100 280 100 306 118 316 C 142 330 172 306 178 262 Z"/>
    <path ${R} ${S} d="M258 208 C 310 168 358 182 362 222 C 365 254 336 276 298 268 C 320 280 320 306 302 316 C 278 330 248 306 242 262 Z"/>
    <circle ${R} ${S} cx="210" cy="70" r="16"/>
    <path ${R} ${S} d="M210 86 C 164 86 138 122 146 164 C 150 186 146 204 136 214 C 154 222 172 216 182 204 L 238 204 C 248 216 266 222 284 214 C 274 204 270 186 274 164 C 282 122 256 86 210 86 Z"/>
    <rect ${R} ${S} x="200" y="186" width="20" height="22" rx="8"/>
    <circle ${R} ${S} cx="210" cy="146" r="44"/>
    <path ${R} ${S} d="M168 138 C 170 104 186 90 210 90 C 234 90 250 104 252 138 C 240 116 226 108 210 108 C 194 108 180 116 168 138 Z"/>
    <path ${R} ${S} d="M174 246 C 160 240 148 226 144 210 C 152 202 164 202 170 210 C 176 222 178 234 180 244 Z"/>
    <path ${R} ${S} d="M246 246 C 262 238 278 226 292 208 C 300 214 302 224 296 232 C 284 244 266 250 252 252 Z"/>
    <path ${R} ${S} d="M186 206 L 234 206 C 248 240 254 276 250 304 C 240 294 230 300 222 312 C 214 298 206 298 198 312 C 190 300 180 294 170 304 C 166 276 172 240 186 206 Z"/>
    <path ${R} ${S} d="M190 366 C 182 380 172 388 158 392 C 152 384 154 374 162 370 C 172 366 182 364 190 358 Z"/>
    <path ${R} ${S} d="M230 366 C 238 380 248 388 262 392 C 268 384 266 374 258 370 C 248 366 238 364 230 358 Z"/>
    <path ${R} ${S} d="${stern(320, 178, 22)}"/>
    <g ${N}>
      <path d="M186 312 L 190 358 M 234 312 L 230 358" ${S} fill="none"/>
      <path d="M296 214 L 312 192" ${S} fill="none"/>
      <path d="M168 234 C 130 216 96 220 78 238 M 165 252 C 138 258 122 274 118 296" ${S3} stroke-width="3"/>
      <path d="M252 234 C 290 216 324 220 342 238 M 255 252 C 282 258 298 274 302 296" ${S3} stroke-width="3"/>
      <path d="M184 138 L 172 134 M 236 138 L 248 134" ${S3} stroke-width="3"/>
      <circle cx="182" cy="160" r="6" ${S3} stroke-width="3"/>
      <circle cx="238" cy="160" r="6" ${S3} stroke-width="3"/>
      <path d="M198 166 Q 210 176 222 166" ${S3}/>
      <path d="M196 232 Q 210 240 224 232 M 192 258 Q 210 268 228 258 M 190 284 Q 210 294 230 284" ${S3} stroke-width="3"/>
    </g>
    <circle cx="190" cy="146" r="6" fill="${OUT}"/>
    <circle cx="230" cy="146" r="6" fill="${OUT}"/>
    <circle cx="192" cy="143.5" r="2" fill="#ffffff"/>
    <circle cx="232" cy="143.5" r="2" fill="#ffffff"/>`,
    },
    {
    id: "schmetterling",
    svg: `
    <path ${R} ${S} d="${stern(60, 62, 20)}"/>
    <path ${R} ${S} d="${stern(384, 372, 16)}"/>
    <path ${R} ${S} d="${herz(390, 70, 15)}"/>
    <path ${R} ${S} d="${herz(52, 350, 14)}"/>
    <path ${R} ${S} d="M198 200 C 156 128 76 104 46 144 C 20 180 50 236 122 252 C 74 264 60 306 86 332 C 116 360 178 334 202 264 Z"/>
    <path ${R} ${S} d="M242 200 C 284 128 364 104 394 144 C 420 180 390 236 318 252 C 366 264 380 306 354 332 C 324 360 262 334 238 264 Z"/>
    <circle ${R} ${S} cx="120" cy="182" r="26"/>
    <circle ${R} ${S} cx="320" cy="182" r="26"/>
    <circle ${R} ${S} cx="126" cy="298" r="17"/>
    <circle ${R} ${S} cx="314" cy="298" r="17"/>
    <path ${R} ${S} d="M206 186 C 194 204 190 276 204 298 C 210 308 230 308 236 298 C 250 276 246 204 234 186 C 228 178 212 178 206 186 Z"/>
    <circle ${R} ${S} cx="220" cy="150" r="36"/>
    <circle ${R} ${S} cx="158" cy="82" r="9"/>
    <circle ${R} ${S} cx="282" cy="82" r="9"/>
    <g ${N}>
      <path d="M204 122 C 192 104 178 92 164 88 M 236 122 C 248 104 262 92 276 88" ${S} fill="none"/>
      <path d="M190 214 C 152 204 112 182 82 148 M 188 240 C 142 240 104 222 76 196 M 196 268 C 166 296 132 318 96 326" ${S3} stroke-width="3"/>
      <path d="M250 214 C 288 204 328 182 358 148 M 252 240 C 298 240 336 222 364 196 M 244 268 C 274 296 308 318 344 326" ${S3} stroke-width="3"/>
      <path d="M220 210 L 220 296" ${S3} stroke-width="3"/>
      <path d="M212 228 Q 220 234 228 228 M 210 254 Q 220 260 230 254 M 212 280 Q 220 286 228 280" ${S3} stroke-width="3"/>
      <circle cx="196" cy="140" r="6" ${S3} stroke-width="3"/>
      <circle cx="244" cy="140" r="6" ${S3} stroke-width="3"/>
    </g>
    <circle cx="208" cy="148" r="5.5" fill="${OUT}"/>
    <circle cx="232" cy="148" r="5.5" fill="${OUT}"/>
    <circle cx="210" cy="145.5" r="1.8" fill="#ffffff"/>
    <circle cx="234" cy="145.5" r="1.8" fill="#ffffff"/>
    <path d="M212 164 Q 220 171 228 164" ${S3}/>`,
    },
    {
    id: "meerjungfrau",
    svg: `
    <circle ${R} ${S} cx="58" cy="66" r="14"/>
    <circle ${R} ${S} cx="90" cy="102" r="9"/>
    <circle ${R} ${S} cx="378" cy="120" r="12"/>
    <circle ${R} ${S} cx="352" cy="82" r="8"/>
    <path ${R} ${S} d="M64 342 C 76 330 98 330 108 342 C 98 354 76 354 64 342 Z"/>
    <path ${R} ${S} d="M64 342 L 46 330 L 50 342 L 46 354 Z"/>
    <path ${R} ${S} d="${stern(378, 392, 16)}"/>
    <path ${R} ${S} d="M210 60 C 152 60 118 102 122 156 C 124 196 116 238 100 268 C 122 276 142 268 154 252 C 158 268 168 280 182 286 L 238 286 C 252 280 262 268 266 252 C 278 268 298 276 320 268 C 304 238 296 196 298 156 C 302 102 268 60 210 60 Z"/>
    <circle ${R} ${S} cx="210" cy="148" r="52"/>
    <path ${R} ${S} d="M158 138 C 160 96 182 76 210 76 C 238 76 260 96 262 138 C 250 114 232 104 210 104 C 188 104 170 114 158 138 Z"/>
    <path ${R} ${S} d="${stern(158, 94, 15)}"/>
    <rect ${R} ${S} x="202" y="198" width="16" height="18" rx="7"/>
    <path ${R} ${S} d="M186 220 C 168 232 156 248 152 266 C 158 274 168 274 174 268 C 180 252 184 238 190 228 Z"/>
    <path ${R} ${S} d="M234 220 C 252 232 264 248 268 266 C 262 274 252 274 246 268 C 240 252 236 238 230 228 Z"/>
    <path ${R} ${S} d="M186 214 L 234 214 C 240 240 240 264 234 286 L 186 286 C 180 264 180 240 186 214 Z"/>
    <path ${R} ${S} d="M184 286 L 236 286 C 246 318 242 348 222 372 L 198 372 C 178 348 174 318 184 286 Z"/>
    <path ${R} ${S} d="M210 378 C 194 364 170 366 154 384 C 166 400 188 406 206 398 Z"/>
    <path ${R} ${S} d="M210 378 C 226 364 250 366 266 384 C 254 400 232 406 214 398 Z"/>
    <g ${N}>
      <path d="M188 234 a11 11 0 0 0 22 0 M 210 234 a11 11 0 0 0 22 0 M 188 234 L 232 234" ${S3} stroke-width="3"/>
      <path d="M199 236 L 197 244 M 221 236 L 223 244" ${S3} stroke-width="2.6"/>
      <path d="M188 300 Q 198 308 208 300 T 228 300 M 186 322 Q 196 330 206 322 T 226 322 M 190 344 Q 199 352 208 344 T 224 344" ${S3} stroke-width="3"/>
      <path d="M172 390 C 178 384 184 382 192 384 M 248 390 C 242 384 236 382 228 384" ${S3} stroke-width="2.8"/>
      <path d="M132 160 C 128 192 122 224 112 250 M 288 160 C 292 192 298 224 308 250" ${S3} stroke-width="3"/>
      <circle cx="184" cy="164" r="6.5" ${S3} stroke-width="3"/>
      <circle cx="236" cy="164" r="6.5" ${S3} stroke-width="3"/>
      <path d="M198 172 Q 210 182 222 172" ${S3}/>
      <circle cx="87" cy="339" r="2.6" fill="${OUT}"/>
    </g>
    <circle cx="192" cy="146" r="5.5" fill="${OUT}"/>
    <circle cx="228" cy="146" r="5.5" fill="${OUT}"/>
    <circle cx="194" cy="143.5" r="1.8" fill="#ffffff"/>
    <circle cx="230" cy="143.5" r="1.8" fill="#ffffff"/>`,
    },
    {
    id: "katze",
    svg: `
    <path ${R} ${S} d="M352 52 A 32 32 0 1 0 386 94 A 25 25 0 0 1 352 52 Z"/>
    <path ${R} ${S} d="${stern(390, 170, 14)}"/>
    <path ${R} ${S} d="${stern(58, 84, 19)}"/>
    <path ${R} ${S} d="${herz(66, 220, 15)}"/>
    <path ${R} ${S} d="M276 316 C 322 332 358 312 356 274 C 354 246 332 232 312 240 C 328 248 334 264 327 277 C 318 294 296 298 276 288 Z"/>
    <path ${R} ${S} d="M148 260 C 148 218 178 196 218 196 C 258 196 288 218 288 260 C 288 312 268 348 218 348 C 168 348 148 312 148 260 Z"/>
    <path ${R} ${S} d="M142 96 C 142 68 158 48 174 40 C 182 56 182 74 176 88 Z"/>
    <path ${R} ${S} d="M294 96 C 294 68 278 48 262 40 C 254 56 254 74 260 88 Z"/>
    <path ${R} ${S} d="M218 74 C 264 74 296 104 296 144 C 296 184 264 212 218 212 C 172 212 140 184 140 144 C 140 104 172 74 218 74 Z"/>
    <ellipse ${R} ${S} cx="218" cy="304" rx="34" ry="30"/>
    <ellipse ${R} ${S} cx="188" cy="342" rx="22" ry="13"/>
    <ellipse ${R} ${S} cx="248" cy="342" rx="22" ry="13"/>
    <g ${N}>
      <path d="M152 92 C 156 76 164 64 172 58 M 284 92 C 280 76 272 64 264 58" ${S3} stroke-width="3"/>
      <path d="M212 158 L 218 164 L 224 158 M 218 164 L 218 172 M 218 172 C 212 180 202 180 198 174 M 218 172 C 224 180 234 180 238 174" ${S3} stroke-width="3"/>
      <path d="M138 152 L 108 148 M 140 164 L 112 170 M 296 152 L 326 148 M 294 164 L 322 170" ${S3} stroke-width="3"/>
      <circle cx="172" cy="152" r="7" ${S3} stroke-width="3"/>
      <circle cx="264" cy="152" r="7" ${S3} stroke-width="3"/>
      <path d="M182 336 L 182 346 M 194 336 L 194 346 M 242 336 L 242 346 M 254 336 L 254 346" ${S3} stroke-width="3"/>
      <path d="M218 226 C 208 234 204 246 206 258" ${S3} stroke-width="3"/>
    </g>
    <path d="M212 150 L 218 156 L 224 150 L 224 156 L 218 162 L 212 156 Z" fill="${OUT}"/>
    <circle cx="190" cy="136" r="7" fill="${OUT}"/>
    <circle cx="246" cy="136" r="7" fill="${OUT}"/>
    <circle cx="193" cy="133" r="2.4" fill="#ffffff"/>
    <circle cx="249" cy="133" r="2.4" fill="#ffffff"/>`,
    },
    {
    id: "eule",
    svg: `
    <path ${R} ${S} d="${stern(66, 66, 20)}"/>
    <path ${R} ${S} d="${stern(380, 96, 14)}"/>
    <path ${R} ${S} d="M330 40 A 30 30 0 1 0 362 78 A 24 24 0 0 1 330 40 Z"/>
    <path ${R} ${S} d="M30 386 C 90 370 180 366 220 366 C 260 366 350 370 410 386 L 410 400 C 340 388 260 384 220 384 C 180 384 100 388 30 400 Z"/>
    <path ${R} ${S} d="M146 118 C 134 96 134 76 146 60 C 158 72 164 88 162 104 Z"/>
    <path ${R} ${S} d="M294 118 C 306 96 306 76 294 60 C 282 72 276 88 278 104 Z"/>
    <path ${R} ${S} d="M220 78 C 286 78 326 128 326 202 C 326 288 282 340 220 340 C 158 340 114 288 114 202 C 114 128 154 78 220 78 Z"/>
    <path ${R} ${S} d="M138 208 C 118 232 112 264 120 292 C 144 286 160 268 166 244 Z"/>
    <path ${R} ${S} d="M302 208 C 322 232 328 264 320 292 C 296 286 280 268 274 244 Z"/>
    <path ${R} ${S} d="M220 216 C 262 216 290 244 290 282 C 290 316 262 340 220 340 C 178 340 150 316 150 282 C 150 244 178 216 220 216 Z"/>
    <circle ${R} ${S} cx="180" cy="160" r="34"/>
    <circle ${R} ${S} cx="260" cy="160" r="34"/>
    <path ${R} ${S} d="M220 176 L 234 196 L 220 208 L 206 196 Z"/>
    <g ${N}>
      <path d="M196 366 L 196 378 M 188 366 L 182 376 M 204 366 L 210 376 M 252 366 L 252 378 M 244 366 L 238 376 M 260 366 L 266 376" ${S3}/>
      <path d="M196 340 L 196 366 M 252 340 L 252 366" ${S3}/>
      <path d="M186 250 Q 200 262 214 250 M 226 250 Q 240 262 254 250 M 206 280 Q 220 292 234 280 M 166 280 Q 180 292 194 280 M 246 280 Q 260 292 274 280" ${S3} stroke-width="3"/>
    </g>
    <circle cx="180" cy="160" r="12" fill="${OUT}"/>
    <circle cx="260" cy="160" r="12" fill="${OUT}"/>
    <circle cx="185" cy="155" r="4.5" fill="#ffffff"/>
    <circle cx="265" cy="155" r="4.5" fill="#ffffff"/>
    <circle cx="176" cy="165" r="2" fill="#ffffff"/>
    <circle cx="256" cy="165" r="2" fill="#ffffff"/>`,
    },
    {
    id: "eis",
    svg: `
    <path ${R} ${S} d="${herz(64, 96, 18)}"/>
    <path ${R} ${S} d="${stern(380, 76, 18)}"/>
    <path ${R} ${S} d="${herz(388, 220, 14)}"/>
    <path ${R} ${S} d="${stern(56, 240, 13)}"/>
    <path ${R} ${S} d="M168 254 L 272 254 L 230 416 C 227 426 213 426 210 416 Z"/>
    <circle ${R} ${S} cx="172" cy="204" r="46"/>
    <circle ${R} ${S} cx="268" cy="204" r="46"/>
    <circle ${R} ${S} cx="220" cy="140" r="50"/>
    <path ${R} ${S} d="M156 246 C 150 262 162 274 176 268 C 178 282 196 288 206 278 C 210 292 230 292 234 278 C 244 288 262 282 264 268 C 278 274 290 262 284 246 C 246 260 194 260 156 246 Z"/>
    <circle ${R} ${S} cx="222" cy="80" r="14"/>
    <path ${R} ${S} d="M236 52 C 252 44 268 46 278 56 C 268 66 252 68 238 62 Z"/>
    <g ${N}>
      <path d="M226 68 C 226 58 230 50 238 58" ${S} fill="none" stroke-width="4"/>
      <path d="M186 292 L 254 292 M 178 320 L 262 320 M 196 348 L 246 348 M 204 376 L 236 376" ${S3} stroke-width="3"/>
      <path d="M200 122 L 212 130 M 226 112 L 238 120 M 206 152 L 218 158 M 148 192 L 160 198 M 178 186 L 190 192 M 162 218 L 174 224 M 252 192 L 264 186 M 276 200 L 288 194 M 260 222 L 272 216" ${S3} stroke-width="4"/>
    </g>`,
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
     dropped into img/ under one of these names is picked up automatically.
     Bildquellen: Freepik / brgfx (via magnific.com), Free-Lizenz mit Namensnennung */
  const RASTER_KANDIDATEN = [
    { id: "r-einhorn1", srcs: ["img/einhorn-1.png", "img/einhorn-1.jpg"] },
    { id: "r-einhorn2", srcs: ["img/einhorn-2.png", "img/einhorn-2.jpg"] },
    { id: "r-prinzessin1", srcs: ["img/prinzessin-1.png", "img/prinzessin-1.jpg"] },
    { id: "r-meerjungfrau1", srcs: ["img/meerjungfrau-1.png", "img/meerjungfrau-1.jpg"] },
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
    canvas.style.cssText = "position:absolute;inset:0;margin:auto;max-width:calc(100% - 24px);max-height:calc(100% - 24px);object-fit:contain;background:#fff;border-radius:24px;box-shadow:0 14px 40px oklch(0.15 0.06 300 / .45)";
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
