//Space Battle (MOD 1 Project)
//Make Class ship

class Ship {
    constructor(name, hull, firepower, accuracy){
        this.name = name
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
    
}

let ussHelloWorld = new Ship("ussHelloWorld", 20, 5, .7)

console.log(ussHelloWorld)

class AlienMilitary{
    constructor (){
        this.name = "Borg"
        this.ships = []
    }

    addShip(name) {
        // make random hull
        let hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3
        //make random firepower
        let firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2
        // make random accuracy
        let accuracy = Math.floor(Math.random() * (.8 - .6)) + .6
        //
        let addShip = new Ship (name, hull, firepower, accuracy) 
        this.ships.push(addShip)

    
    }
    
}

let borgAlien = new AlienMilitary()
borgAlien.addShip("Alien Ship 1")
borgAlien.addShip("Alien Ship 2")
borgAlien.addShip("Alien Ship 3")
borgAlien.addShip("Alien Ship 4")
borgAlien.addShip("Alien Ship 5")
borgAlien.addShip("Alien Ship 6")
console.log(borgAlien)

//set value and select hull in html and loop through alien
let alienHulls = document.querySelectorAll(".fleet-ship-hull");
let ussHull = document.getElementById("my-ship-hull")
console.log(alienHulls)

for(let i=0; i< borgAlien.ships.length; i++){
alienHulls[i].textContent =`hull: ${borgAlien.ships[i].hull}`}

//function to start game
const playGame = () => {


for(let i=0; i<borgAlien.ships.length; i++){
    
    let fleet = borgAlien.ships
// for loop order of events
// 1. check if our ship is destroyed
// - if yes BREAK

if(ussHelloWorld.hull <= 0){
   console.log("My ship is destroyed, GAME OVER!!!")
    break
}

while(ussHelloWorld.hull <= 0)
{

}
// 2. do attack loop
// - we attack enemy ship
// attack order of event
// check accuracy
// subtract damage
// change ship of hhtml 
if (Math.random() < ussHelloWorld.accuracy) {
   return fleet[i].hull-= ussHelloWorld.firepower
    alienHulls[i].textContent =`hull: ${borgAlien[i].hull}`
    console.log("You have been hit!");
    
}
if(fleet[i].hull <= 0){
    break
}
// - check if enemy ship hull <= 1
//      a. if yes break
// - ship attacks us
// check if our hull <= 1
//      a. if yes break
// - repeat attack loop

if(fleet[i].hull <= 1){
    console.log("I've attacked your army")
    break
}

while(fleet[i].hull <= 1)
{

}

if (Math.random() < fleet[i].accuracy) {
    ussHelloWorld.hull-= fleet[i].firepower
    ussHull.textContent = `hull: ${ussHelloWorld.hull}`
    console.log("Yes, I've been hit, but I hit harder");
}
if(ussHelloWorld.hull <= 1){
    break   
    
}    

 // we attack enemy ship again
 // attack order of event
 // check accuracy
 // subtract damage
 // change ship of hhtml 
 if (Math.random() < ussHelloWorld.accuracy) {
    return fleet[i].hull-= ussHelloWorld.firepower
     alienHulls[i].textContent =`hull: ${borgAlien[i].hull}`
     console.log("You have been hit!");
 
 }
 //if alien hull is set to zero, they have lost
 if(fleet[i].hull <= 0){
    fleet[i].hull = 0
    console.log("Good fight, but sorry you lost")
     break
}
}
playGame()
console.log(playGame)
console.log(borgAlien)
console.log(ussHelloWorld)


}