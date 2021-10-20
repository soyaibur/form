const email = document.getElementById("email")
const password = document.getElementById("password")
const submit = document.getElementById("submit")
const error = document.getElementById("error")
const form = document.getElementsByClassName("form")[0]

submit.addEventListener("click",(e)=>{
   let messages = []
   if(email.value === "" || email.value === null){
       messages.push("Email needed")
   }
   if(password.value == "password" || password.value < 6){
       messages.push("Need a valid password")
   }
   if(password.value > 20){
       messages.push("your ps should be less than 20")
   }
   if(messages.length > 0){
     e.preventDefault()
     error.innerText = messages.join(", ")
   }
})



