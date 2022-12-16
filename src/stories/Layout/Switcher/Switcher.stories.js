import drupalAttribute from 'drupal-attribute'
import Switcher from './Switcher.twig';
import SwitcherDoc from './Switcher.md';

export default {
  title: 'Layout/Switcher',
  description: 'This is a description of this component.',
  component: Switcher,
  argTypes: {
    threshold: {
      control: { type: 'select' },
      options: ['30rem', '40rem', '50rem', '60rem'],
    },
    gap: {
      control: { type: 'select' },
      options: ['--s0', '--s1', '--s2', '--s3', '--s4', '--s5'],
    },
    num_items: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5],
    },
  },
  parameters: {
    docs: {
      description: {
        component: SwitcherDoc,
      },
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Switcher({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = {
  threshold: '30rem',
  gap: '--s1',
  num_items: 3,
  attributes: new drupalAttribute(),
};
