import data from './PreviewSubPage.data';
import PreviewSubPage from './PreviewSubPage.twig';

export default {
  title: 'Pages/PreviewSubPage',
  component: PreviewSubPage
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return PreviewSubPage({ ...args });
};

// Bind the Basic component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;
