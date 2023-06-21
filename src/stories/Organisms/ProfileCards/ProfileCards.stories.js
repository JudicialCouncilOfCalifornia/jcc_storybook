import readme from './readme.md';
import data from './ProfileCards.data';
import ProfileCards from './ProfileCards.twig';
import './ProfileCards.css';

export default {
  title: 'Organisms/ProfileCards',
  component: ProfileCards,
  parameters: {
    notes: readme,
  },
  argTypes: {
    variant: {
      description: "ProfileCards variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default'],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return ProfileCards({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;