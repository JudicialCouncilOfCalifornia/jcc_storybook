import logo from "../Atoms/SiteBranding/Council-Logo.svg";

// Default data for GlobalBranding component
export let global_branding_data = {
  text: "Judicial Branch of California",
  destination: "https://courts.ca.gov",
};

// Default data for SiteBranding component
export let site_branding_data = {
  logo: logo,
  label: "California Courts",
  sub_label: "Language Access",
  url: "/",
};

// Default data for SecondaryNav links in Hat component
export let hat_secondary_nav_links_data = [
  {
    text: "Supreme Court",
    url: "#",
    is_current: false,
  },
  {
    text: "Courts of Appeal",
    url: "#",
    is_current: false,
  },
  {
    text: "Superior Courts",
    url: "#",
    is_current: false,
  },
  {
    text: "Judicial Council",
    url: "#",
    is_current: false,
  },
];

// Default data for SecondaryNav links in Shoe component
export let shoe_secondary_nav_links_data = hat_secondary_nav_links_data;

// Default data for HeaderSearch form component
let form = `
<form action='/search' class='header-search__form' role='search'>
  <label class='sr-only' for='header-search'>Search</label>
  <input id='header-search' type='search' name='search' placeholder='Search' />
  <button class='header-search__icon' type='submit'>
  <div class="icon-wrapper icon-wrapper--fa-search">
	<svg class="icon" aria-labelledby=""><use xlink:href="icons.svg#fa-search"></use></svg><span class='sr-only'>Search</span>
  </div>
  </button>
</form>
`;
export let header_search_form_data = form;
export let mobile_search_form_data = form;

// Default data for SecondaryNav sublinks list in Header.
export let default_secondary_links_data = [
  {
    text: "Careers",
    url: "#",
    is_current: true,
  },
  {
    text: "Accessibility",
    url: "#",
    is_current: false,
  },
  {
    text: "Contact Us",
    url: "#",
    is_current: false,
  },
];

// Default data for SecondaryNav sublinks list with more links.
export let default_secondary_links_long_data = [
  {
    text: "Questions?",
    url: "#",
    is_current: true,
  },
  {
    text: "Complaints",
    url: "#",
    is_current: false,
  },
  {
    text: "Careers",
    url: "#",
    is_current: false,
  },
  {
    text: "Accessibility",
    url: "#",
    is_current: false,
  },
  {
    text: "Newsroom",
    url: "#",
    is_current: false,
  },
  {
    text: "Contact Us",
    url: "#",
    is_current: false,
  },
];

// Default data for Breadcrumb component links.
export let breadcrumb_links_data = [
  {
    url: '/',
    text: 'Home',
  },
  {
    url: '/',
    text: 'FIrst Level Parent',
  },
  {
    url: '/',
    text: 'Second Level Parent',
  },
  {
    url: false,
    text: 'Current page',
  },
]

// Default data for Primary Navigation sublinks list in Header
export let default_primary_nav_sublinks_small_data = [
  {
    text: "Navigation link 1",
    url: "#",
  },
];

export let default_primary_nav_sublinks_data = [
  {
    text: "Navigation link 1",
    url: "#",
    is_overview_link: true,
  },
  {
    text: "Navigation link 2",
    url: "#",
  },
  {
    text: "Navigation link 3",
    url: "#",
  }
];

export let default_primary_nav_sublinks_more_data = [
  {
    text: "Navigation link 1",
    url: "#",
    is_overview_link: true,
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
  }
];

export let default_primary_nav_sublinks_mega_data = [
  {
    text: "Navigation link 1",
    url: "#",
    is_overview_link: true,
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
];

// Default data for PrimaryNav main level links in header.
// Also includes sublinks from above.
export let default_primary_nav_links_data = [
  {
    text: "Language Access Information",
    is_current: true,
    id: "nav-section-one",
    url: "#",
    links: default_primary_nav_sublinks_data,
    section_link: {
      text: "Navigation link",
      url: "#",
    },
  },
  {
    text: "Court Interpreters",
    links: default_primary_nav_sublinks_mega_data,
    section_link: {
      text: "Navigation link",
      url: "#",
    },
  },
  {
    text: "Become a Court Intrepreter",
    section_link: {
      text: "Navigation link",
      url: "#",
    },
  },
  {
    text: "About",
    links: default_primary_nav_sublinks_more_data,
    section_link: {
      text: "Navigation link",
      url: "#",
    },
  },
];

// Long version of PrimaryNav links for testing. Used in FlatNav.
export let default_primary_nav_links_long_data = [
  {
    text: "Judicial Council",
    is_current: true,
    id: "nav-section-one",
    url: "#",
    links: default_primary_nav_sublinks_data,
    section_link: {
      text: "Navigation link",
      url: "#",
    },
  },
  {
    text: "Self-Help Guide",
    links: default_primary_nav_sublinks_more_data,
    section_link: {
      text: "Navigation link",
      url: "#",
    },
  },
  {
    text: "Language Access",
    links: default_primary_nav_sublinks_data,
    section_link: {
      text: "Navigation link",
      url: "#",
    },
  },
  {
    text: "Supreme Court",
    links: default_primary_nav_sublinks_more_data,
    section_link: {
      text: "Navigation link",
      url: "#",
    },
  },
  {
    text: "Courts of Appeal",
    links: default_primary_nav_sublinks_data,
    section_link: {
      text: "Navigation link",
      url: "#",
    },
  },
  {
    text: "Superior Courts",
    links: default_primary_nav_sublinks_small_data,
    section_link: {
      text: "Navigation link",
      url: "#",
    },
  },
];

export let default_mobile_nav_primary_nav_links_data = default_primary_nav_links_data;

export let default_mobile_nav_secondary_nav_links_data = default_secondary_links_data;

//
// Default data for Mobile output of primary nav. NOT FOR MobileNav component.
// For use in PrimaryNav component with mobile display enabled.
export let default_primary_nav_mobile_links_data = default_primary_nav_links_data;

//
// Default data for the footer about section.
export let footer_about_label_data = "About the Judicial Council";

export let footer_about_content_data = `The Judicial Council is the policymaking
 body of the California courts, the largest court system in the nation. 
 The council is responsible for ensuring the consistent, independent, 
 impartial, and accessible administration of justice.`;

 export let footer_about_link_data = {
  variant: "text",
  size: "normal",
  label: "Read about the Judical Council",
  href: "#",
  aria_label: "Read about the Judical Council",
};

export let footer_about_data = {
  label: footer_about_label_data,
  content: footer_about_content_data,
  link: footer_about_link_data,
};

//
// SocialMediaLinks data
export let default_social_media_links_data = [
  {
    text: "LinkedIn",
    url: "#",
    icon: "fa-linkedin",
  },
  {
    text: "Facebook",
    url: "#",
    icon: "fa-facebook",
  },
  {
    text: "Youtube",
    url: "#",
    icon: "fa-youtube",
  },
  {
    text: "Twitter",
    url: "#",
    icon: "fa-twitter",
  },
];