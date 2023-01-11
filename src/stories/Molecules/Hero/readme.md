# Hero

A hero typically consists of a background overlaid with content that spans the width of the screen or content region.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--color`
  - `--heading-color`
  - `--button-border`
  - `--button-bg`
  - `--button-fg`
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
  variant: "banner",
  content_justify: "left",
  accent_color: false,
  content_bg_color: false,
  bg_tint: "accent-warm-dark-xx",
  background_image_url: "https://...",
  card_data: {
    variant: "default",
    first_component: true,
    media: false,
    heading: "Hero Heading",
    text: "<p>...</p>",
    button: {
      label: "Text Button",
      href: "#",
      variant: "text",
    },
  },
  ```
</details>
