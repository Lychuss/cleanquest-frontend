import Image from "next/image"

export default function ImportantCards(){

    const arrayOfTask = [{completed: false, name: "Tidy Room"}, 
                        {completed: true, name: "Wash Dishes"}, 
                        {completed: false, name: "Tidy Room"}, 
                        {completed: true, name: "Wash Dishes"},
                        {completed: true, name: "Wash Dishes"}
                    ]

    return <>
        <div className="relative">
            <Image
                src="/icons/quest-progress-v2.png"
                alt="important-progress"
                width={500}
                height={500}
                className="relative top-[15px] left-3 z-50 w-[100px] h-[120px]"
                loading="eager"
            />
            <div className="absolute rounded-lg left-5 top-5 bg-black/50 w-[82px] h-[110px] p-2">
                    <h1 className="text-[rgba(210,157,6,0.8)] text-[6px] mb-1">IMPORTANT TASKS</h1>
                    <div>
                        <ul>
                            {arrayOfTask.map((task, i) => (
                                <li className="text-[5px]" key={i}>
                                    <p className="grid grid-cols-[1fr_45px_40px] items-center">
                                        <span className={`inline-block w-4 h-4 bg-cover bg-center
                                            ${ task.completed ? "bg-[url('/icons/square-check-v2.png')]" : "bg-[url('/icons/square-v2.png')]"}`} />
                                        <span>{task.name}</span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
            </div>
        </div>
    </>
}
