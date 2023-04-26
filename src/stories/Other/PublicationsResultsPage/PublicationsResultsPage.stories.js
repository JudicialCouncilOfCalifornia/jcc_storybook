import readme from './readme.md';
import data from './PublicationsResultsPage.data';
import PublicationsResultsPage from './PublicationsResultsPage.twig';
import './PublicationsResultsPage.css';

export default {
  title: 'Pages/PublicationsResultsPage',
  component: PublicationsResultsPage,
  parameters: {
    notes: readme,
  },
  argTypes: {
    variant: {
      description: "PublicationsResultsPage variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default'],
    },
  },
};

const Template = ({ ...args }) => {
  return PublicationsResultsPage({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;
