type MyProps = {
    id: string,
    name: string,
    placeholder: string,
    type: string,
    className?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input(props: MyProps){
    return <>
        <input id={props.id} name={props.name} placeholder={props.placeholder} type={props.type}
             onChange={props.onChange}   className={props.className} />
    </>
}