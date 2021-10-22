"Use Strict";



let places = ['Houston','El Paso','Austin','San Antonio'];
let Houston = places[0];

let restaurants = ['Mcdonalds','Taco Bell','Whataburger','Burger King'];
let Mcdonalds = restaurants[0];

let activities = ['Shopping','Theater','Movies','Picnic'];
let  Shopping = activities[0];

let transportation = ['Walking','Biking','Uber','Rental Car'];
let Walking = activities[0];

var randomG = Math.floor(Math.random() * 4);
console.log(randomG)

var randomE = Math.floor(Math.random()*4);
console.log(randomE) 

var randomD = Math.floor(Math.random()*4);
console.log(randomD)

var randomT = Math.floor(Math.random()*4);
console.log(randomT)

function placesToGo(toGoOut){
    if(randomG === 0){toGoOut = places[0];}
    else if(randomG === 1){toGoOut = places[1];}
    else if(randomG === 2){toGoOut = places[2];}
    else if(randomG === 3){toGoOut = places[3];}
    return toGoOut;}

function placesToEat(toEat){
    if(randomE ===0){toEat = restaurants[0];}

}

function thingsToDo(toDo){

}

function howIWillGetThere(getThere){

}

alert("Travel itinerary: \nDestination: \nDining: \nActivities: \nTransportation:");
alert(placesToGo());