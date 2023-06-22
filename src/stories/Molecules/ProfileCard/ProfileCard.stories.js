import readme from './readme.md';
import data from './ProfileCard.data';
import ProfileCard from './ProfileCard.twig';
import './ProfileCard.css';
// import './ProfileCard.js';

export default {
  title: 'Molecules/ProfileCard',
  component: ProfileCard,
  parameters: {
    notes: readme,
    layout: 'centered',
  },
  argTypes: {},
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return ProfileCard({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;

// Bind the Default component variant for this component.
export const NoLinkExample = Template.bind({});
NoLinkExample.args = data.no_link_example;