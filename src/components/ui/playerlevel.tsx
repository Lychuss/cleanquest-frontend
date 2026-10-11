import Image from "next/image"

type MyProps = {
    ign?: string,
    level?: number,
    exp?:number
}

export default function PlayerLevel(props: MyProps){
    return <div className="flex p-1 items-center bg-[url('/icons/level-v2.png')] bg-cover bg-center w-[450px] h-[60px] xl:w-[300px]">
                <Image src="/icons/level-v1.png" alt="level-icon" width={1000} height={1000} className="relative w-[43px] h-[47px] 
                    left-1 xl:w-[47px] xl:h-[50px] xl:left-1.5"/> 
                <div className="p-2 xl:ml-2">
                    <h1 className="text-[8px] xl:text-[9px] font-semibold mb-1">{props.ign}</h1>
                    <h1 className="text-[6px] xl:text-[7px] font-semibold text-[rgba(210,157,6,0.8)]">Level <span className="text-white">{props.level}</span></h1>
                    <div className="relative z-0 w-[70px] h-[5px] border rounded-full overflow-hidden xl:w-[85px]">
                        <div className="absolute inset-y-0 h-full bg-gradient-to-r rounded-full from-yellow-700 to-orange-200
                            transition-all duration-700 ease-out" style={{ width: `${props.exp}%`}}></div>
                    </div>
                    <h1 className="text-[6px] xl:text-[7px] text-[rgba(154,154,154,0.8)]">{props.exp}/100  EXP</h1>
                </div>
            </div>
}