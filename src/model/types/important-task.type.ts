type ImportantTask = {
    id: string,
    title: string
}

type CompletedTask = {
    title: string,
    success: boolean
}

export type ImportantTaskList = ImportantTask[] | undefined;
export type CompletedTaskList = CompletedTask[] | undefined;