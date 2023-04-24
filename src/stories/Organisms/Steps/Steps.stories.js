import readme from './readme.md';
import data from './Steps.data';
import Steps from './Steps.twig';
import './Steps.css';

export default {
  title: 'Organisms/Steps',
  component: Steps,
  parameters: {
    notes: readme,
    layout: "padded",
  },
  argTypes: {
    variant: {table: {disable: true}},
    color: {
      name: "Color",
      description: "Background color of step numbers.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default', 'warm', 'dark', 'primary', 'secondary'],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Steps({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Steps.data.js file.
Default.args = data.default;
