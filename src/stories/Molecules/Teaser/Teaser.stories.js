import readme from './readme.md';
import data from './Teaser.data';
import Teaser from './Teaser.twig';
import './Teaser.css';

export default {
  title: 'Molecules/Teaser',
  component: Teaser,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {
    attributes: {table: {disable: true}},
  }
};

const Template = ({ ...args }) => {
  return Teaser({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;

export const WithBrow = Template.bind({});
WithBrow.args = data.with_brow;

export const WithFooter = Template.bind({});
WithFooter.args = data.with_footer;

export const Full = Template.bind({});
Full.args = data.full;