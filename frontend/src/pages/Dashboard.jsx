import React from "react"
import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"


export default function Dashboard() {
    return <div className="p-10">
        <AppBar />
        <Balance value="50,000" />
        <Users />
    </div>
}