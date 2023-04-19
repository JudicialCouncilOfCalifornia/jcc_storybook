import readme from './readme.md';
import data from './Pager.data';
import Pager from './Pager.twig';
import './Pager.css';

export default {
  title: 'Molecules/Pager',
  component: Pager,
  parameters: {
    notes: readme,
  },
  argTypes: {
    // Don't show the mock drupal attributes.
    attributes: {table: {disable: true}},
    // Variant select is a pretty common arg.
    variant: {table: {disable: true}},
    // More args here.
    current: {table: {disable: true}},
    ellipses: {table: {disable: true}},
    items: {table: {disable: true}},
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Pager({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Pager.data.js file.
Default.args = data.default;

export const FullPager = Template.bind({});
// Data comes from the Pager.data.js file.
FullPager.args = data.full_pager;

// Bind the Default component variant for this component.
export const MiniPager = Template.bind({});
// Data comes from the Pager.data.js file.
MiniPager.args = data.mini_pager;

// Bind the Default component variant for this component.
export const CommonExample = Template.bind({});
// Data comes from the Pager.data.js file.
CommonExample.args = data.common;