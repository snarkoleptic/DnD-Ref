import axios from 'axios';
// import cheerio from 'cheerio';

export const dndClasses = axios.get('http://localhost:5000/classes')
    .then((response) => {
        //handle the success condition of all the html on the page.
        // console.log(cheerio.load(response));
        console.log("Success!");
    })
    .catch((error) => {
        //handle an error
        console.log(error);
    });

export const dndRaces = axios.get('http://localhost:5000/races')
    .then((response) => {
        //handle the success condition of all the html on the page.
        // console.log(cheerio.load(response));
        console.log("Success!");
    })
    .catch((error) => {
        //handle an error
        console.log(error);
    });