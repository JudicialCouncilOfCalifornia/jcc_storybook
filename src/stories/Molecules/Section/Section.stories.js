import Section from './Section.twig';
import drupalAttribute from 'drupal-attribute'
import './Section.css';
import './Section.js';

import Brow from '../../Atoms/Brow/Brow.twig';
import { Heading as BrowHeading } from '../../Atoms/Brow/Brow.stories';

import Button from '../../Atoms/Button/Button.twig';
import { Primary as ButtonPrimary } from '../../Atoms/Button/Button.stories';

export default {
  title: 'Molecules/Section',
  component: Section
};

const Template = ({ ...args }) => {
  return Section({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  brow: Brow({ ...BrowHeading.args }),
  heading: 'Heading Example',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.',
  main: "<div class='box' style='background: #ccc; width: 100%;'>Other components go here.</div>",
  button: Button({ ...ButtonPrimary.args }),
  content_justify: 'center',
  content_align: 'top',
  variant: '',
  first_component: false,
  attributes: new drupalAttribute(),
};

export const PrimaryDarkXX = Template.bind({});
PrimaryDarkXX.args = {
  brow: Brow({ ...BrowHeading.args }),
  heading: 'Heading Example',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.',
  main: "<div class='box' style='background: #ccc; width: 100%;'>Other components go here.</div>",
  button: Button({ ...ButtonPrimary.args }),
  content_justify: 'center',
  content_align: 'top',
  variant: 'primary-dark-xx',
  first_component: false,
  attributes: new drupalAttribute(),
};

export const PrimaryDarkXXStripe = Template.bind({});
PrimaryDarkXXStripe.args = {
  brow: Brow({ ...BrowHeading.args }),
  heading: 'Heading Example',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.',
  main: "<div class='box' style='background: #ccc; width: 100%;'>Other components go here.</div>",
  button: Button({ ...ButtonPrimary.args }),
  content_justify: 'center',
  content_align: 'top',
  variant: 'primary-dark-xx-stripe',
  first_component: false,
  attributes: new drupalAttribute(),
};

export const WarmDarkX = Template.bind({});
WarmDarkX.args = {
  brow: Brow({ ...BrowHeading.args }),
  heading: 'Heading Example',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.',
  main: "<div class='box' style='background: #ccc; width: 100%;'>Other components go here.</div>",
  button: Button({ ...ButtonPrimary.args }),
  content_justify: 'center',
  content_align: 'top',
  variant: 'warm-dark-x',
  first_component: false,
  attributes: new drupalAttribute(),
};

export const White = Template.bind({});
White.args = {
  brow: Brow({ ...BrowHeading.args }),
  heading: 'Heading Example',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.',
  main: "<div class='box' style='background: #ccc; width: 100%;'>Other components go here.</div>",
  button: Button({ ...ButtonPrimary.args }),
  content_justify: 'center',
  content_align: 'top',
  variant: 'white',
  first_component: false,
  attributes: new drupalAttribute(),
};
