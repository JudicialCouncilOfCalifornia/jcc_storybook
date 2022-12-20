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
      control: { type: 'radio' },
      options: ['banner', 'content-bg'],
    },
    content_justify: {
      control: { type: 'radio' },
      options: ['left', 'center', 'right'],
    },
    color: {
      control: { type: 'select' },
      options: ['white', 'primary-dark-x', 'warm-dark-x']
    },
    bg_tint: {
      control: { type: 'select' },
      options: ['accent-warm-dark-xx', 'primary-dark-x']
    }
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
  background_image_url: '/courthouse.png',
  first_component: true,
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
  color: 'primary-dark-x',
  content_bg_color: 'white',
  bg_tint: 'primary-dark-x',
  background_image_url: '/alfons-morales-books-unsplash.jpg',
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
