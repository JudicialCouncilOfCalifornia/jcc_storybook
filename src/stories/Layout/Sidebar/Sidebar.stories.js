import readme from './readme.md';
import data from './Sidebar.data';
import Sidebar from './Sidebar.twig';
import './Sidebar.css';
// import './Sidebar.js';

export default {
  title: 'Layout/Sidebar',
  component: Sidebar,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {
    // Don't show the mock drupal attributes.
    attributes: {table: {disable: true}},
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Sidebar({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Sidebar.data.js file.
Default.args = data.default;
