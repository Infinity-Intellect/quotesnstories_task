import React, { useState, useEffect } from 'react'
import { TextField, Button, Select, MenuItem, Snackbar } from '@material-ui/core'
import './Landing.css'
const axios = require('axios')
export default function Landing(props) {
    const [userData, setUserData] = useState({
        email_r: '',
        password_r: '',
        username_r: '',
        role_r: 'user',
        email_l: '',
        password_l: ''
    })
    const [snackbar, setSnackbar] = useState({ open: false, message: "" })
    const handleRegisterClick = () => {
        const bodyData = {
            email: userData.email_r, username: userData.username_r,
            password: userData.password_r, role: userData.role_r
        }
        if (bodyData.email === "" || bodyData.username === "" || bodyData.password === "" || bodyData.role === "") {
            setSnackbar({ ...snackbar, open: true, message: "Empty Fields !" })
        }
        else {
            axios.post(`/account/create`, bodyData).then(response => {
                if (response.data.affectedRows > 0) {
                    setSnackbar({ ...snackbar, open: true, message: "Success, Please Login" })
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }
    const handleLoginClick = () => {
        const bodyData = { email: userData.email_l, password: userData.password_l }
        if (bodyData.email === "" || bodyData.password === "") {
            setSnackbar({ ...snackbar, open: true, message: "Empty Fields !" })
        }
        else {
            axios.post(`/account/login`, bodyData).then(response => {
                if (response.data && response.data.error) {
                    setSnackbar({ ...snackbar, open: true, message: "Invalid credentials !" })
                }
                else if (response.data) {
                    localStorage.setItem("token", response.data.token)
                    if (response.data.role === "user") {
                        props.history.push({ pathname: "/user", state: { userdata: response.data } })
                    }
                    else if (response.data.role === "admin") {
                        props.history.push({ pathname: "/admin", state: { userdata: response.data } })
                    }
                }
            }).catch(err => {
                console.log(err)
            })
        }

    }
    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        localStorage.removeItem("token")
    }, [])
    return (
        <div className="component-container">
            <Snackbar
                open={snackbar.open}
                onClose={() => { setSnackbar({ ...snackbar, open: false, message: "" }) }}
                message={snackbar.message}
            />
            <div className="register-container">
                <h1 style={{ textAlign: "center" }}>Register</h1>
                <TextField name="email_r" label="Email" variant="outlined" onChange={handleInputChange} />
                <TextField name="password_r" label="Password" type="password" variant="outlined" onChange={handleInputChange} />
                <TextField name="username_r" label="Username" variant="outlined" onChange={handleInputChange} />
                <Select
                    value={userData.role_r}
                    variant="outlined"
                    onChange={(e) => { setUserData({ ...userData, role_r: e.target.value }) }}
                >

                    <MenuItem value={"admin"}>admin</MenuItem>
                    <MenuItem value={"user"}>user</MenuItem>
                </Select>
                <Button variant="contained"
                    color="primary" onClick={handleRegisterClick}>Register</Button>
            </div>
            <div className="login-container">
                <h1 style={{ textAlign: "center" }}>Login</h1>
                <TextField name="email_l" label="Email" variant="outlined" onChange={handleInputChange} />
                <TextField name="password_l" label="Password" type="password" variant="outlined" onChange={handleInputChange} />
                <Button variant="contained"
                    color="secondary" onClick={handleLoginClick}>Login</Button>
            </div>
        </div >
    )
}
