import readme from './readme.md';
import data from './Share.data';
import Share from './Share.twig';
import './Share.css';

export default {
  title: 'Molecules/Share',
  component: Share,
  parameters: {
    notes: readme,
    layout: 'padded',
  },
  argTypes: {
    // Variant select is a pretty common arg.
    variant: {
      description: "Share variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default'],
    },
    // More args here.
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Share({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Share.data.js file.
Default.args = data.default;
