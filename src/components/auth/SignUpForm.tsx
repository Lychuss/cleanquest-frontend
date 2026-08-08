"use client";

import { SignUpInterface } from "@/src/services/types/signup.type";

import SignUpEmailApi from "@/src/services/auth/signup.api";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Label from "../ui/label";
import Input from "../ui/input";
import Button from "../ui/button";

export default function SignUpForm(){

    const router = useRouter();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const accountData: SignUpInterface = { name: name, email: email, password: password }
        
        const redirect = await SignUpEmailApi(accountData);

        if(redirect){
            router.push("/login");
        }
    }

    return <form onSubmit={handleSubmit}>
        <div className="relative flex flex-col items-center justify-center text-white space-y-3">

            <Label htmlFor="name" className="self-start" label="Accout Name" />
            <Input id="name" name="name" placeholder="Enter account name" type="text"
                   onChange={(e) => setName(e.target.value)} className="w-[300px] h-auto border-2 border-white px-3 py-1" />

            <Label htmlFor="email" className="self-start" label="Email Address" />
            <Input id="email" name="email" placeholder="Enter account email" type="email"
                   onChange={(e) => setEmail(e.target.value)} className="w-[300px] h-auto border-2 border-white px-3 py-1" />

            <Label htmlFor="password" className="self-start" label="Account Password"/>
            <Input id="password" name="password" placeholder="Enter account password" type="password"
                    onChange={(e) => setPassword(e.target.value)}   className="w-[300px] h-auto border-2 border-white px-3 py-1"/>
            
            <Button onClick={() => console.log("Sign up successfully")} className="text-white active:scale-50 transform-transition duration-260 px-6 py-1 rounded-xl bg-[rgba(255,250,67,0.8)]" label="Sign Up"/>

            <label onClick={() => router.push("/login")} className="absolute top-[300px] text-white active:scale-50 transform-transition duration-260 border-b-1">Login Account</label>
            
        </div>
    </form>
}