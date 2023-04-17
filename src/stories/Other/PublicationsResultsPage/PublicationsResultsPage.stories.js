import readme from './readme.md';
import data from './PublicationsResultsPage.data';
import PublicationsResultsPage from './PublicationsResultsPage.twig';
import './PublicationsResultsPage.css';
// import './PublicationsResultsPage.js';

export default {
  title: 'Pages/PublicationsResultsPage',
  component: PublicationsResultsPage,
  parameters: {
    notes: readme,
  },
  argTypes: {
    // Don't show the mock drupal attributes.
    attributes: {table: {disable: true}},
    // Variant select is a pretty common arg.
    variant: {
      description: "PublicationsResultsPage variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default', 'variant_one'],
    },
    // More args here.
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return PublicationsResultsPage({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the PublicationsResultsPage.data.js file.
Default.args = data.default;

// // Bind additional component variants like this.
// export const [VariantName] = Template.bind({});
// [VariantName].args = data.[VariantName];
