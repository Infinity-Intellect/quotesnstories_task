import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Button } from '@material-ui/core'
import './UserHome.css'
const jwt = require('jwt-decode')
export default function UserHome(props) {
    const [token, setToken] = useState(null)
    const [userData, setUserData] = useState(null)
    const location = useLocation()
    useEffect(() => {
        const token = localStorage.getItem("token")
        const decoded = token ? jwt(token) : null
        if (token && decoded.role === "user") {
            setToken(token)
            setUserData(location.state.userdata)
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
            <div className="logout-container">
                <Button variant="contained" color="primary"
                    onClick={() => { props.history.push("/") }}>Logout</Button>
            </div>
            <div className="button-container">
                <Button variant="contained" style={{ backgroundColor: "green", color: "white" }} size="large">Access Green</Button>
                {userData.isPermitted ? <Button variant="contained" style={{ backgroundColor: "red", color: "white" }} size="large">Access Red</Button> : ""}
            </div>
        </div>
    )
}
