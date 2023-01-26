<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Cards

Cards component is a wrapper for one or more Card components. It can set the section variant the Cards are wrapped in, as well as the Card variant so all cards in a Cards section are rendered in a consistent style.

When setting the `card_variant` on the Cards component, set the variant in `card_data` to "default" or `false`.


<details>
  <summary>Inherited CSS Variables:</summary>
  - `--color`
  - **See `Molecules: Section` component for additional values**
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
  variant: "default",
  card_width: "30ch",
  card_variant: "default",
  items: [
    card_data: {
      variant: "default",
      media: '...',
      icon_data: {
        icon: "speaker",
        color: false,
        attributes: new drupalAttribute(),
      },
      heading: "Heading For A Card",
      text: "<p>...</p>",
      button: {
        label: "Button",
        href: "#",
        variant: "primary",
      },
    },
    {...},
  ],
  ```
</details>
