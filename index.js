"use strict";
require('dotenv').config();
const http = require('http');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Hello!' });



    app.post('/send-names', (req, res) => {
        const names = req.body.names || [];
    })
    console.log("Received names:", names);
    return res.status(200).json({ message: 'Names received successfully', names });

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});