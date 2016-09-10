var router = require('express').Router()
var shortid = require('shortid')

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

router.get('/list', (req, res) => {
  res.json(courses)
})

.get('/:id', (req, res) => {
  var course = courses.filter(c => c.id == req.params.id)[0]

  res.json(course)
})

.post('/add', (req, res) => {
  var course = req.body
  course.id = shortid.generate()

  courses.push(course)

  res.send('OK')
})

module.exports = router
