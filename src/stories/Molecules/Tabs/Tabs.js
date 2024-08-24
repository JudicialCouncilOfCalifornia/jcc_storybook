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
  'use strict';

  class Tabs {
    constructor(groupNode) {
      this.tablistNode = groupNode;
      this.tabs = [];
      this.firstTab = null;
      this.lastTab = null;
      this.tabs = Array.from(this.tablistNode.querySelectorAll('[role=tab]'));
      this.tabpanels = [];

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

      this.setSelectedTab(this.firstTab);
    }

    setSelectedTab(currentTab) {
      this.tabs.forEach((tab, idx) => {
        let tabpanelID = tab.id.replace('tab', 'tabpanel');
        let tabpanel = document.getElementById(tabpanelID);
        if (currentTab === tab) {
          tab.setAttribute('aria-selected', 'true');
          tab.classList.add('active');
          tab.removeAttribute('tabindex');
          tabpanel.classList.remove('is-hidden');
        } else {
          tab.setAttribute('aria-selected', 'false');
          tab.classList.remove('active');
          tab.tabIndex = -1;
          tabpanel.classList.add('is-hidden');
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

  // Determine if tabs should convert to "accordion" layout on resize.
  const resizeObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
      toggleAccordionDisplay(entry.target)
    });
  });

  // Initialize tablist
  var tablists = document.querySelectorAll('.tabs [role=tablist]');

  tablists.forEach(tablist => {
    if (!tablist.classList.contains('js-tabs__tablist')) {
      tablist.classList.add('js-tabs__tablist');
      new Tabs(tablist);

      resizeObserver.observe(tablist);
    }
  });

  // Toggle class if the tab and tablist are the same width or not.
  function toggleAccordionDisplay(tablist) {
    let container = tablist.parentElement;
    let Tabs = Array.from(tablist.querySelectorAll('button'));
    let lastTab = Tabs[Tabs.length - 1];
    let details = container.querySelectorAll('details');
    let itemsTotalWidth = 0;
    for (let i = 0; i < Tabs.length; i++) {
      itemsTotalWidth += parseInt(Tabs[i].offsetWidth, 10);
    }

    if (itemsTotalWidth >= container.clientWidth || lastTab.offsetLeft <= 0) {
      tablist.classList.remove('cluster');
      tablist.classList.add('switcher');
      details.forEach((detail) => {
        if (detail.classList.contains('is-hidden')) {
          detail.open = false;
        }
      });
      container.classList.add('tabs--as-accordion');
    }
    else {
      container.classList.remove('tabs--as-accordion');
      details.forEach((detail) => {
        detail.open = true;
      });
      tablist.classList.remove('switcher');
      tablist.classList.add('cluster');
    }
  }
});
