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
  const drawer= document.getElementsByClassName('drawer');
  const footer= document.getElementsByClassName('footer');

  if (drawer) {
    const stacked_buttons = Array.from(document.querySelectorAll(".drawer__container.stack > .button"));

    // Adjust drawer placement above footer.
    if (footer[0]) {
      let footer_height = footer[0].offsetHeight / 16 + "rem";
      let drawer = document.getElementsByClassName('drawer');
      if (drawer[0])  {
        drawer[0].style.bottom = footer_height;
      } 
    }

    // Equal button widths when stacked.
    if (stacked_buttons && (stacked_buttons.length > 1)) {
      // Determine common width from the widest button.
      let max_width = stacked_buttons[0].offsetWidth;
      stacked_buttons.forEach(function(button) {
        max_width = Math.max(max_width, button.offsetWidth);
      });
      let button_width = max_width + "px";

      stacked_buttons.forEach(function(button) {
        // Not for collapsed buttons.
        if (!button.classList.contains('collapsed')) {
          button.style.width = button_width;
        }
      });
    }
  }
});
