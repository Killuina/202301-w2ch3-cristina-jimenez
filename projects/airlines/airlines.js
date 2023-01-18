//PROYECTO: Airlines

const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

const startAirlines = () => {
  const checkUserName = () => {
    let userName = prompt(
      "¡Bienvenido/a al proyecto Airlines! Por favor, introduzca su nombre de usuario a continuación:"
    );

    if (userName === "" || userName === " ") {
      alert("Por favor, introduzca un nombre de usuario");
      checkUserName();
    } else if (userName === null) {
      alert("¡Hasta otra!");
    } else {
      alert(
        "Bienvenido/a " +
          userName +
          ", por favor, haga click en aceptar para ver la información disponible sobre los vuelos de hoy (se mostrará por consola)"
      );
      allInfoAndRestart();
    }
  };

  const showAllFlights = () => {
    for (let i = 0; i < flights.length; i++) {
      let scale = "";
      if (flights[i].scale === true) {
        scale = "y tiene 1 escala";
      } else {
        scale = "y no tiene ninguna escala";
      }
      console.log(
        `El vuelo con origen ${flights[i].from} y destino ${flights[i].to}, tiene un coste de ${flights[i].cost}€, ${scale}`
      );
    }
  };

  const showAverageCost = () => {
    let total = [];
    let average = 0;
    for (let i = 0; i < flights.length; i++) {
      total.push(flights[i].cost);
    }
    average = total.reduce((a, b) => a + b) / flights.length;
    console.log(`La media de precios de los vuelos de hoy es ${average}€`);
  };

  const showScales = () => {
    let counter = 0;
    for (let i = 0; i < flights.length; i++) {
      if (flights[i].scale === true) {
        counter++;
      }
    }
    console.log("Hay un total de " + counter + " vuelos con escalas hoy.");
  };

  const showLastFiveFlights = () => {
    let destination = [];
    for (let i = 5; i < flights.length; i++) {
      destination.push(flights[i].to);
    }
    console.log(`Aquí tiene el destino de los últimos 5 vuelos:
${destination[0]}
${destination[1]}
${destination[2]}
${destination[3]}
${destination[4]}
    `);
  };

  const restartAirlines = () => {
    if (
      confirm(
        "Pesione ACEPTAR para reiniciar Airlines, presione CANCELAR para salir"
      )
    ) {
      startAirlines();
    } else {
      alert("¡Hasta otra!");
    }
  };

  const allInfoAndRestart = () => {
    showAllFlights();
    showAverageCost();
    showScales();
    showLastFiveFlights();
    restartAirlines();
  };
  checkUserName();
};

startAirlines();
