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