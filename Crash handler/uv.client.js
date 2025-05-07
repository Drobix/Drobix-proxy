// Ultraviolet Client File
window.addEventListener('DOMContentLoaded', () => {
  // Initialize Ultraviolet client for the browser
  const uv = new UVClient({
    prefix: '/service/',
  });
  uv.start();
});
