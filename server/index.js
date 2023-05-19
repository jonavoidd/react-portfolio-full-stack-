const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const db = require('./config/database')

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/api/insert', (req, res) => {

    const senderEmail = req.body.senderEmail
    const senderSubject = req.body.senderSubject
    const senderMessage = req.body.senderMessage

    const sqlInsert = "INSERT INTO contact_reach (user_email, subject, message) VALUES (?, ?, ?)"
    db.query(sqlInsert, [senderEmail, senderSubject, senderMessage], (err, result) => {
        console.log(result)
    })
})

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM contact_reach"
    db.query(sqlSelect, (err, result) => {
        return res.json(result)
    })
})

app.listen(3001, () => {
    console.log("listening to port 3001")
})