import readme from "./readme.md";
import data from "./HeroHangover.data";
import HeroHangover from "./HeroHangover.twig";
import "./HeroHangover.css";

export default {
  title: "Molecules/HeroHangover",
  component: HeroHangover,
  parameters: {
    notes: readme,
  },
  argTypes: {
    // More args here.
    background: {
      description: "Specify the alternate background style.",
      table: { defaultValue: { summary: null } },
      control: { type: "select" },
      options: [
        "",
        "base-light-xxx",
        "base-dark-x",
        "base-dark-xxx",
        "accent-warm-light-xxxx",
        "accent-warm-dark-x",
        "red",
        "brown",
        "primary-light-xxx",
        "primary-light-x",
        "primary-dark-x",
        "secondary",
        "secondary-dark-xx",
      ],
    },
    hangover_offset: {
      description: "Specify the offset of the hangover.",
      table: { defaultValue: { summary: 22 } },
      control: { type: "number" },
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return HeroHangover({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;

export const WithBrow = Template.bind({});
WithBrow.args = data.with_brow;

export const WithMedia = Template.bind({});
WithMedia.args = data.with_media;

export const WithBlurb = Template.bind({});
WithBlurb.args = data.with_blurb;

export const WithText = Template.bind({});
WithText.args = data.with_text;

export const WithPrint = Template.bind({});
WithPrint.args = data.with_print;

export const WithBottom = Template.bind({});
WithBottom.args = data.with_bottom;

export const BorderlessMedia = Template.bind({});
BorderlessMedia.args = data.borderless_media;

export const HideMediaPortrait = Template.bind({});
HideMediaPortrait.args = data.hide_media_compact;
