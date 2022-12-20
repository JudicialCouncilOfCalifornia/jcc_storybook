import drupalAttribute from 'drupal-attribute'
import Switcher from './Switcher.twig';
import readme from './readme.md';

export default {
  title: 'Layout/Switcher',
  description: 'This is a description of this component.',
  component: Switcher,
  argTypes: {
    measure: {
      control: { type: 'select' },
      options: ['30rem', '40rem', '50rem', '60rem'],
    },
    gap: {
      control: { type: 'select' },
      options: ['--s0', '--s1', '--s2', '--s3', '--s4', '--s5'],
    },
  },
  parameters: {
    notes: readme,
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Switcher({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = {
  measure: '30rem',
  gap: '--s1',
  num_items: 3,
  attributes: new drupalAttribute(),
};
