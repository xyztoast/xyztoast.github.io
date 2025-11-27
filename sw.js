const CACHE_NAME = 'mcbeapk-cache-v1';
const urlsToCache = [
  '/',
  '/app/index.html',
  '/app/account.html',
  '/app/beta.html',
  '/dl/android.html',
  '/dl/mac.html',
  '/dl/ios.html',
  'dl/windows.html',
  '/mojangles.ttf',
  '/icons/192.png',
  '/icons/512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
