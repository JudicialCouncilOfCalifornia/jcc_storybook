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
  const sidebars = Array.from(document.querySelectorAll('.with-sidebar'));
  const toggleOverflowClass = elem => {
    // If main section (larger sidebar) is the same as the full sidebar
    // container, It means that the sidebars have stacked.
    elem.target.classList.toggle('stacked-sidebars', elem.contentRect.width == elem.target.lastElementChild.clientWidth);
  };

  for (let sidebar of sidebars) {
    if ('ResizeObserver' in window) {
      new ResizeObserver(entries => {
        toggleOverflowClass(entries[0]);
      }).observe(sidebar);
    }
  }
});
