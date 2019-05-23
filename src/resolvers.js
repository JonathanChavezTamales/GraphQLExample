import { tasks } from "./tasksInMemory";
import User from "./models/User";
import Task from "./models/Task";

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
    },
    users: async () => {
      return await User.find();
    }
  },

  Mutation: {
    createTask: (_, { input }) => {
      const newTask = Task(input);
      newTask.save();
      return newTask;
    },
    createUser: (_, { input }) => {
      const newUser = User(input);
      newUser.save();
      return newUser;
    },
    deleteTask: async (_, args) => {
      return await Task.findByIdAndDelete(args._id);
    }
  }
};
