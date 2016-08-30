let express = require('express')
let jwt = require('express-aad-jwt')
let bodyParser = require('body-parser')
let cors = require('cors')
let shortid = require('shortid')

let app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(jwt({}))

let courses = [
  { id: 1, name: 'Dependency Injection.... The route of all evil', author: 'James Neal', description: `A wild look into how DI works.... or doesn't` },
  { id: 2, name: 'Dependency Injection.... The route of all evil', author: 'James Neal', description: `A wild look into how DI works.... or doesn't` },
  { id: 3, name: 'Dependency Injection.... The route of all evil', author: 'James Neal', description: `A wild look into how DI works.... or doesn't` },
  { id: 4, name: 'Dependency Injection.... The route of all evil', author: 'James Neal', description: `A wild look into how DI works.... or doesn't` }
]

app.get('/course/list', (req, res) => {
  res.json(courses)
})

app.post('/course/add', (req, res) => {
  var course = req.body
  course.id = shortid.generate()

  courses.push(course)

  res.send('OK')
})

app.listen(4301)
