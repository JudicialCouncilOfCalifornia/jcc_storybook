<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Section

A Section is a wrapping component that provides a background as well as optional **brow**, **heading**, **text** and **button**. The Section contains other components that provide content, like cards, etc.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--color`
  - `--color`
  - `--accent-color`
  - `--heading-color`
  - `--button-fg`
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
  variant: "default",
  first_component: false,
  brow_data: {
    variant: "default",
    part_one: "Brow Example",
    part_two: "",
  },
  heading: "Heading Example",
  text: "<p>...</p>",
  sub_component_template: "Card"
  sub_component_data: {
    [Data for the specified sub_component_template]
  },
  button_data: {
    variant: "primary",
    size: "normal",
    label: "Button",
    href: "#"
  }
  ```
</details>
