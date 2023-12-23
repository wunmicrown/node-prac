"use strict"
require('dotenv').config();
const app=express();
const Port=process.env.port||5000;
const server=http.createServer(app);
// app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    return res.status(200).json({message: 'Hello!'})
});
