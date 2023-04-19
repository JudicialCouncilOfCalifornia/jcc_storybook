<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->

# Pager

General pager element. Can be rendered in:

- Default (< Prev, page numbers, Next >)
- Full (<< First, < Prev, page numbers, Next >, Last >>)
- Mini ( < current page number > )

The twig/data setup **matches the Drupal pager element**, so no variables actually need to be passed directly in. The $variables array in drupal pager will be passed to the component in the template file and will work. So we only need to add `{% include "@molecules/Pager/Pager" %}` to the system pager template and the views mini pager template to get everything working.

The availability of first, previous, next, and last elements in the data array, naturally determine if the output will be default, full pager, or mini pager.

## Common example

The Common example variant is just an example of a typical pager with only a couple pages and starting at 1. In this case only the "Next" Link would be needed with the page number links.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--accent-color`: Color of the pager links and bg of active number.
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
    current: '7', // Current page number. This data also exists in the items array in drupal.
    ellipses: {
      previous: true,
      next: true,
    },
    items: {
      current: '7', // Current page number
      first: {
        href: '#',
        text: '« First',
      },
      previous: {
        href: '#',
        text: '‹ Prev',
      },
      next: {
        href: '#',
        text: 'Next ›',
      },
      last: {
        href: '#',
        text: 'Last »',
      },
      pages: { // Pages are keyed by page number
        3: {
          href: '#', // So this would start the pager at page 3
        },
        4: {
          href: '#',
        },
        ...
      }
    }
  ```
</details>
