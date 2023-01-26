import drupalAttribute from 'drupal-attribute'
import DrupalIntegration from './DrupalIntegration.twig';
import readme from './readme.md';

export default {
  title: 'Documentation/DrupalIntegration',
  component: DrupalIntegration,
  parameters: {
    notes: readme,
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return DrupalIntegration({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = {};
