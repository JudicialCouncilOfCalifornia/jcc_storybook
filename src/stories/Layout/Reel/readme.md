# Reel

The Reel layout is great for navigating categories of items. Think about the way you scroll through movies or series' on your favorite streaming platform.

It could also be used to replace traditional "carousels" or "sliders" which come with many unique problems. I could be the foundation for a pure CSS carousel.

Some may even be bold enough to use it for navigation menus instead of hamburger menus, under the right circumstances. Though it probably won't be great for dropdown menus or mega-menus.

The Reel layout will provide a horizontal list of items at all times. When the item list gets wider than the available space the `.reel` will overflow and scroll horizontally.

There is a built in "affordance" that gives a visual clue that there is content that's outside of the container, but it's subtle.  It might be sufficient in some cases, and you could tweak it in the component CSS to make it move obvious. It's just there as a foundation.

It's harder to miss the scrollbar that will appear, which you can restyle in your component. If that's too much for your context you can add a `no-bar` class to your `.reel` to suppress it.

One other trick at your disposal is `.reel-hint`.  This uses a Javascript ResizeObserver to toggle an `overflowing` class on the `.reel`. You can use this class for anything you want to do to the reel that's overflowing, but it will also toggle the visibility of an element with the `reel-hint` class that's adjacent to the `.reel`. Specifically, it must be the next element after the `.reel`. When there is no scroll, the hint is hidden.

In the examples we've just used small arrows to indicate that there's more content to scroll to, but a scroll hint could be anything and styled how you like.

<div class="caption">*NOTE: This Javascript doesn't seem to work on the "Docs" page but it should work on the Canvas. This is a Storybook issue, to be investigated. It should work as an exported library in your Drupal theme.*</div>

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--gap`: The space between child elements.
</details>
