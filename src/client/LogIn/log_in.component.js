import React from 'react'
import {Link} from 'react-router-dom'

import { Paper } from "@material-ui/core"
import "./log_in.styles.css"

const LogIn = () => {
    
    const initialState = {
        username: '',
        password: ''
    }
    
    const [login, setLogin] = React.useState(initialState)
    
    // pull username and password out
    const {username, password} = login
    
    const handleChange = e => {
        e.preventDefault()
        setLogin({...login, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        console.log('clicked handlesubmit')
        e.preventDefault()
        // connect to backend
        setLogin({
            username: '',
            password: ''
        })
        console.log(login)
    }
        
    return (
        <Paper className="login-container" elevation = {3} >
            <h2 className="login-header">WELCOME</h2>
            <form onSubmit={handleSubmit}>
                <label className="login-label">Username</label>
                <input 
                    name="username"
                    className="login-input"
                    type="text"
                    value={username}
                    onChange={handleChange}
                    placeholder="username"
                />
                <label className="login-label">Password</label>
                <input 
                    name="password"
                    className="login-input"
                    type="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="password"
                />
                <input
                    className="submit-login"
                    value="Log In"
                    type="submit"
                />
                <Link className="link-to-signup" to="../SignUp/sign_up.component.js">Not registered? Click here to sign up</Link>
            </form>
        </Paper>
    )
}

export default LogIn

