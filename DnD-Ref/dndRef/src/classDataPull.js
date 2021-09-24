// var x = fetch(SOME_URL, SOME_POST_DATA)
//     .then((response) => response.json())
//     .then((responseJSON) => {
//        // do stuff with responseJSON here...
//        console.log(responseJSON);
// });

const getClasses = fetch('http://localhost:5000/classes')
    .then((response) => {return response.json();})
    .then(responseJSON => {
        console.log(responseJSON);
    })
    .catch((error) => {
        //handle an error
        console.log(error);
    });

export {getClasses}