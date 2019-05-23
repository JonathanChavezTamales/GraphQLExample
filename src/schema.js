import { resolvers } from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
    type Query{
        hello: String
        greet(name: String!): String
        tasks: [Task]
        task(_id: ID!): Task
        users: [User]
    }

    type Mutation{
        createTask(input: TaskInput): Task
        createUser(input: UserInput): User
        deleteTask(_id:ID): Task
    }

    type Task{
        _id: ID
        title: String!
        done: Boolean
    }

    type User{
        _id: ID
        firstName: String
        lastName: String
        age: Int
    }

    input TaskInput{
        title: String!
        done: Boolean = false
    }

    input UserInput{
        firstName: String!
        lastName: String
        age: Int
    }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
