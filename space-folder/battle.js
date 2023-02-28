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

//uss is alive, do turns between uss ship and alien ship
while(ussHelloWorld.hull >= 0){

    if (Math.random() < ussHelloWorld.accuracy) {
        
         fleet[i].hull-= ussHelloWorld.firepower
         alienHulls[i].textContent =`hull: ${fleet[i].hull}`
         

     }
     if(fleet[i].hull <= 0){
        break
    }
    //alien ship attacks
    if (Math.random() < fleet[i].accuracy) {
        ussHelloWorld.hull-= fleet[i].firepower
        ussHull.textContent = `hull: ${ussHelloWorld.hull}`
    }
}


}

console.log(borgAlien)
console.log(ussHelloWorld)
}

playGame()