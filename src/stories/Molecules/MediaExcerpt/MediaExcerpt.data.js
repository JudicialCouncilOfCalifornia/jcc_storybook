// import '../../../js/detectWrap.js';
import Pills from "../../Molecules/Pills/Pills.twig";
import { Default as PillsDefault } from "../../Molecules/Pills/Pills.stories";

export default {
  default: {
    variant: "default",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    url: "#",
    content:
      "<p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do et dolore magna sed do et dolore Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do et dolore magna sed do et dolore aliqu aliqua...</p>",
    main_file: "#",
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
    pills: Pills({ ...PillsDefault.args }),
  },
};