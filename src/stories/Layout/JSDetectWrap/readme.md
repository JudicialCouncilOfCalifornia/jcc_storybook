<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# DetectWrap

This is a javascript untility that's available globally. It's used to detect when an element has wrapped elements, and add a class to the parent element.
This is useful in cases where you want to alter the styling of a wrapped element, to remove a left margin for example.

This solution is similar to the way "Reel" uses a Resize Observer to add the `.overflowing` class to the `.reel` element. This allows you to do many things with that class.

With Detect Wrap we have a general solution for detecting and marking an element that has wrapped elements, so if we wish to alter it, or it's children, we can apply styles without using a breakpoint that's tied to an arbitrary screen size. Instead it's responsive to the space taken up by the content itself.

In addition to giving us a `.wrapping` class on the parent element, it also gives us a `.wrapped` class on the child elements, so we can style an unwrapped element and a wrapped element differently.

This utility is very light weight and included with the global JS, so it can be applied anywhere. To use it, simply add the `.detect-wrap` class to the parent element, or the `.detect-wrap .detect-wrap--observed` classes to enable the Resize Observer. The Resize Observer is more resource intensive, so it's not enabled by default.

Using `.detect-wrap` alone will only run on page load, so if you're loading content or some interactivity can change the page structure after page load, you'll need to use `.detect-wrap .detect-wrap--observed` to enable the Resize Observer.
