"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoginForm from "@/src/components/auth/LoginForm";

export default function Login(){

    const router = useRouter();

    return <>
        <main className="min-h-screen w-full bg-[url('/backgrounds/clean-quest-background-homepage.png')] bg-cover bg-center">

            <div className="absolute inset-0 backdrop-brightness-50 bg-black/10"></div>

            <section className="flex flex-col items-center justify-center" >
                
                <Image alt="cleanquest-logo" src={"/logo/cleanquest-logo.png"} width={1000} height={20} 
                   onClick={() => router.push("/home")} className="relative z-10 w-[300px] h-auto m-0 p-0"/>

                <LoginForm />
                
            </section>
        </main>
    </>
}   