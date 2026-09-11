"use client";

import { Tasks } from "@/src/model/types/tasks.type";

export default async function GetAvailableTask(place: string): Promise<Tasks>{

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cleanquest/quest/available-task/${place}`,
        {
            method: "GET",
            credentials: "include"
        }
    )

    if(!response.ok){
        throw new Error("Failed to fetch quests");
    }

    const data = await response.json();

    return data;
}