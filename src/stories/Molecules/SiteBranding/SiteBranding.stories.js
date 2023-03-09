import readme from './readme.md';
import data from './SiteBranding.data';
import SiteBranding from './SiteBranding.twig';
import './SiteBranding.css';
// import './SiteBranding.js';

export default {
  title: 'Molecules/SiteBranding',
  component: SiteBranding,
  parameters: {
    notes: readme,
  },
  argTypes: {
    // Don't show the mock drupal attributes.
    attributes: {table: {disable: true}},
    // Variant select is a pretty common arg.
    variant: {
      description: "SiteBranding variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default', 'variant_one'],
    },
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

// // Bind additional component variants like this.
// export const [VariantName] = Template.bind({});
// [VariantName].args = data.[VariantName];
