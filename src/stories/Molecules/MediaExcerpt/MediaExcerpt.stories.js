import readme from './readme.md';
import data from './MediaExcerpt.data';
import MediaExcerpt from './MediaExcerpt.twig';
import './MediaExcerpt.css';

export default {
  title: 'Molecules/MediaExcerpt',
  component: MediaExcerpt,
  parameters: {
    notes: readme,
  },
  argTypes: {
    attributes: {table: {disable: true}},
    variant: {
      description: "MediaExcerpt variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default', 'variant_one'],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return MediaExcerpt({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the MediaExcerpt.data.js file.
Default.args = data.default;

// // Bind additional component variants like this.
// export const [VariantName] = Template.bind({});
// [VariantName].args = data.[VariantName];
