"use client";

import { useRouter } from "next/navigation";
import StatsBadge from "@/src/components/ui/statsbadge";
import PlayerLevel from "@/src/components/ui/playerlevel";
import QuestsCards from "@/src/components/common/cards/quests";
import StatsCards from "@/src/components/common/cards/playerstats";
import ImportantCards from "@/src/components/common/cards/important";
import Loading from "@/src/components/layouts/loading";
import { useStatsBadgeContext } from "@/src/context/StatsBadgeContext";
import { useTasksContext } from "@/src/context/TasksContext";
import { useEffect } from "react";

export default function Dashboard(){

    const router = useRouter();
    const { fetchData: fetchTask, loading: taskLoading } = useTasksContext();
    const {data, loading: statsLoading, fetchData: fetchStats} = useStatsBadgeContext();

    useEffect(() => {
        fetchStats();
    }, []);

    if(taskLoading || statsLoading){
        return <Loading />;
    }
    
    if(data?.totalCompletion === undefined){
        return <div>Error!</div>
    }

    const handleKitchenClicked = async () => {
        await fetchTask("kitchen");
        router.push("room/kitchen");
    }

        
    const handleBedroomClicked = async () => {
        await fetchTask("bedroom");
        router.push("room/bedroom");
    }

    const handleLivingRoomClicked = async () => {
        await fetchTask("living_room");
        router.push("room/living_room");
    }

    return <main className="bg-[url('/backgrounds/clean-quest-background-dashboard-v2.png')] bg-no-repeat bg-cover bg-center min-h-screen w-full
        has-[.living-room:hover]:bg-[url('/backgrounds/dashboard-background-living-room-v2.png')] 
        has-[.bedroom:hover]:bg-[url('/backgrounds/dashboard-background-room.png')]
        has-[.kitchen:hover]:bg-[url('/backgrounds/dashboard-background-kitchen.png')]">
        <section>
            <div className="flex p-4 items-center gap-2">

                <PlayerLevel ign={data?.data.ingameName} level={data?.data.level} exp={data?.data.experience} />
                
                <StatsBadge icon="/icons/growth-power.png" alt="growth-power" value={data?.data.growth} />
                <StatsBadge icon="/icons/completed-task-v2.png" alt="completed-task" value={data?.data.completedTask} />

            </div>
        </section>

        <section>
            <div className="absolute z-100 left-40 xl:left-[750px] top-[350px] xl:top-[400px] living-room cursor-pointer w-[150px] xl:w-[200px]
                 h-[230px]"
                onClick={ handleLivingRoomClicked }></div>
            <div className="absolute z-100 left-30 xl:left-[700px] bottom-70 xl:top-[100px] bedroom cursor-pointer w-[50px] xl:w-[70px]
                h-[230px]" 
                onClick={ handleBedroomClicked }></div>
            <div className="absolute z-100 right-1 xl:right-[570px] bottom-80 xl:top-[150px] kitchen cursor-pointer w-[100px] h-[130px] xl:h-[180px]"
                onClick={ handleKitchenClicked }></div>
        </section>

        <section>
            <QuestsCards totalCompletion={data?.totalCompletion}/>
            <ImportantCards completedTask={data?.completedTask} importantTask={data?.importantTask}/>
            <StatsCards />
        </section>


    </main>
}
