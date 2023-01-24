import readme from './readme.md';
import drupalAttribute from 'drupal-attribute'
import Stack from './Stack.twig';
import './Stack.css';

export default {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    layout: "centered",
    notes: readme,
  },
  argTypes: {
    space: {
      description: "The space between elements;",
      table: { defaultValue: { summary: '1.5rem' }},
      control: { type: 'select' },
      options: ['--s0', '--s1', '--s2', '--s3', '--s4', '--s5'],
    },
    num_items: {
      description: "Add or remove items for exploring this layout.",
      table: { defaultValue: { summary: "--s1" }},
    },
    attributes: { table: { disable: true }},
  },

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
