const formerNumberDisplayed = document.getElementById("former-number");
const currentNumberDisplayed = document.getElementById("current-number");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const deleteButton = document.querySelector(".delete-function");
const deleteAllButton = document.querySelector(".delete-all-function");
const squareRootButton = document.querySelector(".squareRoot");

const screen = new Screen(formerNumberDisplayed, currentNumberDisplayed);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => screen.addNewNumber(button.innerHTML))
);

deleteButton.addEventListener("click", () => screen.delete());

deleteAllButton.addEventListener("click", () => screen.deleteAll());

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => screen.compute(button.value))
);

squareRootButton.addEventListener("click", () => screen.squareRoot());
