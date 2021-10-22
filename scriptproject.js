"Use Strict";



let places = ['Houston','El Paso','Austin','San Antonio'];
let Houston = places[0];

let restaurants = ['Mcdonalds','Taco Bell','Whataburger','Burger King'];
let Mcdonalds = restaurants[0];

let activities = ['Shopping','Theater','Movies','Picnic'];
let  Shopping = activities[0];

let transportation = ['Walking','Biking','Uber','Rental Car'];
let Walking = activities[0];

function placesToGo(toGo){
    let toGoEat;
    var toGo = Math.floor(Math.random() *4+1);
    if(toGo = 0) {toGoEat = restaurants[0]}
    else if(toGo = 1) {toGoEat = restaurants[1]}
    else if(toGo = 2){toGoEat = restaurants[2]}
    else if(toGo = 3){toGoEat = restaurants[3]}
    return toGoEat;
}

console.log(placesToGo());


function placesToEat(toEat){

}

function thingsToDo(toDo){

}

function howIWillGetThere(getThere){

}

alert("Travel itinerary: \nDestination: \nDining: \nActivities: \nTransportation:");
prompt("Would you like to make any changes?")