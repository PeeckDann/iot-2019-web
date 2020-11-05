import{
    addSeafood
} from './seafood.js';

import{
    getAllSeafood
} from './crud.js';

const searchButton = document.getElementById('search-button');
const clearButton = document.getElementById('clear-button');

const sortButton = document.getElementById('sort-button');
const countButton = document.getElementById('count-button');

let seafoodList = [];

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

export const fetchAllSeafood = async () => {
    const allSeafood = await getAllSeafood();

    seafoodList = allSeafood;

    update(seafoodList);
};

//non crud content
countButton.addEventListener('click', (event) => {
    event.preventDefault();

    let totalPrice = 0

    for (let i = 0; i < seafoodList.length; i++){
        totalPrice += seafoodList[i].price;
    }

    document.getElementById('total-price').innerText = '$' + totalPrice;
})

sortButton.addEventListener('click', (event) => {
    event.preventDefault();

    sortButton.classList.toggle('active');
    document.getElementById('sort-button--element').classList.toggle('active');

    seafoodList.sort((a, b) => b.price - a.price);
    update(seafoodList);
})

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

//main
fetchAllSeafood();