import readme from './readme.md';
import data from './GlobalBranding.data';
import GlobalBranding from './GlobalBranding.twig';
import './GlobalBranding.css';

export default {
  title: 'Atoms/GlobalBranding',
  component: GlobalBranding,
  layout: "centered",
  parameters: {
    notes: readme,
  },
  argTypes: {
    attributes: {table: {disable: true}},
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return GlobalBranding({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the GlobalBranding.data.js file.
Default.args = data.default;
