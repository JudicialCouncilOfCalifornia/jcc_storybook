import drupalAttribute from 'drupal-attribute'
import Button from './Button.twig';
import readme from './readme.md';

import './Button.css';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      description: "The button variant name.",
      table: { defaultValue: { summary: "primary" }},
      control: { type: 'select' },
      options: ['primary', 'secondary', 'text'],
    },
    size: {
      description: "The button size.",
      table: { defaultValue: { summary: "normal" }},
      control: { type: 'select' },
      options: ['small', 'normal', 'large'],
    },
    label: {
      description: "The button text.",
      table: { defaultValue: { summary: false }},
    },
    href: { table: { disable: true }},
    attributes: { table: { disable: true }},
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
