let express = require('express')
let jwt = require('express-aad-jwt')
let bodyParser = require('body-parser')
let cors = require('cors')
let shortid = require('shortid')

let app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(jwt({}))

app.use('/dev', require('./routes/dev'))
app.use('/course', require('./routes/course'))
app.use('/badge', require('./routes/badge'))

app.listen(4300)
