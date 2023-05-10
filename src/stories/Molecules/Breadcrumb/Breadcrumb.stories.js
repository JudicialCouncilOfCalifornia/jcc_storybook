import readme from './readme.md';
import data from './Breadcrumb.data';
import Breadcrumb from './Breadcrumb.twig';
import './Breadcrumb.css';

export default {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    notes: readme,
  },
  argTypes: {
    variant: {
      description: "Breadcrumb variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default'],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Breadcrumb({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Breadcrumb.data.js file.
Default.args = data.default;
