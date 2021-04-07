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


