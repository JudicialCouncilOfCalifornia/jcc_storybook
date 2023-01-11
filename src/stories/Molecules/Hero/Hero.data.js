import drupalAttribute from 'drupal-attribute'

export default {
  banner: {
    variant: "banner",
    content_justify: "left",
    accent_color: false,
    content_bg_color: false,
    bg_tint: "accent-warm-dark-xx",
    background_image_url: "https://source.unsplash.com/random/900×700/?building",
    card_data: {
      variant: "default",
      first_component: true,
      media: false,
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
  content_bg: {
    variant: "content-bg",
    content_justify: "left",
    accent_color: "primary-dark-x",
    content_bg_color: "white",
    bg_tint: false,
    background_image_url: "https://source.unsplash.com/random/900×700/?books",
    first_component: true,
    card_data: {
      variant: "default",
      first_component: true,
      media: false,
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
