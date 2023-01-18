const number1 = prompt(`PROYECTO CALCULADORA.
Por favor, introduzca un número:`);
const number2 = prompt(`Por favor, introduzca un segundo número:
(si solo ha introducido un número, se calculará automáticamente la raíz cuadrada de este)`);

if (
  (isNaN(number1) || number1 === null || number1 == "" || number1 === " ") &&
  number2 > 0
) {
  alert(`La raíz cuadrada de ${number2} es ${Math.sqrt(number2).toFixed(3)}`);
} else if (
  number1 > 0 &&
  (isNaN(number2) || number2 === null || number2 === "" || number2 == " ")
) {
  alert(`La raíz cuadrada de ${number1} es ${Math.sqrt(number1).toFixed(3)}`);
} else if (isNaN(number1) || isNaN(number2)) {
  alert(
    "Los valores introducidos no son correctos, por favor introduzca sólo valores númericos"
  );
} else if (number1 === null && number2 === null) {
  alert("ERROR: no se ha introducido ningún número");
} else {
  function suma(number1, number2) {
    resultados.push(Number(number1) + Number(number2));
  }
  function resta(number1, number2) {
    resultados.push(Number(number1) - Number(number2));
  }
  function multiplicacion(number1, number2) {
    resultados.push(Number(number1) * Number(number2));
  }
  function division(number1, number2) {
    resultados.push(Number(number1) / Number(number2));
  }

  const resultados = [];
  suma(number1, number2);
  resta(number1, number2);
  multiplicacion(number1, number2);
  division(number1, number2);

  alert(`PRIMER NÚMERO: ${number1} SEGUNDO NÚMERO: ${number2}
  RESULTADOS:
  Suma = ${resultados[0].toFixed(3)}
  Resta = ${resultados[1].toFixed(3)}
  Multiplicación = ${resultados[2].toFixed(3)}
  División = ${resultados[3].toFixed(3)}`);
}
