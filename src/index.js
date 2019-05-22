import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();

//MIDDLEWARE
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema
  })
);

//ROUTES
app.get("/", (req, res) => {
  res.json({
    msg: "HELLO"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
