import drupalAttribute from 'drupal-attribute'
import Brow from './Brow.twig';
import './Brow.css';

export default {
  title: 'Atoms/Brow',
  component: Brow,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'heading'],
    },
  }
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Brow({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = {
  part_one: "Brow Example",
  part_two: "",
  variant: "default",
  attributes: new drupalAttribute(),
};

export const DafaultWithDate = Template.bind({});
DafaultWithDate.args = {
  part_one: "Brow Example",
  part_two: "Jan 05, 2023",
  variant: "default",
  attributes: new drupalAttribute(),
};

export const Heading = Template.bind({});
Heading.args = {
  part_one: "Brow Example",
  part_two: "",
  variant: "heading",
  attributes: new drupalAttribute(),
};
