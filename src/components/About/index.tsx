import Image from "next/image"

interface InforProps {
    className?: String
    name?: String
    subtitle: String 
    image: any
    number?: String
    contato?: String
}

export default function About(props: InforProps){
    return(
        <>
            <div className="flex h-min items-center flex-col p-4 border rounded-md drop-shadow-lg">
                <Image className="justify-center drop-shadow-lg" width={200} src={props.image} alt=""/>
                <h1 className="text-sm md:text-xl my-3 font-bold">{props.name}</h1>
                <h2 className="text-sm md:text-lg p-4 drop-shadow-sm bg-slate-800 text-white rounded-md">{props.subtitle}</h2>
                <p className="text-sm md:text-lg py-4">{props.number ? props.number : ""}</p>
                <p className="text-sm md:text-lg">{props.contato ? props.contato : ""}</p>
            </div>
        </>
    )
}