import React from "react"
import { Header } from "../components/Header.jsx"
import { SubHeader } from "../components/SubHeader.jsx"
import { InputBox } from "../components/InputBox.jsx"
import { Password } from "../components/Password.jsx"
import { Button } from "../components/Button.jsx"
import { BottomWarning } from "../components/BottomWarning.jsx"
import { useState } from "react"
import axios from "axios"



export default function Signup() {
    const [firstName, setFirstname] = useState("")
    const [lastName, setlastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const signupFunction = async() => {
        console.log(username, password)
        try {
            await axios.post("http://localhost:3000/api/v1/user/signup", {
                username,
                firstName,
                lastName,
                password
            });
            console.log("success")
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="bg-slate-300 flex justify-center h-screen">
            <div className="bg-white flex-col justify-center items-center w-80 h-[90%] align-middle my-10 rounded-lg p-4">
                <div>
                    <Header label="Sign up" />
                    <SubHeader label="Enter your information to create an account" />
                    <InputBox onChange={e => { setFirstname(e.target.value)
                    }} label="First Name" placeholder="John" />
                    <InputBox onChange= {e=> setlastName(e.target.value)}  label="Last Name" placeholder="Doe" />
                    <InputBox onChange={e=> setUsername(e.target.value)} label="Email" placeholder=" john@gmail.com" />
                    <Password onChange={e=> setPassword(e.target.value)}  label="Password" placeholder="123456" />
                    <div className="pt-2">
                        <Button onClick={signupFunction} label={"Sign up"} />
                    </div>
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
                </div>
            </div>
        </div>
    )
}