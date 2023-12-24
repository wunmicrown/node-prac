"use strict";
require('dotenv').config();
const http = require('http');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
