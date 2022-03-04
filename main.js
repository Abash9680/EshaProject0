console.log("is this working")

// Creating a Tamagotchi class 
// let prince = new Tamagotchi()  

class Tamagotchi {
    constructor(name, age, hungry, sleepy, boredeom, play) {
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

getName = (e) => {
    e.preventDefault()
    console.log(e.target.name.value);
    console.log("Good Boy")
}

document.getElementById("prince").addEventListener("submit" , getName);

const nameEl = document.getElementById("btn-name");
const ageEl = document.getElementById("btn-age");
const hungryEl = document.getElementById("btn-hungry");
const sleepyEl = document.getElementById("btn-sleepy");
const boredomEl = document.getElementById("btn-boredom");
const playEl = document.getElementById("btn-play");

// Adding in my click Event Listener for btns 
const button = document.querySelector('.myButton');
 
btn.addEventListener('click' , () => {
    console.log('button clicked');
});

