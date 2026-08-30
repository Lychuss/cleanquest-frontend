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
    }
}