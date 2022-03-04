console.log("is this working")

// Creating a Tamagotchi class 
// let prince = new Tamagotchi()  

class Tamagotchi {
    constructor(name, age, hunger, sleepiness, boredeom, play) {
        this.name = name;
        this.age = age;
        this.hungry = hungry;
        this.sleepy = sleepy;
        this.boredeom = boredeom;
        this.play = play;
    }

}

let prince = new Tamagotchi("Prince", 4, 2, 0, 1, 0);
console.log(Tamagotchi);

const nameEl = document.getElementById("btn-name");
const ageEl = document.getElementById("btn-age");
const hungryEl = document.getElementById("btn-hungry");
const sleepyEl = document.getElementById("btn-sleepy");
const boredomEl = document.getElementById("btn-boredom");
const playEl = document.getElementById("btn-play");