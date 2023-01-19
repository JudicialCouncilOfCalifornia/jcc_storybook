<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Container

The `.container` class has the job of ensuring it's content doesn't expand beyond a maximum width when the screen size is very wide. It expands as wide as it can up to a `max-inline-size` as defined by `--max-width`. There it provides auto `margin-inline` to center it.

This is similar to the Center layout, but the center layout is responsible for maintaining a proper "measure" or maximum comfortable line length for reading text. The Container is the outer element that prevents all internal elements from spreading out to infinity as the device permits.

Usually the only things that exist outside of a Container are things that provide backgrounds or media that are meant to go all the way to the edge of the screen.

When the screen width is narrower than the `--max-width` imposed by the Container, it's like the Container is not even there. It provides no margin or padding on it's own. See the <strong>Box</strong> Docs for more on "separation of concerns".
