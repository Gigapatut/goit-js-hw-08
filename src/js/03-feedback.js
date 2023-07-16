import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const userPrints = document.querySelector(".feedback-form");

let email = document.querySelector('.feedback-form input')

let message = document.querySelector('.feedback-form textarea')

userPrints.addEventListener("submit", handleSubmit);

formCheck();

function handleInput(event) {   
    const {
        elements: { email, message }
    } = event.currentTarget;

    const print = {Email: email.value, Message: message.value}
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(print));
}
userPrints.addEventListener('input', handleInput);
userPrints.addEventListener('input', throttle(handleInput), 500);

function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, message }
    } = event.currentTarget;
  
    const print = {Email: email.value, Message: message.value}
    console.log(print)  
   
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function formCheck() {
    
    const savedInput = localStorage.getItem(STORAGE_KEY);
    
    print = JSON.parse(savedInput);
    
    if(savedInput) {
        email.value = print.Email;
        message.value = print.Message        
    }else{
        email.value = "";
        message.value = ""
    }
}

