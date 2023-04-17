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
    layout: "padding",
  },
  argTypes: {
    // Don't show the mock drupal attributes.
    attributes: {table: {disable: true}},
    // Variant select is a pretty common arg.
    variant: {
      description: "Specify list style.",
      table: {defaultValue: {summary: 'ul'}},
      control: { type: 'select' },
      options: ['ul', 'ol', 'none'],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return List({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;

export const WithLabels = Template.bind({});
WithLabels.args = data.with_labels;

export const WithNoMarker = Template.bind({});
WithNoMarker.args = data.with_no_marker;

export const WithGrid = Template.bind({});
WithGrid.args = data.with_grid;
