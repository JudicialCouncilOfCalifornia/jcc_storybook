import './List.css';
import readme from './readme.md';
import data from './List.data';
import List from './List.twig';
import './List.css';

export default {
  title: 'Molecules/List',
  component: List,
  parameters: {
    notes: readme,
    layout: 'padded',
  },
  argTypes: {
    variant: {
      description: "Specify list style.",
      table: {defaultValue: {summary: 'ul'}},
      control: { type: 'select' },
      options: ['ul', 'ol', 'none'],
    },
  },
};

const Template = ({ ...args }) => {
  return List({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;

export const WithLabels = Template.bind({});
WithLabels.args = data.with_labels;

export const WithNoMarker = Template.bind({});
WithNoMarker.args = data.with_no_marker;

export const WithHeading = Template.bind({});
WithHeading.args = data.with_heading;

export const WithGrid = Template.bind({});
WithGrid.args = data.with_grid;
