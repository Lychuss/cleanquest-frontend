"use client";

import Image from "next/image";
import Button from "@/src/components/ui/button";

export default function Login() {

  const play_now_button = () => {
    console.log("login");
  }

  return (
    <main>
        <section  className="min-h-screen w-full bg-[url('/backgrounds/clean-quest-background-homepage.png')] bg-cover bg-center bg-no-repeat">
            <div className="flex items-center justify-center">

                <div>
                  <Image alt="game-logo" src="/logo/cleanquest-logo.png" 
                      width={100} height={10} className="absolute left-1 w-[100px] h-auto" loading="eager"/>
                  
                  <div>
                    <Image alt="gift-icon" src="/icons/gift-code.png" 
                      width={100} height={10} className="absolute top-2 right-15 w-[70px] h-auto z-10" loading="eager"/>

                    <input placeholder="Redeem Code" 
                      className="absolute top-5  right-0 z-1 p-0 m-0 w-[95px] py-1 h-[20px] text-[8px] text-center
                        bg-[rgba(255,223,72,0.8)] rounded-lg font-extrabold border-1 border-b-2 border-r-2 border-blue-800" />
                  </div>
                  
                </div>

                <Image alt="login-title" src="/text/login-page-title-final1.png" 
                    width={300} height={100} className="absolute top-80 w-[500px] h-auto" loading="eager"/>

                
                <Image alt="play-now" src="/icons/button-play-now.png" 
                    width={150} height={100} className="absolute top-130 w-[200px] h-auto active:scale-95 transition-transform duration-150" loading="eager"/>
                
            </div>
        </section>
    </main>
  );
}