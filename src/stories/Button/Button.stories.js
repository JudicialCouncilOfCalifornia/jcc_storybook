import drupalAttribute from 'drupal-attribute'
import Button from './Button.twig';
import './Button.css';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'text'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'normal', 'large'],
    },
  }
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Button({ ...args });
};

// Bind the Primary variant for this component.
export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  href: "#",
  type: 'primary',
  size: 'normal',
  attributes: new drupalAttribute(),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  href: "#",
  type: 'secondary',
  size: 'normal',
  attributes: new drupalAttribute(),
};

export const Text = Template.bind({});
Text.args = {
  label: "Button",
  href: "#",
  type: 'text',
  size: 'normal',
  attributes: new drupalAttribute(),
};
