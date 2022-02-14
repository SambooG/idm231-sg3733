const tonyBtn = document.getElementById('tony');
const carmelaBtn = document.getElementById('carmela');
const juniorBtn = document.getElementById('junior');
const johnnyBtn = document.getElementById('johnny');
const melfiBtn = document.getElementById('melfi');
const liviaBtn = document.getElementById('livia');
const paulieBtn = document.getElementById('paulie');
const ajBtn = document.getElementById('aj');
const silBtn = document.getElementById('sil');
const adriannaBtn = document.getElementById('adrianna');
const christopherBtn = document.getElementById('christopher');
const janiceBtn = document.getElementById('janice');

// creating event listeners on buttons
tonyBtn.addEventListener('click', function(){
    //doing stuff
    userPicked('tony');
});
carmelaBtn.addEventListener('click', function(){
    //doing stuff
    userPicked('carmela');
});
juniorBtn.addEventListener('click', function(){
    //doing stuff
    userPicked('phil');
});
melfiBtn.addEventListener('click', function(){
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

}

const userSubmitBtn = document.getElementById('submitBtn');

// add Event Listener
userSubmitBtn.addEventListener('click', function() {
    //console.log('Submit button clicked!');

    const usersFirstName = document.getElementById('name').value;
    //console.log('Users name is: ' + usersFirstName);

    const userBday = new Date(document.getElementById('bday').value);
    //console.log(userBday);

    const whichMonth = userBday.getUTCMonth() + 1;
    //console.log(`Users month is: ${whichMonth}`);

    const whichDayOfMonth = userBday.getUTCDate();
    //console.log(`Users birth day is: ${whichDayOfMonth}`);

    // Zodiac Algorithm
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "Cap";
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sag";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Sco";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Lib";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Vir";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Can";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gem";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Tau";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Ari";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pis";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aqu";
    }

    console.log(AstroSign);
    userPicked(AstroSign);
});