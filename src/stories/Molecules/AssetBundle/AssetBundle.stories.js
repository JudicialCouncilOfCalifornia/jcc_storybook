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
  argTypes: { },
};

const Template = ({ ...args }) => {
  return AssetBundle({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;
