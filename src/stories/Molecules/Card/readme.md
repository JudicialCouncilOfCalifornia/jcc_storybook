<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Card

Card components can be displayed in multiple variants.

The Striped variant can set a striped background value and an Icon. The media element is not displayed on a Striped card.

Card also supports a `clickable_card` option that hides the button sub-component and makes the card itself clickable.

The card variant type can be inherited which means you can set it on the element that contains a set of cards rather than setting it on individual cards.


<details>
  <summary>Inherited CSS Variables:</summary>  - `--color`
  - `--heading-color`
  - `--button-border`
  - `--button-bg`
  - `--button-fg`
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
  variant: "default",
  clickable_card: false,
  background: null,
  media: [markup],
  icon_data: {
    icon: "speaker",
    color: false,
  },
  heading: "Heading For A Card",
  text: [markup],
  button_data: {
    label: "Button",
    href: "#",
    variant: "primary",
  },
  ```
</details>
