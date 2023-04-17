import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    teaser: {
      heading: "2DCA Protocols for In-Person Oral Argument",
      text: "The Second Appellate District's Division Two will hear oral arguments in the courtroom on May 19, 2022. Access to the courtroom will be limited to the...",
    },
    attributes: new drupalAttribute(),
  },
  full: {
    teaser: {
      brow_data: {
        part_one: 'Orders',
        part_two: 'July 12, 2022',
        attributes: new drupalAttribute(),
      },
      heading: "2DCA Protocols for In-Person Oral Argument",
      text: "The Second Appellate District's Division Two will hear oral arguments in the courtroom on May 19, 2022. Access to the courtroom will be limited to the...",
      footer: "This is a footer"
    },
    attributes: new drupalAttribute(),
  },
  with_brow: {
    teaser: {
      brow_data: {
        part_one: 'Orders',
        part_two: 'July 12, 2022',
        attributes: new drupalAttribute(),
      },
      heading: "2DCA Protocols for In-Person Oral Argument",
      text: "The Second Appellate District's Division Two will hear oral arguments in the courtroom on May 19, 2022. Access to the courtroom will be limited to the...",
    },
    attributes: new drupalAttribute(),
  },
  with_footer: {
    teaser: {
      heading: "2DCA Protocols for In-Person Oral Argument",
      text: "The Second Appellate District's Division Two will hear oral arguments in the courtroom on May 19, 2022. Access to the courtroom will be limited to the...",
      footer: "This is a footer"
    },
    attributes: new drupalAttribute(),
  }
}
  