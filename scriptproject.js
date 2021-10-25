"Use Strict";



let places = [' Houston',' El Paso',' Austin',' San Antonio'];
let Houston = places[0];

let restaurants = [' Mcdonalds',' Taco Bell',' Whataburger',' Burger King'];
let Mcdonalds = restaurants[0];

let activities = [' Shopping',' Theater',' Movies',' Picnic'];
let  Shopping = activities[0];

let transportation = [' Walking',' Biking',' Uber',' Rental Car'];
let Walking = transportation[0];

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
    else if(randomG === 3) {toGoOut = places[3];}
    return toGoOut;}

function placesToEat(toEat){
    if(randomE ===0){toEat = restaurants[0];}
    else if(randomE ===1){toEat = restaurants[1];}
    else if(randomE ===2){toEat = restaurants[2];}
    else if(randomE ===3){toEat = restaurants[3];}
    return toEat;
}

function thingsToDo(toDo){
    if(randomD ===0){toDo = activities[0];}
    else if(randomD ===1){toDo = activities[1];}
    else if(randomD ===2){toDo = activities[2];}
    else if(randomD ===3){toDo = activities[3];}
    return toDo;

}

function howIWillGetThere(getThere){
    if(randomT ===0){getThere = transportation[0];}
    else if(randomT ===1){getThere = transportation[1];}
    else if(randomT ===2){getThere = transportation[2];}
    else if(randomT ===3){getThere = transportation[3];}
    return getThere;

}

alert("Travel itinerary:"+"\n" +"\nDestination:"+placesToGo()+ "\nDining:"+placesToEat() + "\nActivities:"+thingsToDo()+ "\nTransportation:"+howIWillGetThere());

let userChange = prompt("Would you like to make any changes?")

if(userChange === "yes"||userChange==="Yes"){ 
    let changePlans =prompt("What changes would you like to make?")
    if(changePlans === "1" ||changePlans==="Destination"||changePlans==="destination"){ 
        var randomG = Math.floor(Math.random() * 4);
        console.log(randomG)
        function placesToGo(toGoOut){
        if(randomG === 0){toGoOut = places[0];}
        else if(randomG === 1){toGoOut = places[1];}
        else if(randomG === 2){toGoOut = places[2];}
        else if(randomG === 3) {toGoOut = places[3];}
        return toGoOut;}
        alert("Travel itinerary:"+"\n"+"\nDestination:"+placesToGo()+ "\nDining:"+placesToEat.call() + "\nActivities:"+thingsToDo.call()+ "\nTransportation:"+howIWillGetThere.call()+"\nEnjoy your trip!");
        }
        else if(changePlans === "2"||changePlans==="Dining"||changePlans==="dining"){
        var randomE = Math.floor(Math.random()*4);
        console.log(randomE) 
        function placesToEat(toEat){
            if(randomE ===0){toEat = restaurants[0];}
            else if(randomE ===1){toEat = restaurants[1];}
            else if(randomE ===2){toEat = restaurants[2];}
            else if(randomE ===3){toEat = restaurants[3];}
            return toEat;}
            alert("Travel itinerary:"+"\n" +"\nDestination:"+placesToGo.call()+ "\nDining:"+placesToEat() + "\nActivities:"+thingsToDo.call()+ "\nTransportation:"+howIWillGetThere.call()+"\nEnjoy your trip!");
        }

    else if(changePlans==="3"||changePlans==="Activities"||changePlans==="activities"){
        var randomD = Math.floor(Math.random()*4);
        console.log(randomD)
        function thingsToDo(toDo){
            if(randomD ===0){toDo = activities[0];}
            else if(randomD ===1){toDo = activities[1];}
            else if(randomD ===2){toDo = activities[2];}
            else if(randomD ===3){toDo = activities[3];}
            return toDo;}
            alert("Travel itinerary:"+"\n" +"\nDestination:"+placesToGo.call()+ "\nDining:"+placesToEat.call() + "\nActivities:"+thingsToDo()+ "\nTransportation:"+howIWillGetThere.call()+"\nEnjoy your trip!");
        }
    else if(changePlans==="4"||changePlans==="Transportation"||changePlans==="transportation"){
        var randomT = Math.floor(Math.random()*4);
        console.log(randomT)
        function howIWillGetThere(getThere){
            if(randomT ===0){getThere = transportation[0];}
            else if(randomT ===1){getThere = transportation[1];}
            else if(randomT ===2){getThere = transportation[2];}
            else if(randomT ===3){getThere = transportation[3];}
            return getThere;}
            alert("Travel itinerary:"+"\n" +"\nDestination:"+placesToGo.call()+ "\nDining:"+placesToEat.call() + "\nActivities:"+thingsToDo.call()+ "\nTransportation:"+howIWillGetThere()+"\nEnjoy your trip!");
        }}

else if(userChange==="No"||userChange==="no"){
alert("Travel itinerary:"+"\n" +"\nDestination:"+placesToGo.call()+ "\nDining:"+placesToEat.call() + "\nActivities:"+thingsToDo.call()+ "\nTransportation:"+howIWillGetThere.call()+"\nEnjoy your trip!");
        
        }
