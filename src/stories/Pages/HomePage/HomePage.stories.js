import data from './HomePage.data';
import HomePage from './HomePage.twig';
import './HomePage.css';

export default {
  title: 'Pages/HomePage',
  component: HomePage
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return HomePage({ ...args });
};

// Bind the Basic component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;
