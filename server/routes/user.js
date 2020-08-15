const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get("/", (req, res) => {
    if (req.userData.role === "admin") {
        User.getWithPermissions().then(results => {
            res.json(results)
        }).catch(err => {
            console.log(err)
            res.send("Error accessing DB")
        })
    }
    else {
        res.status(403).send("You do not have access!")
    }

})

module.exports = router