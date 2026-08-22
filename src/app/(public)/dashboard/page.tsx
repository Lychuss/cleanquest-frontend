"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import getDashboard from "@/src/services/auth/dashboard.api";

import { Data } from "@/src/services/types/data.type";

export default function Dashboard(){

    const [data, setData] = useState<Data>();

    const userId = localStorage.getItem("userId");

    if(!userId){
        return alert("Invalid User ID Server Error");
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await getDashboard(userId);

            setData(response)
        }

        fetchData();
    }, [])

    console.log(data);

    return <main className="bg-[url('/backgrounds/clean-quest-background-dashboard.png')] bg-no-repeat bg-cover bg-center min-h-screen w-full">
        <div className="flex flex-row p-4 items-center">
            <div className="relative z-10 text-center text-black font-bold border-yellow-900 rounded-full w-[25px] h-auto border bg-gradient-to-r 
                from-yellow-900 to-orange-300 z-10">
                1
            </div>
            <div className="relative -ml-4 left-0 z-0 text-center w-[125px] h-[20px] border-yellow-200 border-3 rounded-full overflow-hidden">
                <div className="absolute h-full inset-y-0 bg-gradient-to-r rounded-full from-yellow-700 to-orange-200 transition-all
                    duration-700 ease-out"
                    style={{ width: '50%' }}>
                </div>
                <div className="relative font-bold text-sm text-center ">
                  230/500  
                </div>
            </div>

            <Image src="/icons/growth-power.png" alt="growth-power" width={1000} height={1000}
                className="relative z-10 w-[35px] h-auto" />
            <div className="relative -ml-4 left-0 z-0 text-center w-[60px] h-[13px] bg-black rounded-full overflow-hidden">
                <div className="relative font-bold text-xs text-center ">
                  12,000
                </div>
            </div>

            <Image src="/icons/completed-task-v2.png" alt="completed-task" width={1000} height={1000}
                className="relative z-10 w-[35px] h-auto" />
            <div className="relative -ml-4 left-0 z-0 text-center w-[60px] h-[13px] bg-black rounded-full overflow-hidden">
                <div className="relative font-bold text-xs text-center ">
                  12,000
                </div>
            </div>
        </div>
    </main>
}