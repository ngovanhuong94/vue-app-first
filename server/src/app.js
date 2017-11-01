const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.post('/register', (req, res) => {
  res.send({
    message: `hello ${req.body.email}`
  })
})

app.listen(process.env.PORT || 3000, () => console.log("server is running"))
