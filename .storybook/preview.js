import { configure } from '@storybook/html';
import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';
// Add the filters to Twig instance.
twigDrupal(Twig);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  options: {
    storySort: {
      order: ['Colors', 'Fonts', 'Layout', 'Atoms', 'Molecules', 'Organisms', 'Pages'],
    },
  },
}
