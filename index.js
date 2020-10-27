import express from "express";
import "dotenv/config.js";
import "./configs/database.js";
import cors from 'cors';
import usersRoutes from "./routes/menus.js";
import path from "path";
import exphbs from "express-handlebars";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyperser from "body-parser";
import helmet from 'helmet';
import morgan from 'morgan';
import swagger from 'swagger-ui-express';
import errorRes from './helpers/errorHandler.js';

const server = express();
server.use(bodyperser.urlencoded({
  extended:true   
}));
server.use(bodyperser.json());
server.use(cors());

server.use(express.json());
server.use(usersRoutes);
server.use(helmet());
server.use(morgan('dev'));
server.use((req, res) => {
  errorRes(res, 404, 'Route not found');
});
server.listen(
  process.env.PORT,
  console.log(`Our is listening on port ${process.env.PORT}`)
  
); 

