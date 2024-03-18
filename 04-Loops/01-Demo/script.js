//While loops will run as long as a given condition is true
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// While loop that doesn't have a count
let playAgain = true;

while(playAgain){
  alert("Thanks for Playing");
  playAgain = confirm("Would you to play Again?");
}

//We use a for-loop to executre code more than once ***Syntactic sugar*****
// for ( initializer ; condition ; increment (afterThought)    )
// initializer runs once and only once befer loop starts
// condition is checked every time BEFORE the loop
// incrementer is exectued at the end of each loop

for (let i = 0; i < 5; i++) {
  // This is the block of code that will run each time
  console.log("This is the current value of i: " + i + ".");
}

// For-loops are often used to iterate over arrays
const zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];

//To determine how many times the loop should execute, we use the array's length
for (let i = 0; i < zooAnimals.length; i++) { 
  console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}

