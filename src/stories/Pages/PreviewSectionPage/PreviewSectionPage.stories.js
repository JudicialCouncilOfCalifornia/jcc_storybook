import data from './PreviewSectionPage.data';
import PreviewSectionPage from './PreviewSectionPage.twig';

export default {
  title: 'Pages/PreviewSectionPage',
  component: PreviewSectionPage
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return PreviewSectionPage({ ...args });
};

// Bind the Basic component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;
