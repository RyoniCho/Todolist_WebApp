const loginInput=document.querySelector("#login-form input");
const loginForm=document.querySelector('#login-form');
const greeting=document.querySelector("#greeting");


const HIDDEN_CLASS_NAME="hidden"; 
const USERNAME_KEY="username";

function OnLoginFormSubmit(event)
{
    console.log("OnLoginFormSubmit");
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    const userName=loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName);

    ShowGreeting();
   
} 

function ShowLoginForm()
{
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.addEventListener("submit",OnLoginFormSubmit);

}

function ShowGreeting()
{
   
    const userName=localStorage.getItem(USERNAME_KEY);
    greeting.innerText=`Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASS_NAME);
}


if(localStorage.getItem(USERNAME_KEY)===null)
{
    console.log("username null");
    ShowLoginForm();
}
else
{
    console.log("username is not null");
    ShowGreeting(); 
}
