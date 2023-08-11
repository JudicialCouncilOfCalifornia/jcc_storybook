import readme from './readme.md';
import RulesFormatting from './RulesFormatting.twig';
import './RulesFormatting.css';

export default {
  title: 'Scheme/RulesFormatting',
  component: RulesFormatting,
  parameters: {
    notes: readme,
    layout: 'padded',
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return RulesFormatting({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = {};
