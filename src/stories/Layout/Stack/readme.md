<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Stack

The purpose of the "Stack" is to establish vertical spacing as a property of the relationship between elements, rather than applying margins directly to elements without context. An example might be:
  - heading
  - body
  - button

Rather than placing margins on headings or buttons directly, we can wrap this collection of elements in a "Stack" to add spacing to the **body** in relation to the **heading** and the **button** in relation to the **body**, with appropriate spacing for this context. 

### Inherited CSS Variables:

  - `--space`: The space between elements.
