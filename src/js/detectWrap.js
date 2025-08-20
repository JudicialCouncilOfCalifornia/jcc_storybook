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
  const detectWrap = (group) => {
    // Start by removing parent wrapping class if it exists.
    group.classList.remove("wrapping");

    // Start our variables. We start assuming no child elements are wrapped.
    const top_of_firstchild = Math.floor(group.children[0].getBoundingClientRect().top);
    let wrapped = false;

    for (let i = 1; i < group.children.length; i++) {
      const child = group.children[i];
      // If any other children do not have the same top as the first child, then
      // we know that the items are wrapping.
      let top_of_child = Math.floor(child.getBoundingClientRect().top);
      // QUICK FIX: Adjust to Firefox trivial top misalignment appearing for last child.
      // Check if top difference is not larger than 1 or less than 0.
      let top_difference = top_of_firstchild - top_of_child;
      if (top_difference > 1 || top_difference < 0) {
        child.classList.add("wrapped");
        wrapped = true;
      } else {
        child.classList.remove("wrapped");
        wrapped = false;
      }
    }

    // If we have wrapping children, apply the wrapping class. Only apply after
    // processing of all the children.
    if (wrapped) {
      group.classList.add("wrapping");
    }
  };

  const wrappable = document.querySelectorAll(".detect-wrap");

  wrappable.forEach((item) => {
    if (!item.classList.contains("js-detect-wrap")) {
      item.classList.add("js-detect-wrap");

      detectWrap(item);

      if (item.classList.contains("detect-wrap--observed")) {
        if ("ResizeObserver" in window) {
          new ResizeObserver((entries) => {
            detectWrap(item);
          }).observe(item);
        }
      }
    }
  });
});
