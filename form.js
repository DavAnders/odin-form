const passwordInput = document.getElementById("pword");
const confirmInput = document.getElementById("confirm");
const passwordError = document.getElementById("passwordError");

function validatePasswords() {
  const password = passwordInput.value;
  const confirm = confirmInput.value;

  if (password === confirm) {
    passwordInput.style.border = "1px solid #e5e7eb";
    confirmInput.style.border = "1px solid #e5e7eb";
    passwordError.style.display = "none";
  } else {
    passwordInput.style.border = "1px solid red";
    confirmInput.style.border = "1px solid red";
    passwordError.style.display = "block";
  }
}

passwordInput.addEventListener("input", validatePasswords);
confirmInput.addEventListener("input", validatePasswords);
