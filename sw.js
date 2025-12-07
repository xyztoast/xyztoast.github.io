const CACHE_NAME = 'idktoast-cache';

// install - just cache the service worker itself
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.add('/sw.js'))
      .then(() => self.skipWaiting())
  );
});

// activate - clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => key !== CACHE_NAME && caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// fetch - network first, cache dynamically
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;

      return fetch(e.request).then(res => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, resClone));
        return res;
      }).catch(() => {
        // optional fallback if request fails
        return caches.match('/app/offline');
      });
    })
  );
});
