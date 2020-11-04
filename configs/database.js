import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://ngendajo:ngendajo@cluster0.jctao.mongodb.net/josephdb?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to the database")); 