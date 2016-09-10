var router = require('express').Router()
var shortid = require('shortid')

let devs = []

router.get('/list', (req, res) => {
  res.json(devs)
})

.get('/list/:term', (req, res) => {
  let term = req.params.term.toLowerCase()
  let filtered = devs.filter(d => d.name.toLowerCase().indexOf(term) > -1)

  res.json(filtered)
})

.get('/check', (req, res) => {
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

.get('/:id', (req, res) => {
  let dev = devs.filter(d => d.id == req.params.id)[0]

  res.json(dev)
})

module.exports = router
