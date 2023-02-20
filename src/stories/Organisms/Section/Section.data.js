import drupalAttribute from 'drupal-attribute'
import iconsJSON from "../../../assets/icons.json";
const randomIcon = () => {
  const num = Math.floor(Math.random() * iconsJSON.length);
  return iconsJSON[num];
}
export default {
  default: {
    variant: 'default',
    first_component: false,
    brow_data: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
      attributes: new drupalAttribute(),  
    },
    heading: 'Heading Example',
    text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.</p>',
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    attributes: new drupalAttribute(),
  },
  primary_dark_xx: {
    variant: 'primary-dark-xx',
    first_component: false,
    brow_data: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
      attributes: new drupalAttribute(),  
    },
    heading: 'Heading Example',
    text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.</p>',
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    attributes: new drupalAttribute(),
  },
  primary_dark_xx_stripe: {
    variant: 'primary-dark-xx-stripe',
    first_component: false,
    brow_data: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
      attributes: new drupalAttribute(),  
    },
    heading: 'Heading Example',
    text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.</p>',
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    attributes: new drupalAttribute(),
  },
  warm_dark_x: {
    variant: 'warm-dark-x',
    first_component: false,
    brow_data: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
      attributes: new drupalAttribute(),  
    },
    heading: 'Heading Example',
    text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.</p>',
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    attributes: new drupalAttribute(),
  },
  white: {
    variant: 'white',
    first_component: false,
    brow_data: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
      attributes: new drupalAttribute(),  
    },
    heading: 'Heading Example',
    text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.</p>',
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    attributes: new drupalAttribute(),
  },
  backgroundImage: {
    component: 'backgroundImage',
    variant: 'striped-base-dark-x',
    first_component: false,
    brow_data: {
      variant: "default",
      part_one: "",
      part_two: "",
      attributes: new drupalAttribute(),
    },
    teaser_plus_list_data: {
      teaser: {
        brow_data: {
          part_one: 'Orders',
          part_two: 'July 12, 2022',
          attributes: new drupalAttribute(),
        },
        heading: "2DCA Protocols for In-Person Oral Argument",
        text: "The Second Appellate District's Division Two will hear oral arguments in the courtroom on May 19, 2022. Access to the courtroom will be limited to the..."
      },
      list_items: [
        {
          link: {
            label: "Job Announcement – Appellate Court Attorney",
            href: "#"
          },
          footer: "May 25, 2022"
        },
        {
          link: {
            label: "Second District Court of Appeal to resume in‑person arguments effective May 2022",
            href: "#"
          },
          footer: "May 25, 2022"
        }
      ],
      attributes: new drupalAttribute()
    },
    sub_component_bgImg: true,
    sub_component_template: "Cards",
    sub_component_data: {
      variant: "",
      card_width: "40ch",
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
        }
      ],
      attributes: new drupalAttribute()
    },
    heading: 'Court Interpreters',
    headerAlignClass: "aln-left",
    text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.</p>',
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    attributes: new drupalAttribute(),
  }
}
