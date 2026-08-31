"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

import getDashboard from "@/src/services/data/dashboard.api";

import { Data } from "@/src/model/types/data.type";

import { authClient } from "@/src/libs/authclient";
import StatsBadge from "@/src/components/ui/statsbadge";
import PlayerLevel from "@/src/components/ui/playerlevel";
import QuestsCards from "@/src/components/common/cards/quests";
import StatsCards from "@/src/components/common/cards/important";

export default function Dashboard(){

    const [data, setData] = useState<Data>();
    const user = authClient.useSession();
    const userId = user.data?.session.id;

    useEffect(() => {

        if(!userId) return;

        getDashboard(userId).then(setData);
        
    }, [userId])

    return <main className="bg-[url('/backgrounds/clean-quest-background-dashboard-v2.png')] bg-no-repeat bg-cover bg-center min-h-screen w-full
        has-[.living-room:hover]:bg-[url('/backgrounds/dashboard-background-living-room-v2.png')] 
        has-[.bedroom:hover]:bg-[url('/backgrounds/dashboard-background-room.png')]
        has-[.kitchen:hover]:bg-[url('/backgrounds/dashboard-background-kitchen.png')]">
        <section>
            <div className="flex flex-row p-4 items-center gap-2">

                <PlayerLevel ign={data?.data.ingameName} level={data?.data.level} exp={data?.data.experience} />

                <StatsBadge icon="/icons/growth-power.png" alt="growth-power" value={data?.data.growth} />
                <StatsBadge icon="/icons/completed-task-v2.png" alt="completed-task" value={data?.data.completedTask} />

            </div>
        </section>

        <section>
            <div className="absolute z-0 left-20 top-90 living-room cursor-pointer w-[225px] h-[200px]"></div>
            <div className="absolute z-0 left-20 bottom-70 bedroom cursor-pointer w-[100px] h-[230px]"></div>
            <div className="absolute z-0 right-0 bottom-80 kitchen cursor-pointer w-[100px] h-[180px]"></div>
        </section>

        <section>
            <QuestsCards />
            <StatsCards />
        </section>


    </main>
}
