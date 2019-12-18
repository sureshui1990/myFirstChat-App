const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 5000;

app.get('/', (req,res) => {
    res.sendFile(__dirname+'/index.html');
});

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('chat message', (message) => {
        io.emit('chat message', message);
    })
    io.on('disconnection', () => (console.log('User disconnected')));
});

http.listen(port, () => (console.log(`Listening on * ${port}`)));