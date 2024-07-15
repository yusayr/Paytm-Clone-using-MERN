import React from "react"
import { Header } from "../components/Header.jsx"
import { SubHeader } from "../components/SubHeader.jsx"
import { InputBox } from "../components/InputBox.jsx"
import { Password } from "../components/Password.jsx"
import { Button } from "../components/Button.jsx"
import { BottomWarning } from "../components/BottomWarning.jsx"

export default function Signin() {
    return (
    <div className="bg-slate-300 flex justify-center h-screen items-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 flex-col">
        <Header label={"Sign in"} />
        <SubHeader label={"Enter your credentials to access your account"} />
        <InputBox placeholder="harkirat@gmail.com" label={"Email"} />
        <Password placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
        </div>
    
    )
}