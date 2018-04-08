const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')

const { Language, Framework, languages, frameworks } = require('./database')

const typeDefs = `
  type Query {
    languages: [Language]
    getLanguage(id: ID!): Language
  }

  type Language {
    id: ID!
    name: String!
    frameworksById: [ID]
    frameworks: [Framework]
  }
  
  type Framework {
    id: ID!
    name: String
    similarById: [ID!]
  }
`

const delay = () => new Promise(res => {
  setTimeout(() => {
    res(true)
  }, 1000)
})

const resolvers = {
  Query: {
    languages: async () => {
      await delay()
      return languages
    },

    getLanguage: async (_, { id }) => {
      // await delay() 
      const language = languages.find(x => x.id === parseInt(id))
      return language
    },
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const app = express()
app.use(cors())

// actual graphql endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

// use graphiql as well
app.use('/graphiql', graphiqlExpress({ endpointURL: 'graphql' }))

app.listen(5000, () => 'Listening on port 5000')
