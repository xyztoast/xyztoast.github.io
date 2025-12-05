const CACHE_NAME = 'idktoast-cache';
const urlsToCache = [
  '/',
  '/app/index.html',
  '/app/account.html',
  '/app/beta.html',
  '/app/preview.html',
  '/dl/android.html',
  '/dl/mac.html',
  '/dl/ios.html',
  '/dl/windows.html',
  '/mojangles.ttf',
  '/icons/192.png',
  '/icons/512.png'
];

// install event - cache everything
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting()) // activate immediately
  );
});

// activate event - clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => 
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    ).then(() => self.clients.claim())
  );
});

// fetch event - network first, fallback to cache
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(res => {
        // clone response to cache
        const resClone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, resClone));
        return res;
      })
      .catch(() => caches.match(e.request)) // fallback to cache
  );
});
