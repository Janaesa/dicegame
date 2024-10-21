let dice = [];
let numberOfDice = 2;
let lock;
let Money;
let lights;
let lose;
let timer = 15;




function preload() {

lock = loadImage("assets/lock.png");
Money = loadImage("assets/Money.png");
lights = loadImage("assets/lights.png");
lose = loadImage("assets/lose.png");

}




function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numberOfDice; i++) {
    dice[i] = new Die(100); // argument is the size of the die
  }

}

function draw() {

  let allSixes = true;
  for (let i = 0; i < dice.length; i++) {
    if (dice[i].value !== 6) {
      allSixes = false;
      break;
    }

  }

    // Change background color based on whether all dice rolled a 6
    if (allSixes) {
      background("green");text("Unlock", 150,80); image(Money,900, 200);
      isFrozen = true
    } else {
      background("black");text("Locked", 150,80);image(lock,100, 50)
    }

 
  
  // loop over the array and place+display each die
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i]; // 'die' is a temporary variable for the current array item
    die.place(die.size*1.2*i+die.size, die.size*2); // place the die neatly in the row
    die.display(); // actually draw it on screen
  }

    // Timer countdown
    if (frameCount % 60 === 0 && timer > 0) {
      timer--;
    }
    if (timer === 0) {
      background("black");image(lights,500, 100);image(lose,500, -200)
      
    }


  }
  

function mouseClicked() {
  // loop over the array of dice...
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    // if the cursor is over the current die, freeze/unfreeze that die

    
  }
}

// for computers...
function keyPressed() {
  shakeDice();
}

// for phones...
function deviceShaken() {
  shakeDice();
}

// loop over the array of dice and try to roll each one in turn
// (note that a die won't actually roll if it's frozen)
// also, output the list of values to the console
function shakeDice() {
  let list = "values: ";
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    die.roll();
    list = list + die.value + " ";
  }
  console.log(list);
}
