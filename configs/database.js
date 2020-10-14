import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/josephdb", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to the database"));