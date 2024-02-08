import readme from './readme.md';
import data from './Drawer.data';
import Drawer from './Drawer.twig';
import './Drawer.css';
import './Drawer.js';

export default {
  title: 'Organisms/Drawer',
  component: Drawer,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {
    layout: {
      description: "Drawer content layout.",
      table: {defaultValue: {summary: 'stack'}},
      control: { type: 'select' },
      options: ['stack', 'cluster'],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Drawer({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Drawer.data.js file.
Default.args = data.default;
