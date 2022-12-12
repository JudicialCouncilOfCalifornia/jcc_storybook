# JCC Storybook!

JCC Storybook is a base theme for Drupal. It provides a pattern library  built by Judicial Council of California.

This theme uses algorithmic/intrinsic layout techniques and 13 "layout primitives", instead of media queries and breakpoints, to compose complex layouts. Rather than fighting the way browsers naturally work in order to force content to a static layout, it allows content to expand or contract according to its needs, and still adapts to infinite screen sizes.

It employs a modular scale for sizing and spacing for graceful visual rhythm, and strategic use of CSS variables to allow for "Molecules" or "Organisms" to affect the look of nested templates. This allows the whole look and feel to be changed by simply updating some color, and scale variables.

Components may achieve multiple distinct layouts or styles by simply changing a "variant class" on the parent template.

References: 

  - https://every-layout.dev
  - https://aneventapart.com/news/post/designing-intrinsic-layouts-aea-video

## Installation

### Requirements

  1. Node 16+
  2. [Components module](https://drupal.org/project/components)

  - Install with composer to your drupal project.
    - `composer require judicial-council-of-california/jcc_storybook`
  - Enable the base theme in drupal with via the UI or with drush:
    - `drush en jcc_storybook`

## Development


## Projects using JCC Storybook


## Links
* Project Page:   
* Documentation:  
* Support:        https://www.courts.ca.gov/policyadmin-jc.htm

## License
http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
