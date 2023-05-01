import List from "../../Molecules/List/List.twig";
import { WithNoMarker } from "../../Molecules/List/List.stories";
import AssetBundle from "../../Molecules/AssetBundle/AssetBundle.twig";
import { Default as AssetBundleDefault } from "../../Molecules/AssetBundle/AssetBundle.stories";

export default {
  default: {
    variant: "default",
    sub_component_layout: "with-sidebar",
    sidebar_direction: "row-reverse",
    sidebar_width: "39ch",
    gap: "s4",
    sub_component_data: [
      AssetBundle({ ...AssetBundleDefault.args }),
      '<div class="sidebar">' + List({ ...WithNoMarker.args }) + '</div>',
    ],
  },
  with_no_sidebar: {
    variant: "default",
    sub_component_data: [AssetBundle({ ...AssetBundleDefault.args })],
  },
};
