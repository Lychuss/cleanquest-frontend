"use client";

import { useState, useEffect, createContext, ReactNode, useContext } from "react";

import { Data } from "../model/types/data.type";
import { StatsBadgeType } from "../model/types/statsbadge.type";

import { authClient } from "../libs/authclient";

import getDashboard from "../api/data/dashboard.api";

export const StatsBadgeContext = createContext<StatsBadgeType | undefined>(undefined);

export function StatsBadgeProvider({ children }: {children: ReactNode}){

    const [data, setData] = useState<Data>();
    const [loading, setLoading] = useState(true);
    const user = authClient.useSession();
    const userId = user.data?.session.id;
    

    useEffect(() => {

        if(!userId) return;

        async function fetchData() {
            await getDashboard(userId!).then(setData);
            setLoading(false);
        }
        fetchData();
    }, [userId])

    return <StatsBadgeContext.Provider value={{data, loading}}>
        {children}
    </StatsBadgeContext.Provider>
}

export function useStatsBadgeContext(): StatsBadgeType{
    const statsBadgeContext = useContext(StatsBadgeContext);
    if(!statsBadgeContext){
        throw new Error("Context Data must have a value!");
    }
    return statsBadgeContext;
}