# JCC Storybook!

JCC Storybook is a component library and a base theme for Drupal built by the Judicial Council of California.

This library uses algorithmic/intrinsic layout techniques and 13 "[Layout Primitives](https://every-layout.dev/rudiments/)", instead of media queries and breakpoints, to compose complex layouts. It allows content to expand or contract according to its needs, and still adapts to infinite screen sizes.

Layout Primitives are composed into Atomic Components, that are used to build templates and pages.

For more details about the methodologies used in this component library see: https://judicialcouncilofcalifornia.github.io/jcc_storybook/?path=/docs/documentation-intro--default


External References:

  - https://every-layout.dev/rudiments/
  - https://aneventapart.com/news/post/designing-intrinsic-layouts-aea-video
  - https://atomicdesign.bradfrost.com/table-of-contents/


## Installation

### Requirements

  1. [Components module](https://drupal.org/project/components)

### Use
  - Install with composer to your drupal project.
    - `composer require judicialcouncil/jcc_storybook`
  - Enable the base theme in drupal via the UI or with drush:
    - `drush en jcc_storybook`
  - Create a new theme with the following line in your `info.yml` file:  `base theme: jcc_storybook`
  - Include twig templates into your theme via `@atoms/button.twig`, etc.  COMING SOON

## Pattern Library Development
  **For development of the pattern library only. Not required to use this as a base theme.**

### Requirements

  - Node 18 to run preview site
  - Node 16 to export scheme & lib for production use

### Installation

  - Clone this repo and cd to the directory
  - `nvm use`: to use the specified version of Node. (If using nvm to manage node. You may need to install the appropriate version.)
  - `npm install`: to install the required development packages.
  - `npm run storybook`: to start storybook. It will open a new browser window.

### Creating Components

There is a package installed to help make development easier, by generating component scaffolds for you. The package is called [Plop JS](https://plopjs.com). You don't need to learn or configure it.  Just create new components by running it and following the prompts.

  - `npm run plop`
  - Enter a component name. i.e. `Card`
  - Select a component type. i.e. `Molecules`

The new component will appear at `src/stories/Molecules/Card`

For more information about how to develop components for this library, see the "Documentation" section on the sidebar of Storybook.

## Icons

Must use Node 16.

  - Update `src/assets/icons` directory.
  - Update `src/assest/icons.json`.
  - `npm run sprite`: Builds icons.svg sprite.

## Exporting Scheme & Lib and releasing for Production

Must use Node 16.

  - `npm run scheme`: Generates theme scheme.
  - `npm run lib`: Processes CSS and JavaScript for production use.
  - Update `History.md` to specify production version for Composer use.
  - Tag the release with `git tag X.XX.XX` which should auto-deploy the artifact to https://packagist.org/packages/judicialcouncil/jcc_storybook. You might need to `git push origin tag X.XX.XX` if the artifact does not appear.

## Projects using JCC Storybook

  - Courts
  - Appellate
  - Language Access
  - Language Toolkit
  - Storefront

## Links
* Project Page:   https://judicialcouncilofcalifornia.github.io/jcc_storybook/master/docs/?path=/docs/documentation-intro--default
* Documentation:  https://judicialcouncilofcalifornia.github.io/jcc_storybook/master/docs/?path=/docs/documentation-intro--default
* Support:        https://www.courts.ca.gov/policyadmin-jc.htm

## License
http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
