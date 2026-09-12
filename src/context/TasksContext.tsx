"use client";

import { ReactNode, useContext, useState } from "react";
import GetAvailableTask from "../api/data/tasks.api";
import { Tasks, TasksContextType } from "../model/types/tasks.type";
import { createContext } from "react";

const TasksApiContext = createContext<TasksContextType | null>(null);

export function TasksProvider({children}: {children: ReactNode}){
    const [data, setData] = useState<Tasks>();
    const [loading, setLoading] = useState(false);

    const fetchData = async (place: string) => {
        setLoading(true);
        await GetAvailableTask(place).then(setData);
        setLoading(false);
    }

    return <TasksApiContext.Provider value={{fetchData, data, loading}}>
        {children}
    </TasksApiContext.Provider>
}

export function useTasksContext(): TasksContextType{
    const tasksDataContext = useContext(TasksApiContext);
    if(!tasksDataContext){
        throw new Error("Unavailable to get tall the need tasks!");
    }
    return tasksDataContext;
}