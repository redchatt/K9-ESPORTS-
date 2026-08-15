self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};
  const title = data.title || "K9 ESPORTS";
  const options = {
    body: data.body || "Yeni bildirişiniz var!",
    icon: "photo_2026-08-15_23-04-04.jpg",
    badge: "photo_2026-08-15_23-04-04.jpg",
    vibrate: [200, 100, 200]
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
