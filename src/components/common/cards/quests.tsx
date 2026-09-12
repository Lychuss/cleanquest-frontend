import Image from "next/image"

import type { TotalCompletion } from "@/src/model/types/important-task.type"

type MyProps = {
    totalCompletion: TotalCompletion
}

export default function QuestsCards(props: MyProps){

    if(props.totalCompletion === undefined){
        return <div>Error!</div>
    }

    return <div className="relative xl:top-[10px]">
            <Image src="/icons/quest-progress-v2.png" alt="quest-progress" width={500} height={500} 
            className="absolute z-50 left-[13px] xl:left-[10px] w-[113px] h-[100px] xl:w-[190px] xl:h-[150px]"/>
            <div className="relative rounded-lg left-6 bg-black/50 top-1 w-[95px] h-[92px] p-2 xl:w-[161px] xl:h-[140px]">

                <h1 className="text-[rgba(210,157,6,0.8)] text-[6px] xl:text-[10px] mb-1 xl:ml-2">QUEST PROGRESS</h1>
                <div>
                    <ul className="space-y-1.5">
                        <li className="text-[5px] xl:text-[9px] xl:mb-4">
                            <p className="grid grid-cols-[1fr_60px_40px] xl:grid-cols-[1fr_110px_50px] items-center">
                                <span className="inline-block w-3 h-3 bg-[url('/icons/daily-quest.png')] bg-cover bg-center" />
                                <span>Bedroom Quests</span>
                                <span>{props.totalCompletion.bedroom.completed}/{props.totalCompletion.bedroom.total}</span>
                            </p>
                        </li>
                        <li className="text-[5px] xl:text-[9px] xl:mb-4">
                            <p className="grid grid-cols-[1fr_60px_40px] xl:grid-cols-[1fr_110px_50px] items-center">
                                <span className="inline-block w-3 h-3 bg-[url('/icons/weekly-quests.png')] bg-cover bg-center" />
                                <span>Kitchen Quests</span>
                                <span>{props.totalCompletion.kitchen.completed}/{props.totalCompletion.kitchen.total}</span>
                            </p>
                        </li>
                         <li className="text-[5px] xl:text-[9px] xl:mb-4">
                            <p className="grid grid-cols-[1fr_60px_40px] xl:grid-cols-[1fr_110px_100px] items-center">
                                <span className="inline-block w-3 h-3 bg-[url('/icons/main-quests.png')] bg-cover bg-center" />
                                <span>Living Room Quests</span>
                                <span>{props.totalCompletion.living_room.completed}/{props.totalCompletion.living_room.total}</span>
                            </p>
                        </li>
                        <li className="text-[5px] xl:text-[9px]">
                            <p className="grid grid-cols-[1fr_60px_40px] xl:grid-cols-[1fr_110px_50px] items-center">
                                <span className="inline-block w-3 h-3 bg-[url('/icons/achievements.png')] bg-cover bg-center" />
                                <span>Achievements</span>
                                <span>2/70</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
}