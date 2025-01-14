/*  esta es el ordende la barajas de cartas
 2C = es de Treboles
 2D = es de diamantes
 2H = es de corazones
 2S =  es de espadas
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

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

    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
};

crearDeck();

//esta funcion me permite tomar una carta del deck
const pedirCarta = () => {
    // console.log(deck); aqui se muestra la baraja de cartas
    // const carta = desck.unshift();

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();

    console.log(carta); // carta debe ser de la baraja
    console.log(deck);
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










