self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Activated');
});

self.addEventListener('fetch', (e) => {
    // Chrome requires this fetch event to pass PWA rules
});
