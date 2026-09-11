"use client";

import { Tasks } from "@/src/model/types/tasks.type";

export default async function GetAvailableTask(place: string): Promise<Tasks>{

    const response = await fetch(`http://localhost:5000/cleanquest/quest/available-task/${place}`,
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