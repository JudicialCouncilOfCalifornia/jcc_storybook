import drupalAttribute from 'drupal-attribute'
import Intro from './Intro.twig';
import readme from './readme.md';

export default {
  title: 'Docs/Intro',
  component: Intro,
  parameters: {
    notes: readme,
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Intro({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = {
};
