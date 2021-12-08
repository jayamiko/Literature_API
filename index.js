require("dotenv").config();
const express = require('express')
const cors = require('cors')
const router = require('./src/routes/index')
const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use('/api/v1/', router)
app.use('/upload', express.static('upload'))

app.get('/', function (req, res) {
    res.send({
        message: 'Hello World',
        CLIENT_URL: process.env.CLIENT_URL,
    });
});

app.listen(PORT, () => {
    console.log(('Server Running on Port: ', PORT));
})