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

// letting player add in their own name for game
getName = (e) => {
    e.preventDefault()
    console.log(e.target.name.value);
    console.log("Good Boy")
}

const nameEl = document.getElementById("btn-name");
const ageEl = document.getElementById("btn-age");
const hungryEl = document.getElementById("btn-hungry");
const sleepyEl = document.getElementById("btn-sleepy");
const boredomEl = document.getElementById("btn-boredom");
const playEl = document.getElementById("btn-play");

// Adding in my click Event Listener for btns 

document.getElementById("prince").addEventListener("submit" , getName);

const button = document.querySelector('.myButton');
 
btn.addEventListener('click' , () => {
    // console.log('button clicked');
});
let count = 0;
let myCounter = null;
console.log(myCounter);

function pressHungryClick() {
    myCounter = setInterval(function(){
        count++;
        countEl.innerText = "Count: " + count;
    }, 1000);
};