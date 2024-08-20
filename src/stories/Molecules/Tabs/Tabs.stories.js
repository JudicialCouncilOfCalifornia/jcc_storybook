import readme from './readme.md';
import data from './Tabs.data';
import Tabs from './Tabs.twig';
import './Tabs.css';
import './Tabs.js';

export default {
  title: 'Molecules/Tabs',
  component: Tabs,
  parameters: {
    notes: readme,
    layout: "padded",
  },
  argTypes: {
    variant: {
      table: {disable: true},
      control: {type: null},
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Tabs({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Tabs.data.js file.
Default.args = data.default;

// Bind the Variant component variant for this component.
export const Alternate = Template.bind({});
Alternate.args = data.alternate;
