import readme from './readme.md';
import data from './Profile.data';
import Profile from './Profile.twig';
import './Profile.css';

export default {
  title: 'Templates/Profile',
  component: Profile,
  parameters: {
    notes: readme,
  },
  argTypes: {
    sidebar_direction: {
      description: "Sidebar placement.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['row', 'row-reverse'],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Profile({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;
