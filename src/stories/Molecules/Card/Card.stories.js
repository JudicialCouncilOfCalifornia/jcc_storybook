import drupalAttribute from 'drupal-attribute'

import Card from './Card.twig';
import './Card.css';

import Icon from '../../Atoms/Icon/Icon.twig';
import { Default as IconDefault } from '../../Atoms/Icon/Icon.stories';

export default {
  title: 'Molecules/Card',
  component: Card
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Card({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = {
  // Create any variables to pass to the Twig template.
  media: '<div class="frame"><iframe width="560" height="315" src="https://www.youtube.com/embed/UpnXQalWR-U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
  heading: "Heading For A Card",
  text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
  button: {
    label: "Button",
    href: "#",
    variant: "primary",
  },
  // A variant type that contols the layout and style of the component.
  variant: "default",
  // drupalAttribute allows us to mock drupal attributes in storybook.
  attributes: new drupalAttribute(),
};

export const BorderedCenterAlign = Template.bind({});
BorderedCenterAlign.args = {
  // Create any variables to pass to the Twig template.
  media: '<div class="frame"><iframe width="560" height="315" src="https://www.youtube.com/embed/UpnXQalWR-U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
  heading: "Interested in becoming a court interpreter?",
  text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
  button: {
    label: "Button",
    href: "#",
    variant: "primary",
  },
  // A variant type that contols the layout and style of the component.
  variant: "bordered-center",
  // drupalAttribute allows us to mock drupal attributes in storybook.
  attributes: new drupalAttribute(),
};

export const MediaLeft = Template.bind({});
MediaLeft.args = {
  // Create any variables to pass to the Twig template.
  media: '<div class="frame"><iframe width="560" height="315" src="https://www.youtube.com/embed/UpnXQalWR-U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
  heading: "Heading For A Card",
  text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
  button: {
    label: "Button",
    href: "#",
    variant: "primary",
  },
  // A variant type that contols the layout and style of the component.
  variant: "media-left",
  // drupalAttribute allows us to mock drupal attributes in storybook.
  attributes: new drupalAttribute(),
};

export const MediaRight = Template.bind({});
MediaRight.args = {
  // Create any variables to pass to the Twig template.
  media: '<div class="frame"><iframe width="560" height="315" src="https://www.youtube.com/embed/UpnXQalWR-U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
  heading: "Heading For A Card",
  text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
  button: {
    label: "Button",
    href: "#",
    variant: "primary",
  },
  // A variant type that contols the layout and style of the component.
  variant: "media-right",
  // drupalAttribute allows us to mock drupal attributes in storybook.
  attributes: new drupalAttribute(),
};

export const Overlay = Template.bind({});
Overlay.args = {
  // Create any variables to pass to the Twig template.
  media: '<img src="https://source.unsplash.com/random/900×700/?books" />',
  heading: "Heading For A Card",
  text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
  button: {
    label: "Button",
    href: "#",
    variant: "primary",
  },
  // A variant type that contols the layout and style of the component.
  variant: "overlay",
  // drupalAttribute allows us to mock drupal attributes in storybook.
  attributes: new drupalAttribute(),
};

export const Striped = Template.bind({});
Striped.args = {
  // Create any variables to pass to the Twig template.
  media: Icon({ ...IconDefault.args  }),
  heading: "Heading For A Card",
  text: false,
  button: {
    label: "Button",
    href: "#",
    variant: "primary",
  },
  // A variant type that contols the layout and style of the component.
  variant: "striped",
  // drupalAttribute allows us to mock drupal attributes in storybook.
  attributes: new drupalAttribute(),
};
