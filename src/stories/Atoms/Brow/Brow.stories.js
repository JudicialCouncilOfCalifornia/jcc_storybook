import drupalAttribute from 'drupal-attribute'
import Brow from './Brow.twig';
import readme from './readme.md';
import './Brow.css';

export default {
  title: 'Atoms/Brow',
  component: Brow,
  argTypes: {
    variant: {
      description: "The component variant.",
      table: { defaultValue: { summary: 'default' }},
      control: { type: 'radio' },
      options: ['default', 'heading'],
    },
    part_one: {
      description: "The first part of the Brow, usually colored by `--accent-color` value.",
      table: { defaultValue: { summary: false }},
    },
    part_two: {
      description: "The second part of the Brow, usually colored by `--color` value. Appears after a `|`.",
      table: { defaultValue: { summary: false }},
    },
    attributes: { table: { disable: true }}
  },
  parameters: {
    notes: readme,
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
