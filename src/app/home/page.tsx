"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  // Redirect to login page
  const play_now_button = () => {
    console.log("button clicked");
    router.push("/login");
  }

  return (
    <main>
        <section  className="min-h-screen w-full bg-[url('/backgrounds/clean-quest-background-homepage.png')] bg-cover bg-center bg-no-repeat">
            <div className="flex items-center justify-center">

                <div>
                  <Image alt="game-logo" src="/logo/cleanquest-logo.png" 
                      width={1000} height={10} className="absolute left-[7px] w-[100px] h-auto" loading="eager"/>
                  
                  <div>
                    <Image alt="gift-icon" src="/icons/gift-code.png" 
                      width={1000} height={10} className="absolute top-[7px] right-[60px] w-[70px] h-auto z-10" loading="eager"/>

                    <input placeholder="Redeem Code" 
                      className="absolute top-5  right-0 z-1 p-0 m-0 w-[95px] py-1 h-[20px] text-[8px] text-center
                        bg-[rgba(255,223,72,0.8)] rounded-lg font-extrabold border-1 border-b-2 border-r-2 border-blue-800" />
                  </div>
                  
                </div>

                <Image alt="login-title" src="/text/login-page-title-final1.png" 
                    width={1000} height={100} className="absolute top-[300px] w-[500px] h-auto" loading="eager"/>

                
                <Image alt="play-now" src="/icons/button-play-now.png" onClick={play_now_button}
                    width={1000} height={100} className="absolute top-[480px] w-[200px] h-auto active:scale-95 transition-transform duration-150 z-20" loading="eager"/>
                
            </div>
        </section>
    </main>
  );
}