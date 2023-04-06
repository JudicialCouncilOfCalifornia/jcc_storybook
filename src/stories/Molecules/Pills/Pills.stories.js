import readme from './readme.md';
import data from './Pills.data';
import Pills from './Pills.twig';
import './Pills.css';

export default {
  title: 'Molecules/Pills',
  component: Pills,
  parameters: {
    layout: 'padded',
    notes: readme,
  },
  argTypes: {
    attributes: {table: {disable: true}},
  },
};

const Template = ({ ...args }) => {
  return Pills({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;
