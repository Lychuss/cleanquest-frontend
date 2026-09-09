"use client";

import PlayerLevel from "@/src/components/ui/playerlevel";
import StatsBadge from "@/src/components/ui/statsbadge";
import Loading from "@/src/components/layouts/loading";

import { useStatsBadgeContext } from "@/src/context/StatsBadgeContext";
import { useState } from "react";

export default function Bedroom(){

    const { data, loading } = useStatsBadgeContext();

    if(loading){
        return <Loading />;
    }

    return <main className="bg-[url('/backgrounds/bedroom-background.png')] bg-cover bg-center min-h-screen w-full">

        <section className="flex items-center gap-2 p-4">
            <PlayerLevel ign={data?.data.ingameName} level={data?.data.level} exp={data?.data.experience} />
            <StatsBadge icon="/icons/growth-power.png" alt="growth-power" value={data?.data.growth}/>
            <StatsBadge icon="/icons/completed-task-v2.png" alt="completed-task" value={data?.data.completedTask} />
        </section>

        <section className="p-4">
            <div className="flex grid grid-cols-[1fr_70px_30px] items-center justify-center border">
                <div className="">
                    <h1 className="text-[rgba(210,157,6,0.8)]">BEDROOM</h1>
                    <p className="text-[7px]">Complete task and Level Up!</p>
                </div>
                <div className="border w-[100px] p-2 text-[rgba(210,157,6,0.8)]">
                    <h1 className="text-[6px]">ROOM PROGRESS</h1>
                    <p className="text-[6px]">0%</p>
                    <div className="relative z-0 w-[70px] h-[5px] border rounded-full overflow-hidden">
                        <div className="absolute inset-y-0 h-full bg-gradient-to-r rounded-full from-yellow-700 to-orange-200
                            transition-all duration-700 ease-out" style={{ width: '50%'}}></div>
                    </div>
                    <p className="text-[4px] mt-1">0/8 TASKS COMPLETED</p>
                </div>
            </div>

            <div>

            </div>

        </section>
    </main>
}