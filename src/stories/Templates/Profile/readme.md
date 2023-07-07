<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Profile

For demonstration only using a section with subcomponents. Do not use this organism directly unless the alias context is absolutely necessary.

To implement, include the Section organism with ProfileCard and ProfileBio as its content (sub_component_data). See Twig Variables for the controls involved.

<details>
  <summary>Twig Variables:</summary>

  ```
  variant: 'default',
  sub_component_layout: 'with-sidebar', ... adds sidebar
  sidebar_direction: 'row', ... sets sidebar location - row (left) or row-reverse (right)
  sidebar_width: 30, ... sets sidebar minimum width
  sub_component_data: [ ... Requires ProfileCard and ProfileBio subcomponents included as data
    ProfileCard({...NoLinkExample.args}),
    ProfileBio({...Default.args}),
  ]
  ```
</details>
