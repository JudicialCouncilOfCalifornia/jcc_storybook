import drupalAttribute from 'drupal-attribute'

import Icon from './Icon.twig';
import readme from './readme.md';
import './Icon.css';
import './Icon.js';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    icon: {
      description: 'Available icons are in an svg "sprite" file built from the icons in `assets/icons`. i.e. `documents`, `speaker`, `toolkit`',
      table: { defaultValue: { summary: false }},
      control: { type: 'select' },
      options: ['documents', 'exam', 'heart-money', 'resources', 'settings', 'speaker', 'toolkit', 'translation'],
    },
    color: {
      description: "Can be any color defined in the scheme CSS file, i.e. `assets/css/scheme-default.css` or any scheme file that overrides it. If the defined color is `--color-primary-dark-x` then the color name is `primary-dark-x`.  `false` inherits the current `--color` value.",
      table: { defaultValue: { summary: false }},
      control: { type: 'select' },
      options: [false, 'black', 'white'],
    },
    attributes: { table: { disable: true }},
  },
  parameters: {
    notes: readme,
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
