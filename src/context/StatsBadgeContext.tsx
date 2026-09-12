"use client";

import { useState, useEffect, createContext, ReactNode, useContext, useCallback } from "react";

import { Data } from "../model/types/data.type";
import { StatsBadgeType } from "../model/types/statsbadge.type";

import { authClient } from "../libs/authclient";

import GetDashboard from "../api/data/dashboard.api";

export const StatsBadgeContext = createContext<StatsBadgeType | undefined>(undefined);

export function StatsBadgeProvider({ children }: {children: ReactNode}){

    const [data, setData] = useState<Data>();
    const [loading, setLoading] = useState(true);
    const user = authClient.useSession();
    const userId = user.data?.session.id;
    
    const fetchData = useCallback(async () => {
        if (!userId) return;
        setLoading(true);
        await GetDashboard(userId).then(setData);
        setLoading(false);
    }, [userId]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return <StatsBadgeContext.Provider value={{data, loading, fetchData}}>
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