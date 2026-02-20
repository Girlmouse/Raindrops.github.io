// Raindrops Service Worker
const CACHE_NAME = 'raindrops-v1';
const ASSETS = [
  '/Raindrops.github.io/',
  '/Raindrops.github.io/index.html',
  '/Raindrops.github.io/about.html',
  '/Raindrops.github.io/privacy.html',
  '/Raindrops.github.io/forest.html',
  '/Raindrops.github.io/mountain.html',
  '/Raindrops.github.io/ocean.html',
  '/Raindrops.github.io/swamp.html',
  '/Raindrops.github.io/noir.html',
  '/Raindrops.github.io/city.html',
  '/Raindrops.github.io/space.html',
  '/Raindrops.github.io/audio/rain.mp3',
  '/Raindrops.github.io/audio/crickets.mp3',
  '/Raindrops.github.io/audio/frogs.mp3',
  '/Raindrops.github.io/audio/space.mp3',
  '/Raindrops.github.io/logo_ios.png'
];

// Install — cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — serve from cache, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).catch(() => {
        // If offline and not cached, return index
        if (event.request.mode === 'navigate') {
          return caches.match('/Raindrops.github.io/index.html');
        }
      });
    })
  );
});
