self.addEventListener('install', (e) => {
  console.log('[K-Drive] Trạm kiểm soát đã cài đặt Service Worker');
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Để trống lệnh fetch này là đủ để lừa trình duyệt Cốc Cốc/Chrome công nhận đây là App
});
