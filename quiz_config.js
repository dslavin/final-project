var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();

questions[0] = "1) What is the capital of Italy?";
choices[0] = new Array();
choices[0][0] = "Venice";
choices[0][1] = "Florence";
choices[0][2] = "Rome";
choices[0][3] = "Milan";
answers[0] = choices[0][2];

questions[1] = "2) What Croatian national park is featured on this website?";
choices[1] = new Array();
choices[1][0] = "Central National Park";
choices[1][1] = "Millenium National Park";
choices[1][2] = "Croatia National Park";
choices[1][3] = "Krka National Park";
answers[1] = choices[1][3];

questions[2] = "3) What is the coast of Croatia called?";
choices[2] = new Array();
choices[2][0] = "Dalmatian Coast";
choices[2][1] = "West Coast";
choices[2][2] = "Croatian Coast";
choices[2][3] = "Split Coast";
answers[2] = choices[2][0];

questions[3] = "4) Which famous explorer is buried in Sevilla, Spain?";
choices[3] = new Array();
choices[3][0] = "Marco Polo";
choices[3][1] = "Christopher Columbus";
choices[3][2] = "Meriweather Lewis";
choices[3][3] = "William Clark";
answers[3] = choices[3][1];

questions[4] = "5) What famous person in history has a museum dedicated to them in Amsterdam, Netherlands?";
choices[4] = new Array();
choices[4][0] = "Anne Frank";
choices[4][1] = "Queen Elizabeth";
choices[4][2] = "King Tut";
choices[4][3] = "Abe Lincoln";
answers[4] = choices[4][0];

questions[5] = "6) What is the national flower of the Netherlands?";
choices[5] = new Array();
choices[5][0] = "Sunflower";
choices[5][1] = "Daisy";
choices[5][2] = "Tulip";
choices[5][3] = "Rose";
answers[5] = choices[5][2];

questions[6] = "7) What food is Capri famous for?";
choices[6] = new Array();
choices[6][0] = "Lollipops";
choices[6][1] = "Licorice";
choices[6][2] = "Limes";
choices[6][3] = "Lemons";
answers[6] = choices[6][3];

questions[7] = "8) What body of water does Lagos, Portugal touch?";
choices[7] = new Array();
choices[7][0] = "Indian Ocean";
choices[7][1] = "Pacific Ocean";
choices[7][2] = "Atlantic Ocean";
choices[7][3] = "Mediterranean Sea";
answers[7] = choices[7][2];

questions[8] = "9) What famous cathedral has been under construction for 131 years in Barcelona, Spain?";
choices[8] = new Array();
choices[8][0] = "Barcelona Cathedral";
choices[8][1] = "Cathedral of Spain";
choices[8][2] = "Sagrada Familia";
choices[8][3] = "St. Barca Cathedral";
answers[8] = choices[8][2];

questions[9] = "10) What famous blue lake can be found in Interlaken, Switzerland?";
choices[9] = new Array();
choices[9][0] = "Lake Michigan";
choices[9][1] = "Lake Como";
choices[9][2] = "Lake Brienz";
choices[9][3] = "Lake Bled";
answers[9] = choices[5][2];

// response for getting 100%
response[0] = "Excellent, top marks!";
// response for getting 90% or more
response[1] = "Excellent, try again to get 100%!"
// response for getting 70% or more
response[2] = "Well done, that is a good score, can you do better?";
// response for getting over 50%
response[3] = "Nice one, you got more than half of the questions right, can you do better?";
// response for getting 40% or more
response[4] = "You got some questions right, you can do better!";
// response for getting 20% or more
response[5] = "You didn't do too well, why not try again!?";
// response for getting 10% or more
response[6] = "That was pretty poor!  Try again to improve!";
// response for getting 9% or less
response[7] = "Oh dear, I think you need to go back to school (or try again)!";