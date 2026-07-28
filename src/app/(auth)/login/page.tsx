import Image from "next/image";
import LoginForm from "@/src/components/auth/LoginForm";

export default function Login(){
    return <>
        <main className="bg-black min-h-screen w-full">
            <section className="flex flex-col items-center justify-center" >
                
                <Image alt="cleanquest-logo" src={"/logo/cleanquest-logo.png"} width={1000} height={20} 
                    className="w-[300px] h-auto m-0 p-0"/>

                <LoginForm />
                
            </section>
        </main>
    </>
}   