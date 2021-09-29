
let baseURL = 'https://monitor-this-app.herokuapp.com'
let button = document.querySelector('button')

button.addEventListener('click', () => {
    console.log('click')
    axios.get(baseURL + '/critical')
    .then(res => {
        console.log(res.body)
    })
    .catch(err => {
        console.error(err)
    })
})
