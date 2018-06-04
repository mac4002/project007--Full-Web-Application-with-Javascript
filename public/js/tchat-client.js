console.log('Ouverte du tchat cote client');
let socket = io();

let formConnection = document.getElementById('form-connection');
formConnection.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Authentification');
});