document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".sign_in").classList.remove("display");
});
document.querySelector(".header__btn").addEventListener("click", () => {
  console.log("asdasd");
  document.querySelector(".sign_in").classList.add("display");
});
