"use client"
import React, { useState } from "react";
import { useRouter } from "next/router";

const User = () => {
    const [name, setName] = useState("");
    const router = useRouter();

    const submitData = async (e) => {
        e.preventDefault();
        try {
            const body = { name }
            await fetch(`/api/createUser`, {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body),
            })

            router.push('/')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div>
                <form onSubmit={submitData}>
                    <h1>Create User</h1>
                    <input
                        autoFocus
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        type="text"
                        value={name}
                    />
                    <input
                        disabled={!name}
                        type="submit"
                        value="Create User"
                    />
                    <a href="/">Cancle</a>
                </form>
            </div>
        </>
    )
}

export default User;