const express = require("express")
const path = require("path")
const app = express()

app.use(express.json())
// app.use('/public', express.static(path.join(__dirname, "..public")))

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
        res.status(500)
        rollbar.error('I am broken...')
    }
})

app.get('/critical', (req,res) => {
    res.status(200).send('You MONSTER')
    rollbar.critical("THIS IS CRITICAL")
})

const port = process.env.PORT || 4242

app.use(rollbar.errorHandler())

app.listen(port, () => console.log(`Jackie Robinson was ${port}`))