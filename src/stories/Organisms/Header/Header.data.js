// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute';
import logo from '../../Atoms/SiteBranding/Council-Logo.svg';

export default {
  default: {
    site_branding_data: {
      variant: "default",
      logo: logo,
      label: "California Courts",
      sub_label: "Language Access",
      attributes: new drupalAttribute(),
    },
    primary_nav_data: {
      header_search_data: {
        variant: "default",
        form: "<form action='/search' class='header-search__form' role='search'><label class='sr-only' for='header-search'>Search</label><input id='header-search' type='search' name='search' placeholder='Search' /><button class='header-search__icon' type='submit'><span class='header-search__search-line'></span><span class='header-search__search-circle'></span><span class='sr-only'>Search</span></button></form>",
        attributes: new drupalAttribute()
      },
      header_search_data_duplicate: {
        variant: "no-toggle",
        form: "<form action='/search2' class='header-search__form' role='search'><label class='sr-only' for='header-search'>Search</label><input id='header-search' type='search' name='search' placeholder='Search' /><button class='header-search__icon' type='submit'><span class='header-search__search-line'></span><span class='header-search__search-circle'></span><span class='sr-only'>Search</span></button></form>",
        attributes: new drupalAttribute()
      },
      links: [
        {
          text: "Simple Link",
          is_current: true,
          id: "nav-section-one",
          url: "#",
          section_link: {
            text: "Navigation link",
            url: "#",
          },
        },
        {
          text: "Up To Seven",
          links: [
            {
              text: "Navigation link 1",
              url: "#",
            },
            {
              text: "Navigation link 2",
              url: "#",
            },
            {
              text: "Navigation link 3",
              url: "#",
            },
            {
              text: "Navigation link 4",
              url: "#",
            },
            {
              text: "Navigation link 5",
              url: "#",
            },
            {
              text: "Navigation link 6",
              url: "#",
            },
            {
              text: "Navigation link 7",
              url: "#",
            },
          ],
          section_link: {
            text: "Navigation link",
            url: "#",
          },
        },
        {
          text: "More Than Seven",
          links: [
            {
              text: "Navigation link 1",
              url: "#",
            },
            {
              text: "Navigation link 2",
              url: "#",
            },
            {
              text: "Navigation link 3",
              url: "#",
            },
            {
              text: "Navigation link 4",
              url: "#",
            },
            {
              text: "Navigation link 5",
              url: "#",
            },
            {
              text: "Navigation link 6",
              url: "#",
            },
            {
              text: "Navigation link 7",
              url: "#",
            },
            {
              text: "Navigation link 8",
              url: "#",
            },
            {
              text: "Navigation link 9",
              url: "#",
              links: [
                {
                  text: "Navigation link 5.1",
                  url: "#",
                },
                {
                  text: "Navigation link 5.2",
                  url: "#",
                },
              ],
            },
          ],
          section_link: {
            text: "Navigation link",
            url: "#",
          },
        },
        {
          text: "Lots More",
          links: [
            {
              text: "Navigation link 1",
              url: "#",
            },
            {
              text: "Navigation link 2",
              url: "#",
            },
            {
              text: "Navigation link 3",
              url: "#",
            },
            {
              text: "Navigation link 4",
              url: "#",
            },
            {
              text: "Navigation link 5",
              url: "#",
            },
            {
              text: "Navigation link 6",
              url: "#",
            },
            {
              text: "Navigation link 7",
              url: "#",
            },
            {
              text: "Navigation link 8",
              url: "#",
            },
            {
              text: "Navigation link 9",
              url: "#",
            },
            {
              text: "Navigation link 10",
              url: "#",
            },
            {
              text: "Navigation link 11",
              url: "#",
            },
            {
              text: "Navigation link 12",
              url: "#",
            },
            {
              text: "Navigation link 13",
              url: "#",
            },
            {
              text: "Navigation link 14",
              url: "#",
            },
            {
              text: "Navigation link 15",
              url: "#",
            },
            {
              text: "Navigation link 16",
              url: "#",
            },
            {
              text: "Navigation link 17",
              url: "#",
            },
            {
              text: "Navigation link 18",
              url: "#",
            },
          ],
          section_link: {
            text: "Navigation link",
            url: "#",
          },
        },
      ],
      attributes: new drupalAttribute(),
    },
    secondary_nav_data: {
      variant: "with-divider",
      overflowing_variant: "hidden",
      links: [
        {
          text: "Search for an Interpreter",
          url: "#",
          is_current: false,
        },
        {
          text: "Questions?",
          url: "#",
          is_current: false,
        },
        {
          text: "Complaints",
          url: "#",
          is_current: false,
        },
        {
          text: "Contact Us",
          url: "#",
          is_current: false,
        },
      ],
      attributes: new drupalAttribute()
    },
    attributes: new drupalAttribute()
  },
}
