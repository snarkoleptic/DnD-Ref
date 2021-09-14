import axios from 'axios';

const dndClasses = axios.get('http://localhost:5000/classes').then((response) => {
        //handle the success condition of all the html on the page.
        const classList = response;
        console.log("Success!");
        return classList;
    }).catch((error) => {
        //handle an error
        console.log(error);
    });

const dndRaces = axios.get('http://localhost:5000/races').then((response) => {
        //handle the success condition of all the html on the page.
        const raceList = response;
        console.log("Success!");
        return raceList;
    }).catch((error) => {
        //handle an error
        console.log(error);
    });

export {dndClasses, dndRaces}