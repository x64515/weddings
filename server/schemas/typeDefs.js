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
    rsvp: Float
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
    meal(_id: ID!): Meal
    meals(_id: ID!): [Meal]
    user: User
    wedding(_id: ID!): Wedding
    attendants: [Attendant]
  }

  type Mutation{
    addMeal(name: String!): Meal
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addAttendant(firstName: String!, lastName: String!): Attendant
    updateUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addWedding(weddingDate: String!,bride: String!,groom: String, location: String): Wedding
  }
`;

module.exports = typeDefs;
