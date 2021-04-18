const { buildSchema } = require("graphql")

module.exports = buildSchema(`
    type UrlEntry{
        _id: ID!
        originalUrl: String!
        shortUrl: String
        createdAt: String!
    }

   type Query {
       getUrls:[UrlEntry!]!
   }

   type Mutation {
       shortenUrl(originalUrl:String!):UrlEntry
   }

   schema {
       query: Query
       mutation: Mutation
   }
`)