import gql from "graphql-tag";

<<<<<<< HEAD
// export const QUERY_THOUGHTS = gql`
//   query thoughts($username: String) {
//     thoughts(username: $username) {
//       _id
//       thoughtText
//       createdAt
//       username
//       reactionCount
//       reactions {
//         _id
//         createdAt
//         username
//         reactionBody
//       }
//     }
//   }
// `;

// export const QUERY_THOUGHT = gql`
//   query thought($id: ID!) {
//     thought(_id: $id) {
//       _id
//       thoughtText
//       createdAt
//       username
//       reactionCount
//       reactions {
//         _id
//         createdAt
//         username
//         reactionBody
//       }
//     }
//   }
// `;

=======
>>>>>>> 702e6cb4c8c63684374e99ab836a65009f7f8763
export const QUERY_USER = gql`
  query user($_id: ID!) {
    user(_id: $_id) {
      _id
      firstName
      lastName
      email
      wedding{
        _id
        weddingDate
        bride
        groom
        location
        meals{
          _id
          name
        }
        attendants{
          _id
          firstName
        }
      }
  }
  }
}
`;

export const QUERY_WEDDING = gql`
  query wedding($_id:ID!){
    wedding(_id: $_id){
    _id
    weddingDate
    bride
    groom
    attendants{
      firstName
      lastName
      rsvp
      foodChoice
    }
    meals{
      name
    }
    }  
  }
`;

export const QUERY_MEALS = gql`
  query meals($_id:ID!){
    meals(_id: $_id){
      _id
      name
    }
  }
`;
