const express = require('express')
const router = express.Router()
const Permission = require('../models/Permission')

router.put("/changePermission", (req, res) => {
    const { userId, newValue } = req.body
    if (req.userData && req.userData.role === "admin") {
        Permission.updateUserPermission(userId, newValue).then(results => {
            res.json(results)
        }).catch(err => {
            console.log(err)
            res.json({ "error": "SQL error" })
        })
    }
    else {
        res.status(403).send("Forbidden")
    }
})

module.exports = router