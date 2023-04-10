import readme from './readme.md';
import data from './AssetBundle.data';
import AssetBundle from './AssetBundle.twig';
import './AssetBundle.css';

export default {
  title: 'Molecules/AssetBundle',
  component: AssetBundle,
  parameters: {
    notes: readme,
  },
  argTypes: {
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return AssetBundle({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;
