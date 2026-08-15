// Service Worker - Arxa fonda və telefon bağlı olanda bildiriş göstərmək üçün
self.addEventListener('push', function(event) {
  let data = {};
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data = { title: "K9 ESPORTS", body: event.data.text() };
    }
  }

  const title = data.title || "K9 ESPORTS";
  const options = {
    body: data.body || "Yeni xəbərdarlıq var!",
    icon: "photo_2026-08-15_23-04-04.jpg",
    badge: "photo_2026-08-15_23-04-04.jpg",
    vibrate: [200, 100, 200, 100, 200],
    data: { url: self.registration.scope }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});
