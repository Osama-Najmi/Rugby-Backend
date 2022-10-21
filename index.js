const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors');
const mongoClient = require('mongodb').MongoClient
const app = express()

const port = process.env.PORT || 8080;

app.use(express.json())
app.use(cors())
var database

app.get('/api/teams',(req, res) => {
    
    database.collection('csvs').find({}).toArray((err, result) => {
        if(err) throw error

        const response = {
            data: result
        }

        res.send(response)
    })
})
app.listen(port, () => {
    mongoClient.connect('mongodb+srv://osamanajmi:Osama123@cluster0.povxa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {useNewUrlParser: true}, (error, result) => {
        if(error) throw error
        database = result.db('RugbyAustralia')
        console.log('success')
    })
});