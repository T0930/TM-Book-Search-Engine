const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
      bookId: ID!
      image: String
      link: String
      title: String!
      description: String!
      authors: [String]
  }
  type Auth {
      token: ID!
      user: User
  }
  input BookInput{
      bookId: String
      authors: [String]
      description: String
      title: String
      images: String
      link: String
  }
  type Query {
      me: User
  }
  type Mutation {
      login(email: String!, password: String!, password: String!): Auth
      createUser(username: String!, email: String!, password: String!): Auth
      saveBook(book: BookInput!): User
      removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;