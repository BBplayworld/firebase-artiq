const axios = require('axios')
const fs = require('fs')

let post = require('./music-4.js').post

post.forEach((item) => {
    axios.get(item.image)
    .then((res) => {
    })
    .catch((err) => {
        let data = `${item.image} - ${item.content[0].data}\n`
        fs.appendFile('./validation-result', data, () => {})
    })
})