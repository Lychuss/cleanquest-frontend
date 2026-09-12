import Image from "next/image"
import type { CompletedTaskList, ImportantTaskList } from "@/src/model/types/important-task.type";

type MyProps = {
    completedTask: CompletedTaskList, 
    importantTask: ImportantTaskList
}

export default function ImportantCards(props: MyProps){

    const { completedTask, importantTask } = props;

    if(!completedTask || !importantTask){
        return <div>Error the data is undefined!</div>
    }

    return <>
        <div className="relative xl:top-[30px]">
            <Image
                src="/icons/quest-progress-v2.png"
                alt="important-progress"
                width={500}
                height={500}
                className="relative top-[15px] left-3 z-50 xl:w-[160px] xl:h-[160px] w-[115px] h-[125px]"
                loading="eager"
            />
            <div className="absolute rounded-lg left-[22px] top-[21px] bg-black/50 w-[95px] h-[115px] xl:w-[135px] xl:h-[150px] p-2">
                    <h1 className="text-[rgba(210,157,6,0.8)] text-[6px] xl:text-[10px] mb-1 ml-2">IMPORTANT TASKS</h1>
                    <div>
                        <ul>
                            {importantTask.map((task, i) => (
                                <li className="xl:text-[9px] text-[5px]" key={task.id}>
                                    <p className="grid grid-cols-[1fr_60px_40px] xl:grid-cols-[0.5fr_100px_10px] items-center xl:mb-2">
                                        <span className={`inline-block w-4 h-4 bg-cover bg-center
                                            ${ completedTask[i].success
                                                ? 
                                            "bg-[url('/icons/square-check-v2.png')]" : "bg-[url('/icons/square-v2.png')]"}`} />
                                        <span>{task.title}</span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
            </div>
        </div>
    </>
}

//