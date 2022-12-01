interface InforProps {
    className?: string
    name: String
    children?: any
}

export default function Info(props: InforProps){
    return (
        <div className="flex mb-3 flex-col p-6 border rounded-md drop-shadow-lg">
            <h1 className="font-bold text-xl py-2 border-b border-gray-300">{props.name}</h1>
            <div className="mt-5">
                {props.children}
            </div>
        </div>
    )
}