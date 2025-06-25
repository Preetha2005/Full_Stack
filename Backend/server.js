import express from 'express';
import User from './model/User.js';
import connectDB from './config/db.js';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express()
connectDB();

app.use(express.urlencoded())
app.use(express.json());

app.get('/', async(req, res) => {
    const user=await User.find();
    res.json(user)
    }
)

app.post('/post', async(req, res) => {
   try {
       const newUser=new User(req.body)
       await newUser.save()
       res.json(newUser)
   }
   catch(error) {
       res.status(401).json(error )
   }
    
});

app.put('/put/:id', async(req, res) => {
    try {
        const update=await User.findByIdAndUpdate(req.params.id,req.body)
        res.json({msg:'daa updaed'})
    } catch (error) {
        res.json(error)
    }
    }
)

app.patch('/patch', (req, res) => {
    res.send('from patch');
    }
)


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
