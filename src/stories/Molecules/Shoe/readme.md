<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Shoe

The Shoe is a global branding element containing the Global Brand word mark with global links and a copyright date.

The Secondary Nav component is used for the links with "stack" overflow so the links stack when there's no room for them inline.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--color`: Sets the font color of child elements.
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
  variant: "default",
  global_branding_data: {
    text: "Judicial Branch of California",
    destination: "https://courts.ca.gov",
    attributes: new drupalAttribute()
  },
  secondary_nav_data: {
    variant: "",
    overflowing_variant: "stack",
    links: [
      {
        text: "Contact Us",
        url: "#",
        is_current: false,
      },
      {
        text: "Privacy",
        url: "#",
        is_current: false,
      },
      {
        text: "Terms Of Use",
        url: "#",
        is_current: false,
      }
    ],
  },
  ```
</details>
