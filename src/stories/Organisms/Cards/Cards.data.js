import drupalAttribute from 'drupal-attribute'

// Random icon selector for Striped cards.
const iconsJSON = require('../../../assets/icons.json');
const randomIcon = () => {
  const num = Math.floor(Math.random() * iconsJSON.length);
  return iconsJSON[num];
}

export default {
  default: {
    variant: "default",
    card_width: "30ch",
    card_variant: "default",
    items: [
      {
        variant: "default",
        media: '<img src="https://source.unsplash.com/random/1280x720/?language" />',
        icon_data: {
          icon: "megaphone",
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
      {
        variant: "default",
        media: '<img src="https://source.unsplash.com/random/1280x720/?language" />',
        icon_data: {
          icon: "megaphone",
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
      {
        variant: "default",
        media: '<img src="https://source.unsplash.com/random/1280x720/?language" />',
        icon_data: {
          icon: "megaphone",
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
      {
        variant: "default",
        media: '<img src="https://source.unsplash.com/random/1280x720/?language" />',
        icon_data: {
          icon: "megaphone",
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
    ],
    attributes: new drupalAttribute(),
  },
  media_left: {
    variant: "",
    card_width: "",
    card_variant: "",
    items: [
      {
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
    ],
    attributes: new drupalAttribute(),
  },
  media_right: {
    variant: "",
    card_width: "",
    card_variant: "",
    items: [
      {
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
      }
    ],
    attributes: new drupalAttribute(),
  },
  striped: {
    variant: "",
    card_width: "45ch",
    card_variant: "",
    items: [
      {
        variant: "striped",
        media: false,
        icon_data: {
          icon: randomIcon(),
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
      {
        variant: "striped",
        media: false,
        icon_data: {
          icon: randomIcon(),
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
      {
        variant: "striped",
        media: false,
        icon_data: {
          icon: randomIcon(),
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
      {
        variant: "striped",
        media: false,
        icon_data: {
          icon: randomIcon(),
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
      {
        variant: "striped",
        media: false,
        icon_data: {
          icon: randomIcon(),
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
      {
        variant: "striped",
        media: false,
        icon_data: {
          icon: randomIcon(),
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
    ],
    attributes: new drupalAttribute(),
  }
}
