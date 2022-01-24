import gql from "graphql-tag";

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      email
      wedding {
        _id
        weddingDate
        bride
        groom
        location
        meals {
          _id
          name
        }
        attendants {
          _id
          firstName
          lastName
          rsvp
        }
      }
    }
  }
`;

export const QUERY_WEDDING = gql`
  query wedding($_id: ID!) {
    wedding(_id: $_id) {
      _id
      weddingDate
      bride
      groom
      attendants {
        firstName
        lastName
        rsvp
        foodChoice
      }
      meals {
        name
      }
    }
  }
`;

export const QUERY_MEALS = gql`
  query meals($_id: ID!) {
    meals(_id: $_id) {
      _id
      name
    }
  }
`;
