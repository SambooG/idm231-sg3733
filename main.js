let help = "";
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
    
    userPicked('tony');
});
carmelaBtn.addEventListener('click', function(){
   
    userPicked('carmela');
});
juniorBtn.addEventListener('click', function(){
   
    userPicked('junior');
});
melfiBtn.addEventListener('click', function(){
   
    userPicked('melfi');
});
liviaBtn.addEventListener('click', function(){
   
    userPicked('livia');
});paulieBtn.addEventListener('click', function(){
   
    userPicked('paulie');
});ajBtn.addEventListener('click', function(){
   
    userPicked('aj');
});silBtn.addEventListener('click', function(){
   
    userPicked('sil');
});adriannaBtn.addEventListener('click', function(){
   
    userPicked('adrianna');
});christopherBtn.addEventListener('click', function(){
   
    userPicked('christopher');
});janiceBtn.addEventListener('click', function(){
   
    userPicked('janice');
});johnnyBtn.addEventListener('click', function(){
   
    userPicked('johnny');
});
// helpBtn.addEventListener('click', function(){
//     //doing stuff
//     userPicked('help');
// });

//create function userPicked();
function userPicked(buttonName){
    console.log('the user picked'+ buttonName);
    const famMember = document.getElementById('famMember');
    const famImage = document.getElementById('famImage');
    const famCopy = document.getElementById('famCopy');

    switch (buttonName){
        case 'tony':
            speakers.src = 'sounds/tony-bing.wav';
            speakers.play();
            famMember.innerHTML = "You are Tony Soprano."
            famImage.src = 'images/tony.jpg';
            famCopy.innerHTML = "You see everything that's going on around you. You stay 5 moves ahead of others, enabling you to take advantage of situations others may not recognize. A lover of animals, you would pick your race horse over a misbehaving memeber of the family any day."
            modal.hidden = !modal.hidden;
            break;
        case 'carmela':
            speakers.src = 'sounds/carmela.mp3';
            speakers.play();
            famMember.innerHTML = "You are Carmela Soprano."
            famImage.src = 'images/camela.jpg';
            famCopy.innerHTML = "Family is everything to you, and nothing will stop you from making sure they get what is best for them. Loyalty is just one of many unmatched qualities."
            modal.hidden = !modal.hidden;
            break;
        case 'junior':
            speakers.src = 'sounds/junior.mp3';
            speakers.play();
            famMember.innerHTML = "You are Junior Soprano."
            famImage.src = 'images/juniorop.jpg';
            famCopy.innerHTML ="You can croon like the best of them and plot like the rest of them. You are very strategic, hold a grudge, and like to get revenge."
            modal.hidden = !modal.hidden;    
        break;
        case 'johnny':
            speakers.src = 'sounds/johnny.wav';
            speakers.play();
            famMember.innerHTML = "You are Johnny Sacrimoni."
            famImage.src = 'images/jsack.jpg';
            famCopy.innerHTML ="You are usually a pragmatic person and the go to for settling disputes. Don't let your temper get the best of you though!"
            modal.hidden = !modal.hidden;
            break;
        case 'melfi':
            speakers.src = 'sounds/melfi.mp3';
            speakers.play();
            famMember.innerHTML = "You are Jennifer Melfi."
            famImage.src = 'images/melfi.jpg';
            famCopy.innerHTML ="You're conflicted by duty and and the excitement of power. Most days are pretty normal, but watch out for a call about needing to go on the lam."
            modal.hidden = !modal.hidden;
            break;
        case 'adrianna':
            speakers.src = 'sounds/Adrianna1.wav';
            speakers.play();
            famMember.innerHTML = "You are Adrianna."
            famImage.src = 'images/adriana.jpg';
            famCopy.innerHTML = "You put others before yourself, sometimes to your own detriment. Watch out for red flags in your potential mates; run before it's too late. You take pride in your appearance and have a passion for music. You will have a pet who becomes one of the loves of your life if you don't already."
            modal.hidden = !modal.hidden;
            break;
        case 'paulie':
            speakers.src = 'sounds/paulie.mp3';
            speakers.play();
            famMember.innerHTML = "You are Paulie Walnuts."
            famImage.src = 'images/paulie.jpg';
            famCopy.innerHTML ="Remember, gossip has its costs. Don't tell the business to anyone outside of the family."
            modal.hidden = !modal.hidden;
            break;
        case 'livia':
            speakers.src = 'sounds/Livia.wav';
            speakers.play();
            famMember.innerHTML = "You are Livia Soprano."
            famImage.src = 'images/livia.jpg';
            famCopy.innerHTML ="You gave your life to your children on a silver platter, and they dont appreciate it at all. You're also the only person in the family who doesn't curse."
            modal.hidden = !modal.hidden;
            break;
        case 'christopher':
            speakers.src = 'sounds/christpha.wav';
            speakers.play();
            famMember.innerHTML = "You are Christopher Moltisanti."
            famImage.src = 'images/christaphaop.jpg';
            famCopy.innerHTML ="When TLC said 'don't go chasing waterfalls' this may be who they were talking about. You put family first, most of the time. In fact, some claim your success is a result of nepitism, but you know better. Be careful changing the music in your car late at night."
            modal.hidden = !modal.hidden;
            break;
        case 'aj':
            speakers.src = 'sounds/Tony.mp3';
            speakers.play();
            famMember.innerHTML = "You are AJ Soprano."
            famImage.src = 'images/ajop.jpg';
            famCopy.innerHTML ="Don't worry about trying too hard at any one thing. If you wait long enough someone will hand you opportunities that you probably don't deserve."
            modal.hidden = !modal.hidden;
            break;
        case 'janice':
            speakers.src = 'sounds/livia.mp3';
            speakers.play();
            famMember.innerHTML = "You are Janice Soprano."
            famImage.src = 'images/janice.jpg';
            famCopy.innerHTML = "You might have a dark secret, but nobody will find out if you disappear for a while. You're a scrapper and somehow manage to come out on top whenever you have troubles."
            modal.hidden = !modal.hidden;
            break;
        case 'sil':
            speakers.src = 'sounds/Sil.mp3';
            speakers.play();
            famMember.innerHTML = "You are Sil."
            famImage.src = 'images/silop.jpg';
            famCopy.innerHTML ="Sometimes being the boss isn't all it's cracked up to be. There's nothing wrong with being second in command. Besides, you can still skim off the top from where you are."
            modal.hidden = !modal.hidden;
            break;
            // case 'help':
            // famMember.innerHTML = "All content copyright Home Box Office."
            // famCopy.innerHTML ="Enter yours or anothers date of birth and click the 'click' button for a Sopranos zodiac. Click each photo to learn more about the characters."
            // modal.hidden = !modal.hidden;
            // break;
    default:
        // console.log('I was clicked')
    }
}

const userSubmitBtn = document.getElementById('submitBtn');

// add Event Listener
userSubmitBtn.addEventListener('click', function() {

    
    const userBday = new Date(document.getElementById('bday').value);
    
    const whichMonth = userBday.getUTCMonth() + 1;
   

    const whichDayOfMonth = userBday.getUTCDate();
    

    // Zodiac Algorithm
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "tony";
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "junior";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "carmela";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "johnny";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "melfi";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "livia";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "paulie";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "aj";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "sil";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "adrianna";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "christopher";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "janice";
    }
    // else {
        // AstroSign="help";
    // }

    console.log(AstroSign);
    userPicked(AstroSign);
});

// modal
const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('btn-modal-close');
modalCloseBtn.addEventListener('click', function() {
    modal.hidden = !modal.hidden;
})

//  help button 
const showHelpBox = () =>{

    const helpBox = document.querySelector('.help-box');
  
    // show and hide box
    if (help){
        helpBox.style.display = "none";
        help = false;
    }
    
    else{
        helpBox.style.display = "flex";
        help = true;
    }
  
    rectangle(help);
  };
  //  main box hide when help is in use and show when not in use
function rectangle(hiding){
    const mainRectangle = document.querySelector('.help-box-body');
    if (hiding){
      mainRectangle.style.display = "none";
    }
    else{
      mainRectangle.style.display = "block";
    }
  }
  //  event listener for help open button 
  const helpOpenButton = document.querySelector('.help-button');
  helpOpenButton.addEventListener('click', showHelpBox);
  
  //  event listener for help close button
  const helpCloseButton = document.querySelector('.help-button-close');
  helpCloseButton.addEventListener('click', showHelpBox);

//   help button end 