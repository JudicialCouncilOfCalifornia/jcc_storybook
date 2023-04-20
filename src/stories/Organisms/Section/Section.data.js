export default {
  default: {
    variant: "default",
    first_component: false,
    sub_component_layout: "flex flex--60-40",
    // center, stack
    align_items: false,
    // center, switcher
    measure: false,
    // cluster, grid, reel, stack, switcher
    gap: false,
    // grid
    grid_min_width: false,
    // with-sidebar
    sidebar_direction: false,
    // with-sidebar
    sidebar_width: false,
    background_image_url: "",
    brow_data: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
    },
    heading: "Heading Example",
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    sub_component_data: [
      '<div class="stack"><h3>Heading</h3><p>Some markup  goes in this space. adsf asf asdf sdfaf asf asdf sadf sadf sadf sfd sadf sadf sdf fsa afs fsd safd.</p></div>',
      '<div class="stack"><h3>Heading</h3><p>Some markup  goes in this space. adsf asf asdf sdfaf asf asdf sadf sadf sadf sfd sadf sadf sdf fsa afs fsd safd.</p></div>',
    ],
  },
  primary_dark_xx: {
    variant: "primary-dark-xx",
    first_component: false,
    brow_data: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
    },
    heading: "Heading Example",
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    sub_component_layout: null,
    sub_component_data:
      '<div class="container"><div class="box" style="background: var(--color-base-light-x)">Sub Component goes here.</div></div>',
  },
  primary_dark_xx_stripe: {
    variant: "primary-dark-xx-stripe",
    first_component: false,
    brow_data: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
    },
    heading: "Heading Example",
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    sub_component_layout: null,
    sub_component_data:
      '<div class="container"><div class="box" style="background: var(--color-base-light-x)">Sub Component goes here.</div></div>',
  },
  warm_dark_x: {
    variant: "warm-dark-x",
    first_component: false,
    brow_data: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
    },
    heading: "Heading Example",
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    sub_component_layout: null,
    sub_component_data:
      '<div class="container"><div class="box" style="background: var(--color-base-light-x)">Sub Component goes here.</div></div>',
  },
  white: {
    variant: "white",
    first_component: false,
    sub_component_layout: null,
    brow_data: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
    },
    heading: "Heading Example",
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    sub_component_data:
      '<div class="container"><div class="box" style="background: var(--color-base-light-x)">Sub Component goes here.</div></div>',
  },
  bg_image: {
    variant: "default",
    first_component: false,
    bg_tint: "accent-warm-dark-xx",
    background_image_url:
      "https://source.unsplash.com/random/900×700/?office,people",
    brow_data: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
    },
    heading: "Heading Example",
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "secondary",
    },
    sub_component_layout: null,
    sub_component_data:
      '<div class=""><div class="box" style="background: var(--color-base-light-x)">Sub Component goes here.</div></div>',
    section_layout: "switcher",
  },
};
