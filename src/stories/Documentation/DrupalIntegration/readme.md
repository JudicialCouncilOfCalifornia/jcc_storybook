# Drupal Integration

## Installation
This Storybook instance lives inside a Drupal theme. To use it on your Drupal project you should install it, then create a sub-theme and define this as it's base theme.

Any code samples assume:
  - base theme lives at: `themes/contrib/jcc_storybook/`
  - your sub theme lives at `themes/custom/your_theme/`

Install with composer:
`composer require judicialcouncil/jcc_storybook`

*Note: this may change to an official drupal package in the future.*

Requirements:

  - `drupal/composer`: Allows our themes to define namespaces for template paths.

## Sub Theme Development

This document assumes you're familiar with Drupal theme development and will describe only the specifics of interacting with this component library as a base theme.

### Including Components From The Base Theme

You can develop your sub theme in any way you wish. All you need to include are a few lines in your `*.info.yml` file.

```
...
base theme: jcc_storybook
...

components:
  namespaces:
    atoms: ../../contrib/jcc_storybook/src/stories/Atoms
    molecules: ../../contrib/jcc_storybook/src/stories/Molecules
    organisms: ../../contrib/jcc_storybook/src/stories/Organisms
```

This sets the base theme and the component namespaces so you can access them in your sub theme templates.

### Drupal Libraries

This project exports CSS and JS library files for each Component. Any component JS is written in plain javascript for Storybook, and wrapped at build time to be compatible with Drupal "behaviors". These are simple UI interactivity behaviors. Any more complex requirements should be handled on the Drupal side.

The Base theme automatically generates library entries for each component that are available at `jcc_storybook/[ComponentName]`. So you can include libraries any way you normally would in your theme.

i.e.: `{{ attach_library("jcc_storybook/Card") }}`

### Using Components

The component library in the base theme aims to provide many standard templates to solve your theming needs. Some items may work for you "off the shelf", others may be "composed" into any arrangement of components to suit your needs.

We're simply trying to map our Drupal content architecture to the inputs of the various components in the library.

Here's an example of how you might use a Paragraph (Drupal content entity) as a "Hero", with the Hero component.

Your `my_theme/templates/paragraphs/paragraph--hero.html.twig` file:

```
{{ attach_library("jcc_storybook/Hero") }}
{{ attach_library("jcc_storybook/Card") }}
{{ attach_library("jcc_storybook/Button") }}

{% include "@molecules/Hero/Hero.twig" with {
  variant: 'content-bg',
  content_justify: 'left',
  bg_tint: 'accent-warm-dark-xx',
  background_image_url: 'https://source.unsplash.com/random/900×700/?building',
  card_data: {
    variant: "default",
    first_component: true,
    media: false,
    heading: paragraph.field_heading.value,
    text: content.field_lead,
    button_data: {
      variant: "primary",
      label: paragraph.field_link.title,
      href: paragraph.field_link.uri,
    }
  }
} %}
```

You can see we `attach_library` for multiple components. This is because the "Hero" is composed of additional sub components, namely "Card" which has the additional sub component "Button". Keep this in mind when composing your Drupal templates.

The Hero example only requires you to include a single component template `@molecules/Hero/Hero.twig` which will include it's own sub components.

You can compose your own complex templates from multiple smaller components available in the Component Library, but we've tried to provide a fairly complete collection of ready to use "Organisms" to handle many types of sections created with Drupal Paragraphs, or Block level entities.

#### Content Mapping

In your `include ... with` you simply need to copy the data structure from the Component example in Storybook and map your actual Drupal data fields as values. It's up to you how much control you want to build in to the Drupal side for things like "variant" options or things like `bg_tint` in the Hero example. You can always hard code some values in your template, or omit them and rely on the default set in the Component.

#### Attributes

Drupal provides an `attributes` object to assist with managing attributes.The story book components do not use this and require specific data values to be set to perform their functions. If any attribute values are required from the attributes object, collect them from the object and pass them to the component as required. As of Drupal 8.3, there is a function to clear the attributes object, if you find the need to do so.

`attributes: create_attribute()`
