/*  esta es el ordende la barajas de cartas
 2C = es de Treboles
 2D = es de diamantes
 2H = es de corazones
 2S =  es de espadas
 */

 let deck        = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

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

    console.log(deck);
 };
 
 crearDeck();