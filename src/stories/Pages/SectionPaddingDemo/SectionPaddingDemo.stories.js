import data from './SectionPaddingDemo.data';
import SectionPaddingDemo from './SectionPaddingDemo.twig';
import './SectionPaddingDemo.css';

export default {
  title: 'Pages/SectionPaddingDemo',
  component: SectionPaddingDemo
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return SectionPaddingDemo({ ...args });
};

// Bind the Basic component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;
