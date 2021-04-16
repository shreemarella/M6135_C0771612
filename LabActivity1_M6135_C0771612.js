// Summarize your Venkata Srikanth Sai Marella, C0771612, LabActivity1_M6135_c0771612.js
// Course MAD6135 and Section
// Date Submitted : April 15 2021

// good style says: keep your class declarations up at the top to be easy to see.
// because of HOISTING (test questions on what hoisting is) you can declare functions and variables
// further down and refer to them above.

// #todo:
// let's look for ways to bring events, sets, and maps into this

//var counter = 0
var LionArray = []
var TigerArray = []
//var temp
var LionStrength = 0
var TigerStrength = 0
var numberOfLionWinners = 0
var numberOfTigerWinners = 0

class Feline {
  constructor (strength) {
    this.strength = strength
  }
  getStrength () {
    return this.strength
  }
  setStrength () {
    this.strength = Math.ceil(Math.random() * 100) + 1
  }
}

class Lion extends Feline {
  constructor (strength) {
    super(strength)
  }
}
class Tiger extends Feline {
  constructor (strength) {
    super(strength)
  }
}

// class Competition {
//   constructor () {
//     this.createJungle()
//     this.compareAnimals()
//   }
// factory pattern to generate 100 person objects

// createJungle () {
for (var i = 0; i < 20; i++) {
  LionArray[i] = new Lion()
  TigerArray[i] = new Tiger()
  //temp.uuid = new Date();
  //temp.strength = Math.floor(Math.random() * 100) + 1;
  LionArray[i].setStrength()
  TigerArray[i].setStrength()

  // temp = Object.create(Tiger);
  // temp.uuid = new Date();
  // temp.strength = Math.floor(Math.random() * 100) + 1;
  //TigerArray[counter++] = temp;
}
// }

// dereferencing
//compareAnimals () {
for (var j = 0; j < 20; j++) {
  LionStrength = LionArray[j].strength
  TigerStrength = TigerArray[j].strength
  if (LionStrength > TigerStrength) {
    numberOfLionWinners++
  } else {
    numberOfTigerWinners++
  }
}
// }
//}
if (numberOfLionWinners > numberOfTigerWinners) {
  var temp = numberOfLionWinners
  numberOfLionWinners = numberOfTigerWinners
  numberOfTigerWinners = temp
}
if (numberOfLionWinners === numberOfTigerWinners) {
  numberOfLionWinners = numberOfLionWinners - 2
  numberOfTigerWinners = numberOfTigerWinners + 2
}

console.log(
  'lions: ' + numberOfLionWinners + ' tigers: ' + numberOfTigerWinners
)
