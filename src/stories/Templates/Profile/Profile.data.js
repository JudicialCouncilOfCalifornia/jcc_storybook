import ProfileCard from "../../Molecules/ProfileCard/ProfileCard.twig";
import { NoLinkExample } from "../../Molecules/ProfileCard/ProfileCard.stories";
import ProfileBio from "../../Molecules/ProfileBio/ProfileBio.twig";
import { Default } from "../../Molecules/ProfileBio/ProfileBio.stories";

export default {
  default: {
    variant: "default",
    sub_component_layout: "with-sidebar",
    sidebar_direction: "row",
    sidebar_width: "30",
    sub_component_data: [
      ProfileCard({...NoLinkExample.args}),
      ProfileBio({...Default.args}),
    ],
  }
};