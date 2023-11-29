import readme from './readme.md';
import data from './ViewResults.data';
import ViewResults from './ViewResults.twig';
import './ViewResults.css';

export default {
  title: 'Organisms/ViewResults',
  component: ViewResults,
  parameters: {
    notes: readme,
    layout: 'padded',
  },
  argTypes: {
    variant: {
      description: "ViewResults variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default', 'search_results'],
    },
    sidebar_direction_header: {
      description: "Sidebar direction for header.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['sidebar-row-reverse', 'sidebar-row'],
    },
    sidebar_direction_results: {
      description: "Sidebar direction for results.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['sidebar-row-reverse', 'sidebar-row'],
    },
    sidebar_direction_footer: {
      description: "Sidebar direction for footer.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['sidebar-row-reverse', 'sidebar-row'],
    },
    list_type: {
      description: "List type",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['ol', 'ul'],
    },
    list_type_divider: {
      description: "Apply a border divider between list items",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'boolean' },
      options: [true, false],
    },
    form_in_sidebar: {
      description: "Set the exposed form in the sidebar",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'boolean' },
      options: [false, true],
    }
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return ViewResults({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the ViewResults.data.js file.
Default.args = data.default;

// Bind the Default component variant for this component.
export const WithFullBrow = Template.bind({});
// Data comes from the ViewResults.data.js file.
WithFullBrow.args = data.with_full_brow;
