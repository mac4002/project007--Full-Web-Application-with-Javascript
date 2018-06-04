module.exports.tchat = function tchat(io) {
io.on('connection', (socket) => {
    console.log('Nouvel utilisateur coonnecté ! ');
    let identity = null;

    socket.on('newUser', (username) => {
        console.log('Authentication cote serveur');
        console.log(username);
        identity = username;
    });
    socket.on('newMessage', (message) => {
        console.log(`${identity} a envoye un message : ${message} `);

        io.emit('new-message', identity, message);

    });
});
}

