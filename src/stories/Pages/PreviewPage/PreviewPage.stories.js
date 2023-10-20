import data from './PreviewPage.data';
import PreviewPage from './PreviewPage.twig';

export default {
  title: 'Pages/PreviewPage',
  component: PreviewPage
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return PreviewPage({ ...args });
};

// Bind the Basic component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;
