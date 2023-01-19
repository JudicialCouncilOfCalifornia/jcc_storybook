// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  simple_layout: {
    variant: "simple-layout",
    content_justify: "left",
    accent_color: false,
    content_bg_color: false,
    bg_tint: "accent-warm-dark-xx",
    hero_img_url: false,
    content_data: {
      variant: "default",
      first_component: true,
      media: false,
      brow: {
        variant: "default",
        part_one: "Court interpreters program",
      },
      heading: "Hero Heading",
      text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit consequat, pellentesque accumsan metus sed fusce fringilla pretium varius euismod.</p>",
      button: {
        label: "Text Button",
        href: "#",
        variant: "text",
      },
      attributes: new drupalAttribute(),
    },
    attributes: new drupalAttribute()
  },
  layout_with_image: {
    variant: "layout-with-image",
    content_justify: "left",
    accent_color: false,
    content_bg_color: false,
    bg_tint: "accent-warm-dark-xx",
    hero_img_url: "https://source.unsplash.com/random/425×324/?justice",
    content_data: {
      variant: "default",
      first_component: true,
      media: false,
      brow: {
        variant: "default",
        part_one: "Court interpreters program",
      },
      heading: "Hero Heading",
      text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit consequat, pellentesque accumsan metus sed fusce fringilla pretium varius euismod.</p>",
      button: {
        label: "Text Button",
        href: "#",
        variant: "text",
      },
      attributes: new drupalAttribute(),
    },
    attributes: new drupalAttribute()
  }
}
