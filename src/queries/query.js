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
      year
    }
  }
`;
