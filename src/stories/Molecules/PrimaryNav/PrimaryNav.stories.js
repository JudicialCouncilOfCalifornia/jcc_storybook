import readme from './readme.md';
import data from './PrimaryNav.data';
import PrimaryNav from './PrimaryNav.twig';
import './PrimaryNav.css';
import './PrimaryNav.js';

export default {
  title: 'Molecules/PrimaryNav',
  component: PrimaryNav,
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
  return PrimaryNav({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the PrimaryNav.data.js file.
Default.args = data.default;