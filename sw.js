self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pizza-malakue-v1').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/pizza-coklat-mozarella.jpg',
      '/pizza-coklat-keju-cedar.jpg',
      '/pizza-party.jpg',
      '/pizza-vulcano-non-pedas.jpg',
      '/pizza-vulcano-pedas.jpg',
      '/qris-pizza-malakue.jpg'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
