var showPaswordBtn = document.querySelector(".visibility-btn-password");
var passwordInput = document.getElementById("login-password");

showPaswordBtn.style.cursor = "pointer"

showPaswordBtn.addEventListener("click", (e)=>{
   e.preventDefault();
   var newPassValue = passwordInput.value.trim();
   if(newPassValue !== ""){
       if(passwordInput.type == "text"){
           passwordInput.type = "password"
       }
       else{
           passwordInput.type = "text"
    
       }
   }
})


function checkBox() {
    var rememberMe = document.querySelector("._rememberMe");
    if (rememberMe.checked) {
        console.log("truee")
        return rememberMe.value = true;
    }
    else {
        console.log("Falseee")
        return rememberMe.value = false;

    }
}

