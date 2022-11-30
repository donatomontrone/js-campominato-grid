// Consegna:
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
//===============================================================//
//===========================FUNZIONI============================//
//===============================================================//

function getNewElement(parentElement, element) {
    const newElement = document.createElement(element);
    parentElement.append(newElement);
    return newElement;
    }


//===============================================================//
const mainElement = document.querySelector('main');
const buttonElement = document.querySelector('button');

let gridElement = getNewElement(mainElement, 'div');
gridElement.classList.add('d-flex','flex-wrap', 'grid');

buttonElement.addEventListener('click', function(){
    gridElement.innerHTML = "";
    for (let index = 1; index <= 100; index++) {
        let newSquare = getNewElement(gridElement, 'div');
        let newP = getNewElement(newSquare, 'p');
        newP.innerText = index;
        newSquare.classList.add('square', 'd-flex',);
        newP.classList.add('m-auto');
        newSquare.addEventListener('click', function(){
            newSquare.classList.toggle('active');
            console.log(`Hai cliccato la cella ${index}`)
        })
    }
})










