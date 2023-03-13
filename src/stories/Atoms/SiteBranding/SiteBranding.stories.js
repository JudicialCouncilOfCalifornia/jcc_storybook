import readme from './readme.md';
import data from './SiteBranding.data';
import SiteBranding from './SiteBranding.twig';
import './SiteBranding.css';

export default {
  title: 'Atoms/SiteBranding',
  component: SiteBranding,
  parameters: {
    layout: 'centered',
    notes: readme,
  },
  argTypes: {
    // Don't show the mock drupal attributes.
    attributes: {table: {disable: true}},
    // More args here.
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return SiteBranding({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the SiteBranding.data.js file.
Default.args = data.default;
