"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

import { LoginInterface } from "@/src/services/types/login.type";

import Label from "../ui/label";
import Input from "../ui/input";
import Button from "../ui/button";

import { LoginGoogleApi } from "@/src/services/auth/login.api";
import { LoginEmailApi } from "@/src/services/auth/login.api";

export default function LoginForm(){

    const router = useRouter();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const accountData: LoginInterface = { email: email, password: password }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await LoginEmailApi(accountData);
    }

    return <form onSubmit={handleSubmit}>
        <div className="relative flex flex-col items-center justify-center text-white space-y-3">

            <Label htmlFor="email" className="self-start" label="Email Address" />
            <Input id="email" name="email" placeholder="Enter account email" type="email"
                   onChange={(e) => setEmail(e.target.value)} className="w-[300px] h-auto border-2 border-white px-3 py-1" />

            <Label htmlFor="password" className="self-start" label="Account Password"/>
            <Input id="password" name="password" placeholder="Enter account password" type="password"
                    onChange={(e) => setPassword(e.target.value)}   className="w-[300px] h-auto border-2 border-white px-3 py-1"/>
            
            <Button onClick={() => console.log("Login submit")} className="text-white active:scale-50 transform-transition duration-260 px-6 py-1 rounded-xl bg-[rgba(255,250,67,0.8)]" label="Login"/>

            <label onClick={() =>  router.push("/sign-up")} className="relative top-[40px] text-white active:scale-50 transform-transition duration-260 border-b-1">Sign-Up</label>
            
            <FcGoogle onClick={LoginGoogleApi} className="relative top-[70px] w-[30px] h-auto active:scale-50 transform-transition duration-260"/>
            
        </div>
    </form>
}
