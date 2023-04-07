<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# asset

Example asset display using the Section organism with optional metadata sidebar display.

To remove the sidebar, remove or set null as the value for sidebar_direction. However, to avoid confusion, do the same for sidebar_width, gap, and List subcomponent.

[//]: # (<details>)
[//]: # (  <summary>Inherited CSS Variables:</summary>)
[//]: # (  - `--name`: description...)
[//]: # (</details>)

<details>
  <summary>Twig Variables:</summary>

  ```
  variant: 'default',
  sub_component_layout: 'with-sidebar', ... adds sidebar
  sidebar_direction: 'row', ... sets sidebar location - row (left) or row-reverse (left)
  sidebar_width: 39, ... sets sidebar minimum width
  gap: 's4', ... sets spacing between sidebar and body
  sub_component_data: [ ... Requires List and AssetBundle subcomponents included as data
    List({...WithNoMarker.args}),
    AssetBundle({...AssetBundleDefault.args}),
  ]
  ```
</details>
