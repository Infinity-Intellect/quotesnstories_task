import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import {
    AppBar, Tabs, Tab, Button, TableContainer, TableHead, TableBody, TableRow, TableCell, Table, Switch
} from '@material-ui/core'
import './AdminHome.css'
const axios = require('axios')
const jwt = require('jwt-decode')
export default function AdminHome(props) {
    const [token, setToken] = useState(null)
    const [userData, setUserData] = useState(null)
    const [tab, setTab] = useState(0)
    const [allUsers, setAllUsers] = useState([])
    const location = useLocation()
    const fetchUsers = (jwtToken) => {
        axios.get(`/users`, {
            headers: {
                authorization: jwtToken
            }
        }).then(response => {
            console.log(response.data)
            setAllUsers(response.data)
        }).catch(err => { console.log(err) })
    }
    const changePermission = (user, newValue) => {
        axios.put(`/permission/changePermission`, { userId: user.accountId, newValue: newValue }, {
            headers: {
                authorization: token
            }
        }).then(response => {
            fetchUsers(token)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        const token = localStorage.getItem("token")
        const decoded = token ? jwt(token) : null
        if (token && decoded.role === "admin") {
            setToken(token)
            setUserData(location.state.userdata)
            fetchUsers(token)
        }
        else {
            props.history.push("/")
        }
    }, [props.history, location.state.userdata])
    if (!token) {
        return <div>Loading ...</div>
    }
    return (
        <div>
            <div className="container">
                <AppBar position="static">
                    <Tabs value={tab} onChange={(e, newVal) => { setTab(newVal) }} aria-label="simple tabs example">
                        <Tab label="Home" />
                        <Tab label="Pemissions" />
                    </Tabs>
                </AppBar>
            </div>
            <div className="logout-container">
                <Button variant="contained" color="primary"
                    onClick={() => { props.history.push("/") }}>Logout</Button>
            </div>
            <div className="body-container">
                {tab === 0 && (
                    <div className="button-container">
                        <Button variant="contained" style={{ backgroundColor: "green", color: "white" }} size="large">Access Green</Button>
                        {userData.isPermitted ? <Button variant="contained" style={{ backgroundColor: "red", color: "white" }} size="large">Access Red</Button> : ""}
                    </div>
                )}
                {tab === 1 && (
                    <div className="permission-table">
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell><h2>S.No</h2></TableCell>
                                        <TableCell><h2>Username</h2></TableCell>
                                        <TableCell><h2>Email</h2></TableCell>
                                        <TableCell><h2>Permission</h2></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {allUsers.filter(user => user.accountId !== userData.accountId).map((user, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell component="th" scope="row">
                                                {idx + 1}
                                            </TableCell>
                                            <TableCell>{user.emailId}</TableCell>
                                            <TableCell>{user.username}</TableCell>
                                            <TableCell>
                                                <Switch checked={user.isPermitted === 1 ? true : false} onChange={() => {
                                                    changePermission(user, user.isPermitted === 1 ? 0 : 1)

                                                }} />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                )}
            </div>

        </div>
    )
}
