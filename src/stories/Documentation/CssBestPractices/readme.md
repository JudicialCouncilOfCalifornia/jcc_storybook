<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# CSS Best Practices

## Cascade

One golden rule of CSS is that it's a cascade. This means that the order in which you apply styles matters. The last style applied will override all previous styles. This is why it's important to start with the layout and work your way down to the details.

The cascade should be your north star in any CSS project. It's the guiding principle that will help you avoid specificity wars and other CSS pitfalls. It's why we can write such flexible components with very minimal and maintainable code.

Always avoid creating CSS rules that are an exception or override of some other rule. If you're overriding CSS from earlier in the cascade, take that as a cue that you may be able to improve the earlier code to take better advantage of the cascade. Burn this into your brain with every line of CSS you write.


## Logical Properties

The CSS Logical Properties allow authors to write code that adapts to the physical direction of the user interface, rather than the physical direction of the document.

https://www.w3.org/TR/css-logical-1/

If we're going to support things like RTL languages and even flex directions, we need to use logical properties and values. This means using `inline/block` and `start/end` instead of `top, right, bottom, left`. This is a good resource for learning more about logical properties and values: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties

Examples:

 - `margin-block-start:` instead of `margin-top:`
 - `padding-inline:` instead of `padding-left:` and `padding-right:`
 - `border-inline-start:` instead of `border-left:`
 - `border-block-end:` instead of `border-bottom:`

Etc.

## Margins and Padding

Padding is an *intrinsic* property. It's space within the element, and it's part of the element's size. Therefore it makes sense to apply padding directly to the target element.

Margins are an *extrinsic* property. They're space outside the element and concerned with their relationship to other elements. Therefore it makes sense to apply margins **through** the parent element. This provides the context for the relationship between the child elements.

i.e.

```html
<div class="stack">
  <button>One</button>
  <button>Two</button>
</div>
```

```css
.stack {
  display: flex;
  flex-direction: column;
}

/* Apply margins to the relationship. */
.stack > * + * {
  margin-block-start: 1rem;
}

/* Apply padding to the element. */
button {
  padding-block: 1rem;
  padding-inline: 2rem;
}
```

If you're not familiar with the css selectors used in the example above, here's a good resource: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

The `>` selector is used to select direct children of a parent element. The `+` selector is used to select the next sibling of an element. The `*` selector is used to select all elements. The `+` and `*` selectors are combined to select all adjacent siblings of an element. (Adjacent siblings are siblings that come directly after each other.)

The button styles are pretty obvious. I hope you recognize the Logical Properties.

The margins are a little more complex. The `stack` class is used to create a vertical stack of elements. The margins are applied to the direct children of the stack. But specifically adjacent siblings using `+ *`. This means margin will be applied to the "top" of all the children except the first one, because it is not an "adjacent sibling" to (coming after) anything.

This approach is very flexible and will never result in additional margin being applied to the bottom of the stack. It's also very easy to add additional elements to the stack without having to worry about the margins.

Even better, it doesn't violate the no *exceptions* rule like applying margins to all elements *except* the last one would. This is a common mistake that leads to specificity wars and other CSS pitfalls.


## BEM Style Class Names

BEM stands for Block, Element, Modifier. It's a naming convention for CSS classes that helps keep CSS organized and maintainable.

The syntax is as follows:

```css
.block {}

.block__element {}

.block--modifier {}

.block__element--modifier {}

.different-block__different-element--different-modifier {}
```

Two part names are separated by a single hyphen like `.block-one` or `__element-one`.

Elements are prefixed with a double underscore like `__element-one`.

Modifiers are prefixed with a double hyphen like `--modifier-one`.

In our case, following "Atomic Design" principles, the `block` is the component name. The `element` is a child element of the component. The `modifier` is a variant of the component.

BEM classes can get very long if you let them, but in our concise atomic components we can keep them short and sweet. We don't need to chain multiple elements together to target nested elements.

`.block__content__button--primary` - Our buttons are a separate atom so we'd never need to target it this way.

`.card__content__heading` - Our components are small and modular so we're not going to get conflicting headings in one context, so we can just use `.card__heading` without the additional specificity.

Most of our modifiers will be applied to the top of any given component so they'll usually look like `.card--default` or `.button--secondary`.

Also, because we're building small and single purpose atomic components, and we respect the cascade, we don't need to worry about the specificity that much. We can keep our CSS selectors short.

Instead of this:

```css
.card {}

.card .card__content {}

.card .card__content .card__heading {}
```

There's only going to be one context for a card, which is defined and inherited from it's parent component, or it's variant class. So we can just do this:

```css
.card {}

.card__content {}

.card__heading {}
```

Only when we're styling a variant do we need to lead with the variant class. This is because the variant class is a legitimate and acceptable override. The rest of the styles are inherited from the base component.

```css
/* Variants */

.card--overlay {}

.card--overlay .card__heading {}
```

Make sure your base styles cover everything, and keep your variants as simple as possible. This will keep your CSS maintainable and easy to understand.


## CSS Custom Properties

CSS Custom Properties are a powerful tool for creating flexible and maintainable CSS. They allow us to create variables that can be used in any CSS property. They can be used to create a theme, or to create a flexible component.

This project has a `scheme-default.css` file that contains all the default colors, fonts, and other variables. This file is available globally. This allows us to completely change the look and feel of everything by simply changing the values in this file. We can also use these variables in our components to create flexible components.

Roughly speaking there are two types of variables in use. "Specific" variables are variables we don't change. They're used to define the look and feel of the site.

 - `--color-...` All the scheme colors.
 - `--font-...` All the scheme fonts.
 - `--background-...` All the scheme backgrounds.
 - `--s##` All the spacing variables that conform to our modular scale.
 - etc.

Then there is a handful of "General" variables that are used to create flexible componts.

 - `--background-color`
 - `--heading-color`
 - `--color`
 - `--button-bg`
 - `--button-fg`
 - `--gap`
 - etc.

These can be set at the component level to affect the child elements of the component. This allows us to create flexible components that can be used in a variety of contexts.

```css
.card {
  --background-color: var(--color-primary-dark-x);
  --heading-color: var(--color-white);
  --color: var(--color-white);
  --button-bg: transparent;
  --button-fg: var(--color-accent-warm-dark-x);
  --gap: var(--s1);
}

.card__heading {
  color: var(--heading-color);
  ...
}

/* Variants */

.card--overlay {
  --background-color: var(--color-white);
  --heading-color: var(--color-primary-dark-x);
  --color: var(--color-black);
  --button-bg: var(--color-accent-warm-dark-x);
  --button-fg: var(--color-white);
  --gap: var(--s2);
}
```

You can see that the "General" variables are set to the values of "Specific" variables. The sub elements of the component inherit these values. Then the variant overrides the "General" variables to create a new look and feel for the component.

Because the component elements are styled with the "General" Custom Property variables, we don't need to duplicate code to style each element for each variant. We can just change the values of the "general" variables at the `.block--modifier` level and the sub-elements will update automatically.

The general variables also have default values defined in the scheme css.
