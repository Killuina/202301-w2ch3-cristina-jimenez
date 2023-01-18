class Screen {
  constructor(formerNumberDisplayed, currentNumberDisplayed) {
    this.currentNumberDisplayed = currentNumberDisplayed;
    this.formerNumberDisplayed = formerNumberDisplayed;
    this.calculation = new Calculator();
    this.typeOfCalculation = undefined;
    this.currentNumber = "";
    this.formerNumber = "";
    this.signs = {
      add: "+",
      divide: "/",
      multiply: "*",
      substract: "-",
    };
  }

  addNewNumber(number) {
    if (this.currentNumber === "." || this.currentNumber.length > 10) return;
    this.currentNumber = this.currentNumber.toString() + number.toString();
    this.displayNumbers();
  }

  displayNumbers() {
    this.currentNumberDisplayed.textContent = this.currentNumber;
    this.formerNumberDisplayed.textContent = `${this.formerNumber} ${
      this.signs[this.typeOfCalculation] || ""
    } `;
  }

  delete() {
    this.currentNumber = this.currentNumber.toString().slice(0, -1);
    this.displayNumbers();
  }

  deleteAll() {
    this.currentNumber = "";
    this.formerNumber = "";
    this.typeOfCalculation = undefined;
    this.displayNumbers();
  }

  compute(type) {
    this.typeOfCalculation !== "equal" && this.calculate();
    this.typeOfCalculation = type;
    this.formerNumber = this.currentNumber || this.formerNumber;
    this.currentNumber = "";
    this.displayNumbers();
  }

  calculate() {
    const formerNumberParsed = parseFloat(this.formerNumber);
    const currentNumberParsed = parseFloat(this.currentNumber);
    if (isNaN(formerNumberParsed) || isNaN(currentNumberParsed)) return;
    this.currentNumber = this.calculation[this.typeOfCalculation](
      formerNumberParsed,
      currentNumberParsed
    );
  }
  squareRoot() {
    this.currentNumberDisplayed.textContent = `${this.currentNumber} √`;
    const squareRootResult = Math.sqrt(parseFloat(this.currentNumber));
    if (isNaN(squareRootResult)) return;
    this.formerNumber = Math.sqrt(parseFloat(this.currentNumber));
    this.currentNumber = "";
  }
}
