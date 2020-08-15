const sql = require('../database/connection/connect')

class Account {
    constructor(accountId, email, password) {
        this.accountId = accountId
        this.email = email
        this.password = password
    }
    createNewAccount() {
        const { accountId, email, password } = this
        const dataToInsert = { accountId: accountId, emailId: email, password: password }
        return new Promise((resolve, reject) => {
            sql.query(`INSERT INTO account SET ?`, dataToInsert, (err, results) => {
                if (results === undefined) {
                    reject(err)
                }
                else {
                    resolve(results)
                }
            })
        })
    }
    static login(email, password) {
        const query = `select accountId,emailId,username,role,isPermitted from account inner 
        join user_ on account.accountId = user_.userId inner join permission on permission.userId = account.accountId 
        where emailId= ? and password= ?`
        return new Promise((resolve, reject) => {
            sql.query(query, [email, password], (err, results) => {
                if (results === undefined)
                    reject(err)
                else {
                    resolve(results)
                }
            })
        })
    }
}

module.exports = Account