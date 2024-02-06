import readme from './readme.md';
import data from './Offcanvas.data';
import Offcanvas from './Offcanvas.twig';
import './Offcanvas.css';
import './Offcanvas.js';

export default {
  title: 'Molecules/Offcanvas',
  component: Offcanvas,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {
    align: {
      description: "Canvas alignment.",
      table: { defaultValue: { summary: 'right' } },
      control: { type: 'select' },
      options: ['right', 'left'],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Offcanvas({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Offcanvas.data.js file.
Default.args = data.default;
