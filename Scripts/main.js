import{
    Seafood, addSeafood
} from './seafood.js';

const searchButton = document.getElementById('search-button');
const clearButton = document.getElementById('clear-button');

const sortButton = document.getElementById('sort-button');
const countButton = document.getElementById('count-button');
const addButton = document.getElementById('temp-add-btn');

let seafoodList= [];
let idCounter = 1;

addButton.addEventListener('click', (event) => {
    event.preventDefault();

    let id = idCounter;
    idCounter += 1;

    let name = `Seafood #${id}`;
    let description = 'This is some Seafood';
    let price = Math.floor(Math.random() * 1999);

    let seafood = new Seafood(id, name, description, price);

    seafoodList.push(seafood);

    addSeafood({id, name, description})
    })

countButton.addEventListener('click', (event) => {
    event.preventDefault();

    let totalPrice = 0

    for (let i = 0; i < seafoodList.length; i++){
        totalPrice += seafoodList[i].getPrice();
    }

    document.getElementById('total-price').innerText = '$' + totalPrice;
})

sortButton.addEventListener('click', (event) => {
    event.preventDefault();

    sortButton.classList.toggle('active');
    document.getElementById('sort-button--element').classList.toggle('active');

    seafoodList.sort((a, b) => b.getPrice() - a.getPrice());

    update(seafoodList);
})

function update(list){
    let seafoodContainer = document.getElementById('main-section__products');
    seafoodContainer.innerHTML = '';

    for(let i = 0; i < list.length; i++){
        let id = list[i].id;
        let name = list[i].name;
        let description = list[i].description;
        addSeafood({id, name, description});
    }
}

searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    let request = document.getElementById("search-bar").value;
    let pattern = new RegExp(request);
    let searchedSeafood = seafoodList.filter(seafood => pattern.test(seafood.name));
    update(searchedSeafood);
})

clearButton.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById("search-bar").value = '';
})