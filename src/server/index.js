var path = require('path')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const corsOptions = {
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
}
dotenv.config()
const app = express()

const apiKey = process.env.API_KEY

app.use(express.static('dist'))
app.use(cors(corsOptions))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/key', function(req, res) {
    res.send({yourKey: apiKey})
    console.log('sent apiKey ' + apiKey)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
