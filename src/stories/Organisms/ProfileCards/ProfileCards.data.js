import ProfileCard from "../../Molecules/ProfileCard/ProfileCard.twig";
import {
  Default as ProfileCardDefault,
} from "../../Molecules/ProfileCard/ProfileCard.stories";

export default {
  default: {
    variant: "default",
    heading: "Judicial Example Division One",
    text: "<p>Potential description if needed. Any rendered content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.</p>",
    sub_component_data: [
      ProfileCard({
        has_section_heading: true,
        ...ProfileCardDefault.args
      }),
      ProfileCard({
        has_section_heading: true,
        ...ProfileCardDefault.args
      }),
      ProfileCard({
        has_section_heading: true,
        ...ProfileCardDefault.args
      })
    ],
  },
};
