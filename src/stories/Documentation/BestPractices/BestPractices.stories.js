import drupalAttribute from 'drupal-attribute'
import readme from './readme.md';
import BestPractices from './BestPractices.twig';

export default {
  title: 'Documentation/BestPractices',
  component: BestPractices,
  parameters: {
    notes: readme,
  }
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return BestPractices({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = {
};

