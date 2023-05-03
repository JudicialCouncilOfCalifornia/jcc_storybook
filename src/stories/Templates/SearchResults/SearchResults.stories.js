import readme from './readme.md';
import data from './SearchResults.data';
import SearchResults from './SearchResults.twig';
import './SearchResults.css';

export default {
  title: 'Templates/SearchResults',
  component: SearchResults,
  parameters: {
    notes: readme,
    layout: 'padded',
  },
  argTypes: {
    variant: {
      description: "SearchResults variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default', 'variant_one'],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return SearchResults({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the SearchResults.data.js file.
Default.args = data.default;
