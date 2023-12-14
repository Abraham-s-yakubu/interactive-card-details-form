"use strict";
const form = document.getElementById("form");
const email_input = document.getElementById("email-input");
const email_error = document.querySelector(".email-error");
const main_container = document.querySelector(".main-container");
const success_container = document.querySelector(".success-container");
const success_btn = document.querySelector(".success-btn");
const success_mail = document.querySelector(".success-email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate_email();
});
const display_error = function () {
  email_input.classList.add("error");
};
const remove_error = function () {
  email_input.classList.remove("error");
  console.log("working");
};
const display_success = function (mail) {
  main_container.style.display = "none";
  success_container.style.display = "block";
  success_mail.textContent = mail;
};
const remove_sucess = function () {
  main_container.style.display = "flex";
  success_container.style.display = "none";
  email_input.style.borderColor = "hsl(231, 7%, 60%)";
  email_input.style.background = "#fff";
  email_error.textContent = "";
};
// const is_vaild_email = (email) => {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };

// const validate_email = function () {
//   const email_value = email_input.value.trim();
//   if (email_value === "") {
//     email_error.textContent = "email cannot be empty";
//     display_error();
//     return;
//   } else if (!is_vaild_email(email_value)) {
//     email_error.textContent = "Vaild Email Required";
//     display_error();
//     return;
//   }
//   console.log("working");
//   display_success();
// };
const validate_email = function () {
  const email_value = email_input.value.trim();
  if (email_value === "") {
    email_error.textContent = "Vaild Email Required";
    display_error();
    return;
  }
  display_success(email_value);
};
success_btn.addEventListener("click", () => {
  remove_sucess();
});
