import readme from './readme.md';
import drupalAttribute from 'drupal-attribute'
import Center from './Center.twig';

export default {
  title: 'Layout/Center',
  component: Center,
  parameters: {
    notes: readme,
  }
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Center({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = {
};
