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
    // let items = elem.children;
    // let itemsTotalWidth = 0;
    // for (let i = 0; i < items.length; i++) {
    //   itemsTotalWidth += parseInt(items[i].offsetWidth, 10);
    // }

    // if (elem.scrollWidth > elem.clientWidth) {
    //   elem.classList.add('overflowing');
    // } else {
    //   elem.classList.remove('overflowing');
    // }

    //let offSetRight = window.innerWidth - (elem.lastElementChild.offsetLeft + elem.lastElementChild.offsetWidth);
    // if (itemsTotalWidth > elem.offsetWidth || elem.firstElementChild.offsetLeft < 0 || offSetRight < 0) {
    //   elem.classList.add('overflowing');
    // }
    // else {
    //   elem.classList.remove('overflowing');
    // }
    
    elem.classList.toggle('overflowing', elem.scrollWidth > elem.clientWidth);
  };

  // for (let reel of reels) {
  //   if ('ResizeObserver' in window) {
  //     new ResizeObserver(entries => {
  //       toggleOverflowClass(entries[0].target);
  //     }).observe(reel);
  //   }
  // }

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

