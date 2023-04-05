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
  // Have each alert close button remove its parent alert.
  const close_buttons = Array.from(document.querySelectorAll('.alert--dismiss--close'));
  close_buttons.forEach(close_button => {
    close_button.addEventListener('click', function(e) {
      this.closest('.alert').remove()
    }, false);
  });
});