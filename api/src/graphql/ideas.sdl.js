export const schema = gql`
  type Idea {
    id: Int!
    opps: Boolean!
    partNum: String!
    product: String!
    system: String!
    vendor: String!
    title: String!
    body: String!
    value: Int!
    author: String!
    active: Boolean!
    readyInMonth: Int!
    readyInYear: Int!
    createdAt: DateTime!
  }

  type Query {
    ideas: [Idea!]!
    idea(id: Int!): Idea
  }

  input CreateIdeaInput {
    opps: Boolean!
    partNum: String!
    product: String!
    system: String!
    vendor: String!
    title: String!
    body: String!
    value: Int!
    author: String!
    active: Boolean!
    readyInMonth: Int!
    readyInYear: Int!
  }

  input UpdateIdeaInput {
    opps: Boolean
    partNum: String
    product: String
    system: String
    vendor: String
    title: String
    body: String
    value: Int
    author: String
    active: Boolean
    readyInMonth: Int
    readyInYear: Int
  }

  type Mutation {
    createIdea(input: CreateIdeaInput!): Idea!
    updateIdea(id: Int!, input: UpdateIdeaInput!): Idea!
    deleteIdea(id: Int!): Idea!
  }
`
