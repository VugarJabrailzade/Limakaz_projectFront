// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener("blur", function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, true)
      })
  })()


  var prefix = document.querySelector(".dropdown-select-prefix");

  prefix.addEventListener("change",(e)=>{
    e.preventDefault();
    var optionValue = e.target.value
    console.log(optionValue)
  })