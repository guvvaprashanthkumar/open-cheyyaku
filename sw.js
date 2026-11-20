// Keeps the app available offline. Bump CACHE when you upload a new version.
const CACHE = 'open-cheyyaku-v2';
const ASSETS = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const isPage = e.request.mode === 'navigate' || /(^|\/)(index\.html)?$/.test(new URL(e.request.url).pathname);
  e.respondWith(caches.open(CACHE).then(async cache => {
    const cached = await cache.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then(r => { if (r.ok) cache.put(e.request, r.clone()); return r; });
    if (isPage) {
      // Pages: try the network first (so updates arrive), fall back to the saved copy after 2.5 s or when offline.
      const timeout = new Promise((_, rej) => setTimeout(() => rej(new Error('slow')), 2500));
      try { return await Promise.race([net, timeout]); } catch { return cached || net; }
    }
    return cached || net.catch(() => cached);
  }));
});
