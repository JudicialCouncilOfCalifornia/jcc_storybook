<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Section

A Section is a wrapping component that provides a background as well as optional **brow**, **heading**, **lead text** and **button**. The Section contains other components that provide content.

The Section variant determines it's background and other element attributes like Heading color.

The `sub_component_layout` is highly configurable to accommodate many different content needs. You can set the `sub_component_layout` value to any of several "Layout Primitive" values plus some additional flex split values for legacy compatibility.

Depending on which `sub_component_layout` is used, a number of other values are relevant for fine tuning. Or you may let the defaults remain.

Then you can render multiple sub components inside the section and they will lay themselves out accordingly, and be intrinsically responsive.

<details>
  <summary>Inherited CSS Variables:</summary>
    - `--measure`: Sets the *measure* or ideal content width or switching point for **Center** or **Switcher**
    - `--grid-min-width`: Sets the minimum content width for an item in the grid.
    - `--sidebar-direction`: Sets the the direction for the Sidebar layout. Sidebar left (default) = `row`, sidebar right = `row-reverse`.
    - `--sidebar-width`: Sets the sidebar width in ch.
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
  variant: 'default',
  first_component: false,
  sub_component_layout: 'switcher',
  // center, stack
  align_items: false,
  // center, switcher
  measure: false,
  // cluster, grid, reel, stack, switcher
  gap: false,
  // grid
  grid_min_width: false,
  // with-sidebar
  sidebar_direction: false,
  // with-sidebar
  sidebar_width: false,
  background_image_url: "",
  brow_data: {
    variant: "default",
    part_one: "Brow Example",
    part_two: "",
  },
  heading: 'Heading Example',
  text: '...',
  button_data: {
    label: "Button",
    href: "#",
    variant: "primary",
  },
  sub_component_data: [
    ...,
    ...
  ],
  ```
</details>
