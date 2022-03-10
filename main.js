console.log("is this working")

// Creating a Tamagotchi class 
// let prince = new Tamagotchi()  

class Tamagotchi {
    constructor(start, pause, stop, name, hungry, sleepy, bored, play) {
        this.start = start;
        this.pause = pause;
        this.stop = stop;
        this.name = name;
        this.hungry = hungry;
        this.sleepy = sleepy;
        this.bored = bored;
        this.play = play;
        this.age = 0
    }
// Writing a function thats add 1 to age 
    agePet(){ 
      this.age = this.age + 1
      console.log(this.age)
    }
    hungryPet(){
        this.hungry = this.hungry + 1
        console.log(this.hungry)
    }
}

let prince = new Tamagotchi(5, 6, 5, "Prince", 4, 2, 0, 1, 0);
console.log(Tamagotchi);

// letting player add in their own name for game
getName = (e) => {
    e.preventDefault()
    console.log(e.target.name.value);
    console.log("Good Boy")
}

// 
const startEl = document.getElementById("btn-start");
const pauseEl = document.getElementById("btn-pause");
const stopEl = document.getElementById("btn-stop");
const nameEl = document.getElementById("btn-name");
const hungryEl = document.getElementById("btn-hungry");
const sleepyEl = document.getElementById("btn-sleepy");
const boredEl = document.getElementById("btn-bored");
const playEl = document.getElementById("btn-play");
const ageEl = document.getElementById("age")

const myCounterSt = document.getElementById("start-count")
const myCounterPa = document.getElementById("pause-count")
const myCounterSto = document.getElementById("stop-count")
const myCounterNa = document.getElementById("name-count")
const myCounterHu = document.getElementById("hungry")
const myCounterSl = document.getElementById("sleepy")
const myCounterBo = document.getElementById("bored")
const myCounterPl = document.getElementById("play")
const myCounterAg = document.getElementById("age-count")

// Adding in my click Event Listener for btns 

document.getElementById("prince").addEventListener("submit" , getName);

const button = document.querySelector('.myButton');

function handleStartClick() {
    ageCount()
    hungerCount()
    startCounter = setInterval(function(){
     count++;
     startEl.innerText = "Count: " + count;
    },1000);
};
  
function hungerCount(){
    hungerCounter = setInterval(function(){
        // incrementing hunger count
     prince.hungryPet()   
     count++;
     myCounterHu.innerText = "Count: " + count;
    },1000);
}

function handlePauseClick() {
    clearInterval(startCounter);
    clearInterval(ageCounter);
    clearInterval(hungerCounter);
    clearInterval(sleepCounter);
};
  
function handleStopClick() {
    clearInterval(stopCounter);
    count = 5;
    count-- >=-1;
    stopEl.innerText = "Count: " + count;
};

function ageCount() {
    ageCounter = setInterval(function() {
    //   increment princes age by 1
    prince.agePet()
    //   count++;
      ageEl.innerText = "age: " + prince.age;  // change age pet to variable princes 
      
      }, 5000);
}

function handleHungryClick() {
    
    hungerCounter = setInterval(function(){
        // incrementing hunger count
     prince.hungryPet()   
     count++;
     hungryEl.innerText = "Count: " + count;
    },1000);
};
  
  

//   function handleHungryClick() {
//     setInterval(myCounter);
//     count = 5;
//     hungryEl.innerText = "Count: " + count;
//   };

function handleSleepyClick() {
    
    sleepCounter = setInterval(function(){
     count++;
     sleepyEl.innerText = "Count: " + count;
    },1000);
};
  
//  
//   function handleBoredClick() {
//     clearInterval(myCounter);
//     count = 5;
//     boredEl.innerText = "Count: " + count;
//   };

  function handleBoredClick() {
    
    myCounter = setInterval(function(){
     count++;
     boredEl.innerText = "Count: " + count;
    },1000);
  };
  
  
  
//   function handlePlayClick() {
//     clearInterval(myCounter);
//     count = 5;
//     playEl.innerText = "Count: " + count;
//   };

function handlePlayClick() {
    
    myCounter = setInterval(function(){
     count++;
     playEl.innerText = "Count: " + count;
    },6000);
  };
  
  

  startEl.addEventListener('click', handleStartClick);
  pauseEl.addEventListener('click', handlePauseClick);
  stopEl.addEventListener('click', handleStopClick); 
//   hungryEl.addEventListener('click', handleHungryClick); 
//   sleepyEl.addEventListener('click', handleSleepyClick); 
//   boredEl.addEventListener('click', handleBoredClick); 
//   playEl.addEventListener('click', handlePlayClick); 



// adding count id's to my btns 
const startBtn = document.getElementById("start-btn")
// console.log(startbtn)

let count = 0;
let myCounter = null;
console.log(myCounter);

let started = false

function pauseBtn() {
    if(!startBtn) {
        myCounter = setInterval(function(){
            num++;
            stopMycounter()
            myCounterSt.innerText= num;
            started = true;
        },1000);
    }
}
function pHunger (){
    if (num >1 ){
        num--
        myCounterSt.innerText= num;
    }

}
function stopMycounter() {
    if (num >= 10) {
        clearInterval(myCounter)
    }
}
// function pressHungryClick() {
//     myCounter = setInterval(function(){
//         count++;
//         countEl.innerText = "Count: " + count;
//     }, 1000);
// };
