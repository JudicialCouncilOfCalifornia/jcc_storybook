import readme from './readme.md';
import data from './DataVisualizationEmbed.data';
import DataVisualizationEmbed from './DataVisualizationEmbed.twig';
import './DataVisualizationEmbed.css';

export default {
  title: 'Molecules/DataVisualizationEmbed',
  component: DataVisualizationEmbed,
  parameters: {
    notes: readme,
  },
  argTypes: {
    variant: {
      description: "DataVisualizationEmbed.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default'],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return DataVisualizationEmbed({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;
