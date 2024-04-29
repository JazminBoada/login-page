const signInBtn = document.querySelector("#signin-btn");
const signUpBtn = document.querySelector("#signup-btn");
const container = document.querySelector(".container");

//Click para para llevar a cabo la animacion de hacer que aparezca sign in o sign up

signUpBtn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

signInBtn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
