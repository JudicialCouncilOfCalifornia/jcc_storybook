<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Imposter

The Imposter element allows you to centrally position an element over the viewport, document, or a positioned element. 

You can use fixed positioning on the imposter to create a full screen modal. 

A note about flow: If using position fixed, its best to place your imposter element at the end of the document so it appears above other elements without requiring z-index.

### Inherited CSS Variables:

  - `--positioning`:
    - **absolute**: (default): positions the imposter relative to its containing element.
    - **fixed**: positions the imposter relative to the page.
