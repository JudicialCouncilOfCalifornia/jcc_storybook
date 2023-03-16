<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Section

A Section is a wrapping component that provides a background as well as optional **brow**, **heading**, **text** and **button**. The Section contains other components that provide content. Current sub component types are `Card`, `Cards`, `TeaserPlusList`.

If the `sub_component_template` is empty, or any other value, then sub_component_data will be rendered directly as markup. In this way you can render any content from the back end inside a Section.

When rendering content directly the Section will use the `switcher` layout by default. However you can set this to `grid` or `cluster` if you prefer, using the `section_layout` value. Then you can render multiple sub components inside the section and they will lay themselves out accordingly, and be intrinsically responsive.

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
