const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const mongoose = require("mongoose")

var session = require("express-session")

const app = express()

mongoose.connect('mongodb+srv://danilo:oLgo7PtkUorK22VF@cluster0.qiixdaa.mongodb.net/?retryWrites=true&w=majorit',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Conectado Com Sucesso!")
    }).catch((err) => {
        console.log(err.message)
    })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(5000, () => {
    console.log('Server Rodando!')
})