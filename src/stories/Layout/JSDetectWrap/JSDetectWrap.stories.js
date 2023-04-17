import readme from './readme.md';
import data from './JSDetectWrap.data';
import DetectWrap from './JSDetectWrap.twig';
import './JSDetectWrap.css';
import '../../../js/detectWrap.js';

export default {
  title: 'Layout/JSDetectWrap',
  component: DetectWrap,
  parameters: {
    notes: readme,
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return DetectWrap({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the DetectWrap.data.js file.
Default.args = data.default;
