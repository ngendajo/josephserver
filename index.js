import express from "express";
import "dotenv/config.js";
import "./configs/database.js";
import cors from 'cors';
import usersRoutes from "./routes/menus.js";
import bodyperser from "body-parser";
import helmet from 'helmet';
import morgan from 'morgan';
import errorRes from './helpers/errorHandler.js';
import path from 'path';

const server = express();
const PORT=process.env.PORT||8080
server.use(bodyperser.urlencoded({
  extended:true   
}));
server.use(bodyperser.json());
server.use(cors());

server.use(express.json());
server.use(usersRoutes);
server.use('/comments', usersRoutes);
server.use(helmet());
server.use(morgan('dev'));

server.use((req, res) => {
  errorRes(res, 404, 'Route not found');
});
server.listen(
  PORT,
  console.log(`Our is listening on port ${PORT}`)
  
); 

