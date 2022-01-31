const tonyBtn = document.getElementById('tony');
const carmelaBtn = document.getElementById('carmela');
const philBtn = document.getElementById('phil');
const johnnyBtn = document.getElementById('johnny');
const meadowBtn = document.getElementById('meadow');
const liviaBtn = document.getElementById('livia');
const paulieBtn = document.getElementById('paulie');
const ajBtn = document.getElementById('aj');
const silBtn = document.getElementById('sil');
const adriannaBtn = document.getElementById('adrianna');
const christopherBtn = document.getElementById('christopher');
const janiceBtn = document.getElementById('janice');
//const bottom = document. next week

tonyBtn.addEventListener('click', function(){
    //doing stuff
    userPicked('tony');
});
carmelaBtn.addEventListener('click', function(){
    //doing stuff
    userPicked('carmela');
});
philBtn.addEventListener('click', function(){
    //doing stuff
    userPicked('phil');
});
meadowBtn.addEventListener('click', function(){
    //doing stuff
    userPicked('meadow');
});
liviaBtn.addEventListener('click', function(){
    //doing stuff
    userPicked('livia');
});paulieBtn.addEventListener('click', function(){
    //doing stuff
    userPicked('paulie');
});ajBtn.addEventListener('click', function(){
    //doing stuff
    userPicked('aj');
});silBtn.addEventListener('click', function(){
    //doing stuff
    userPicked('sil');
});adriannaBtn.addEventListener('click', function(){
    //doing stuff
    userPicked('adrianna');
});christopherBtn.addEventListener('click', function(){
    //doing stuff
    userPicked('christopher');
});janiceBtn.addEventListener('click', function(){
    //doing stuff
    userPicked('janice');
});johnnyBtn.addEventListener('click', function(){
    //doing stuff
    userPicked('johnny');
});

//continue creating btns

//create function userPicked();
function userPicked(person){
    console.log(`the user picked ${person}`);
    
    //window.alert(`the user pick ${person});
    //bottom.textContent example for next week?
    //bottom.innerHTML('the user picked a' + person)
}

//Evaluating decisions
//if statements, switch statements

if (score > 50){
    console.log ('You passed!')
} else{
    console.log('Try again.')
};

if (score >= 50){ //if the score is grateer than or = to
    congratulate(); //run function
} else{ //otherwise
    encourage(); //run this function
};

//operand comparsion
// ((score1+ score2) > (high_score1 + high_score2))

//logicacl operators 
// && and
// || or
// !(thing) not
//=== strict equal
//document.querySelector() selects all of something with class
//.appendChild() add to the bottom of the page

//else/ if


const level = 'one';
let title;


//if (level === 'one'){
//    title = 'Level 1';
//} else if {

//}

const myElement = document.getElementById('header');

if (myElement) {
    //element exists, do something modifying document with JS 
} else {
    //Element doesn't exist, do something else.
};

//switch statements

switch (level) { // always starts wtih a variable and accepts parameter
    case 'one':
        title = 'Level 1';
        break; //to finish
    case 'two':
        title = 'Level 2';
        break;
    default: //if there's no level yet
        title = 'Level not 1 or 2';
        break;
};

//LOOPS

//FOR LOOPS ex: could use this to cycle through buttons and add them-- don't

for (let i = 0; i < 10; i++) {
    console.log(i);
}; //adds one to whatever was before -- in this case 0 up to 1

let i = 0; //intialization
i < 10; // condition. will run until i is no longer less than 10
i++ // everytime i runs, we will add 1 to the counter.

//while loop

const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
let i = 0;

while (cars[i]) {
    console.log(cars[i]);
    i++
};

// for each

//const cars = [//a bunch of cars];

cars.forEach(function(car){
    console.log('car: ', car);
});

//map

const numbers = [4, 9, 16, 25];
const sqrt = numbers.map(number => number*number);

//USE MAIN-03.JS FUNCTION ASTROSIGN (OBJECT) {EX ON PHIL'S GITHUB FOR FINAL}