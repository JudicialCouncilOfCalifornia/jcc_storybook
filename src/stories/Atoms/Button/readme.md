# Button

Button border, text and background colors can be inherited from ancestor components via CSS variables.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--button-fg`
  - `--button-bg`
  - `--button-border` usually set to `--button-fg`.
</details>

<details>
  <summary>Twig Variables:</summary>

  ```
  variant: 'primary',
  size: 'normal',
  label: "Button",
  href: "#",
  aria_label: "More descriptive label for screen readers",
  icon: "Change CSS-provided icon if not using default arrow",
  collapsed: "true or false to show label on hover - no touch device support yet"
  ```
</details>
