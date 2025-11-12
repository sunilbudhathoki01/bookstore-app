import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
const [email, setEmail] = React.useState('')
const [password, setPassword] = React.useState('')
const [confirm, setConfirm] = React.useState('')
const [error, setError] = React.useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!email) return setError('Email is required')
    if (password.length < 6) return setError('Password must be at least 6 characters')
    if (password !== confirm) return setError('Passwords do not match')
    // TODO: replace with real signup logic (API call, context update, etc.)
    console.log('Signup payload', { email, password })
}

return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Create an account</h2>

            {error && <div className="text-red-600 mb-3">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full mt-1 px-3 py-2 border rounded-md outline-none"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full mt-1 px-3 py-2 border rounded-md outline-none"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Confirm password</label>
                    <input
                        type="password"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        placeholder="Confirm your password"
                        className="w-full mt-1 px-3 py-2 border rounded-md outline-none"
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-pink-600 text-white rounded-md px-4 py-2 hover:bg-pink-900">
                        Sign up
                    </button>
                    <Link to="/" className="text-blue-600">
                        Have an account? Log in
                    </Link>
                </div>
            </form>
        </div>
    </div>
)
}

export default Signup
