# Icon

An svg icon.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--color` : Sets the icon color, assuming monochromatic SVG.
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
  icon: "megaphone",
  color: false,
  ```
</details>

<details>
  <summary>Notes for Storybook:</summary>
  These Icons come from a SVG Sprite that's compiled from a directory of icons in the `src/assets/` directory. This story will automatically populate the icon options based on the same file list that generates the SVG sprite.

  **To Update**

    - make sure SVG files use `currentColor` for `stroke:` and `fill:` so the Icon can inherit color values from their context.
    - Add (or remove), icons to the `src/assets/icons` directory.
    - `npm run sprite` which will compile the SVG Sprite `src/assets/icons.svg` AND generate the JSON file that populates this story.
</details>
