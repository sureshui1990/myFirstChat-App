const app = require('express')();
const http = require('http').createServer(app);
const port = 5000;

app.get('/', (req,res) => {
    res.send('<h2>Hello world</h2>');
})

http.listen(port, () => (console.log(`Listening on * ${port}`)));