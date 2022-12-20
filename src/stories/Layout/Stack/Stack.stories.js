import readme from './readme.md';
import drupalAttribute from 'drupal-attribute'
import Stack from './Stack.twig';

export default {
  title: 'Layout/Stack',
  component: Stack,
  argTypes: {
    space: {
      control: { type: 'select' },
      options: ['--s0', '--s1', '--s2', '--s3', '--s4', '--s5'],
    },
  },
  parameters: {
    notes: readme,
  }
  
};

const Template = ({ ...args }) => {
  return Stack({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  space: '--s0',
  num_items: 3,
  attributes: new drupalAttribute(),
};
