export default {
  default: {
    section_1: {
      brow_data: false,
      heading: "This As A Heading",
      text: "<p>This Section background provides contrast with the following Section.</p>",
      button_data: false,
      variant: "primary-dark-xx-stripe",
      first_component: false,
    },
    section_2: {
      heading: "Different Background Than Above",
      text: "<p>Because this section has a different background, there is padding at the top of this Section to move the content away from the Section above.</p>",
    },
    section_3: {
      heading: "Same Background As Above",
      text: "<p>Because this section has the same background, the padding above is removed because we don't need the extra white space when there is no contrast. This happens automatically.</p>",
    },
  },
};
