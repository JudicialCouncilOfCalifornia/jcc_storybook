// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    variant: "default",
    ellipses: {
      previous: false,
      next: true,
    },
    items: {
      current: '3',
      previous: {
        href: '#',
        text: '‹ Prev',
      },
      pages: {
        1: {
          href: '#',
        },
        2: {
          href: '#',
        },
        3: {
          href: '#',
        },
        4: {
          href: '#',
        },
        5: {
          href: '#',
        },
      },
      next: {
        href: '#',
        text: 'Next ›',
      },
      attributes: new drupalAttribute(),
    },
    attributes: new drupalAttribute()
  },
  full_pager: {
    variant: "full_pager",
    ellipses: {
      previos: false,
      next: true,
    },
    items: {
      current: '3',
      first: {
        href: '#',
        text: '« First',
      },
      previous: {
        href: '#',
        text: '‹ Prev',
      },
      pages: {
        1: {
          href: '#',
        },
        2: {
          href: '#',
        },
        3: {
          href: '#',
        },
        4: {
          href: '#',
        },
        5: {
          href: '#',
        },
      },
      next: {
        href: '#',
        text: 'Next ›',
      },
      last: {
        href: '#',
        text: 'Last »',
      },
      attributes: new drupalAttribute(),
    },
    ellipses: {
      next: true,
    },
    attributes: new drupalAttribute()
  },
  mini_pager: {
    variant: "mini_pager",
    items: {
      current: '3',
      first: [],
      previous: {
        href: '#',
        text: '‹',
      },
      pages: {
        3: {
          href: '#',
        }
      },
      next: {
        href: '#',
        text: '›',
      },
      last: [],
      attributes: new drupalAttribute(),
    },
    attributes: new drupalAttribute()
  }
}
