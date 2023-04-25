import readme from './readme.md';
import data from './ActionList.data';
import ActionList from './ActionList.twig';
import './ActionList.css';

export default {
  title: 'Molecules/ActionList',
  component: ActionList,
  parameters: {
    notes: readme,
  },
  argTypes: {
    variant: {
      description: "ActionList variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default'],
    },
  },
};

const Template = ({ ...args }) => {
  return ActionList({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;

