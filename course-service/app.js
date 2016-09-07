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
  {
    id: 1,
    name: 'Dependency Injection.... The root of all evil',
    author: 'James Neal',
    skills: ['how to setup dependency injection', 'autofac basics', 'principles of dependency injection'],
    xp: '200',
    time: '2 - 3 hours',
    description: `A wild look into how DI works.... or doesn't`
  },
  {
    id: 2,
    name: 'Git Basics',
    author: 'Robert Gill',
    skills: ['Creating and working with git locally', 'Using remotes to share code', 'how to create and merge branches', 'how to create pull requests'],
    xp: '200',
    time: '2 - 3 hours',
    description: 'A look at the basics of using git'
  },
  {
    id: 3,
    name: 'Javascript Basics',
    author: 'Reiss Jarvis',
    skills: ['how to triple equals', 'how to forget types', 'how to be a cool kid'],
    xp: '200',
    time: '2 - 3 hours',
    description: `How to tame the beast`
  },
  {
    id: 4,
    name: 'Docker Basics',
    author: 'Steve Tsang',
    skills: ['building images', 'running containers'],
    xp: '200',
    time: '2 - 3 hours',
    description: `I put containers in your containers (A container is not a VM!)`
  }
]

app.get('/course/list', (req, res) => {
  res.json(courses)
})

app.get('/course/:id', (req, res) => {
  var course = courses.filter(c => c.id == req.params.id)[0]

  res.json(course)
})

app.post('/course/add', (req, res) => {
  var course = req.body
  course.id = shortid.generate()

  courses.push(course)

  res.send('OK')
})

app.listen(4301)
