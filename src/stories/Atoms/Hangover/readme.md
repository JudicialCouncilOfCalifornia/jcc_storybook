<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Hangover

This is a Hangover. Because the image "hangs over" the top background... but also because it was challenging to achieve intrinsic/algorithmic layout with the image overlapping two other elements like that.

Messing with `position` should be avoided when possible as it takes the element out of the natural flow of content. Because of that, its neighbors are no longer "aware" of it. Its "context" is lost.

To achieve the overhang I decided to use a negative margin on the media. This works if we know the height of the media ahead of time.  In this case the image is `300px` tall so the bottom margin is `-150px`. This also breaks the natural flow of content but it only affects the image itself. The neighboring content can still respond to it and adjust themselves accordingly.

### Sidebar
The top half gets this context by using a "Sidebar" layout, placing the image in its sidebar (right) and the heading in the main content container (left). If we are short on horizontal space, the sidebar will stack on top of the main content.

The bottom half needs to mirror the top half so it gets a Sidebar too, in the same configuration, except its sidebar is an empty `div`, just there to hold the space for the media to ... hang out in?

When the Sidebar stacks the breaking of content flow on the image becomes apparent. Because of the negative margin, the image now overlaps the heading section which is now stacked below it. However, because of the order of these things in the HTML, the text is overlaid on top of the image, almost as if we meant to do that. We even have some text shadow to help the heading stand out against the "background" image.

Depending on the amount of text in the heading, the image may still even hang over the bottom section a bit. But given the layout of this component at full width, that doesn't seem too unexpected.

What's most important is that the text in the heading and in the section below never have their natural flow compromised. They continue fill the space left by the repositioning of the image, they're never obscured, clipped, compressed or broken.

### More Polish
We can take it a bit further. I'm not too happy with the text overlay situation. It's an ok fallback, but not optimal. So maybe I **will** pull out a media query, but **NOT** to respond to an arbitrary breakpoint. Instead I use `@media (orientation: portrait)`. Within this, I can remove the negative margin on the media when the viewport becomes narrower than it is tall. This makes the image stack above the heading as it normally would in a Sidebar layout. No more overlay!

There are still possible situations where the Sidebar will stack before the orientation switches to portrait, causing a bit of heading overlap on the image. In these edge cases, the layout still looks intentional and not broken. It looks a lot nicer than when the text is overlaid in a much narrower space, which is now cleaned up nicely. Again, most importantly, the content is never compromised.

--
One more added bonus. By adding a modifier class at the top of the Hangover, `hangover hangover--media-hide`, I've set the media to `display: none` in the portrait orientation. So if that image isn't that important, you can just make it disappear when space is limited.

<details>
  <summary>Twig Variables:</summary>
  ```
  heading: "This is a Heading",
  media: "...",
  media_hide_portrait: false,
  bottom_content: "...",
  ```
</details>
