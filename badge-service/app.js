let express = require('express')
let jwt = require('express-aad-jwt')
let bodyParser = require('body-parser')
let cors = require('cors')
let shortid = require('shortid')

let app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(jwt({}))

let badges = [
  { id: '1', name: 'Git Basics' }
]

app.get('/badges/:id', (req, res) => {

  res.json(badges)
})

app.listen(4302)
