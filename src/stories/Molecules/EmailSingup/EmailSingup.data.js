// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    section: {
      variant: 'primary-dark-xx',
      brow_data: {},
      heading: false,
      text: false,
      first_component: false,
      button_data: false,
      sub_component_template: false,
      sub_component_data: {
        variant: "media-right",
        media: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UpnXQalWR-U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        media_caption: '<div class="caption"><p>Video text. Could be video title and video desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p></div>',
        heading: "About Language Access",
        text: "<p>Describes Language Access at the courts as both physical and *human* translation resources available. Lorem ipsum dolor sit amet consectetur adipiscin lorem ispum bodlre</p><a href='#' class='button button--text'>See Language Resources</a><a href='#' class='button button--text'>Learn About Court Interpreters</a>",
        button_data: false,
        attributes: new drupalAttribute(),
      },
    },
    attributes: new drupalAttribute(),
  },
}
