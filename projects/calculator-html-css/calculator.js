class Calculator {
  add(numberOne, numberTwo) {
    return numberOne + numberTwo;
  }

  substract(numberOne, numberTwo) {
    return numberOne - numberTwo;
  }

  multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
  }

  divide(numberOne, numberTwo) {
    if (numberTwo == 0) return "ERROR";
    return numberOne / numberTwo;
  }

  squareRoot(numberOne) {
    return Math.sqrt(numberOne);
  }
}
