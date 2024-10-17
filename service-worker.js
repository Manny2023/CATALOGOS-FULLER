self.addEventListener('install', (e) => {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', (e) => {
  console.log('Interceptando solicitud:', e.request.url);
});
