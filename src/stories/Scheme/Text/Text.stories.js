import readme from './readme.md';
import Text from './Text.twig';

export default {
  title: 'Scheme/Text',
  component: Text,
  parameters: {
    notes: readme,
    layout: 'padded',
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Text({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = {};
