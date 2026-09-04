import Image from "next/image"

export default function StatsCards(){

    const arrayOfTask = [{src: "/icons/strength.png", name: "Strength", percentage: "50%"}, 
                        {src: "/icons/armor-v2.png", name: "Armor", percentage: "50%"}, 
                        {src: "/icons/ability-v2.png", name: "Ability Power", percentage: "50%"}, 
                        {src: "/icons/clean.png", name: "Cleanliness", percentage: "50%"},
                    ]

    return <>

        <div className="relative ">
            <Image
                src="/icons/quest-progress-v2.png"
                alt="player-stats"
                width={500}
                height={500}
                className="relative z-50 top-[15px] left-3 w-[100px] h-[100px]"
                loading="eager"
            />
            <div className="absolute rounded-lg left-5 top-5 bg-black/50 w-[82px] h-[90px] p-2">
                    <h1 className="text-[rgba(210,157,6,0.8)] text-[6px] mb-1">PLAYER STATS</h1>
                    <div>
                        <ul>
                            {arrayOfTask.map((power, i) => (
                                <li className="text-[5px]" key={i}>
                                    <p className="grid grid-cols-[1fr_45px_40px] items-center">
                                        <span className={`inline-block w-4 h-4 bg-cover bg-center`} style={{backgroundImage: `url('${power.src}')`}} />
                                        <span className="ml-1">{power.name}</span>
                                        <span>{power.percentage}</span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
            </div>
        </div>
    </>
}