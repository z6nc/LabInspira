// Variables globales
let cartasUser = [];
export let cartasUser2 = [];
let cartasDelear =[];
let cartasDelear2 =[];

let sumaCartasdelear = 0; // count card 
let sumaCartasUser = 0; // count card

//Cartas Principal
const cartas = {
  "A": 1,  
  "2": 2, 
  "3": 3, 
  "4": 4, 
  "5": 5, 
  "6": 6, 
  "7": 7, 
  "8": 8, 
  "9": 9, 
  "A": 1,  
  "2": 2, 
  "3": 3, 
  "4": 4, 
  "5": 5, 
  "6": 6, 
  "7": 7, 
  "8": 8, 
  "9": 9, 
  "10": 10, 
  "J": 10, 
  "Q": 10, 
  "K": 10
};

// verificar si el jugador gana o pierde
function verificarsuma(sumaCartasDelear, sumaCartasUser) {
  const showMessageUser = document.querySelector(".message-user");
  const showMessageDelear = document.querySelector(".message-delear");

  // Limpiar mensajes anteriores
  showMessageUser.innerHTML = "";
  showMessageDelear.innerHTML = "";

  // Caso en el que ambos superan 21
  if (sumaCartasDelear > 21 && sumaCartasUser > 21) {
    showMessageUser.innerHTML = "Ambos han perdido (Empate)";
    showMessageDelear.innerHTML = "Ambos han perdido (Empate)";
  } else if (sumaCartasDelear > 21) {
    // Si el dealer supera 21, el jugador gana
    showMessageUser.innerHTML = "Ganaste";
    showMessageDelear.innerHTML = "Perdiste";
  } else if (sumaCartasUser > 21) {
    // Si el jugador supera 21, el dealer gana
    showMessageUser.innerHTML = "Perdiste";
    showMessageDelear.innerHTML = "Ganaste";
  } else if (sumaCartasDelear === 21) {
    // Si el dealer tiene 21
    showMessageUser.innerHTML = "Perdiste";
    showMessageDelear.innerHTML = "Ganaste";
  } else if (sumaCartasUser === 21) {
    // Si el jugador tiene 21
    showMessageUser.innerHTML = "Ganaste";
    showMessageDelear.innerHTML = "Perdiste";
  } else if (sumaCartasDelear > sumaCartasUser) {
    // Si el dealer tiene más que el jugador
    showMessageUser.innerHTML = "Perdiste";
    showMessageDelear.innerHTML = "Ganaste";
  } else if (sumaCartasUser > sumaCartasDelear) {
    // Si el jugador tiene más que el dealer
    showMessageUser.innerHTML = "Ganaste";
    showMessageDelear.innerHTML = "Perdiste";
  } else if (sumaCartasUser === sumaCartasDelear) {
    // Si ambos tienen el mismo puntaje
    showMessageUser.innerHTML = "Empate";
    showMessageDelear.innerHTML = "Empate";
  }
}

// Mostrar cartas 
function ViewCards(selector, cartas) {
  let card = document.querySelector(selector); 
  card.innerHTML = ""; // Vacía el contenido antes de agregar nuevos elementos
  cartas.forEach((element) => { 
    card.innerHTML += `<h2 class="stylecard">${element}</h2>`;  
  });
}



// Cartas aleatorias
function cartasRandom(){
  const clavesCartas = Object.keys(cartas); 
  const indiceAleatorio = Math.floor(Math.random() * clavesCartas.length); 
  const cartaAleatoria = clavesCartas[indiceAleatorio]; 
  return {
    valor: cartas[cartaAleatoria],    // Valor de la carta
    nombre: cartaAleatoria            // Nombre de la carta (como "A" o "10")
  }; 
}

function resetGame() {
    location.reload();
}


function saveCardDelear() {
  let cartaDeler = cartasRandom(); // Carta aleatoria
  
  // Agregar el valor de la carta al total del dealer
  cartasDelear.push(cartaDeler.valor);
  sumaCartasdelear += cartaDeler.valor; // Actualizar la suma directamente
  
  
  return {
    sumaCartasdelear,
    cartaNombreDelear: cartaDeler.nombre,
    cardValue: cartasDelear
  };
}

function saveCardUser() {
  const showAddCardUser = document.querySelector(".view-all-card-user");
  const showMessageUser = document.querySelector(".message-user");

  let cartaUser = cartasRandom(); // Carta aleatoria
  
  // Agregar el valor de la carta al total del usuario
  cartasUser.push(cartaUser.valor);
  sumaCartasUser += cartaUser.valor; // Actualizar la suma directamente
  if (sumaCartasUser > 21) {
    showMessageUser.innerHTML = "Perdiste";
    setTimeout(() => {
    resetGame();
    }, 900); 
  }
  
  showAddCardUser.innerHTML = sumaCartasUser; // Mostrar el total del usuario
  
  return {
    sumaCartasUser,
    cartaNombre: cartaUser.nombre,
    cardValue: cartasUser
  };
}

// Delear cartas
function delearCartas(event){
  event.preventDefault();
  const boton = document.getElementById("start"); 
  const btnparar= document.getElementById("stop")
  const btnreset = document.getElementById("reset");
  const showAddCard = document.querySelector(".view-all-card-delear");

  const showMessage =  document.querySelector(".message-delear")

  const showMessageUser =  document.querySelector(".message-user")
  const containerViewCard = document.querySelector(".container-view-card")
 


  boton.addEventListener("click", function(event) {
    event.preventDefault();

    // Guardamos y mostramos la carta del dealer
    const { cartaNombreDelear } = saveCardDelear();
    cartasDelear2.push(cartaNombreDelear);

   
        const { cartaNombre } = saveCardUser();
        cartasUser2.push(cartaNombre); 
        ViewCards(".view-card-user", cartasUser2);
       });


    btnparar.addEventListener("click", function(event) {
    event.preventDefault();
    ViewCards(".view-card-delear", cartasDelear2);
  showAddCard.innerHTML = sumaCartasdelear; // Mostrar el total del dealer
     verificarsuma(sumaCartasdelear , sumaCartasUser)

     setTimeout(() => {
        resetGame();
        }, 2000); 
  });



}
document.addEventListener("DOMContentLoaded", delearCartas);
