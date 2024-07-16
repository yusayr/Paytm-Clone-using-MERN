import { useEffect, useState } from "react"
import React from "react"
import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"
import useAuth from "../components/useAuth"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {
    const [balance, setBalance] = useState(0)
    const token = useAuth();
    const navigate = useNavigate()


const getBalance = async() => {
        try {
            const response =await axios.post("http://localhost:3000/api/v1/account/balance", 
                {
                    userId: localStorage.getItem("userId")
                },{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                },
            })
            const roundedBalance = Number(response.data.balance).toFixed(2);
            setBalance(roundedBalance)
        }
        catch(err) {
            console.log(err)
            if (err.response && err.response.status===403) {
                navigate("/signin")
            }
        }}
    
        useEffect(()=> {
                getBalance();
            }, [token, setBalance])
        
        

    return (
    <div className="p-10">
        <AppBar />
        <Balance value={balance} />
        <Users />
    </div>
    )
}