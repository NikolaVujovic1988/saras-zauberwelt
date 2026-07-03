/* Saras Zauberwelt — offline-first service worker */
const CACHE = "saras-zauberwelt-v3";
const ASSETS = [
  "./",
  "index.html",
  "css/style.css",
  "js/state.js",
  "js/audio.js",
  "js/sparkle.js",
  "js/karte.js",
  "js/malen.js",
  "js/anziehen.js",
  "js/garten.js",
  "js/trank.js",
  "js/stall.js",
  "js/album.js",
  "js/eltern.js",
  "js/app.js",
  "manifest.webmanifest",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(
      (hit) =>
        hit ||
        fetch(e.request).then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
          return res;
        })
    )
  );
});
