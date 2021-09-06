const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const { Classes } = require('./schemas/schemas');
const { Races } = require('./schemas/schemas');
const { Backgrounds } = require('./schemas/schemas');


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