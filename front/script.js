const fetch = require('node-fetch');
let url = 'https://www.augusta.com/masters/players';
const f = () => fetch(url)
.then(r => r.json())
.then(data => {
    console.log(data.querySelector('h1'))
})
f()