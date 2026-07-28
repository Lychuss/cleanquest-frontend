type MyProps = {
    htmlFor: string,
    className?: string,
    label: string
}

export default function Label(props: MyProps){
    return <>
        <label htmlFor={props.htmlFor} className={props.className}>{props.label}</label>
    </>
}