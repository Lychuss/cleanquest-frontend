import Image from "next/image"

type MyProps = {
    icon: string,
    alt: string,
    value?: number
}

export default function StatsBadge(props: MyProps){
    return <>
        <Image src={props.icon} alt={props.alt} width={1000} height={1000}
            className="relative left-3 z-10 w-[20px] h-auto" />
        <div className="flex justify-center items-center p-2 -ml-4 left-0 z-0 text-[8px] w-[60px] h-[13px] bg-[rgba(20,16,18,0.8)]/70 rounded-full overflow-hidden">
                {props.value}
        </div>
    </>
}
