

const express = require("express")

const app = express()

app.post('/', function (req, res) {

  res.type('application/json')
// or
// res.set('Content-Type', 'application/json')

    res.send(req.headers);
  });

app.get('/', function (req, res) {
    //console.log(req.headers)
    //res.send(require("./form1"))
    res.sendFile(__dirname+ "/html/form1.html")
  })

app.listen(8081)
