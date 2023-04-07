import readme from './readme.md';
import data from './Asset.data';
import asset from './Asset.twig';
import './Asset.css';
//import './Asset.js';

export default {
  title: 'Organisms/Asset',
  component: asset,
  parameters: {
    notes: readme,
  },
  argTypes: {
    // Don't show the mock drupal attributes.
    attributes: {table: {disable: true}},
    // Variant select is a pretty common arg.
    // variant: {
    //   description: "asset variant.",
    //   table: {defaultValue: {summary: 'default'}},
    //   control: { type: 'radio' },
    //   options: ['default', 'variant_one'],
    // },
    // More args here.
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return asset({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;

export const WithNoSidebar = Template.bind({});
WithNoSidebar.args = data.with_no_sidebar;

