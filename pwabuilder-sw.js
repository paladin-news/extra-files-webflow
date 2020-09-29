var CACHE_NAME = 'static-cache';
var urlsToCache = [
  '.',
  'offline.html'
];
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});
