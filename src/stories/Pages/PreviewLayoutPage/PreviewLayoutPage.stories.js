import data from './PreviewLayoutPage.data';
import PreviewLayoutPage from './PreviewLayoutPage.twig';

export default {
  title: 'Pages/PreviewLayoutPage',
  component: PreviewLayoutPage
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return PreviewLayoutPage({ ...args });
};

// Bind the Basic component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;
