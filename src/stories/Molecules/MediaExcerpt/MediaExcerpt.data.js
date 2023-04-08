// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute';
import Pills from "../../Molecules/Pills/Pills.twig";
import {
  Default as PillsDefault,
} from '../../Molecules/Pills/Pills.stories';

export default {
  default: {
    variant: "default",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    url: "#",
    content: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do et dolore magna sed do et dolore Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do et dolore magna sed do et dolore aliqu aliqua...",
    main_file: "#",
    button_data: {
      label: "Download pdf",
      href: "#",
      variant: "primary",
    },
    details_label: "DETAILS",
    details: "Topic  •  July 12, 2022  •  Case Type  •  Office/Division: CFCC  •  Report",
    pills:
      Pills({...PillsDefault.args}),
    attributes: new drupalAttribute()
  },
  another_variant: {
    variant: "content-bg",
    sub_component_data: {
      variant: "default",
      attributes: new drupalAttribute(),
    },
    attributes: new drupalAttribute()
  }
}
