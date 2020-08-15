const express = require('express')
const router = express.Router()
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const Account = require('../models/Account')
const User = require('../models/User')
const Permission = require('../models/Permission')

router.post("/create", (req, res) => {
    const { email, username, password, role } = req.body
    var accountId = crypto.randomBytes(16).toString('hex')
    let newAccount = new Account(accountId, email, password)
    let newUser = new User(accountId, username, role)
    let newPermission = new Permission(accountId, role === "admin" ? true : false)
    newAccount.createNewAccount().then(results => {
        if (results.affectedRows > 0)
            return true
        else
            return false
    }).then((canProceed) => {
        if (canProceed) {
            newUser.createNewUser().then(results => {
                if (results.affectedRows > 0)
                    return true
                else
                    return false
            }).then((canProceed) => {
                if (canProceed) {
                    newPermission.createNewPermissionUser().then(results => {
                        res.json(results)
                    }).catch(err => {
                        console.log(err)
                        res.json({ "Error": "Permission SQL error" })
                    })
                }
            }).catch(err => {
                console.log(err)
                res.json({ "Error": "User SQL Error" })
            })
        }
    }).catch(err => {
        console.log(err)
        res.json({ "Error": "Account SQL error" })
    })
})

router.post("/login", (req, res) => {
    const { email, password } = req.body
    Account.login(email, password).then(async (response) => {
        const accessToken = await jwt.sign({ accountId: response[0].accountId, role: response[0].role }, process.env.ACCESS_TOKEN_SECRET)
        response[0].token = accessToken
        res.json(response[0])
    }).catch(err => {
        console.log(err)
        res.json({ 'error': 'Error in loggin in' })
    })
})
module.exports = router