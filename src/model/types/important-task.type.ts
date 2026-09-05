type ImportantTask = {
    id: string,
    title: string
}

type CompletedTask = {
    title: string,
    success: boolean
}

export type TotalCompletion = {
    kitchen: {
        total: number,
        completed: number
    },
    bedroom: {
        total: number,
        completed: number
    },
    living_room: {
        total: number,
        completed: number
    },
}

export type ImportantTaskList = ImportantTask[] | undefined;
export type CompletedTaskList = CompletedTask[] | undefined;