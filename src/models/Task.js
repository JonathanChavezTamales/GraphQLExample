import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  done: Boolean
});

export default model("Task", taskSchema);
