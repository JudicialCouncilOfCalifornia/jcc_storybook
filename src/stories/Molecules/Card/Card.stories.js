import drupalAttribute from 'drupal-attribute'
import Card from './Card.twig';
import readme from './readme.md';
import './Card.css';

import Icon from '../../Atoms/Icon/Icon.twig';
import { Default as IconDefault } from '../../Atoms/Icon/Icon.stories';

export default {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    notes: readme,
  },
  argTypes: {
    variant: {
      description: "The Card variant. Often set on the `Cards` component.",
      table: { defaultValue: { summary: 'default' }},
      control: { type: 'select' },
      options: ['default', 'bordered-center', 'media-left', 'media-right', 'overlay'],
    },
    media: {
      description: "Image, Video or Icon",
      table: { defaultValue: { summary: false }},
    },
    heading: {
      description: "A heading.",
      table: { defaultValue: { summary: false }},
    },
    text: {
      description: "A heading.",
      table: { defaultValue: { summary: false }},
    },
    button: {
      description: "`button.label`, `button.href`, `button.variant`",
      table: { defaultValue: { summary: false }},
    },
    attributes: { table: { disable: true }}
  },

};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Card({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = {
  variant: "default",
  media: '<div class="frame"><img src="https://source.unsplash.com/random/1280x720/?language" /></div>',
  heading: "Heading For A Card",
  text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
  button: {
    label: "Button",
    href: "#",
    variant: "primary",
  },
  attributes: new drupalAttribute(),
};

export const BorderedCenter = Template.bind({});
BorderedCenter.args = {
  variant: "bordered-center",
  media: '<div class="frame"><iframe width="560" height="315" src="https://www.youtube.com/embed/UpnXQalWR-U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
  heading: "Interested in becoming a court interpreter?",
  text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
  button: {
    label: "Button",
    href: "#",
    variant: "primary",
  },
  attributes: new drupalAttribute(),
};

export const MediaLeft = Template.bind({});
MediaLeft.args = {
  variant: "media-left",
  media: '<div class="frame"><iframe width="560" height="315" src="https://www.youtube.com/embed/UpnXQalWR-U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
  heading: "Heading For A Card",
  text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
  button: {
    label: "Button",
    href: "#",
    variant: "primary",
  },
  attributes: new drupalAttribute(),
};

export const MediaRight = Template.bind({});
MediaRight.args = {
  variant: "media-right",
  media: '<div class="frame"><iframe width="560" height="315" src="https://www.youtube.com/embed/UpnXQalWR-U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
  heading: "Heading For A Card",
  text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
  button: {
    label: "Button",
    href: "#",
    variant: "primary",
  },
  attributes: new drupalAttribute(),
};

export const Overlay = Template.bind({});
Overlay.args = {
  variant: "overlay",
  media: '<div class="frame" style="--n: 1; --d: 2;"><img src="https://source.unsplash.com/random/400×400/?books" /></div>',
  heading: "Heading For A Card",
  text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
  button: {
    label: "Button",
    href: "#",
    variant: "primary",
  },
  attributes: new drupalAttribute(),
};

export const Striped = Template.bind({});
Striped.args = {
  variant: "striped",
  media: Icon({ ...IconDefault.args  }),
  heading: "Heading For A Card",
  text: false,
  button: {
    label: "Button",
    href: "#",
    variant: "primary",
  },
  attributes: new drupalAttribute(),
};
