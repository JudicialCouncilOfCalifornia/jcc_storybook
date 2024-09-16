function docReady(fn) {
  // See if DOM is already available.
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // Call on next available tick.
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function () {

  const toggleOverflowClass = elem => {

    // "scrollWidth" is the width of element, uneffected by overflow, visible 
    // content, or screen size. The inner content (not counting gaps) set 
    // this width.

    // "clientWidth" is visible width of element, effected by wrapping, 
    // overflow, window size, etc.

    // "gap" spacing does not effect either above value.
    
    // When the visible clientWidth is less than the scrollWidth, we know that
    // we are starting to overflow, so we can toggle the overflow class to 
    // the element.
    
    elem.classList.toggle('overflowing', elem.scrollWidth > elem.clientWidth);
  };

  const reels = Array.from(document.querySelectorAll('.reel'));
  reels.forEach((reel) => {
    if (!reel.classList.contains("js-reel-overflow")) {
      reel.classList.add("js-reel-overflow");
      toggleOverflowClass(reel);
      if ("ResizeObserver" in window) {
        new ResizeObserver((entries) => {
          toggleOverflowClass(reel);
        }).observe(reel);
      }
    }
  });

});

