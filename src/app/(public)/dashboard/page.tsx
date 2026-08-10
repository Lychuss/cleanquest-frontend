"use client";

import { useState, useEffect } from "react";

export default function Dashboard(){

    

    return <main className="bg-[url('/backgrounds/clean-quest-background-dashboard.png')] bg-no-repeat bg-cover bg-center min-h-screen w-full">
        <div className="flex p-4">
            <div className="text-center text-black font-bold border-yellow-900 rounded-full w-[40px] aspect-square border p-2 bg-gradient-to-r 
                from-yellow-900 to-orange-300 z-10">
                1
            </div>
            <div className="relative items-center justify-center text-center w-[70px] h-[30px] border rounded-full">
                9%
            </div>
        </div>
    </main>
}