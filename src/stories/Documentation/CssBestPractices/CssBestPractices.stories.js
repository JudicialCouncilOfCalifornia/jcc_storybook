import readme from './readme.md';
import CssBestPractices from './CssBestPractices.twig';

export default {
  title: 'Documentation/CssBestPractices',
  component: CssBestPractices,
  parameters: {
    notes: readme,
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return CssBestPractices({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the CssBestPractices.data.js file.
Default.args = {};
