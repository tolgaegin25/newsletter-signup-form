const submitButton = document.getElementById("submit-btn");
const userMail = document.getElementById("email");
const errorMessage = document.getElementById("error");
const mainContainer = document.getElementById("main-container");
const successContainer = document.getElementById("success-container");
const sendEmail = document.getElementById("enteredMail");
const dismissButton = document.getElementById("dismiss-btn");

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateEmail(userMail.value)) {
    mainContainer.style.display = "none";
    successContainer.style.display = "flex";
    sendEmail.innerText = userMail.value;
    sendEmail.style.fontWeight="700";
  } else {
    errorMessage.style.display = "block";
    userMail.style.backgroundColor = "##ffe8e6";
    userMail.style.color = "#de746f";
    userMail.style.border = "1px solid #de746f";
  }
});

dismissButton.addEventListener("click", () => {
  successContainer.style.display = "none";
});
