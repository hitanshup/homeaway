const express = require('express')
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/favicon.ico', (req, res) => {
    res.sendStatus(204);
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Listening on ' + port);
});