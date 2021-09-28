const express = require("express")
const path = require("path")
const app = express()

app.use(express.json())

const Rollbar = require("rollbar")

const rollbar = new Rollbar({
    accessToken:'067ce9d668bc464086b68e51e87ce0ef',
    captureUncaught: true,
    captureUnhandledRejections: true
})

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
    rollbar.info("Html is doing its job")
})

app.get('/pokemon', (req,res) => {
    try{
        findPokemon()
    } catch (error){
        rollbar.info(error)
    }
})

const port = process.env.PORT || 4242

app.use(rollbar.errorHandler())

app.listen(port, () => console.log(`Jackie Robinson was ${port}`))