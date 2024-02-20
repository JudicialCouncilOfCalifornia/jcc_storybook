import Card from "../../Molecules/Card/Card.twig";
import {
  NoMedia as CardNoMedia,
} from "../../Molecules/Card/Card.stories";

export default {
  default: {
    variant: "default",
    data: [
      {
        brow: "Status",
        heading: "Open",
        text: "",
        rendered_content: '',
      },
      {
        brow: "",
        heading: "",
        text: "",
        rendered_content: Card({
          has_section_heading: true,
          ...CardNoMedia.args
        }),
      },
      {
        brow: "Deadline",
        heading: "August 1, 2024",
        text: "This is some note text",
        rendered_content: '',
      },
      {
        brow: "Number",
        heading: "1234567",
        text: "",
        rendered_content: '',
      },
    ],
  }
};
