import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    variant: "default",
    media: '<img src="https://source.unsplash.com/random/1280x720/?language" />',
    icon_data: {
      icon: "speaker",
      color: false,
      attributes: new drupalAttribute(),  
    },
    heading: "Heading For A Card",
    text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    attributes: new drupalAttribute(),
  },
  bordered_center: {
    variant: "bordered-center",
    media: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UpnXQalWR-U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    heading: "Interested in becoming a court interpreter?",
    text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    attributes: new drupalAttribute(),
  },
  media_left: {
    variant: "media-left",
    media: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UpnXQalWR-U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    heading: "Heading For A Card",
    text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    attributes: new drupalAttribute(),
  },
  media_right: {
    variant: "media-right",
    media: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UpnXQalWR-U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    heading: "Heading For A Card",
    text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    attributes: new drupalAttribute(),
  },
  overlay: {
    variant: "overlay",
    media: '<img src="https://source.unsplash.com/random/400×400/?books" />',
    heading: "Heading For A Card",
    text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    attributes: new drupalAttribute(),
  },
  striped: {
    variant: "striped",
    media: false,
    icon_data: {
      icon: "speaker",
      color: false,
      attributes: new drupalAttribute(),  
    },
    heading: "Heading For A Card",
    text: false,
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    attributes: new drupalAttribute(),
  },
}
