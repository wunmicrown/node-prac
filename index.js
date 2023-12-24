"use strict";
require('dotenv').config();
const http = require('http');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000; // Use PORT instead of port
