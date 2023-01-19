import readme from './readme.md';
import data from './Grid.data';
import Grid from './Grid.twig';
import './Grid.css';

export default {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
    notes: readme,
  },
  argTypes: {
    // Don't show the mock drupal attributes.
    attributes: {table: {disable: true}},
    grid_min_width: {
      description: "The min width of the grid items.",
      table: { defaultValue: { summary: "60ch" }},
      control: { type: 'select' },
      options: ['20ch', '30ch', '40ch', '50ch', '70ch'],
    },
    gap: {
      description: "The space between child elements.",
      table: { defaultValue: { summary: "--s1" }},
      control: { type: 'select' },
      options: ['--s0', '--s1', '--s2', '--s3', '--s4', '--s5'],
    },
    num_items: {
      description: "Add or remove items for exploring this layout.",
      table: { defaultValue: { summary: "--s1" }},
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Grid({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Grid.data.js file.
Default.args = data.default;
