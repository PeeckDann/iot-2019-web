import {
    postSeafood
} from './crud.js'

const createButton = document.getElementById('create-button');
const closeModal = document.getElementById('close-modal');
const error = document.getElementById('modal-content');

createButton.addEventListener('click', (event) => {
    event.preventDefault();

    let name = document.getElementById('name-input').value;
    let description = document.getElementById('description-input').value;
    let price = document.getElementById('price-input').value;

    if (name == '' || description == '' || price == ''){
        error.style.display = 'block';
    }

    postSeafood({name, description, price});
})

closeModal.addEventListener('click', (event) => {
    event.preventDefault();

    error.style.display = 'none';
})