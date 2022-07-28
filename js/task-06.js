const inputEl = document.querySelector("#validation-input");

 inputEl.addEventListener("blur", handlee);
function handlee(ement) {
  
    if (ement.target.value.length === Number(inputEl.dataset.length)){
       inputEl.classList.remove("invalid")
        inputEl.classList.add("valid")
    }
    else {
         inputEl.classList.remove("valid")
            inputEl.classList.add("invalid");
      
        }
   
    }
