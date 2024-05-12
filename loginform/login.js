let form = document.getElementById("login");
let passwinput = document.getElementById("passwfield");
let passwinput2 = document.getElementById("passw2field");
let eyeIcon = document.getElementById("eyeicon");
let eyeIcon2 = document.getElementById("eyeicon2");
eyeIcon.addEventListener("click", function () {
  if (passwinput.type === "password") {
    passwinput.type = "text";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    passwinput.type = "password";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
});

eyeIcon2.addEventListener("click", function () {
  if (passwinput2.type === "password") {
    passwinput2.type = "text";
    eyeIcon2.classList.remove("fa-eye-slash");
    eyeIcon2.classList.add("fa-eye");
  } else {
    passwinput2.type = "password";
    eyeIcon2.classList.remove("fa-eye");
    eyeIcon2.classList.add("fa-eye-slash");
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let errors = {};

  let userName = document.getElementById("userfield").value;

  if (userName === "") {
    errors.username = "Username field can not be empty";
  }

  let passw1 = document.getElementById("passwfield").value;
  let passw2 = document.getElementById("passw2field").value;

  if (passw1 === "") {
    errors.passw = "Password field can not be empty";
  }

  if (passw1 !== passw2) {
    errors.passw2 = "Passwords do not match";
  }

  let gender = false;

  this.querySelectorAll(".radio-gender").forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Select your gender";
  }

  let agree = document.getElementById("checkagree").checked;

  if (!agree) {
    errors.agree = "You must agree our terms and conditions";
  }

  this.querySelectorAll(".error-text").forEach((element) => {
    element.innerHTML = " ";
  });

  for (let item in errors) {
    let errorElement = document.getElementById("error-" + item);

    if (errorElement) {
      errorElement.innerText = errors[item];
    }
  }

  if (Object.keys(errors).length === 0) {
    this.submit();
  }
});
