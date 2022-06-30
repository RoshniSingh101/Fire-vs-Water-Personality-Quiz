/*Add your JavaScript here*/

var fireScore = 0 // Store the fire score
var waterScore = 0 // Store the water score
var questionCount = 0 // Store the number of answers clicked on

var result = document.getElementById("restart"); 

result.addEventListener("click", restart); 

//Store HTML elements using the DOM
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

// listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click", fire);
q1a2.addEventListener("click", water);
q2a1.addEventListener("click", water);
q2a2.addEventListener("click", fire);
q3a1.addEventListener("click", water);
q3a2.addEventListener("click", fire);

// Track this fire score and check to see if the quiz is complete
function fire() {
  fireScore = fireScore + 1;
  questionCount = questionCount + 1

  console.log("questionCount = " + questionCount + " fireScore ");

  if (questionCount == 3) {
  console.log("The quiz is done!")
  updateResults(); 
  }
}

// Track this fire score and check to see if the quiz is complete
function water() {
  waterScore = waterScore + 1;
  questionCount = questionCount + 1

  console.log("questionCount = " + questionCount + " waterScore ");

  if (questionCount == 3) {
  console.log("The quiz is done!")
  updateResults(); 
  }
}

// Update Quiz Results

function updateResults() {
  if (fireScore >=2) {
  result.innerHTML = "Your element is fire!";
  console.log("Your element is fire!");
  }
  else if (waterScore >=2) {
  result.innerHTML = "Your element is water!";
  console.log("Your element is water!");
  }
}

function restart() {
  if (questionCount == 3) {
    questionCount = 0
  }
  if (fireScore >=2) {
    fireScore = 0
  }
  if (waterScore >=2) {
    waterScore = 0
  }
  result.innerHTML = "Your result is ...";
}
