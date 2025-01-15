/*  esta es el ordende la barajas de cartas
 2C = es de Treboles
 2D = es de diamantes
 2H = es de corazones
 2S =  es de espadas
 */

 // el deck funciona para majejar la baraja por asi desirlo
let deck = []; // aqui se declara como areglo basio
const tipos = ['C', 'D', 'H', 'S']; // esto son los tipos de cartas 
const especiales = ['A', 'J', 'Q', 'K']; // esto son las cartas especiales 
// aqui se declaran los puntos de los jugadores 
let puntosJugador = 0, 
    puntosComputadora = 0;

// REFERENCIAS HTML
const btnPedir = document.querySelector('#btnPedir');
const divCartasJugador = document.querySelector('#jugador-cartas');
const puntosHtml = document.querySelectorAll('b');


// esta funcion crea el deck de cartas
const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }
   
    deck =  _.shuffle(deck); //sirve para mover o mesclar la baraja de cartas
    
    return deck;
};

crearDeck();


//esta funcion me permite tomar una carta del deck
const pedirCarta = () => {
    //  console.log(deck); //aqui se muestra la baraja de cartas
    // const carta = desck.unshift();
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();

    // console.log(carta); // carta debe ser de la baraja
    // console.log(deck);
    return carta;
};

//  pedirCarta();

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    // if (isNaN(valor)) {
    //     puntos = (valor === 'A') ? 11 : 10 +valor*1; 
    // }
    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1;
};
const valor = valorCarta(pedirCarta());

// eventos
btnPedir.addEventListener('click',() => {

    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHtml[0].innerText = puntosJugador;

    //<img  class="carta" src="assets/cartas/10C.png" alt="carta" class="img-fluid">

    const img = document.createElement('img'); // se crea una imagen de la carta
     img.src=`assets/cartas/${carta}.png`;
     divCartasJugador.append(img); // es lo que perdmite menia el dom para agregar la imagen
     img.classList.add('carta'); // es la clase que se le asigna a la imagen

     if (puntosJugador > 21) {
         console.warn('Lo siento mucho, perdiste');
         btnPedir.disabled = true;
     } else if (puntosJugador === 21) {
         console.warn('21, genial');
         btnPedir.disabled = true;
     }
});










