import Section from './Section.twig';
import drupalAttribute from 'drupal-attribute'
import readme from './readme.md';
import './Section.css';

import Brow from '../../Atoms/Brow/Brow.twig';
import { Heading as BrowHeading } from '../../Atoms/Brow/Brow.stories';

import Button from '../../Atoms/Button/Button.twig';
import { Primary as ButtonPrimary } from '../../Atoms/Button/Button.stories';

export default {
  title: 'Molecules/Section',
  component: Section,
  parameters: {
    notes: readme,
  },
  argTypes: {
    variant: { 
      description: "Variant name based on background color which also sets complimentary styles.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'select' },
      options: ['default', 'primary-dark-xx', 'primary-dark-xx-stripe', 'warm-dark-xx', 'warm-dark-x', 'white'],
    },
    first_component: { 
      description: "If true, sets the section heading to H1",
      table: {defaultValue: {summary: false}},
    },
    brow: {
      table: {
        disable: true,
      }
    },
    heading: {
      table: {
        disable: true,
      }
    },
    text: {
      table: {
        disable: true,
      }
    },
    main: {
      table: {
        disable: true,
      }
    },
    button: {
      table: {
        disable: true,
      }
    },
    attributes: {
      table: {
        disable: true,
      }
    }
  }
};

const Template = ({ ...args }) => {
  return Section({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  first_component: false,
  brow: Brow({ ...BrowHeading.args }),
  heading: 'Heading Example',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.',
  main: "<div class='box' style='background: #ccc; width: 100%;'>Other components go here.</div>",
  button: Button({ ...ButtonPrimary.args }),
  attributes: new drupalAttribute(),
};

export const PrimaryDarkXX = Template.bind({});
PrimaryDarkXX.args = {
  variant: 'primary-dark-xx',
  first_component: false,
  brow: Brow({ ...BrowHeading.args }),
  heading: 'Heading Example',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.',
  main: "<div class='box' style='background: #ccc; width: 100%;'>Other components go here.</div>",
  button: Button({ ...ButtonPrimary.args }),
  attributes: new drupalAttribute(),
};

export const PrimaryDarkXXStripe = Template.bind({});
PrimaryDarkXXStripe.args = {
  variant: 'primary-dark-xx-stripe',
  first_component: false,
  brow: Brow({ ...BrowHeading.args }),
  heading: 'Heading Example',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.',
  main: "<div class='box' style='background: #ccc; width: 100%;'>Other components go here.</div>",
  button: Button({ ...ButtonPrimary.args }),
  attributes: new drupalAttribute(),
};

export const WarmDarkX = Template.bind({});
WarmDarkX.args = {
  variant: 'warm-dark-x',
  first_component: false,
  brow: Brow({ ...BrowHeading.args }),
  heading: 'Heading Example',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.',
  main: "<div class='box' style='background: #ccc; width: 100%;'>Other components go here.</div>",
  button: Button({ ...ButtonPrimary.args }),
  attributes: new drupalAttribute(),
};

export const White = Template.bind({});
White.args = {
  variant: 'white',
  first_component: false,
  brow: Brow({ ...BrowHeading.args }),
  heading: 'Heading Example',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.',
  main: "<div class='box' style='background: #ccc; width: 100%;'>Other components go here.</div>",
  button: Button({ ...ButtonPrimary.args }),
  attributes: new drupalAttribute(),
};
