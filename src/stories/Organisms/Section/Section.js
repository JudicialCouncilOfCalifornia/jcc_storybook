function docReady(fn) {
  // See if DOM is already available.
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // Call on next available tick.
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function adjustHeadings(subcomponents) {
  // Migrate to new heading tags.
  subcomponents.forEach(function(subcomponent) {    
    let subcompHeadings = subcomponent.querySelectorAll("h1, h2, h3, h4, h5, h6");

    subcompHeadings.forEach(function(subcompHeading) {
      let headingTag = subcompHeading.tagName;
      let headingLevel = Number(headingTag.charAt(1));
      let headingClass = subcompHeading.className;
      let newHeading = document.createElement("h" + (headingLevel + 1));
      // Migrate classes.
        if (headingClass) {
          headingClass.split(" ").forEach(className => {
            if (className.trim()) {
              newHeading.classList.add(className);
            }
          });
        }
      // Migrate text & replace original heading.
      while(subcompHeading.firstChild) {
        newHeading.appendChild(subcompHeading.firstChild);
      }
      subcompHeading.parentNode.replaceChild(newHeading, subcompHeading);
    });
  });
}

function adjustSubcomponents(subcomponents, type) {
  // Extend cards component styling - see Section.css.
  if (type === "cards") {
    const rect = subcomponents[0].getBoundingClientRect();
    if (rect.left.toFixed() <= 23) {
      subcomponents[0].classList.remove("unwrapped");
    } else {
      subcomponents[0].classList.add("unwrapped");
    }
  }
}

docReady(function () {
  // Select custom sections.
  // Must specify 'custom' as a custom section class.
  const customSection = document.querySelectorAll('.section.custom');
  // Select cards.
  const cards = document.querySelectorAll(".cards");

  // Adjust custom layouts.
  if (customSection.length > 0) {
    const headingsAdjusted = "headings-adjusted";
    // Target specific nested components.
    const componentIds = ".accordion, .action-list, .body, .cards, .steps, .teaser-list, .profile-cards, .view-results .content, .tabs, .list";
    customSection.forEach(function(section) {
      // Adjust subcomponent headings if custom section has H2.
      if (!section.classList.contains(headingsAdjusted)) {
        let subcomponents = section.querySelectorAll(componentIds);

        if (subcomponents) {
          // Determine if section heading exists.
          let sectionHeading = section.querySelector(".section__content > .container > .section__header");
          let sectionHeadingTagName = sectionHeading !== null && sectionHeading.querySelector('h1, h2') ? sectionHeading.querySelector('h1, h2').tagName : null;

          // Adjust relevant subcomponent headings if H2 in use.
          if (sectionHeadingTagName && sectionHeadingTagName !== "H1") {
            adjustHeadings(subcomponents);
            // In case script is executed repeatedly, flag custom section as processed.
            section.classList.add(headingsAdjusted);
          }
        }
      }
    });
  }

  // Adjust for cards support.
  if (cards.length > 0) {
    adjustSubcomponents(cards, "cards");
    window.onresize = function () {
      adjustSubcomponents(cards, "cards");
    };
  }
});
