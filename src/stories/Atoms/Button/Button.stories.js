import drupalAttribute from 'drupal-attribute'
import Button from './Button.twig';
import readme from './readme.md';

import './Button.css';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'text'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'normal', 'large'],
    },
  },
  parameters: {
    notes: readme,
  }
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Button({ ...args });
};

// Bind the Primary variant for this component.
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'normal',
  label: "Button",
  href: "#",
  attributes: new drupalAttribute(),
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'normal',
  label: "Button",
  href: "#",
  attributes: new drupalAttribute(),
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  size: 'normal',
  label: "Button",
  href: "#",
  attributes: new drupalAttribute(),
};
