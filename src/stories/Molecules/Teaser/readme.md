<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->

# Teaser

This component consists of two sections, a Teaser with a Brow, and a list of links, each with an optional footer for dates or tags, etc.

<details>
  <summary>Inherited CSS Variables</summary>
  `--accent-color`: for the brow and the dividing border.
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
  teaser: {
    brow_data: {
      part_one: 'Orders',
      part_two: 'July 12, 2022',
      attributes: new drupalAttribute(),
    },
    heading: "2DCA Protocols for In-Person Oral Argument",
    text: "The Second Appellate District's Division Two will hear oral arguments in the courtroom on May 19, 2022. Access to the courtroom will be limited to the...",
    footer: "This is footer text"
  },

```
</details>
```
