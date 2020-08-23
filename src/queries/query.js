import {gql} from "@apollo/client";

export const CONFERENCES = gql`
  query GetConferences {
    conferences{
      id
      name
      slogan
      startDate
      endDate
      allSpeakers {
        name
      }
      locations {
        country {
          name
    }
  }
    }
  }
`;

export const CONFERENCE = gql`
  query getConference($id: ID!) {
    conference(id: $id) {
      id
      name
      slogan
      speakers {
        name
        image {
          url
          title
        }
        social {
          homepage
          twitter
          github
          linkedin
        }
      }
      organizers {
        name
        image {
          url
          title
        }
        social {
          homepage
          twitter
          github
          linkedin
        }
      }
      partners {
        name
        image {
          url
          title
        }
      }
      sponsors {
        name
        image {
          url
          title
        }
      }
    }
  }
`;
