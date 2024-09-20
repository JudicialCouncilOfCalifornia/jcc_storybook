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
      let isDefaultCard = card.classList.contains('card') && card.classList.contains('card--default');

      // Adjust default card variant media as needed.
      if (cardMedia && isDefaultCard) {
        if ('ResizeObserver' in window) {
          new ResizeObserver(entries => {
            let cardMediaFrame = cardMedia.querySelector('.frame');
            let cardMain = card.querySelector('.card__main');
            let cardMainParentLeft = card.querySelector('.card__inner').offsetLeft;

            if (cardMain.offsetLeft !== cardMainParentLeft || cardMedia.offsetLeft !== cardMainParentLeft) {
              // Aspect ratio disabled for media-left by CSS.
              // Match media height with main.
              cardMediaFrame.style.aspectRatio = 'unset';
              cardMediaFrame.style.height = cardMain.offsetHeight + 'px';
            }
            else {
              // Reset elements as needed when stacked.
              cardMediaFrame.removeAttribute('style');
            }
          }).observe(card);
        }
      }
    });
  }
});
