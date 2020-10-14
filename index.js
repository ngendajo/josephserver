import express from "express";
import "dotenv/config.js";
import "./configs/database.js";
import usersRoutes from "./routes/menus.js";

const server = express();
server.use(express.json());
server.use(usersRoutes);

server.listen(
  process.env.PORT,
  console.log(`Our is listening on port ${process.env.PORT}`)
); 
