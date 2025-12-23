const CACHE_NAME = "city-walk-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/image-pin.png",
  "./icons/audio-pin.png",
  "./images/image1.jpg",
  "./audio/audio1.mp3"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
