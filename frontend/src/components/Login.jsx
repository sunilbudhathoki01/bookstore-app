import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <h2>Login</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '250px' }}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
        <p style={{ marginTop: '10px' }}>
            Not registered? <Link to="/signup">Sign up</Link>
        </p>
    </div>
)
}

export default Login
