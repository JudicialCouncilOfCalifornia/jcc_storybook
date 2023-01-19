<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Frame

The Frame layout is mostly use for cropping images or video to a desired aspect ratio. You can set the ratio via the inherited values for `--frame-h` and `--frame-v` or the width and height respectively. These are ratio values like 16:9 or 1:1, not specific pixel values.

You could set these values on a Section or Cards elements so that any nested Card components would inherit the same ratio for uniformity in their media.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--frame-h`: *(16)* The horizontal aspect value.
  - `--frame-v`: *(9)* The vertical aspect value.
</details>
