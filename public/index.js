const axios = require("axios")

let baseURL = 'https://monitor-this-app.herokuapp.com'
let button = document.querySelector('button')

function criticalBtn (){
    axios.get(baseURL + '/critical')
    .then(res => {
        console.error(err)
    })
}

button.addEventListener('click', criticalBtn())