let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Evitar que el banner se muestre automáticamente
  e.preventDefault();
  deferredPrompt = e;

  // Muestra un botón de instalación personalizado
  const installButton = document.querySelector('#installButton');
  installButton.style.display = 'block';

  installButton.addEventListener('click', () => {
    // Muestra el banner de instalación
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('El usuario aceptó la instalación');
      } else {
        console.log('El usuario rechazó la instalación');
      }
      deferredPrompt = null;
    });
  });
});
