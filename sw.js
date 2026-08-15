self.addEventListener('push', function(event) {
  const options = {
    body: "Təbriklər! Bildiriş sistemi 100% işləyir!",
    icon: "photo_2026-08-15_23-04-04.jpg",
    vibrate: [200, 100, 200]
  };
  event.waitUntil(
    self.registration.showNotification("K9 ESPORTS TEST", options)
  );
});
