require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000

//ROUTES

const userRoutes = require('./api/UserRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.use('/users', userRoutes)

mongoose.connect(process.env.MONGODB, {useUnifiedTopology: true})
.then(()=> {

    app.listen(port, () => {
        console.log('Connected to the database')
    })
}).catch(err => console.log(err))