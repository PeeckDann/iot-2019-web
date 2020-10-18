import{
    Seafood, addSeafood
} from './seafood.js';

const searchButton = document.getElementById('search-button');
const clearButton = document.getElementById('clear-button');

const sortButton = document.getElementById('sort-button');
const countButton = document.getElementById('count-button');
const addButton = document.getElementById('temp-add-btn');

var seafoodList= [];
var idCounter = 1;

addButton.addEventListener('click', (event) => {
    event.preventDefault();

    var id = idCounter;
    idCounter += 1;

    var name = `Seafood #${id}`;
    var description = 'This is some Seafood';
    var price = Math.floor(Math.random() * 1999);

    var seafood = new Seafood(id, name, description, price);

    seafoodList.push(seafood);

    addSeafood({id, name, description})
    })

countButton.addEventListener('click', (event) => {
    event.preventDefault();

    var totalPrice = 0

    for (var i = 0; i < seafoodList.length; i++){
        totalPrice += seafoodList[i].getPrice();
    }

    document.getElementById('total-price').innerText = '$' + totalPrice;
})

sortButton.addEventListener('click', (event) => {
    event.preventDefault();

    sortButton.classList.toggle('active');
    document.getElementById('sort-button--element').classList.toggle('active');

    itemsList.sort((a, b) => b.getPrice() - a.getPrice());
})