var showPaswordBtn = document.querySelector(".visibility-btn-password");
var passwordInput = document.getElementById("login-password");


showPaswordBtn.addEventListener("click", (e)=>{
   e.preventDefault();
   if(passwordInput.type == "text"){
       passwordInput.type = "password"
   }
   else{
       passwordInput.type = "text"

   }
})