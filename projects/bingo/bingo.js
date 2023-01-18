let userName;
let bingoCard = [];
let randomNumber;
let pickedNumbers = [];
let finalScore = 5000;
let checkLines = false;
let rankingPlayers = [
  { name: "Lady Gaga", score: 300 },
  { name: "Majima Goro", score: 2400 },
  { name: "Ibai Llanos", score: 1000 },
  { name: "Mariano Rajoy", score: 100 },
  { name: "Shulk", score: 700 },
];

const checkUserName = () => {
  do {
    userName = prompt(
      "Bienvenido a 🎲ISDI BINGO🎲 \nPor favor, introduzca su nombre de usuario para comenzar:"
    );
    if (!userName) {
      alert("Por favor, introduzca un nombre de usuario.");
    }
  } while (!userName || userName === "" || userName === " ");
  return userName;
};

const explainRules = () => {
  alert(
    "🎰¡Ya tenemos todo para comenzar!🎰 \n El juego en sí funciona como un bingo tradicional, pero con un sistema de puntuación añadido: \n\n - El jugador comenzará con 5000 puntos. \n - A cada turno que pase, se le restarán 100 puntos. \n - El objetivo es tachar todos los números del cartón en el menor número de turnos posibles, obteniendo así mayor puntuación. \n\n Presione confirmar cuando quiera comenzar. \n                     🍀¡MUCHA SUERTE!🍀"
  );
};

const padToTwo = (number) =>
  number <= 9999 ? `000${number}`.slice(-2) : number;

const generateRandomNumber = () => {
  randomNumber = Math.floor(Math.random() * 49 + 1);
  return randomNumber;
};

const showCard = () => {
  console.clear();
  console.log("          |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|");
  console.log(
    `          |  ${bingoCard[0]}     ${bingoCard[1]}     ${bingoCard[2]}     ${bingoCard[3]}     ${bingoCard[4]}  |`
  );
  console.log(
    `          |  ${bingoCard[5]}     ${bingoCard[6]}     ${bingoCard[7]}     ${bingoCard[8]}     ${bingoCard[9]}  |`
  );
  console.log(
    `          |  ${bingoCard[10]}     ${bingoCard[11]}     ${bingoCard[12]}     ${bingoCard[13]}     ${bingoCard[14]}  |`
  );
  console.log("          |__________________________________|");

  console.log(`PUNTUACION TOTAL: ${finalScore} `);
};

const generateCard = () => {
  do {
    generateRandomNumber();
    if (!bingoCard.includes(padToTwo(randomNumber))) {
      bingoCard.push(padToTwo(randomNumber));
    }
  } while (bingoCard.length < 15);
  showCard();
};

const resetCard = () => {
  let askResetCard = false;
  do {
    bingoCard = [];
    generateCard();
    askResetCard = confirm(
      "¡Aquí tienes tu cartón! \n\n Si deseas quedártelo y empezar el juego, pulsa ACEPTAR. \n\n Si quieres cambiarlo, presiona CANCELAR."
    );
  } while (!askResetCard);
  explainRules();
};

const displayTurn = () => {
  showCard();
  generateRandomNumber();
  do {
    generateRandomNumber();
  } while (pickedNumbers.includes(randomNumber));
  pickedNumbers.push(randomNumber);
  pickedNumbers.sort();
  alert(
    `Ha salido el número...... \n\n     ${randomNumber}\n\n Los números que han salido hasta ahora son: \n ${pickedNumbers}`
  );
  checkMatchingNumbers();
  checkLine();
  checkBingo();
};

const checkMatchingNumbers = () => {
  for (let i = 0; i < bingoCard.length; i++) {
    if (bingoCard[i] == randomNumber) {
      bingoCard[i] = "❌";
      alert(
        " 👏 ENHORABUENA 👏 \n\nTu número coincide con el sacado por el bombo, marcaremos la casilla con una ❌"
      );
      showCard();
    }
  }
};

const checkLine = () => {
  if (
    (bingoCard.slice(0, 5).every((number) => number === "❌") ||
      bingoCard.slice(5, 10).every((number) => number === "❌") ||
      bingoCard.slice(10, 15).every((number) => number === "❌")) &&
    checkLines === false
  ) {
    checkLines = true;
    alert("――――――――――――――LÍNEA――――――――――――――");
  }
};

const checkBingo = () => {
  if (bingoCard.every((number) => number === "❌")) {
    alert(
      `🎊🎊🎊🎊🎊🎊🎊BINGO🎊🎊🎊🎊🎊🎊🎊 \n\n        Tu puntuación final ha sido: ${finalScore}`
    );
    showRanking();
    finishRestartGame();
  } else {
    scoreSystem();
    askTurn();
  }
};

const askTurn = () => {
  let askTurn = confirm(
    "Presione ACEPTAR para pasar al siguiente turno \n                   o            \n Presione CANCELAR para salir"
  );
  if (!askTurn) {
    finishRestartGame();
  }
  if (askTurn) {
    displayTurn();
  }
};

const finishRestartGame = () => {
  let askRestart = confirm(
    "¿Desea volver a empezar? \n\nPresione ACEPTAR para jugar de nuevo\n\nPresione CANCELAR para salir"
  );
  if (!askRestart) {
    alert("¡Muchas gracias por jugar!");
  }
  if (askRestart) {
    pickedNumbers = [];
    finalScore = 5000;
    checkLines = false;
    bingo();
  }
};

const scoreSystem = () => {
  finalScore = finalScore - 100;
};

const showRanking = () => {
  rankingPlayers.push({
    name: userName,
    score: finalScore,
  });
  rankingPlayers.sort((a, b) => (a.score < b.score ? 1 : -1));

  console.log("RANKING:");
  for (let i = 0; i < rankingPlayers.length; i++) {
    console.log(
      `Nombre: ${rankingPlayers[i].name} | Puntuación final: ${rankingPlayers[i].score}`
    );
  }
};

const bingo = () => {
  checkUserName();
  generateCard();
  resetCard();
  displayTurn();
};

bingo();
