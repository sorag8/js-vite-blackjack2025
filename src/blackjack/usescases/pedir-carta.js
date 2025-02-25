/**
 * Esta funcion extrae una carta del deck
 * @param {Array<String>} deck arreglo de strings (cartas)
 * @returns {String} regresa un string, la carta del deck
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}