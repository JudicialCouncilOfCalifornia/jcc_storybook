# Introduction

This component library aims to provide versatile and modular components that allow Drupal Theme developers to build complex themes in a customizable yet reliable way.

We aim to avoid exceptions and workarounds, in favor of thoughtful systemization and design.


## Layout System

This project uses a layout system for [composing](https://every-layout.dev/rudiments/composition/) complex and responsive layouts.

Each layout is "intrinsically responsive", meaning it will automatically adapt internally so content is visible and well spaced on any screen or context, without the use of @media breakpoints. It respects the space required by the content and works **with** the browser's natural behavior, rather than against it.

This approach allows for developers to create complex and dynamic layouts with a small set of reusable code. An entire layout system, 13 layout "primitives", in under 250 lines of CSS. `layout-primitives.css`

For a deep dive into the approach, *please* see the "Rudiments" at https://every-layout.dev (free to read online).


## Atomic Components

The 13 layout primitives are used to build up a library of "Atomic" Components.

Again, this gives us reusable parts that we can use to *compose* more complex components. It uses a chemistry metaphor to illustrate and guide our planning;

`Atoms` come together to form `Molecules` come together to form `Organisms`.

To learn all about Atomic Design, see Brad Frost's great book https://atomicdesign.bradfrost.com (free to read online).


## Component Variants

Component templates are designed in a way that allows the layout and styling of its composition (sub-components) to be determined by one or more variant classes on the outermost container.

For example:

  - `.card`
  - `.card--media-left`
  - `.card--overlay`

A single template containing all the sub-components for media, heading, text, button, etc., is rendered in dramatically different ways based on the modifier class. We call each different presentation of the same template a "variant".

This is achieved by thoughtful use of modern CSS, the Layout System, and Atomic Components, making everything small, modular and reusable.


## Scheme

At the `:root` of our CSS is a set of variables that captures all the key values that define our [modular scale](https://every-layout.dev/rudiments/modular-scale/), color pallette, font families and more. (`scheme-default.css`)

Components utilize these CSS variables to enable ancestor components to affect the look and feel of descendent elements. For example, the heading color of a Card might be inherited from a variable set on the Section component that contains it, or it may be overridden on the Card variant itself.

By replacing or altering the scheme CSS file to change the variable values, we can dramatically alter the look and feel of the entire component library.


## Not Sassy

This library does not have the overhead of Sass/SCSS. It uses plain old CSS. Most of the benefits of SCSS are eliminated with the use of modern CSS and Atomic components. Individual component CSS files can be very small and well structured for maximum flexibility and maintainability. Atomic Design, by it's nature, gives us component reusability.


## Drupal Integration

WIP
