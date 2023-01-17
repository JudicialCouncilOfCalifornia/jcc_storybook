import { Doc } from './docs.mdx';
import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';
// Add the filters to Twig instance.
twigDrupal(Twig);

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      // color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    extractComponentDescription: (_component, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }
      return null;
    },
    page: Doc,
  },
  options: {
    storySort: {
      order: ['Documentation', ['Intro'], 'Layout', 'Scheme', ['Colors', 'Fonts', 'Sizes'], 'Atoms', 'Molecules', 'Organisms', 'Pages'],
    },
  },
}
