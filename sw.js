self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Activated');
});

// Chrome REQUIRES this fetch event to trigger the Install Prompt
self.addEventListener('fetch', (e) => {
    // This allows the app to pass the PWA installation requirements
});
// Service Worker
