import readme from './readme.md';
import data from './ProfileBio.data';
import ProfileBio from './ProfileBio.twig';
import './ProfileBio.css';

export default {
  title: 'Molecules/ProfileBio',
  component: ProfileBio,
  parameters: {
    notes: readme,
    layout: 'padded',
  },
  argTypes: {
    variant: {
      description: "ProfileBio variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default'],
    },
    // More args here.
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return ProfileBio({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;

export const ShareEnabled = Template.bind({});
ShareEnabled.args = data.share_enabled;

export const WithSubComponents = Template.bind({});
WithSubComponents.args = data.with_subcomponents;
