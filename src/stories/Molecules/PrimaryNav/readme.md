<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Primary Nav

The primary nav is a self contained responsive nav bar. It uses the Reel Overflow feature to detect when it doesn't have enough space to render and then switches to a hamburger style menu.

Since it doesn't use breakpoints the default nav style will be visible until there's not enough space to accommodate it. If there are fewer links at the top level, it only uses the hamburger style menu at lower and lower screen widths, rather than a fixed breakpoint which might not be appropriate given the content.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--icon-size`: (default: `var(--s2)`) Sets the size of the hamburger icon. This can be overridden on the `.primary-nav` element and set to any value in our Modular Scale.
  - `--color`: sets the menu link color.
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
  links: [
    {
      text: "Navigation Link",
      is_current: true,
      id: "nav-section-one",
      url: "#",
    },
    {
      text: "Up To Seven",
      links: [
        {
          text: "Navigation link 1",
          url: "#",
        },
        ...
      ],
      section_link: {
        text: "Navigation link",
        url: "#",
      },
    },
    ...
  }
  ```
</details>
