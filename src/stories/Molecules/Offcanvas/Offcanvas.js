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
  const container= document.getElementsByClassName('offcanvas__container');

  // Show canvas.
  const open_buttons = Array.from(document.querySelectorAll('.offcanvas__open-button'));
  open_buttons.forEach(open_button => {
    open_button.addEventListener('click', function(e) {
      container[0].setAttribute('open', true);
    }, false);
  });

  // Hide canvas.
  const close_buttons = Array.from(document.querySelectorAll('.offcanvas__close-button'));
  close_buttons.forEach(close_button => {
    close_button.addEventListener('click', function(e) {
      container[0].removeAttribute('open');
    }, false);
  });
});
