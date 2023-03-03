<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Hat

The Hat is a global branding element containing the Global Brand word mark and global links to related sites.

The Secondary Nav component is used for the links with "hidden" overflow so the links disappear when there's no room for them.

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
    },
    secondary_nav_data: {
      variant: "",
      overflowing_variant: "hidden",
      links: [
        {
          text: "Supreme Court",
          url: "#",
          is_current: false,
        },
        {
          text: "Courts of Appeal",
          url: "#",
          is_current: false,
        },
        {
          text: "Superior Courts",
          url: "#",
          is_current: false,
        },
        {
          text: "Judicial Council",
          url: "#",
          is_current: false,
        }
      ],
    }
  ```
</details>
