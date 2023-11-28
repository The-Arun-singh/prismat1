'use client'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const user = () => {
    const [newName, setNewName] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const router = useRouter();
    const { id } = router.query;


    const handleSubmit = async (e, id) => {
        e.preventDefault();
        try {
            const body = { newName, newPassword };
            await fetch(`/api/admin/user/${id}`, {
                method: "PATCH",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })

            router.push('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e, id)}>
                <div>
                    <label htmlFor="newName">New Name
                        <input
                            autoFocus
                            type="text"
                            id='newName'
                            onChange={(e) => setNewName(e.target.value)}
                            value={newName}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="newPassword">New Password
                        <input
                            type="text"
                            id='newPassword'
                            onChange={(e) => setNewPassword(e.target.value)}
                            value={newPassword}
                        />
                    </label>
                </div>
                <div>
                    <input
                        disabled={!newName || !newPassword}
                        type="submit"
                        value='Edit'
                    />
                    <button><a href="/">Cancle</a></button>
                </div>
            </form>
        </>
    )
}

export default user