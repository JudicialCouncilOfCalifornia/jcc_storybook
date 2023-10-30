import data from './PreviewMixedContentPage.data';
import PreviewMixedContentPage from './PreviewMixedContentPage.twig';

export default {
  title: 'Pages/PreviewMixedContentPage',
  component: PreviewMixedContentPage
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return PreviewMixedContentPage({ ...args });
};

// Bind the Basic component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;
