import readme from './readme.md';
import data from './Alert.data';
import Alert from './Alert.twig';
import './Alert.css';
import './Alert.js';
import drupalAttribute from 'drupal-attribute'

export default {
  title: 'Molecules/Alert',
  component: Alert,
  parameters: {
    notes: readme,
  },
  argTypes: {
    // Don't show the mock drupal attributes.
    attributes: {
      table: {disable: true},
      control: false,
    },
    type: {
      name: "Alert type",
      options: ["default", "status", "warning", "error"],
      control: { type: "inline-radio" },
    },
    dismissable: {
      name: "Alert dismissable",
      control: "boolean",
    },
    variant: {
      table: {disable: true},
      control: false,
    },
    content: {
      table: {disable: true},
      control: false,
    },
  }
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Alert({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;

