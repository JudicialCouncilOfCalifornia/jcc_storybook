import readme from './readme.md';
import data from './Hangover.data';
import Hangover from './Hangover.twig';
import './Hangover.css';

export default {
  title: 'Molecules/Hangover',
  component: Hangover,
  parameters: {
    notes: readme,
  },
  argTypes: {
    // Don't show the mock drupal attributes.
    attributes: {table: {disable: true}},
    // More args here.
    background: {
      description: "Specify the alternate background style.",
      table: { defaultValue: { summary: null }},
      control: { type: 'select' },
      options: [
        'default',
        'base-light-xx',
      ]
    },
    hangover_offset: {
      description: "Specify the offset of the hangover.",
      table: { defaultValue: { summary: 22 }},
      control: { type: 'number' },
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Hangover({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;

export const WithBrow = Template.bind({});
WithBrow.args = data.with_brow;

export const WithMedia = Template.bind({});
WithMedia.args = data.with_media;

export const WithText = Template.bind({});
WithText.args = data.with_text;

export const WithBottom = Template.bind({});
WithBottom.args = data.with_bottom;

export const HideMediaPortrait = Template.bind({});
HideMediaPortrait.args = data.hide_media_compact;

