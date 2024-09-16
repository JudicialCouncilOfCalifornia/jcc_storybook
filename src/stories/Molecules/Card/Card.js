function docReady(fn) {
  // See if DOM is already available.
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // Call on next available tick.
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function () {
  const cards = Array.from(document.querySelectorAll('.card'));

  // Default variant adjustments.
  if (cards) {
    cards.forEach(card => {
      let cardMedia = card.querySelector('.card__media');
      let defaultCardWithBG = card.classList.contains('card--default') && card.classList.contains('bg-adjust');

      // Adjust default card variant media as needed.
      if (cardMedia && defaultCardWithBG) {
        let cardMediaFrame = cardMedia.querySelector('.frame');
        let cardMain = card.querySelector('.card__main');

        if ('ResizeObserver' in window) {
          new ResizeObserver(entries => {
            if (cardMain.offsetLeft !== 18) {
              // Apply media-left class variant.
              card.classList.add('card--media-left');
              // Aspect ratio disabled for media-left by CSS.
              // Match media height with main.
              cardMediaFrame.style.height = cardMain.offsetHeight + 'px';
            }
            else {
              // Reset elements as needed when stacked.
              cardMediaFrame.removeAttribute('style');
              card.classList.remove('card--media-left');
            }
          }).observe(card);
        }
      }
    });
  }
});
