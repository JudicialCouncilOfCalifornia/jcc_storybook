import readme from './readme.md';
import LegalFormatting from './LegalFormatting.twig';
import './LegalFormatting.css';

export default {
  title: 'Atoms/LegalFormatting',
  component: LegalFormatting,
  parameters: {
    notes: readme,
    layout: 'padded',
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return LegalFormatting({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = {};
