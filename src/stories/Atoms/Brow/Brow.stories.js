import drupalAttribute from 'drupal-attribute'
import Brow from './Brow.twig';
import BrowDoc from './Brow.md';
import './Brow.css';

export default {
  title: 'Atoms/Brow',
  component: Brow,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'heading'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: BrowDoc,
      },
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Brow({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = {
  variant: "default",
  part_one: "Brow Example",
  part_two: "",
  attributes: new drupalAttribute(),
};

export const DafaultWithDate = Template.bind({});
DafaultWithDate.args = {
  variant: "default",
  part_one: "Brow Example",
  part_two: "Jan 05, 2023",
  attributes: new drupalAttribute(),
};

export const Heading = Template.bind({});
Heading.args = {
  variant: "heading",
  part_one: "Brow Example",
  part_two: "",
  attributes: new drupalAttribute(),
};
