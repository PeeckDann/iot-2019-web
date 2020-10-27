const create = document.getElementById('create-button');
const close = document.getElementById('close')
const error = document.getElementById('modal-content')

create.addEventListener('click', (event) => {
    if (document.getElementById('name-input').value == '' || document.getElementById('description-input').value == '' || document.getElementById('price-input').value == ''){
        event.preventDefault();
        error.style.display = 'block';
    }
})

close.addEventListener('click', (event) => {
    event.preventDefault();

    error.style.display = 'none';
})