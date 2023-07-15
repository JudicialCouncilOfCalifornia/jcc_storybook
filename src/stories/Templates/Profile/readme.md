<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Profile

Necessary profile page template to apply required section & sidebar styling, especially to preserve profile card dimension ratio.

To implement, include the Section organism with ProfileCard and ProfileBio as its content (sub_component_data). See Twig Variables for the controls involved.

<details>
  <summary>Twig Variables:</summary>

  ```
  variant: "default",
  sub_component_layout: "with-sidebar", ... adds sidebar
  sidebar_direction: 'row', ... sets sidebar location - row (left) or row-reverse (right)
  sub_component_data: [ ... Requires ProfileCard and ProfileBio subcomponents included as data
    ProfileCard({...NoLinkExample.args}),
    ProfileBio({...ShareEnabled.args}),
  ]
  ```
</details>
