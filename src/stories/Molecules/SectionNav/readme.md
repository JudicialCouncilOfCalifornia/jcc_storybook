<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->

# Section Nav

Description of the Section Nav in markdown.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--name`: description...
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
    variant: "default",
    label: '2nd District', // string, provide a label for the menu
    show_label: true, // boolean, render the label
    label_above: true, // boolean, render label above the menu. defaults to false
    links: Data.default_section_nav_links_data, // array of menu data
    mobile_links: Data.default_section_nav_links_data,
    display_mobile_version: true, // boolean, display the mobile menu version
    desktop_dropdown_overview_link: false // boolean, render an overview link.
    nav_trigger_data: {
      label: '2nd District', // string
      show_label: true, // boolean
    }
  ```
</details>
