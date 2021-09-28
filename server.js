const express = require("express")
const path = require("path")
const app = express()

app.use(express.json())

const Rollbar = require("rollbar")

const rollbar = new Rollbar({
    accessToken:'',
    captureUncaught: true,
    captureUnhandledRejections: true
})

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
    rollbar.info("Html is doing its job")
})

const port = process.env.PORT || 4242

app.use(rollbar.errorHandler())

app.listen(port, () => console.log(`Jackie Robinson was ${port}`))