//Challenge 1: Yoiur Age in days

function ageInDays() {
  var birthYear = prompt("Your birthyear");
  var ageInDay = (2020 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "You are " + ageInDay + "  days old."
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

// Challenge 2

function generateCat() {
  var image = document.createElement("img");
  image.src = "../meetup.jpeg";
  var div = document.getElementById("cat pic container");
  div.appendChild(image);
}

// Challenge 3

function rpsGame(yourChoice) {
  console.log("Your Choice:", yourChoice.id);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id; //var is a string(The id of the html-element)
  botChoice = numberToChoice(ranToRpsInt()); //var is a string(The id of the html-element)
  console.log("Computer Choice:", botChoice);

  results = decideWinner(humanChoice, botChoice);
  console.log(results);

  message = finalMessage(results); // {message:'You won!', 'color': 'green}
  console.log(message.messageText);

  rpsFrontEnd(humanChoice, botChoice, message);
}

function ranToRpsInt() {
  return Math.floor(Math.random() * 3); // return is a number between 0-2
}

function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, botChoice) {
  //Inputs are strings
  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };

  var yourScore = rpsDatabase[yourChoice][botChoice]; //  return a number
  var computerScore = rpsDatabase[botChoice][yourChoice];

  return [yourScore, computerScore]; // return is an array
}

function finalMessage(results) {
  switch (results[0]) {
    case 1:
      return { messageText: "You won", color: "green" };
      break;
    case 0.5:
      return { messageText: "You tied", color: "yellow" };
      break;
    case 0:
      return { messageText: "You lost", color: "red" };
      break;
  }
  return;
}

function rpsFrontEnd(humanChoice, botChoice, finalMessage) {
  var imagesDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  // remove all images after clicking on one

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  /*var divHuman = document.createElement('div');
   */

  var imageHuman = document.createElement("img");
  var imageComptuer = document.createElement("img");
  var imageText = document.createElement("h2");
  var divText = document.createElement("div");

  imageHuman.src = imagesDatabase[humanChoice];
  imageHuman.width = 150;
  imageHuman.height = 150;
  imageHuman.style.boxShadow = "0px 10px 50px rgba(37, 50, 233, 1)";

  imageComptuer.src = imagesDatabase[botChoice];
  imageComptuer.width = 150;
  imageComptuer.height = 150;
  imageComptuer.style.boxShadow = "0px 10px 50px rgba(42, 60, 23, 1)";

  imageText.innerText = message.messageText;
  imageText.style.color = message.color;
  imageText.style.fontSize = 60;

  divText.appendChild(imageText);
  document.getElementById("flex-box-rps-div").appendChild(imageHuman);
  document.getElementById("flex-box-rps-div").appendChild(divText);
  document.getElementById("flex-box-rps-div").appendChild(imageComptuer);
}

//https://youtu.be/Qqx_wzMmFeA?t=27338
