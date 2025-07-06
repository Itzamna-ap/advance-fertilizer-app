// This is a basic service worker for PWA functionality.
const CACHE_NAME = 'advance-fertilizer-cache-v1';
const urlsToCache = [
  '/',
  '/index.html'
  // You can add more assets here like CSS, JS files if they are local
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
