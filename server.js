const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) =>{
    res.send('Hellw')
});

app.post('/addAppoinment', (req, res) =>{
    console.log(req.body);
    res.send('Appoinment Added Successfull')
})

app.listen(process.env.PORT || port);