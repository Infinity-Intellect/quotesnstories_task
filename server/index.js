const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001
const authenticateJWT = require('./middleware/auth')
const path = require('path')
require('dotenv').config()
//Routes
const user = require('./routes/user')
const account = require('./routes/account')
const permission = require('./routes/permission')

// app.get("/", (req, res) => {
//     res.send("QuotesNStories server Working")
// })
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(cors())



app.use("/users", authenticateJWT, user)
app.use("/account", account)
app.use("/permission", authenticateJWT, permission)

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})
app.listen(PORT, (err) => {
    if (!err)
        console.log(`Listening on port ${PORT}`)
    else
        console.log(err)
})

