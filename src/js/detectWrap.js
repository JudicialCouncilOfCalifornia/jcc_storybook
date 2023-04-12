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
  const detectWrap = elem => {
    const top = elem.children[0].getBoundingClientRect().top;

    for (let i = 1; i < elem.children.length; i++) {
      const child = elem.children[i];
      if (child.getBoundingClientRect().top != top) {
        child.classList.add('wrapped');
        elem.classList.add('wrapping');
      }
    }
  }

  const wrappable = document.querySelectorAll('.detect-wrap');

  wrappable.forEach(item => {
    if (!item.classList.contains('js-detect-wrap')) {
      item.classList.add('js-detect-wrap');
      detectWrap(item);
    }
  });
});
