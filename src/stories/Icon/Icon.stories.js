import drupalAttribute from 'drupal-attribute'

import Icon from './Icon.twig';
import './Icon.css';
import './Icon.js';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['documents', 'exam', 'heart-money', 'resources', 'settings', 'speaker', 'toolkit', 'translation'],
    },
    color: {
      control: { type: 'radio' },
      options: ['black', 'white'],
    },
  }
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Icon({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = {
  // Create any variables to pass to the Twig template.
  icon: "speaker",
  // A variant type that contols the layout and style of the component.
  color: false,
  // drupalAttribute allows us to mock drupal attributes in storybook.
  attributes: new drupalAttribute(),
};

// // Bind additional component variants like this.
// export const [VariantName] = Template.bind({});
// [VariantName].args = {
//   // Create any variables to pass to the Twig template.
//   content: "Content goes here.",
//   // A variant type that contols the layout and style of the component.
//   variant: "default",
//   // drupalAttribute allows us to mock drupal attributes in storybook.
//   attributes: new drupalAttribute(),
// };
