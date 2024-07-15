import React, { useEffect } from "react"
import { useState } from "react"
import { Button } from "./Button"
import axios from "axios"

export const Users = () => {
    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState([])

    useEffect(()=> {
        const token = localStorage.getItem("token")
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res=> {
            setUsers(res.data.user)
        })
    }, [filter])


    return (
        <div>
            <div className="font-bold mt-6 text-lg">
                Users
            </div>
            <div className="my-2">
                <input onChange={e=> setFilter(e.target.value)}   type="text" placeholder="Search Users..." className=" border-2 border-black:active w-full px-2" />
            </div>
            <div>
                {users.map(user => <User key={user._id} user={user} />)}
            </div>

        </div>
    )
}

function User({ user }) {
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-1">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>

            </div>
            <div className="flex flex-col justify-center h-full">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-full">
            <Button label = {"Send money"} />
        </div>

    </div>
}