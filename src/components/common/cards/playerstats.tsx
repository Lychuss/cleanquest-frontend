import Image from "next/image"

export default function StatsCards(){

    const arrayOfTask = [{src: "/icons/strength.png", name: "Strength", percentage: "50%"}, 
                        {src: "/icons/armor-v2.png", name: "Armor", percentage: "50%"}, 
                        {src: "/icons/ability-v2.png", name: "Ability Power", percentage: "50%"}, 
                        {src: "/icons/clean.png", name: "Cleanliness", percentage: "50%"},
                    ]

    return <>

        <div className="relative xl:top-[50px]">
            <Image
                src="/icons/quest-progress-v2.png"
                alt="player-stats"
                width={500}
                height={500}
                className="relative z-50 top-[15px] left-[10px] w-[160px] h-[150px]"
                loading="eager"
            />
            <div className="absolute rounded-lg left-[22px] top-[21px] bg-black/50 w-[135px] h-[140px]">
                    <h1 className="text-[rgba(210,157,6,0.8)] text-[10px] mb-5 relative top-[10px] ml-3">PLAYER STATS</h1>
                    <div>
                        <ul>
                            {arrayOfTask.map((power, i) => (
                                <li className="text-[9px]" key={i}>
                                    <p className="grid grid-cols-[0.5fr_80px_10px] items-center mb-2  ">
                                        <span className={`inline-block w-7 h-4 bg-cover bg-center`} style={{backgroundImage: `url('${power.src}')`}} />
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