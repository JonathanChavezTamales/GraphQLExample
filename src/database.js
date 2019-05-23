import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect("mongodb://localhost/mongodbgraphql", {
      useNewUrlParser: true
    });
    console.log("<<< Connected");
  } catch (e) {
    console.log("<<< Error");
    console.log(e);
  }
}
