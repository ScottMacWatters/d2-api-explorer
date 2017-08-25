const express = require('express')
var app = express()

app.all('*', (req, res) => {
    res.json('Hello world!')
})

var port = process.env.PORT || 3000
app.listen(port)
console.log('Listening on port ' + port)