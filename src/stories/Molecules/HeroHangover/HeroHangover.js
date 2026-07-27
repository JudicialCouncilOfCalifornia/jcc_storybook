function docReady(fn) {
  // See if DOM is already available.
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // Call on next available tick.
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function repositionHangoverMedia() {
  const hangoverMediaContainer = document.querySelector('.hangover__top .hangover__top-content');
  if (hangoverMediaContainer) {
    if (Math.round(hangoverMediaContainer.getBoundingClientRect().left) <= 22) {
      hangoverMediaContainer.classList.add('stacked-hangover-media');
    }
    else {
      hangoverMediaContainer.classList.remove('stacked-hangover-media');
    }
  }
}

docReady(function () {
  const hangover = document.querySelector('.hangover');

  if (hangover) {
    const hangoverMedia = hangover.querySelector('.hangover__top .hangover__top-hangover-content .card .card__media');

    if (hangoverMedia) {
      repositionHangoverMedia();
      window.addEventListener('resize', function(event) {
        repositionHangoverMedia();
      });
    }
  }
});
