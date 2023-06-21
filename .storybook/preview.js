import prettier from 'prettier/standalone';
import prettierBabel from 'prettier/parser-babel';
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
      date: /Date$/,
    },
  },
  docs: {
    transformSource: input =>
      prettier.format(input, {
        parser: 'babel',
        plugins: [prettierBabel],
      }),
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
      order: ['Documentation', ['Intro'], 'Scheme', ['Colors', 'Fonts', 'Sizes', 'Text'], 'Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages', 'Layout'],
    },
  },
  rtlDirection: {
    // Collection to set as RTL (You can add language or with add country code specifically)
    autoLocales: ["ar", "ar-OM", "pa-PK"],
    reload: true,
  },
}
