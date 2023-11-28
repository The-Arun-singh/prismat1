import React, { useState } from 'react'

const login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        try {
            const body = { name, password };
            await fetch(`/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })


        } catch (err) {
            console.error(err);
        }
    }


    return (
        <>
            <h1>This is login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">New Name
                        <input
                            autoFocus
                            type="text"
                            id='name'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">New Password
                        <input
                            type="text"
                            id='password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </label>
                </div>
                <div>
                    <input
                        disabled={!name || !password}
                        type="submit"
                        value='Login'
                    />
                    <button><a href="/">Back</a></button>
                </div>
            </form>
        </>
    )
}

export default login