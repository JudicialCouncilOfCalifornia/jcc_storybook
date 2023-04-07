// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    variant: null,
    items: [
      {
        text: "Unde omnis iste"
      },
      {
        text: "Doloremque laudantium"
      },
      {
        text: "Ab illo inventore"
      }
    ],
    attributes: new drupalAttribute()
  },
  with_labels: {
    variant: null,
    items: [
      {
        label: "Sed ut",
        text: "Unde omnis iste",
      },
      {
        label: "Voluptatem",
        text: "Doloremque laudantium",
      },
      {
        label: "Eaque ipsa",
        text: "Ab illo inventore",
      }
    ],
    attributes: new drupalAttribute()
  },
  with_no_marker: {
    variant: "no-marker",
    items: [
      {
        label: "Sed ut",
        text: "Unde omnis iste",
      },
      {
        label: "Voluptatem",
        text: "Doloremque laudantium",
      },
      {
        label: "Eaque ipsa",
        text: "Ab illo inventore",
      }
    ],
    attributes: new drupalAttribute()
  },
  with_grid: {
    variant: "ul",
    variant_layout: "grid",
    items: [
      {
        text: "Unde omnis iste"
      },
      {
        text: "Doloremque laudantium"
      },
      {
        text: "Ab illo inventore"
      },
    ],
    attributes: new drupalAttribute()
  },
}
