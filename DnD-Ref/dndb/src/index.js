import mongoose from 'mongoose';
import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

import { Classes, Races, Backgrounds } from './schemas/schemas';

main().catch((err) => console.log(err));

async function main(){
	await mongoose.connect('mongodb://localhost:27017/dnd5e');
}

const port = 5000;

// Middlewares
app.use(express.json());

app.get('/classes', async (req, res) =>{
    const db_classes = await Classes.find({});
    
    res.json({
        success:true,
        db_classes,
    });
});

app.get('/races', async (req, res) =>{
    const db_races = await Races.find({});
    
    res.json({
        success:true,
        db_races,
    });
});

app.get('/bgs', async (req, res) =>{
    const db_backgrounds = await Backgrounds.find({});
    
    res.json({
        success:true,
        db_backgrounds,
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});