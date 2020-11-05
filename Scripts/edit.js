import{
    updateSeafood, getUrlVars
}from './crud.js';

const edit = document.getElementById('edit-button');
const closeModal = document.getElementById('close-modal');
const error = document.getElementById('modal-content');

const id = getUrlVars()["id"];

edit.addEventListener('click', (event) => {
    event.preventDefault();

    let nameInput = document.getElementById('name-input');
    let descriptionInput = document.getElementById('description-input');
    let priceInput = document.getElementById('price-input');

    const getInputValues = () => {
        return {
            id: id,
            name: nameInput.value,
            description: descriptionInput.value,
            price: priceInput.value,
        };
    };

    if (nameInput.value == '' || descriptionInput.value == '' || priceInput.value == ''){
        error.style.display = 'block';
    }

    updateSeafood(id, getInputValues());
})

closeModal.addEventListener('click', (event) => {
    event.preventDefault();

    error.style.display = 'none';
})