import Image from "next/image"

type MyProps = {
    icon: string,
    alt: string,
    value?: number
}

export default function StatsBadge(props: MyProps){
    return <>
        <Image src={props.icon} alt={props.alt} width={1000} height={1000}
            className="relative z-10 w-[40px] h-auto bottom-1 xl:left-2" />
        <div className="flex justify-center items-center mr-1 p-2 -ml-4 z-0 
            text-[10px] w-[190px] h-[50px] bg-[url('/icons/stats-border.png')] bg-cover bg-center">
                <h1 className="ml-[1.2em] font-bold xl:ml-0">{props.value}</h1>
        </div>
    </>
}
