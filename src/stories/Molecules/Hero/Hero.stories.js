import Hero from './Hero.twig';
import drupalAttribute from 'drupal-attribute'
import './Hero.css';
import './Hero.js';

import Button from '../../Atoms/Button/Button.twig';
import Card from '../../Molecules/Card/Card.twig';
import { Primary as ButtonPrimary } from '../../Atoms/Button/Button.stories';

export default {
  title: 'Molecules/Hero',
  component: Hero
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Hero({ ...args });
};

export const Banner = Template.bind({});
Banner.args = {
  background_image_url: '/courthouse.png',
  main: Card({
    first_component: true,
    media: false,
    heading: "About the 2nd Distrcit",
    text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit consequat, pellentesque accumsan metus sed fusce fringilla pretium varius euismod.</p>",
    button: Button({ ...ButtonPrimary.args }),
    // A variant type that contols the layout and style of the component.
    variant: "default",
    // drupalAttribute allows us to mock drupal attributes in storybook.
    attributes: new drupalAttribute(),
  }),
  type: 'banner',
  color: 'white',
  bg_tint: 'warm-dark-xx',
  content_justify: 'left',
  content_align: 'center',
  first_component: true,
  attributes: new drupalAttribute()
};

export const BannerContentBGWhite = Template.bind({});
BannerContentBGWhite.args = {
  background_image_url: '/alfons-morales-books-unsplash.jpg',
  main: Card({
    first_component: true,
    media: false,
    heading: "Language Access",
    subheading: false,
    text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit consequat, pellentesque accumsan metus sed fusce fringilla pretium varius euismod.</p>",
    button: false,
    // A variant type that contols the layout and style of the component.
    variant: "default",
    // drupalAttribute allows us to mock drupal attributes in storybook.
    attributes: new drupalAttribute(),
  }),
  type: 'content-bg',
  content_bg_color: 'white',
  color: 'primary-dark-x',
  bg_tint: false,
  content_justify: 'left',
  content_align: 'top',
  first_component: true,
  attributes: new drupalAttribute()
};
