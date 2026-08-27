"use client";

import { Data } from "../types/data.type";

export default async function getDashboard(userId: string): Promise<Data>{

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cleanquest/character/profile/${userId}/view-stats`, {
        method: "GET",
        credentials: "include"
    })

    console.log(await response.json());

    if(!response.ok){
        throw new Error("Failed to fetch quests");
    }

    const data: Data = await response.json();

    return data;
}