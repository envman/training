var router = require('express').Router()

let badges = [
  { id: '1', name: 'Git Basics' }
]

router.get('/:id', (req, res) => {
  res.json(badges)
})

module.exports = router
