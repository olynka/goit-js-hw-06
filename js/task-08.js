const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    

    const formSecondEl = event.currentTarget.elements;
    const email = formSecondEl.email.value;
    const password = formSecondEl.password.value;

  if (email === "" || password === "") {
   alert("Please fill in all the fields!");
  }
  else {
      const infoForm = {
          email,
          password,
      }
        console.log(infoForm);
  infoForm.reset();
}

}
