var express = require('express')
var bodyParser = require('body-parser')

var app = express()

var devs = [
  { id: '1', name: 'Robert Gill' },
  { id: '2', name: 'James Neal' },
  { id: '3', name: 'Reiss Jarvis' },
  { id: '4', name: 'Matthew Baylon' },
  { id: '5', name: 'Steve Tsang' },
  { id: '6', name: 'Kevin Lee' },
  { id: '7', name: 'Sam Pearsall' },
  { id: '8', name: 'Craig Mellon' }
]

app.use(bodyParser.json())

app.get('/dev/list', (req, res) => {
  res.json(devs)
})

app.get('/dev/list/:term', (req, res) => {
  var term = req.params.term.toLowerCase()
  var filtered = devs.filter(d => d.name.toLowerCase().indexOf(term) > -1)

  res.json(filtered)
})

app.get('/dev/:id', (req, res) => {
  var dev = devs.filter(d => d.id == req.params.id)[0]

  res.json(dev)
})

app.post('/dev/:id', (req, res) => {
  var id = req.params.id
  var dev = req.body

  var existing = devs.filter(d => d.id == id)

  if (existing) {
    devs.splice(devs.indexOf(existing), 1, dev)
  } else {
    devs.push(dev)
  }

  res.send('OK')
})

app.listen(8080)
