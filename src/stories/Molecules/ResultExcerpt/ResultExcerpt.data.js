// import '../../../js/detectWrap.js';
import Pill from "../../Atoms/Pill/Pill.twig";
import { Default as PillDefault } from "../../Atoms/Pill/Pill.stories";

export default {
  default: {
    variant: "default",
    brow: {
      primary: 'Brow Primary',
      secondary: 'Brow Secondary',
      notation: 'Brow Notation',
    },
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    url: "#",
    content:
      "<p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do et dolore magna sed do et dolore Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do et dolore magna sed do et dolore aliqu aliqua...</p>",
    main_file: "#",
    is_new: true,
    button_data: {
      label: "Download pdf",
      href: "#",
      variant: "primary",
      size: "small",
    },
    detail_list_data: {
      label: "DETAILS",
      details: [
        "Topic",
        "July 12, 2022",
        "Case Type",
        "Office/Division: CFCC",
        "Report",
      ],
    },
    pills: {
      variant: "default",
      icon_data: {
        icon: "translation",
        color: false,
      },
      items: [
        Pill({ ...PillDefault.args }),
        Pill({ ...PillDefault.args }),
        Pill({ ...PillDefault.args }),
      ],
    },
    item_classes: [
      'result-extra-style__some__style',
    ],
  },
};
