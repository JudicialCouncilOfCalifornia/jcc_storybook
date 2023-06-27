<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->

# ProfileCard

The ProfileCard component is for displaying an image (usually a face) in a rounded/circle format
with a name, title, and addtional content (like start year).

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--color-secondary`: used as the hover color if a link is set.
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
  variant: "default",
  ...,
  img: // any rendered image
  name: // rendered as an h3
  title: // below the name, like a job title
  content: // any rendered content, like start year, quote, or other content.
  url: // url string. if set to false, no hover styles will apply.
  ```
</details>
