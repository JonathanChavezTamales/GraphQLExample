import { tasks } from "./tasksInMemory";

export const resolvers = {
  Query: {
    hello: () => {
      return "Hello world";
    },
    greet: (root, args) => {
      return `hola ${args.name}`;
    },
    tasks: () => {
      return tasks;
    },
    task: (root, args) => {
      let task = {};
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i]._id == args._id) task = tasks[i];
      }
      return task;
    }
  },

  Mutation: {
    createTask: (_, { input }) => {
      input._id = tasks.length;
      tasks.push(input);
      return input;
    }
  }
};
