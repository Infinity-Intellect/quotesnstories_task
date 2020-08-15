const sql = require('../database/connection/connect')

class User {
    constructor(userId, username, role) {
        this.userId = userId
        this.username = username
        this.role = role
    }
    createNewUser() {
        const dataToInsert = { userId: this.userId, username: this.username, role: this.role }
        return new Promise((resolve, reject) => {
            sql.query(`insert into user_ set ?`, dataToInsert, (err, results) => {
                if (results === undefined) {
                    reject(err)
                }
                else {
                    resolve(results)
                }
            })
        })
    }
    static getAll() {
        return new Promise((resolve, reject) => {
            sql.query(`select * from user_`, (err, results) => {
                if (results === undefined) {
                    reject(new Error("Undefined result"))
                }
                else {
                    resolve(results)
                }
            })
        })
    }
    static getWithPermissions() {
        const query = `select accountId,username,emailId,role,isPermitted from user_ inner join permission on user_.userId = permission.userId inner join
        account on user_.userId = account.accountId where role='user' `
        return new Promise((resolve, reject) => {
            sql.query(query, (err, results) => {
                if (results === undefined)
                    reject(err)
                else
                    resolve(results)
            })
        })
    }
}
module.exports = User