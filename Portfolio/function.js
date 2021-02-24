$('.menu-toggle').click(function() {

    /*open-close Navigation menu btn, 500 milliseconds to drop-close*/

    $('.site-nav').toggleClass('site-nav-open', 500);
        
    /* changes hamburger to red X for close button .open CSS       */

    $(this).toggleClass('open');

  })

  /////////////////////////////Variables//////////////////////////////

const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const sendBtn = document.getElementById('send');
const form = document.getElementById('send-mail');
const resetBtn = document.getElementById('resetBtn');

//////////////////////////Event Listeners///////////////////////////

(function eventListeners(){

    //Beginning of the application and disables the button.
    document.addEventListener('DOMContentLoaded', startApp);

    //Form camps 
    email.addEventListener('blur', validateData);
    subject.addEventListener('blur', validateData);
    message.addEventListener('blur', validateData);
    
    //Submit button or submit action.
    sendBtn.addEventListener('click', sendEmail);
    //send.addEventListener('submit', sendEmail);

    //Reset button or submit action.
    resetBtn.addEventListener('click', resetForm);

})();


///////////////////////Function////////////////////////////////////////

function startApp(){

    // disables the send.
    sendBtn.disabled = true;
}

//Checks if something is written. 

function validateData(){

    //Validates the text.
    validateLength(this);

    //Validates the email 
    if(this.type == 'email'){

      validateEmail(this);  
    }
     
    let errors = document.querySelectorAll('.error');

    if(email.value !== '' && subject.value !== '' && message.value!==''){
        if(errors.length === 0){
            sendBtn.disabled = false;
        } 
    }else{
        sendBtn.disabled = true;
    }  
    
    }
 
    //When reset button is clicked.
    function resetForm(e){
        e.preventDefault();
        form.reset();
    }

    //When send button is clicked.

    function sendEmail(e){
     e.preventDefault();
     const spinnerGif = document.querySelector('#spinner');
     spinnerGif.style.display = 'block';

     const sent = document.createElement('img');
     sent.src = 'https://www.dropbox.com/s/0g5h91zyozcbenc/mail.gif?raw=1';
     sent.style.display = 'block';
      var link = `mailto:${email.value}&subject=${escape(subject.value)}&body=${escape(message.value)}`;

     // timer for the spinner and mail.
     setTimeout(function(){
       spinnerGif.style.display = 'none';
       document.querySelector('#loaders').appendChild(sent);   
       setTimeout(function(){
          sent.remove();
          form.reset();
          sendBtn.disabled = true;
          window.location.href = link;
       },1500);
     },3000);
    }

    //Check the lenght in the form inputs.
    function  validateLength(campo){
        
        if(campo.value.length > 0){
            campo.style.borderBottomColor = 'green';
            campo.classList.remove('error');
        }else{
            campo.style.borderBottomColor = 'red';
            campo.classList.add('error');
        }

    }

    function validateEmail(campo){
        const message = campo.value;
        if(message.indexOf('@') !==-1){
            campo.style.borderBottomColor = 'green';
            campo.classList.remove('error');
        }else{
            campo.style.borderBottomColor = 'red';
            campo.classList.add('error');
        }
    }

 /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {

  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  
  prevScrollpos = currentScrollPos;
}   


const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
