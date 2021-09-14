// import modules and define variables
const express = require('express');
const mongoose = require('mongoose');
const { Classes, Races } = require('./schemas/schemas'); // , Backgrounds

const app = express();

// Middlewares
app.use(express.json());

app.get('/classes', async (req, res) =>{
    const classesFromDB = await Classes.find({});
    
    res.json({
        classesFromDB
    });
});

app.get('/races', async (req, res) =>{
    const racesFromDB = await Races.find({});
    res.json({
        racesFromDB
    });
});

// app.get('/bgs', async (req, res) =>{
//     const db_backgrounds = await Backgrounds.find({});
//     res.json({
//         success:true,
//         db_backgrounds,
//     });
// });

mongoose
    .connect(
        'mongodb://localhost:27017/dnd5e',
        {
            useNewUrlParser: true,
        }
    )
    .then(() => {
        app.listen(5000, () => console.log(`Example app listening at http://localhost:5000`));
    })
    .catch((e) => {
        console.log(`Error connecting to MongoDB: `, e);
    });