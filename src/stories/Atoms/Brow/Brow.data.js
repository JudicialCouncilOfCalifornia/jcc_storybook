import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    variant: "default",
    part_one: "Brow Example",
    part_two: "",
    attributes: new drupalAttribute(),
  },
  default_with_date: {
    variant: "default",
    part_one: "Brow Example",
    part_two: "Jan 05, 2023",
    attributes: new drupalAttribute(),
  },
  heading: {
    variant: "heading",
    part_one: "Brow Example",
    part_two: "",
    attributes: new drupalAttribute(),
  },
}
