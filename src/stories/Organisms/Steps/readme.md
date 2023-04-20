<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->

# Steps

Generate a numbered list of steps. Each step in a Steps list is comprised of a Label and of a content element. The content element can contain any text or rendered content that you can provide.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--accent-color`: Main accent color.
  - `--color-primary`: Primary color.
  - `--color-secondary`: Secondary color.
  - `--color-dark`: Main base dark color.
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
  variant: "default",
  color: "default, warm, dark, primary, or secondary",
  ...,
  steps: [
    {
      label: "Must have a label for the step.",
      content: "Any rendered content or text can go here.
    },
    ... Any number of Step items...
  ]
  ```
</details>
