import drupalAttribute from 'drupal-attribute'
import Intro from './Intro.twig';
import IntroDoc from './Intro.md';

export default {
  title: 'Intro',
  description: 'This is a description of this component.',
  component: Intro,
  parameters: {
    docs: {
      description: {
        component: IntroDoc,
      },
    },
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
