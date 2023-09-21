import readme from './readme.md';
import data from './ReadMore.data';
import ReadMore from './ReadMore.twig';
import './ReadMore.css';
import './ReadMore.js';

export default {
  title: 'Molecules/ReadMore',
  component: ReadMore,
  parameters: {
    notes: readme,
    layout: 'padded',
  },
  argTypes: {
    // Variant select is a pretty common arg.
    variant: {
      description: "ReadMore variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default'],
    },
    // More args here.
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return ReadMore({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the ReadMore.data.js file.
Default.args = data.default;

// Bind the Default component variant for this component.
export const Text = Template.bind({});
// Data comes from the ReadMore.data.js file.
Text.args = data.text;
