import readme from './readme.md';
import data from './PublicationResults.data';
import PublicationResults from './PublicationResults.twig';
import './PublicationResults.css';

export default {
  title: 'Templates/PublicationResults',
  component: PublicationsResults,
  parameters: {
    notes: readme,
  },
  argTypes: {
    variant: {
      description: "PublicationResults variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default'],
    },
  },
};

const Template = ({ ...args }) => {
  return PublicationResults({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;
