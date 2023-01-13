import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    section_1: {
      brow_data: false,
      heading: 'This As A Heading',
      text: false,
      sub_component_template: "Card",
      sub_component_data: {
        media: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UpnXQalWR-U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        media_caption: '<div class="caption"><p>Video text. Could be video title and video desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p></div> ',
        heading: "About Language Access",
        text: "<p>Describes Language Access at the courts as both physical and *human* translation resources available. Lorem ipsum dolor sit amet consectetur adipiscin lorem ispum bodlre</p><a href='#' class='button button--text'>See Language Resources</a><a href='#' class='button button--text'>Learn About Court Interpreters</a>",
        button_data: false,
        variant: "media-right",
        attributes: new drupalAttribute(),
      },
      button_data: false,
      variant: 'primary-dark-xx-stripe',
      first_component: false,
      attributes: new drupalAttribute(),
    },
    section_2: {
      heading: 'Different Background Than Above',
      text: '<p>Because this section has a different background, the padding above is quite large.</p>',
      sub_component_template: "TeaserPlusList",
      sub_component_data: {
        teaser: {
          brow_data: {
            part_one: 'Orders',
            part_two: 'July 12, 2022',
            attributes: new drupalAttribute(),
          },
          heading: "2DCA Protocols for In-Person Oral Argument",
          text: "The Second Appellate District's Division Two will hear oral arguments in the courtroom on May 19, 2022. Access to the courtroom will be limited to the..."
        },
        list_items: [
          {
            link: {
              label: "Job Announcement – Appellate Court Attorney",
              href: "#"
            },
            footer: "May 25, 2022"
          },
          {
            link: {
              label: "Second District Court of Appeal to resume in‑person arguments effective May 2022",
              href: "#"
            },
            footer: "May 25, 2022"
          }
        ],
        attributes: new drupalAttribute(),
      },
      attributes: new drupalAttribute(),
    },
    section_3: {
      heading: 'Same Background As Above',
      text: '<p>Because this section has a different background, the padding above is reduced. This happens automatically.</p>',
      sub_component_template: "TeaserPlusList",
      sub_component_data: {
        teaser: {
          brow_data: {
            part_one: 'Orders',
            part_two: 'July 12, 2022',
            attributes: new drupalAttribute(),
          },
          heading: "2DCA Protocols for In-Person Oral Argument",
          text: "The Second Appellate District's Division Two will hear oral arguments in the courtroom on May 19, 2022. Access to the courtroom will be limited to the..."
        },
        list_items: [
          {
            link: {
              label: "Job Announcement – Appellate Court Attorney",
              href: "#"
            },
            footer: "May 25, 2022"
          },
          {
            link: {
              label: "Second District Court of Appeal to resume in‑person arguments effective May 2022",
              href: "#"
            },
            footer: "May 25, 2022"
          }
        ],
        attributes: new drupalAttribute(),
      },
      attributes: new drupalAttribute(),
    }
  }    
}
