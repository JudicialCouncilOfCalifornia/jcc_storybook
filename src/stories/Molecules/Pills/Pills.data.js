import Pill from "../../Atoms/Pill/Pill.twig";
import { Default as PillDefault } from "../../Atoms/Pill/Pill.stories";

export default {
  default: {
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
};
