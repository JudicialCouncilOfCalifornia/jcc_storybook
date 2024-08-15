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
  const reels = Array.from(document.querySelectorAll('.reel'));

  for (let reel of reels) {
    let items = reel.children;
    let itemsTotalWidth = 0;
    for (let i = 0; i < items.length; i++) {
      itemsTotalWidth += parseInt(items[i].offsetWidth, 10);
    }
    if ('ResizeObserver' in window) {
      new ResizeObserver(entries => {
        // Reel items overflow flagging.
        let offSetRight = window.innerWidth - (reel.lastElementChild.offsetLeft + reel.lastElementChild.offsetWidth);
        if (itemsTotalWidth > reel.offsetWidth || reel.firstElementChild.offsetLeft < 0 || offSetRight < 0) {
          reel.classList.add('overflowing');
        }
        else {
          reel.classList.remove('overflowing');
        }
      }).observe(reel);
    }
  }
});
