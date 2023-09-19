//Beginning Chat
alert('Starting your Mars Adventure!');
alert('Booting up...');
alert('All systems go!');
alert("Let's start!");


//Username
let username = prompt('Hello! What is your name?');
let firstLetterName = username[0];
firstLetterName = firstLetterName.toUpperCase();

let otherLettersName = username.slice(1);
otherLettersName = otherLettersName.toLowerCase();

username = firstLetterName + otherLettersName;


alert(`Hello ${username}! Let's start your Mars Adventure!`);
alert('Yesterday, you received a call from your good friend at NASA');
alert("They need someone to go to Mars this weekend, and YOU'VE been chosen!");

//User Question
let excited = prompt('Are you excited? Type Y or N');
    excited = excited.toUpperCase();
    if(excited === "Y"){
        alert("I knew you'd say that. It's so cool you're going to Mars!")
    } else {
        alert("Well, it's too late to back out now!")
    }

//Suitcases
alert("It's time to pack for your trip to Mars.");
let numSuitcases = prompt('How many suitcases do you plan to bring?');
    numSuitcases = Number(numSuitcases);
    if(numSuitcases > 2){
        alert("That's way too many. You'll have to pack more lightly.")
        alert("Try to fit everything into two suitcases.")
    } else {
        alert("Perfect. You'll certainly fit in the spaceship.")
    }

//Companion Animal
alert("You're allowed to bring one companion animal with you.");
let companionType = prompt("What kind of companion animal would you like to bring?");
let companionName = prompt("What is your companion's name?");

let firstLetter = companionName[0];
firstLetter = firstLetter.toUpperCase();

let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();

companionName = firstLetter + otherLetters;

let firstLetterType = companionType[0];
firstLetterType = firstLetterType.toUpperCase();

let otherLettersType = companionType.slice(1);
otherLettersType = otherLettersType.toLowerCase();

companionType = firstLetterType + otherLettersType;

 
alert(`Cool so you're bringing ${companionName} the ${companionType}.`);

//Spaceship Decor
alert('NASA has a interior design team offering to outfit your space ship.');
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
`);

let decorChoice = prompt("Which option would you like? Choose A, B, or C.");

decorChoice = decorChoice.toUpperCase();

let decor;
if(decorChoice === "A"){
    decor = "modern minimalist";
} else if (decorChoice === "B") {
    decor = "retro space age";
} else if (decorChoice === "C") {
    decor = "victorian steampunk";
}

alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship.`);

//Timer
let timer = 5;
while (timer > 0) {
    alert(`${timer}...`);
    timer -= 1;
}
alert("*** LIFTOFF ***");