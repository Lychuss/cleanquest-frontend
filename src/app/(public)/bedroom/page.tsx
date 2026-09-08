"use client";

import PlayerLevel from "@/src/components/ui/playerlevel";
import StatsBadge from "@/src/components/ui/statsbadge";
import Loading from "@/src/components/layouts/loading";

import { useStatsBadgeContext } from "@/src/context/StatsBadgeContext";

export default function Bedroom(){

    const { data, loading } = useStatsBadgeContext();

    if(loading){
        return <Loading />;
    }

    return <main className="bg-[url('/backgrounds/bedroom-background.png')] bg-cover bg-center min-h-screen w-full">
        <section>
            <PlayerLevel ign={data?.data.ingameName} level={data?.data.level} exp={data?.data.experience} />
            <StatsBadge icon="/icons/growth-power.png" alt="growth-power" value={data?.data.growth}/>
            <StatsBadge icon="/icons/completed-task-v2.png" alt="completed-task" value={data?.data.completedTask} />
        </section>
    </main>
}