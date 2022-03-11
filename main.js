// console.log("is this working")

// // Creating a Tamagotchi class 
// // let prince = new Tamagotchi()  

// class Tamagotchi {
//     constructor(start, pause, stop, name, hungry, sleepy, bored, play) {
//         this.start = start;
//         this.pause = pause;
//         this.stop = stop;
//         this.name = name;
//         this.hungry = hungry;
//         this.sleepy = sleepy;
//         this.bored = bored;
//         this.play = play;
//         this.age = 0
//     }
// // Writing a function thats add 1 to age 
//     agePet(){ 
//       this.age = this.age + 1
//       console.log(this.age)
//     }
//     hungryPet(){
//         this.hungry = this.hungry + 1
//         console.log(this.hungry)
//     }
// }

// let prince = new Tamagotchi(5, 6, 5, "Prince", 4, 2, 0, 1, 0);
// console.log(Tamagotchi);

// letting player add in their own name for game
getName = (e) => {
    e.preventDefault()
    console.log(e.target.name.value);
    console.log("Good Boy")
}

// 
const startEl = document.getElementById("btn-start");
const feedEl = document.getElementById("btn-feed");
const sleepEl = document.getElementById("btn-sleep");
const playEl = document.getElementById("btn-play");


// const hungryEl = document.getElementById("btn-hungry");
// const sleepyEl = document.getElementById("btn-sleepy");
// const boredEl = document.getElementById("btn-bored");
// const playEl = document.getElementById("btn-play");
// const ageEl = document.getElementById("age")


const myCounterHu = document.getElementById("hungry")
const myCounterSl = document.getElementById("sleepy")
const myCounterBo = document.getElementById("bored")
const myCounterAg = document.getElementById("age")
const myPet = document.getElementById("heSurvived")

// Adding in my click Event Listener for btns 

document.getElementById("prince").addEventListener("submit" , getName);

const button = document.querySelector('.myButton');

let num = 0;
let apt = 0
let bed = 0
let yawn = 0
let ageCounter = null
let hungryCounter = null
let sleepCounter = null
let boredCounter = null

// age to increment with start button
// console.log("try")
function handleStartClick() {
    ageCount()
    hungerCount()
    sleepyCount()
    boredCount()
    
};
//  getting hunger to increment by 1
function ageCount() {
    ageCounter = setInterval(function() {
    //   increment princes age by 1
    // prince.agePet()
      num++;
      myCounterAg.innerText = "age: " + num;  // change age pet to variable princes 
      
      }, 5000);
}

function hungerCount(){
    hungryCounter = setInterval(function(){
        // incrementing hunger count
    apt++;
    myCounterHu.innerText = "hungry: " + apt;
    if (apt === 10){
    clearInterval(hungerCount);
    myPet.innerText = "Your Pet Died";
    }
    // else {
        // heSurvived.innerText = "Your Pet Died";
    // }
    },1000);
}
//  getting my sleep to increment 

function sleepyCount(){
    sleepCounter = setInterval(function(){
      bed++;
      myCounterSl.innerText = "sleep: " + bed; 
    },2000);
};
// bored funct to increment

function boredCount(){
    boredCounter = setInterval(function(){
        yawn++;
        myCounterBo.innerText = "bored: " + yawn;
    },3000);
};

function feedClick(){
    apt--;
    myCounterHu.innerText = "hungry " + apt;
}

function sleepClick(){
    bed--;
    myCounterSl.innerText = "sleepy " + bed;
}

function playClick(){
    yawn--;
    myCounterBo.innerText = "bored " + yawn;
}



// play func to increment

// function playCount(){
//     sleepCounter = setInterval(function(){
//         count++;
//         myCounterPl.innerText = "Count: " + count;
//     },6000);
// };

// all func will stop with pause func

function handlePauseClick() {
    clearInterval(ageCount);
    clearInterval(hungerCount);
    clearInterval(sleepyCount);
    clearInterval(boredCount);
    // clearInterval(boredCounter);
    // clearInterval(playCounter);
    
};


  
// function handleStopClick() {
//     clearInterval(stopCounter);
//     count = 5;
//     count-- >=-1;
//     stopEl.innerText = "Count: " + count;
// };
    startEl.addEventListener('click', handleStartClick);
    feedEl.addEventListener('click', feedClick);
    sleepEl.addEventListener('click', sleepClick);
    playEl.addEventListener('click', playClick); 
//   hungryEl.addEventListener('click', handleHungryClick); 
//   sleepyEl.addEventListener('click', handleSleepyClick); 
//   boredEl.addEventListener('click', handleBoredClick); 
//   playEl.addEventListener('click', handlePlayClick); 



// // adding count id's to my btns 
// const startBtn = document.getElementById("start-btn")
// // console.log(startbtn)

// let count = 0;
// let myCounter = null;
// console.log(myCounter);

// let started = false

// function pauseBtn() {
//     if(!startBtn) {
//         myCounter = setInterval(function(){
//             num++;
//             stopMycounter()
//             myCounterSt.innerText= num;
//             started = true;
//         },1000);
//     }
// }
// function pHunger (){
//     if (num >1 ){
//         num--
//         myCounterSt.innerText= num;
//     }

// }
// function stopMycounter() {
//     if (num >= 10) {
//         clearInterval(myCounter)
//     }
// }
// // function pressHungryClick() {
// //     myCounter = setInterval(function(){
// //         count++;
// //         countEl.innerText = "Count: " + count;
// //     }, 1000);
// // };
