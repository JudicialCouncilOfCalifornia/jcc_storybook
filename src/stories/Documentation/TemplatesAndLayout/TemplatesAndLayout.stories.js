import readme from './readme.md';
import TemplatesAndLayout from './TemplatesAndLayout.twig';

export default {
  title: 'Documentation/TemplatesAndLayout',
  component: TemplatesAndLayout,
  parameters: {
    notes: readme,
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return TemplatesAndLayout({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the TemplatesAndLayout.data.js file.
Default.args = {};

