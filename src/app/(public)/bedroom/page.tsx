"use client";

import PlayerLevel from "@/src/components/ui/playerlevel";
import StatsBadge from "@/src/components/ui/statsbadge";
import Loading from "@/src/components/layouts/loading";
import { useStatsBadgeContext } from "@/src/context/StatsBadgeContext";
import { useTasksContext } from "@/src/context/TasksContext";
import { useEffect, useState} from "react";
import { useRouter } from "next/navigation";

export default function Bedroom(){
    const router = useRouter();
    const { data: statsData , loading: statsLoading } = useStatsBadgeContext();
    const { data: tasksData, loading: tasksLoading, fetchData } = useTasksContext();

    useEffect(() => {
        fetchData("bedroom");
    }, [])

    if(statsLoading || tasksLoading){
        return <Loading />;
    }

    return <main className="bg-[url('/backgrounds/bedroom-background.png')] bg-cover bg-center min-h-screen w-full">

        <section className="flex items-center gap-2 p-4">
            <PlayerLevel ign={statsData?.data.ingameName} level={statsData?.data.level} exp={statsData?.data.experience} />
            <StatsBadge icon="/icons/growth-power.png" alt="growth-power" value={statsData?.data.growth}/>
            <StatsBadge icon="/icons/completed-task-v2.png" alt="completed-task" value={statsData?.data.completedTask} />
        </section>

        <section className="p-4">
            <div className="relative top-40 grid grid-cols-[1fr_70px_50px] items-center justify-center">
                <div className="">
                    <h1 className="font-bold text-[rgba(210,157,6,0.8)]">BEDROOM</h1>
                    <p className="text-[7px]">Complete task and Level Up!</p>
                </div>
                <div className="border bg-black/50 rounded-lg w-[120px] p-2 text-[rgba(210,157,6,0.8)]">
                    <h1 className="text-[6px]">ROOM PROGRESS</h1>
                    <p className="text-[6px]">0%</p>
                    <div className="relative z-0 w-[100px] h-[5px] border rounded-full overflow-hidden">
                        <div className="absolute inset-y-0 h-full bg-gradient-to-r rounded-full from-yellow-700 to-orange-200
                            transition-all duration-700 ease-out" style={{ width: '50%'}}></div>
                    </div>
                    <p className="text-[4px] mt-1">{tasksData?.completedTask.data}/{tasksData?.completedTask.totalQuest} TASKS COMPLETED</p>
                </div>
            </div>

            <div className="relative top-40 w-[200px] h-auto mt-3 text-[rgba(210,157,6,0.8)]">
                {tasksData?.data.map((task, i) => (
                    <div className="border b-white p-2 flex justify-between mb-1 rounded-xl bg-black/50
                        active:scale-95 transform transition-all ease-in-out duration-500"
                        key={i} 
                        onClick={() => router.push(`/camera/${task.id}`)}>
                        <div className="flex items-center">
                            <h1 className="font-bold text-[12px]">{task.title}</h1>
                        </div>
                        <p className="text-[10px]">{task.rewards.experience} exp</p>
                    </div>
                ))}
            </div>

        </section>
    </main>
}