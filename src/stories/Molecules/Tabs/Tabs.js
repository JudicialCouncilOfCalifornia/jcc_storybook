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
  // 'use strict';

  class Tabs {

    constructor(groupNode) {
      this.tablistNode = groupNode;
      this.tabs = [];
      this.firstTab = null;
      this.lastTab = null;
      this.tabs = Array.from(this.tablistNode.querySelectorAll('[role=tab]'));
      this.tabpanels = [];

      // Set our preset "Tab from url hash" selection variables.
      this.preselectedTab = null;
      this.presetId = window.location.hash ? window.location.hash.substring(1) : null;
      this.preselectedContentFound = null;

      // Set our first tab and last tab by running thru all the available
      // tabs.
      this.tabs.forEach(tab => {
        var tabpanel = document.getElementById(tab.getAttribute('aria-controls'));
        tab.tabIndex = -1;
        tab.setAttribute('aria-selected', 'false');
        this.tabpanels.push(tabpanel);

        tab.addEventListener('keydown', this.onKeydown.bind(this));
        tab.addEventListener('click', this.onClick.bind(this));

        if (!this.firstTab) {
          this.firstTab = tab;
        }

        this.lastTab = tab;
      });

      // If we have a preset id hash, try to find the associated element.
      if (this.presetId) {
        this.preselectedContentFound = document.getElementById(this.presetId);
      }

      // If we have a matching preset element, determine if the hash id
      // belongs to the "tab" itself, or an element in the tab panel.
      if (this.preselectedContentFound) {
        // If the preselected element is not a button, then the content
        // is inside of tab panel and not the specific tab itself.
        if (this.preselectedContentFound.tagName !== 'BUTTON') {
          let closestDetail = this.preselectedContentFound.closest('details');
          if (closestDetail.id) {
            let closestTabID = closestDetail.id.replace('tabpanel-', 'tab-');
            this.preselectedTab = document.getElementById(closestTabID);
          }
        }
        // In this case, the preselected element is the tab itself.
        else {
          this.preselectedTab = this.preselectedContentFound;
        }
      }

      // Set the selected tab element (defaults to first item, if no
      // preset item is detected from the url hash id.
      this.setSelectedTab(this.preselectedTab ? this.preselectedTab : this.firstTab);

      // If there is preselected element, scroll down to it after figuring
      // out the correct tab.
      if (this.preselectedContentFound) {
        this.preselectedContentFound.scrollIntoView();
      }
    }

    setSelectedTab(currentTab) {
      this.tabs.forEach((tab) => {
        let tabpanelID = tab.id.replace('tab-', 'tabpanel-');
        let tabpanel = document.getElementById(tabpanelID);

        // If tab matches the currently selected tab (or preset tab),
        // Open/show the content and set the active classes.
        if (currentTab === tab) {
          tab.setAttribute('aria-selected', 'true');
          tab.classList.add('active');
          tab.removeAttribute('tabindex');
          tabpanel.open = true;
        }
        // Otherwise, hide the tab content.
        else {
          tab.setAttribute('aria-selected', 'false');
          tab.classList.remove('active');
          tab.tabIndex = -1;
          tabpanel.open = false;
        }
      });
    }

    moveFocusToTab(currentTab) {
      currentTab.focus();
    }

    moveFocusToPreviousTab(currentTab) {
      var index;

      if (currentTab === this.firstTab) {
        this.moveFocusToTab(this.lastTab);
      } else {
        index = this.tabs.indexOf(currentTab);
        this.moveFocusToTab(this.tabs[index - 1]);
      }
    }

    moveFocusToNextTab(currentTab) {
      var index;

      if (currentTab === this.lastTab) {
        this.moveFocusToTab(this.firstTab);
      } else {
        index = this.tabs.indexOf(currentTab);
        this.moveFocusToTab(this.tabs[index + 1]);
      }
    }

    onKeydown(event) {
      var tgt = event.currentTarget,
        flag = false;

      switch (event.key) {
        case 'ArrowLeft':
          this.moveFocusToPreviousTab(tgt);
          flag = true;
          break;

        case 'ArrowRight':
          this.moveFocusToNextTab(tgt);
          flag = true;
          break;

        case 'Home':
          this.moveFocusToTab(this.firstTab);
          flag = true;
          break;

        case 'End':
          this.moveFocusToTab(this.lastTab);
          flag = true;
          break;

        default:
          break;
      }

      if (flag) {
        event.stopPropagation();
        event.preventDefault();
      }
    }

    onClick(event) {
      this.setSelectedTab(event.currentTarget);
    }
  }

  // Toggle accordion class if the tabs have insufficient real estate.
  function toggleAccordionDisplay(tablist) {
    let container = tablist.parentElement;
    let tabs = Array.from(tablist.querySelectorAll('button'));
    let itemsTotalWidth = 0;

    for (let i = 0; i < tabs.length; i++) {
      itemsTotalWidth += parseInt(tabs[i].offsetWidth, 10);
    }

    if (itemsTotalWidth >= container.clientWidth) {
      container.classList.add('tabs--as-accordion');
    }
    else {
      container.classList.remove('tabs--as-accordion');
    }
  }

  // Determine if tabs should convert to "accordion" layout on resize.
  const resizeObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
      toggleAccordionDisplay(entry.target);
    });
  });

  // Initialize tablist
  const tablists = document.querySelectorAll('.tabs [role=tablist]');
  tablists.forEach(tablist => {
    if (!tablist.classList.contains('js-tabs__tablist')) {
      tablist.classList.add('js-tabs__tablist');
      new Tabs(tablist);
      resizeObserver.observe(tablist);
    }
  });
});
