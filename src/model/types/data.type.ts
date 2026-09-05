export type Data = {
    message: string,
    success: boolean,
    data: {
        id: string,
        userId: string,
        ingameName: string,
        level: number,
        experience: number,
        health: number,
        attack: number,
        critical: number,
        speed: number,
        defense: number,
        evasion: number,
        resistance: number,
        luck: number,
        stamina: number,
        growth: number,
        completedTask: number
    },
    importantTask: [
        {
            id: string,
            title: string
        }
    ],
    completedTask: [
        {
            title: string,
            success: boolean
        }
    ],
    totalCompletion: 
        {
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
    
}