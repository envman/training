let express = require('express')
let jwt = require('express-aad-jwt')
let bodyParser = require('body-parser')
let cors = require('cors')
let shortid = require('shortid')

let app = express()

let devs = []

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

app.listen(4300)
