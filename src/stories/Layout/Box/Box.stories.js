import readme from './readme.md';
import drupalAttribute from 'drupal-attribute'
import Box from './Box.twig';

export default {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    notes: readme,
  }
};

const Template = ({ ...args }) => {
  return Box({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  attributes: new drupalAttribute(),
};

