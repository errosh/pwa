console.warn("Server Worker is registred!");

let CacheData = "AppV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CacheData).then((cache) => {
      cache.addAll([
        "/static/js/bundle.js",
        "/static/js/0.chunk.js",
        "/static/js/main.chunk.js",
        "/index.html",
        "/",
        "/users",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((res) => {
        if (res) {
          return res;
        }
        let fetchUrl = event.request.clone();
        fetch(fetchUrl);
      })
    );
  }
});
