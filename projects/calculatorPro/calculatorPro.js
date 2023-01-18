//CALCULADORA PRO

// Fix de los decimales
function fixDec(num) {
  if (num % 1 != 0) {
    return num.toFixed(3);
  }
  return parseInt(num);
}

let calculoOperaciones = [];
let valoresTotalesIntroducidos = [];

// Funcion principal

function calculadoraPRO() {
  //Funcion para volver a empezar
  const repetirCalculadora = () => {
    if (
      confirm(
        `Presione ACEPTAR para introducir nuevos números o CANCELAR para salir de la calculadora`
      )
    ) {
      return calculadoraPRO();
    } else {
      alert("¡Tenga un buen día!");
    }
  };

  // Funcion que recoge los números

  let introdNum = () => {
    let numeros;
    let numerosTotales = [];
    do {
      numeros = Number(prompt("Por favor, introduzca un número"));
      if (isNaN(numeros)) {
        alert(
          "Los valores introducidos no son correctos, por favor introduzca solo valores numéricos"
        );
      } else if (numerosTotales.length < 1 && numeros === 0) {
        alert("Debes introducir al menos un número");
        return repetirCalculadora();
      } else if (numeros !== 0) {
        numerosTotales.push(numeros);
      }
    } while (numeros !== 0);
    return numerosTotales;
  };

  valoresTotalesIntroducidos = introdNum();

  //Funcion que realiza las operaciones

  const operaciones = () => {
    let resultado = [];

    if (valoresTotalesIntroducidos.length > 1) {
      const suma = fixDec(valoresTotalesIntroducidos.reduce((a, b) => a + b));
      const resta = fixDec(valoresTotalesIntroducidos.reduce((a, b) => a - b));
      const multiplicación = fixDec(
        valoresTotalesIntroducidos.reduce((a, b) => a * b)
      );
      const divisón = fixDec(
        valoresTotalesIntroducidos.reduce((a, b) => a / b)
      );

      resultado.push(`
SUMA: ${suma}
RESTA: ${resta}
MULTIPLICACIÓN: ${multiplicación}
DIVISÓN: ${divisón}`);
    } else {
      resultado.push(
        "RAÍZ: " + fixDec(Math.sqrt(valoresTotalesIntroducidos[0]))
      );
    }
    return resultado;
  };

  calculoOperaciones = operaciones();

  alert(`RESULTADOS:
  ${calculoOperaciones}
  `);

  repetirCalculadora();
}
calculadoraPRO();
