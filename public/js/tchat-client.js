console.log('Ouverte du tchat cote client');
let socket = io();

let sectionLoginArea = document.getElementById('loginArea');
let seectionMessageArea = document.getElementById('messageArea');

let btnmessage = document.getElementById('btnmessage');
let formConnection = document.getElementById('form-connection');
let formMessage = document.getElementById('form-message');
let inputName = document.getElementById('name');
let inputMessage = document.getElementById('message');
let outputMessage = document.getElementById('tchatArea');
formConnection.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Authentification');
    const username = inputName.value;
    socket.emit('newUser', username);
    sectionLoginArea.style.display = "none";
    seectionMessageArea.style.display = "block";

    // socket.emit('newMessage', username);
});

formMessage.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Envoi d\'un Message');
    const message = inputMessage.value;
    socket.emit('newMessage', message);
    inputMessage.textContent= "";
});

socket.on('new-message', (username, message) => {
    console.log('Reception d\'un message');
    console.log(`${username} : ${message}`);
    const monPatagraphe = document.createElement('p');
    monPatagraphe.innerText = `${username} : ${message}`
    outputMessage.appendChild(monPatagraphe);
})