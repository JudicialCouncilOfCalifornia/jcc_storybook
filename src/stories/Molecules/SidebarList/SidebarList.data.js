
const date_one = {
  heading: "Date Issued",
  date_info: 'January 1, 2024',
  attributes: [],
}

const date_two = {
  heading: "Questions and Answers",
  date_info: 'March 20, 2024 - September 7, 2024',
  text: 'Questions regarding this RFP must be directed to solicitations@jud.ca.gov and must be received no later than September 7, 2022 by 3:00 p.m. Pacific Time',
  attributes: [],
}

const date_three = {
  heading: "Pre Conference",
  date_info: 'May 23, 2024',
  attributes: [],
}

const primary_info = {
  heading: "How to Submit",
  text: '<p>The Judicial Council will only accept Proposals in an electronic format. Consultants must submit their Proposals with all required contents in two parts: the Consultant’s Statement of Qualifications (“SOQ”) and the Consultant’s Cost Proposal (“Cost Proposal”). SOQ and Cost Proposal files must be emailed no more than three (3) days in advance of the proposal due date to the following emails:</p>',
  attributes: [],
  links: [
    {
      title: 'Example link',
      url: '#',
    },
    {
      title: 'Example link that has a long title',
      url: '#',
    }
  ],
}

const secondary_info_one = {
  brow: "Submit via Mail",
  heading: "1234 Main Street Hometown, CA 94551",
  text: '<p>Allow 7 days for USPS mail delivery</p>',
  attributes: [],
}

const secondary_info_two = {
  brow: "Submit via Fax",
  heading: "Fax to 555-1234",
  text: '<p>Please include a cover letter.</p>',
  attributes: [],
}

const secondary_info_three = {
  brow: "Submit via Another Site",
  text: '<p>This is just added as an example for viewing a link on a secondary style sidebar list item.</p>',
  attributes: [],
  links: [
    {
      title: 'Example link',
      url: '#',
    }
  ],
}

export default {
  default: {
    variant: "default",
    heading: 'Important dates',
    data: [
      date_one,
      date_two,
      date_three,
    ],
  },
  primary: {
    variant: "primary",
    heading: 'This heading should not display',
    data: [
      primary_info,
    ],
  },
  secondary: {
    variant: "secondary",
    heading: 'This heading should not display',
    data: [
      secondary_info_one,
      secondary_info_two,
      secondary_info_three,
    ],
  },
};
