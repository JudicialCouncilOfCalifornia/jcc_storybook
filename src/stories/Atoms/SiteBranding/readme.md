<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->

# Site Branding

Site branding takes a logo a label and a sub-label to form the site brand identifier for the header and footer.

As a SVG, the JCC seal color can be set by CSS using `fill` when used directly as code or `filter` when used as `img` source.

Example CSS:
`filter: invert(23%) sepia(46%) saturate(3623%) hue-rotate(178deg) brightness(92%) contrast(94%);`

<details>
  <summary>Twig Variables:</summary>

  ```
  logo: logo,
  url: "/",
  label: "California Courts",
  sub_label: "Language Access",
  ```
</details>
