<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->

# SidebarList

The SidebarList component is for rendering a styled grouping of different sub
data elements that each can contain a brow, heading, text, and/or link(s).

Different style rules apply to primary and secondary variants. Main heading for
the component does not display for primary and secondary. Primary and secondary
variants have different background colors and some text style differences.

Includes "footer" subsection option for related information.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--name`: description...
</details>

<details>
  <summary>Twig Variables:</summary>

  ```
  variant: "default", // default, primary, secondary
  heading: 'String - Heading for the whole component', // Does not display for primary/secondary
  data: [
    {
      brow: "Any string or rendered text",
      heading: "Any string or rendered text",
      text: "Any string or rendered content",
      links: [array or link items],
    },
    {
      '...repeat for additional items...'
    },
  ],
  subsection: {
    heading: "String - heading for subsection",
    data: [
      {
        brow: "Any string or rendered text",
        heading: "Any string or rendered text",
        text: "Any string or rendered content",
      },
      {
        '...repeat for additional items...'
      },
    ],
    
  }
  ```

</details>
