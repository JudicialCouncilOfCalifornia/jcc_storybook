<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Secondary Nav

The Secondary Nav is essentially just an inline list of links. However it needs to behave differently in some contexts.

What happens when its container is narrower than the links it contains? Sometimes the design calls for them to be hidden, sometimes the inline links need to Stack.

We have the "Cluster" layout available to handle the inline list, but as horizontal space is reduced, those items will wrap, one item at a time, which is not what we want.

The "Reel" layout, on the other hand, will not wrap. Instead it will overflow and allow you to scroll horizontally, by default. It also comes with a built in Javascript Resize Observer that will add the `.overflowing` class when the layout needs to scroll. This class is toggled intrinsically, by the actual spacial requirements of the element and not an external break point. It's used to enhance the usability of the Reel as desired, with things like additional visual hints or explicit tips that let the user know there are more links than are visible. See "Layouts: Reel" for more details.

We can leverage the `.overflowing` class to produce the desired behavior for our Secondary Nav. When the class is added, we can override the styling to either hide the nav, or make the items Stack, as desired by the context of the placement of the nav.

In the case of default behavior, or the lack of javascript in the browser, the component reverts to the completely usable Reel scrolling behavior.

<div class="caption">*NOTE: This Javascript doesn't seem to work on the "Docs" page but it should work on the Canvas. This is a Storybook issue, to be investigated. It should work in Drupal as part of the layout library in this base theme.*</div>

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--accent-color`: Sets the color of the divider lines.
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
  variant: [default | with-divider],
  overflowing_variant: [default | stack | hidden],
  links: [
    {
      text: "Label",
      url: "#",
      is_current: false,
    },
    ...
  ],
  ```
</details>
