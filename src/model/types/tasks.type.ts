interface Task {
    id: string,
    key: string,
    title: string,
    room: string,
    difficulty: string,
    rewards: {
        experience: number
    }
}

export type Tasks = {
    message: string,
    success: boolean,
    data: [Task],
    completedTask: {
        data: number,
        totalQuest: number
    }
}

export type TasksContextType = {
    fetchData: (place: string) => Promise<void>,
    data: Tasks | undefined,
    loading: boolean
}