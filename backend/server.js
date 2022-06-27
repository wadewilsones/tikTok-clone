import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import tikTokVideo from './dbModel.js';
import cors from 'cors'

//import dummy data
import Data from "./data.js";

// app config
const app = express();
const port =  process.env.PORT || 9000;

//Midlewares

app.use(express.json()); // allows to post and get json response
app.use(cors())
//DB config

const dbURL = process.env.DB; 
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology:true
});

// Routes
app.get('/',  (req,res) => {
    res.status(200).send('Hello world')
})

app.get("/v1/posts", (req,res) => {
    res.status(200).send(Data)
})

app.post("/v2/posts", (req, res) => {
    const dbVideos = req.body;
    tikTokVideo.create(dbVideos, (err, data)=>{
        if(err){
            req.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.get('/v2/posts', (req,res) => {
    tikTokVideo.find((err, data)=>{ // to retrieve everything from DB
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data)
        }
    }) 
})


// Start server

app.listen(port, () => {
    console.log('Listening in 9000')
})