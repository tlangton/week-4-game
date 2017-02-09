var game = {
	wins: 0,
	losses: 0
}

$("#tally").text("Wins: " + game.wins + "  Losses: " + game.losses);


var round = {
	crystal1: 0,
	crystal2: 0,
	crystal3: 0,
	crystal4: 0,
	target: 0,
	score: 0
}

var butID;
var gameOver = 0;


function setTarget() {
  // Target is chosen randomly - "should be between 19 - 120." Which means from 20 to 119 inclusively.
  round.target =  20 + parseInt([Math.floor(Math.random() * 99)]),
  console.log( "target: " + round.target);
}
//call setTarget when page reloads.
setTarget();




var randNum;
var randList=[];
var i=0;
var uniqueNum = 4; //length of list
var maxValue = 12; //maximum value of list member
// IMPORTANT - maxValue must be greater than uniqueNum - or crash.

function get_random()
{
	randNum = 1 + (Math.floor(Math.random()*maxValue));
}

function setUniqueRandomList() {

	while	(i < uniqueNum) {
		get_random();
		var existsInList = randList.includes (randNum);
//if new random is not in the list, it is added and count is incremented;
if (existsInList == false) {
	randList.push(randNum);
	i ++;
}
}
}
setUniqueRandomList();
// console.log(randList);



function setCrystals() {
round.crystal1 = randList[0];
round.crystal2 = randList[1];
round.crystal3 = randList[2];
round.crystal4 = randList[3];

console.log( "crystal 1: " + round.crystal1);
console.log( "crystal 2: " + round.crystal2);
console.log( "crystal 3: " + round.crystal3);
console.log( "crystal 4: " + round.crystal4);

}
//call setCrystals when page reloads.
setCrystals();



//scoring loop
function addToScore() {
	if (gameOver == 0) {
		if (butID =="b1") {
			round.score = round.score + round.crystal1;
			$("#boxScore").text("Score: " + round.score);
		}  else if (butID =="b2") {
			round.score = round.score + round.crystal2;
			$("#boxScore").text("Score: " + round.score);
		} else if (butID =="b3") {
			round.score = round.score + round.crystal3;
			$("#boxScore").text("Score: " + round.score);
		} else if (butID =="b4") {
			round.score = round.score + round.crystal4;
			$("#boxScore").text("Score: " + round.score);
		}

		if (round.score < round.target) {
		} else if (round.score == round.target) {
			game.wins ++,
			gameOver = 1,
			$("#tally").text("Wins: " + game.wins + "  Losses: " + game.losses),
			$("#message").text("You Win!");

		} else	game.losses ++,
		gameOver = 1,
		$("#tally").text("Wins: " + game.wins + "  Losses: " + game.losses),
		$("#message").text("You Lose!");

	}
}



  //resets score and target - clears message
  function playAgain(){
  	round.score = 0,
  	gameOver = 0,
  	$("#boxScore").text("Score: " + round.score),
  	$("#message").text(" "),
  	setTarget(),
  	$("#targetScore").text("Target: " + round.target),
	setUniqueRandomList(),
  	setCrystals(),
  	console.log(randList);
  	// GetUnique();
  }


// $(document).ready(function(){
// var randbkg = 1 + (Math.floor(Math.random()*6));
// $("body").css({"background-image": "url('../images/bkg"+[randbkg]+".png')";

// $(".b1").css({"background-image": "url('../images/crys"+randList[0]+".png')"

// });
// });


