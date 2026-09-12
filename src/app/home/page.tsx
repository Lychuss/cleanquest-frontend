"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <main>
        <section  className="min-h-screen w-full bg-[url('/backgrounds/clean-quest-background-homepage.png')] bg-cover bg-center bg-no-repeater">
            <div className="flex flex-col items-center justify-center">

                <div className="flex w-full justify-between items-center">
                  <Image alt="game-logo" src="/logo/cleanquest-logo.png" 
                      width={1000} height={10} className="right-[170px] w-[100px] h-auto" loading="eager"/>
                  
                  <Image alt="gift-icon" src="/icons/gift-code.png" 
                      width={1000} height={10} className="relative left-[60px] xl:left-[130px] w-[70px] h-auto z-10" loading="eager"/>

                  <input placeholder="Redeem Code" 
                      className="right-0 z-1 p-0 m-0 w-[95px] py-1 h-[20px] text-[8px] text-center
                        bg-[rgba(255,223,72,0.8)] rounded-lg font-extrabold border-1 border-b-2 border-r-2 border-blue-800" />
                </div>

                <div className="relative top-[250px]">
                  <div className="flex flex-col w-full items-center">
                    <Image alt="login-title" src="/text/login-page-title-final2.png" 
                      width={1000} height={1000} className="w-[300px] xl:w-[400px] h-auto" loading="eager"/>

                    <Image alt="play-now" src="/icons/button-play-now.png" onClick={() => router.push("/login")}
                        width={1000} height={100} className="w-[200px] h-auto active:scale-95 transition-transform duration-150 z-20" 
                        loading="eager"/>
                  </div>
                </div>
            </div>
        </section>
    </main>
  );
}