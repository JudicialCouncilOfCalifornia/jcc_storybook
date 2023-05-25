import readme from './readme.md';
import data from './Table.data';
import Table from './Table.twig';
import './Table.css';

export default {
  title: 'Atoms/Table',
  component: Table,
  parameters: {
    notes: readme,
  },
  argTypes: {
    variant: {
      description: "Table variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default'],
    },
  },
};

const Template = ({ ...args }) => {
  return Table({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;
