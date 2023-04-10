import List from '../../Molecules/List/List.twig';
import {
  WithNoMarker as WithNoMarker,
} from '../../Molecules/List/List.stories';
import AssetBundle from '../../Molecules/AssetBundle/AssetBundle.twig';
import {
  Default as AssetBundleDefault,
} from '../../Molecules/AssetBundle/AssetBundle.stories';

export default {
  default: {
    variant: 'default',
    sub_component_layout: 'with-sidebar',
    sidebar_direction: 'row',
    sidebar_width: 39,
    gap: 's4',
    sub_component_data: [
      List({...WithNoMarker.args}),
      AssetBundle({...AssetBundleDefault.args}),
    ],
  },
  with_no_sidebar: {
    variant: 'default',
    sub_component_data: [
      AssetBundle({...AssetBundleDefault.args}),
    ],
  }
}
