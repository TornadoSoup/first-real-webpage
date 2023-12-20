// Fade-in Effect
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');
  container.style.opacity = '0';

  function fadeIn() {
    let opacity = 0;
    const duration = 1500; // Adjust the duration in milliseconds
    const interval = 16; // Approximate interval for smoother animation

    function animate() {
      opacity += interval / duration;
      container.style.opacity = Math.min(opacity, 1);

      if (opacity < 1) {
        requestAnimationFrame(animate);
      }
    }

    animate();
  }

  fadeIn();
});
