"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

import getDashboard from "@/src/services/data/dashboard.api";

import { Data } from "@/src/model/types/data.type";

import { authClient } from "@/src/libs/authclient";

export default function Dashboard(){

    const [data, setData] = useState<Data>();

    const user = authClient.useSession();

    const userId = user.data?.session.id;

    useEffect(() => {

        if(!userId) return;

        const fetchData = async () => {
            const response = await getDashboard(userId);

            setData(response)
        }

        fetchData();
    }, [userId])

    return <main className="bg-[url('/backgrounds/clean-quest-background-dashboard-v2.png')] bg-no-repeat bg-cover bg-center min-h-screen w-full
        has-[.living-room:hover]:bg-[url('/backgrounds/dashboard-background-living-room.png')] 
        has-[.bedroom:hover]:bg-[url('/backgrounds/dashboard-background-room.png')]
        has-[.kitchen:hover]:bg-[url('/backgrounds/dashboard-background-kitchen.png')]">
        <section>
            <div className="flex flex-row p-4 items-center">
                <div className="flex p-1 items-center border-transparent rounded-lg  bg-[rgba(20,16,18,0.8)]/30">
                    <Image src="/icons/level-v1.png" alt="level-icon" width={1000} height={1000} className="w-[50px] h-auto"/> 
                    <div>
                        <h1 className="text-[9px] font-semibold">{data?.data.ingameName}</h1>
                        <h1 className="text-[7px] font-semibold text-[rgba(210,157,6,0.8)] mb-1">Level <span className="text-white">{data?.data.level}</span></h1>
                        <div className="relative z-0 w-[70px] h-[5px] border rounded-full overflow-hidden">
                            <div className="absolute inset-y-0 h-full bg-gradient-to-r rounded-full from-yellow-700 to-orange-200
                                transition-all duration-700 ease-out" style={{ width: `${data?.data.experience}%`}}></div>
                        </div>
                        <h1 className="mt-1 text-[7px] text-[rgba(154,154,154,0.8)]">{data?.data.experience}/100</h1>
                    </div>
                </div>

                <Image src="/icons/growth-power.png" alt="growth-power" width={1000} height={1000}
                    className="relative left-1 z-10 w-[20px] h-auto" />
                <div className="flex justify-center items-center p-2 -ml-4 left-0 z-0 text-[8px] w-[60px] h-[13px] bg-[rgba(20,16,18,0.8)]/70 rounded-full overflow-hidden">
                        {data?.data.growth}
                </div>

                <Image src="/icons/completed-task-v2.png" alt="growth-power" width={1000} height={1000}
                    className="relative left-1 z-10 w-[20px] h-auto" />
                <div className="flex justify-center items-center p-2 -ml-4 left-0 z-0 text-[8px] w-[60px] h-[13px] bg-[rgba(20,16,18,0.8)]/70 rounded-full overflow-hidden">
                        {data?.data.completedTask}
                </div>
            </div>
        </section>

        <section>
            <h1 className="living-room cursor-pointer">Living Room</h1>
            <h1 className="bedroom cursor-pointer">Bedroom</h1>
            <h1 className="kitchen cursor-pointer">Kitchen</h1>
        </section>
    </main>
}
