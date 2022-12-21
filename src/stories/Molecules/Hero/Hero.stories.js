import drupalAttribute from 'drupal-attribute'
import Hero from './Hero.twig';
import readme from './readme.md';
import './Hero.css';

import Button from '../../Atoms/Button/Button.twig';
import Card from '../../Molecules/Card/Card.twig';
import { Primary as ButtonPrimary } from '../../Atoms/Button/Button.stories';

export default {
  title: 'Molecules/Hero',
  component: Hero,
  parameters: {
    notes: readme,
  },
  argTypes: {
    variant: {
      description: "Hero variant.",
      table: {defaultValue: {summary: 'banner'}},
      control: { type: 'radio' },
      options: ['banner', 'content-bg'],
    },
    content_justify: {
      description: "Justify the content container left, center or right.",
      table: {defaultValue: {summary: 'left'}},
      control: { type: 'radio' },
      options: ['left', 'center', 'right'],
    },
    bg_tint: {
      description: "The tint applied to darken the background.",
      table: { defaultValue: { summary: 'accent-warm-dark-xx' }},
      control: { type: 'select' },
      options: [ false, 'accent-warm-dark-xx', 'primary-dark-x' ]
    },
    background_image_url: {
      description: "The background image for the Hero. `false` to use the tint color as a solid background.",
      table: { defaultValue: { summary: false }},
    },
    main: {table: {disable: true}},
    attributes: {table: {disable: true}},
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Hero({ ...args });
};

export const Banner = Template.bind({});
Banner.args = {
  variant: 'banner',
  content_justify: 'left',
  bg_tint: 'accent-warm-dark-xx',
  background_image_url: 'https://source.unsplash.com/random/900×700/?courthouse',
  main: Card({
    variant: "default",
    first_component: true,
    media: false,
    heading: "About the 2nd Distrcit",
    text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit consequat, pellentesque accumsan metus sed fusce fringilla pretium varius euismod.</p>",
    button: Button({ ...ButtonPrimary.args }),
    attributes: new drupalAttribute(),
  }),
  attributes: new drupalAttribute()
};

export const BannerContentBGWhite = Template.bind({});
BannerContentBGWhite.args = {
  variant: 'content-bg',
  content_justify: 'left',
  accent_color: 'primary-dark-x',
  content_bg_color: 'white',
  bg_tint: false,
  background_image_url: 'https://source.unsplash.com/random/900×700/?books',
  first_component: true,
  main: Card({
    first_component: true,
    media: false,
    heading: "Language Access",
    subheading: false,
    text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit consequat, pellentesque accumsan metus sed fusce fringilla pretium varius euismod.</p>",
    button: false,
    variant: "default",
    attributes: new drupalAttribute(),
  }),
  attributes: new drupalAttribute()
};
