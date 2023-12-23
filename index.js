"use strict"
require('dotenv').config();
const app=express();
const Port=process.env.port||4500;
const server=http.createServer(app);