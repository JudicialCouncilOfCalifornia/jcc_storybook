<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->

# Tabs

A Tabs component is made from an array of a label and rendered content elements. The label of each element creates a horizontal tab button that, when clicked, displays the associated rendered content panel.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--accent-color`: For the arrow icon color.
  - `--border-normal`: Border normal thickness (applies to alternate design).
  - `--border-thin`: Border thin thickness (border thickness around tabs).
  - `--anim-speed`: Speed for the fading/tab switching effects.
</details>

<details>
  <summary>Twig Variables:</summary>

  ```
    variant: "default" or "alternate"
    ...
    items: [
      {
        id: "Text String",
        label: "Text String",
        content: "rendered content",
      },
      {
        id: "Text String",
        label: "Text String",
        content: "rendered content",
      },
      ...
    ],
  ```
</details>
