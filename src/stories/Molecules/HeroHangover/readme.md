<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Hero: Hangover

This is a different type of Hero called Hangover, because the image "hangs over" the top background... but also because it was challenging to achieve intrinsic/algorithmic layout with the image overlapping two other elements like that.

Messing with `position` should be avoided as it takes the element out of the natural flow of content. Because of that, its neighbors are no longer "aware" of it. Its "context" is lost.

To achieve the overhang I decided to use a negative margin, and have provided a mechanism to set the offset value. This also breaks the natural flow of content but it only affects the image vertical. The neighboring content can still respond to it and adjust themselves accordingly.

### Sidebar
The top half gets its context by using a "Sidebar" layout, placing the hangover content in its sidebar (right) and the heading in the main content container (left). If we are short on horizontal space, the sidebar will stack on top of the main content.

The bottom half needs to mirror the top half so it gets a Sidebar too, in the same configuration, except its sidebar is an empty `div`, just there to hold the space for the media to ... hang out in?

When the Sidebar stacks, the "broken" content flow on the image becomes apparent. The negative margin causes the image to overlap the heading section which is now stacked below it. However, because of the order of these things in the HTML, the text is overlaid on top of the image, almost as if we meant to do that. We even have some text shadow to help the heading stand out against the "background" image.

What's most important is that the text in the heading and in the section below never have their natural flow compromised. They continue to fill the space left by the repositioning of the image, they're never obscured, clipped, compressed or broken.

### More Polish
We can take it a bit further. I'm not too happy with the text overlay situation. It's an ok fallback, but not optimal. I've used detectWrap.js to apply the `.wrapping` class when the Sidebar stacks. Within this, I can remove the negative margin on the media. This makes the image stack above the heading as it normally would in a Sidebar layout. No more overlay! We also have a variant that hides the image in stacked orientation.

<details>
  <summary>Twig Variables:</summary>

  ```
  hangover_hide_compact: true,
  hangover_offset: 22,
  background: [one of our possible background options],
  brow: {
    variant: "default",
    part_one: "Brow Example",
    part_two: "Part two",
  },
  heading: "This is a Heading",
  text: "<p>The text in the top section.</p>",
  hangover_content: "The markup in the hangover section. A bordered-center Card
   can be used with one or all of its content items. Or anything else.",
  bottom_content: "<p>The markup in the bottom section.</p>",
  ```
</details>
