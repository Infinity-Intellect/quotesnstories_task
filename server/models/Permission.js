const sql = require('../database/connection/connect')

class Permission {
    constructor(userId, isPermitted) {
        this.userId = userId
        this.isPermitted = isPermitted
    }
    createNewPermissionUser() {
        const dataToInsert = { userId: this.userId, isPermitted: this.isPermitted }
        return new Promise((resolve, reject) => {
            sql.query(`insert into permission set ?`, dataToInsert, (err, results) => {
                if (results === undefined)
                    reject(err)
                else
                    resolve(results)
            })
        })
    }
    static updateUserPermission(userId, newValue) {
        const query = "update permission set isPermitted= ? where userId= ?"
        return new Promise((resolve, reject) => {
            sql.query(query, [newValue, userId], (err, results) => {
                if (results === undefined)
                    reject(err)
                else
                    resolve(results)
            })
        })
    }
}
module.exports = Permission