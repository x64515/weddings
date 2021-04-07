import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
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
            lastName
            rsvp
          }
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

<<<<<<< HEAD
// export const ADD_THOUGHT = gql`
//   mutation addThought($thoughtText: String!) {
//     addThought(thoughtText: $thoughtText) {
//       _id
//       thoughtText
//       createdAt
//       username
//       reactionCount
//       reactions {
//         _id
//       }
//     }
//   }
// `;

// export const ADD_REACTION = gql`
//   mutation addReaction($thoughtId: ID!, $reactionBody: String!) {
//     addReaction(thoughtId: $thoughtId, reactionBody: $reactionBody) {
//       _id
//       reactionCount
//       reactions {
//         _id
//         reactionBody
//         createdAt
//         username
//       }
//     }
//   }
// `;
=======
export const ADD_WEDDING = gql`
mutation addWedding($weddingDate: String!, $bride: String!, $groom: String!, $location: String!){
  addWedding(weddingDate: $weddingDate, bride: $bride, groom: $groom, location: $location){
    wedding{
      _id
      weddingDate
      bride
      groom
      location
      attendants{
        _id
        firstName
        lastName
        rsvp
      }
      meals{
        _id
        name
      }   
    }
  }
}
`;
>>>>>>> 702e6cb4c8c63684374e99ab836a65009f7f8763

export const ADD_ATTENDANT = gql`
mutation addAttendant($firstName: String!, $lastName: String!){
  addAttendant(firstName: $firstName, lastName: $lastName) {
    _id
    firstName
    lastName
  }
}`;

export const ADD_MEAL = gql`
mutation addMeal($name: String!){
  addMeal(name: $name) {
    _id
    name
  }
}`;


