import readme from './readme.md';
import CodeManagement from './CodeManagement.twig';

export default {
  title: 'Documentation/CodeManagement',
  component: CodeManagement,
  parameters: {
    notes: readme,
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return CodeManagement({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the CodeManagement.data.js file.
Default.args = {};
