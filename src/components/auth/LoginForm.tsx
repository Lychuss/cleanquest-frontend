"use client";

import { useState } from "react";

import Label from "../ui/label";
import Input from "../ui/input";
import Button from "../ui/button";

export default function LoginForm(){

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        //API goes here
    }

    return <form onSubmit={handleSubmit}>
        <div className="relative flex flex-col items-center justify-center bg-black text-white space-y-3">

            <Label htmlFor="email" className="self-start" label="Email Address" />
            <Input id="email" name="email" placeholder="Enter account email" type="email"
                   onChange={(e) => setPassword(e.target.value)} className="w-[300px] h-auto border-2 border-white px-3 py-1" />

            <Label htmlFor="password" className="self-start" label="Account Password"/>
            <Input id="password" name="password" placeholder="Enter account password" type="password"
                    onChange={(e) => setPassword(e.target.value)}   className="w-[300px] h-auto border-2 border-white px-3 py-1"/>
            
            
            <Button onClick={() => console.log("Login submit")} className="text-white" label="login"/>
        </div>
    </form>
}