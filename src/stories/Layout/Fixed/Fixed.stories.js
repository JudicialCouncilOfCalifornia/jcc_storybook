import readme from './readme.md';
import data from "./Fixed.data";
import Fixed from './Fixed.twig';
import './Fixed.css';

export default {
  title: 'Layout/Fixed',
  component: Fixed,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {
    align: {
      description: "Fixed position and alignment.",
      table: {defaultValue: {summary: 'right'}},
      control: { type: 'select' },
      options: ['right', 'left'],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Fixed({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Fixed.data.js file.
Default.args = data.default;
