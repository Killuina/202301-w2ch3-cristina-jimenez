// PROYECTO AirlinesPRO

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

//Recoge el nombre de usuario y muenstra la info de los vuelos
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
        ", por favor, haga click en aceptar para ver toda la información disponible sobre vuelos de hoy (se mostrará por consola)"
    );
    allInfo();
  }
};

//Muestra todos los vuelos
const showAllFlights = () => {
  const allFlightsMessage = (flight) => {
    let scale = "";
    if (flight.scale === true) {
      scale = "y tiene 1 escala";
    } else {
      scale = "y no tiene ninguna escala";
    }
    console.log(
      `El vuelo con origen ${flight.from} y destino ${flight.to}, tiene un coste de ${flight.cost}€, ${scale}, ID: ${flight.id}`
    );
  };
  flights.forEach((flight) => allFlightsMessage(flight));
};
//Muestra el coste medio de los vuelos
const showAverageCost = () => {
  let total = [];
  let average = 0;
  flights.forEach((flight) => total.push(flight.cost));
  average = total.reduce((a, b) => a + b) / flights.length;
  console.log(`La media de precios de los vuelos de hoy es ${average}€`);
};
//Muestra cuantos vuelos tienen escala
const showScales = () => {
  let counter = 0;
  flights.forEach((flight) => {
    if (flight.scale === true) {
      counter++;
    }
  });
  console.log("Hay un total de " + counter + " vuelos con escalas hoy.");
};

//Muestra el destino de los últimos 5 vuelos
const showLastFiveFlights = () => {
  let lastFiveFlights = flights.filter(
    (flight) => flight.id >= flights.length - 5
  );
  console.log(`Aquí tiene el destino de los últimos 5 vuelos:
${lastFiveFlights[0].to}
${lastFiveFlights[1].to}
${lastFiveFlights[2].to}
${lastFiveFlights[3].to}
${lastFiveFlights[4].to}
  `);
};

//Muestra toda la información anterior dentro de la funcion checkUserName
const allInfo = () => {
  showAllFlights();
  showAverageCost();
  showScales();
  showLastFiveFlights();
};
//Selecciona si eres admin o user y ejecuta sus respectivas funciones
const checkRole = () => {
  let questionRole = confirm(
    "Por favor, indique si es ADMIN (presione aceptar) o USER (presione cancelar)"
  );
  if (questionRole) {
    roleAdmin();
  } else {
    checkPrice();
  }
};
//Ejecuta las dos funciones de admin
const roleAdmin = () => {
  let questionAdmin = confirm(
    "Presione ACEPTAR para añadir vuelos, presione CANCELAR para eliminar vuelos"
  );

  if (questionAdmin) {
    generateFlight();
  } else {
    deleteFlight();
  }
};
//Resetea el proceso en las diferentes funcionalidades dependiendo de si el usuario es admin o user y permite cancelar para salir
const resetProcess = (role) => {
  const resetQuestion = confirm(
    "Presione ACEPTAR para realizar otra operacion o CANCELAR para salir"
  );
  if (resetQuestion && role === "admin") {
    roleAdmin();
  } else if (resetQuestion && role === "user") {
    checkPrice();
  } else {
    alert("¡Hasta otra!");
  }
};

//Generador de vuelos en el role admin
const generateFlight = () => {
  let newFlight = {
    id: 0,
    to: "",
    from: "",
    cost: 0,
    scale: false,
  };

  let lastFlightIndex = flights.length - 1;
  if (flights.length === 15) {
    alert(
      "Ha alcanzado el límite de vuelos, para poder añadir más vuelos tiene que eliminar uno creado anteriormente"
    );
    roleAdmin();
  } else {
    newFlight.id = flights[lastFlightIndex].id + 1;
    do {
      newFlight.to = prompt(
        "Por favor introduzca un lugar de destino (no pueden ser valores numéricos)"
      );
    } while (
      newFlight.to === "" ||
      newFlight.to === null ||
      newFlight.to === " " ||
      !isNaN(Number(newFlight.to))
    );

    do {
      newFlight.from = prompt(
        "Por favor introduzca un lugar de origen (no pueden ser valores numéricos)"
      );
    } while (
      newFlight.from === "" ||
      newFlight.from === null ||
      newFlight.from === " " ||
      !isNaN(Number(newFlight.from))
    );

    do {
      newFlight.cost = Number(
        prompt("Por favor, introduzca un precio (deben ser valores numéricos)")
      );
    } while (
      newFlight.cost === 0 ||
      newFlight.to === null ||
      isNaN(newFlight.cost)
    );

    let newScale = confirm(
      "Seleccione ACEPTAR para añadir una escala o CANCELAR para no añadir ninguna escala"
    );
    if (newScale) {
      newFlight.scale = true;
    } else {
      newFlight.scale = false;
    }
    flights.push(newFlight);
    alert("El vuelo ha sido añadido correctamente");
    console.log("LISTA ACTUALIZADA:");
    showAllFlights();
    resetProcess("admin");
  }
};

//Borrador de vuelos en el rol admin
const deleteFlight = () => {
  console.log("LISTA:");
  showAllFlights();
  let idDeletedFlight = prompt(
    `Puede observar la lista de vuelos en la consola.
     Por favor, introduzca el ID del vuelo que desea eliminar.`
  );
  if (
    isNaN(Number(idDeletedFlight)) ||
    idDeletedFlight === "" ||
    idDeletedFlight === " "
  ) {
    alert("Por favor, introduzca solo valores numéricos");
    deleteFlight();
  } else {
    for (let i = 0; i < flights.length; i++) {
      if (flights[i].id === Number(idDeletedFlight)) {
        flights.splice([i], 1);
      }
    }
    alert(
      "Vuelos eliminados correctamente, pulse ACEPTAR para ver la lista actualizada por consola"
    );
    console.log("LISTA ACTUALIZADA:");
    showAllFlights();
    resetProcess("admin");
  }
};
//Buscador de precios en el rol user
const checkPrice = () => {
  let userPrice = Number(
    prompt(
      "Bienvenido al buscador de precios, por favor introduza un valor a continuación para hacer la búsqueda. (los resultados se mostrarán por consola)"
    )
  );
  let filteredPriceFlights = flights.filter(
    (flight) => flight.cost <= userPrice
  );
  if (isNaN(userPrice) || userPrice === 0) {
    alert("Los valores introducidos no son correctos.");
    checkPrice();
  } else if (filteredPriceFlights.length === 0) {
    alert("Lo sentimos, no hay vuelos con ese precio");
    checkPrice();
  } else {
    for (i = 0; i < filteredPriceFlights.length; i++) {
      console.log(
        `El vuelo con origen ${filteredPriceFlights[i].from} y destino ${filteredPriceFlights[i].to}, tiene un coste de ${filteredPriceFlights[i].cost}€.`
      );
    }
    resetProcess("user");
  }
};

//Ejecuta toda la aplicación
const startAirlines = () => {
  checkUserName();
  checkRole();
};

startAirlines();
