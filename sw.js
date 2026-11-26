const CACHE_NAME = 'lumen-v16';
const PRECACHE = ['./', './index.html', './manifest.json', './assets/favicon.png', './assets/icon-192.png', './assets/icon-512.png', './assets/apple-touch-icon.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((c) => c.addAll(PRECACHE))
      .catch(() => {})
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  const isHtml = e.request.mode === 'navigate' || url.pathname === '/' || url.pathname.endsWith('.html');
  const fetchReq = isHtml ? new Request(e.request, { cache: 'no-store' }) : e.request;

  e.respondWith(
    fetch(fetchReq)
      .then((res) => {
        if (res && res.ok) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
