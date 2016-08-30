var express = require('express')
var jwt = require('express-aad-jwt')
var bodyParser = require('body-parser')
var cors = require('cors')
var shortid = require('shortid')

var app = express()

var devs = [
  // { id: '1', name: 'Robert Gill', xp: '2000' },
  // { id: '2', name: 'James Neal', xp: '1800' },
  // { id: '3', name: 'Reiss Jarvis', xp: '1700' },
  // { id: '4', name: 'Matthew Baylon', xp: '1600' },
  // { id: '5', name: 'Steve Tsang', xp: '1337' },
  // { id: '6', name: 'Kevin Lee', xp: '1300' },
  // { id: '7', name: 'Sam Pearsall', xp: '1200' },
  // { id: '8', name: 'Craig Mellon', xp: '1100' }
]

app.use(cors())
app.use(bodyParser.json())
app.use(jwt({}))

app.get('/dev/list', (req, res) => {
  res.json(devs)
})

app.get('/dev/list/:term', (req, res) => {
  let term = req.params.term.toLowerCase()
  let filtered = devs.filter(d => d.name.toLowerCase().indexOf(term) > -1)

  res.json(filtered)
})

app.get('/dev/check', (req, res) => {
  // req.user.unique_name
  var existing = devs.filter(d => d.unique_name === req.user.unique_name)
  if (existing.length < 1) {
    var dev = {
      id: shortid.generate(),
      unique_name: req.user.unique_name,
      name: req.user.name,
      xp: '0',
      rank: 'Baby Code Monkey',
      email: req.user.upn
    }

    console.log(req.user)

    devs.push(dev)
    res.send('OK')
  }
})

app.get('/dev/:id', (req, res) => {
  let dev = devs.filter(d => d.id == req.params.id)[0]

  res.json(dev)
})

app.post('/dev/:id', (req, res) => {
  let id = req.params.id
  let dev = req.body

  let existing = devs.filter(d => d.id == id)

  if (existing) {
    devs.splice(devs.indexOf(existing), 1, dev)
  } else {
    devs.push(dev)
  }

  res.send('OK')
})

app.listen(4300)
