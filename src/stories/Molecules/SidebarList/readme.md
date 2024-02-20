<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->

# SidebarList

The SidebarList component is for rendering a styled grouping of different sub
elements that contain a brow, heading, text, and/or link(s).

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--name`: description...
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
  variant: "default", // default, primary, secondary
  heading: 'String - Heading for the whole component', // Does not display for primary/secondary
  data: {
    brow: "Any string or rendered text",
    heading: "Any string or rendered text",
    text: "Any string or rendered content",
    links: [array or link items]
    ...
  }
  ```
</details>
