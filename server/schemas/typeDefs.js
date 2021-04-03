const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    wedding: [Wedding]
  }

  type Meal {
    _id: ID
    name: String
  }

  type Attendant{
    _id: ID
    firstName: String
    lastName: String
    foodChoice: String
    rsvp: Number
  }

  type Wedding {
    _id: ID
    weddingDate: String
    bride: String
    groom: String
    attendants: [Attendant]
    location: String
    meals: [Meal]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    attendants: [Attendant]
    attendant(_id: ID!): Attendant
    user: User
    wedding(_id: ID!): Wedding
  }

  type Mutation{
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addAttendant(firstName: String!, lastName: String!, foodChoice: String!): Attendant
    updateUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
