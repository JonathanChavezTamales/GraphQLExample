import { resolvers } from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
    type Query{
        hello: String
        greet(name: String!): String
        tasks: [Task]
        task(_id: ID!): Task
    }

    type Mutation{
        createTask(input: TaskInput): Task
    }

    type Task{
        _id: ID
        title: String
        done: Boolean
    }

    input TaskInput{
        title: String!
        done: Boolean!
    }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
