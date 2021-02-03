const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASS}@cluster0.rwsfd.mongodb.net/doctorsportalDB?retryWrites=true&w=majority`;

const app = express();

const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());




const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("doctorsportalDB").collection("appoinment");
    app.post('/addAppoinment', (req, res) => {
        const appoinment = req.body;

        collection.insertOne(appoinment)
        .then((response) => {
            if (response.insertedCount >= 1) {
                res.send("Appoinment Added Successfully")
            }
        })
    });
});


app.get('/', (req, res) => {
    res.send('Doctors Portal Backend')
});



app.listen(process.env.PORT || port);