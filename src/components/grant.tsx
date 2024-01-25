import Image from "next/image"

export default function Grant(){
    return (
        <div className="text-center">
            <div className="pb-5  justifty-center items-center">
                <h1 className="text-2xl justify-center items-center border-b-2 w-[100px] mx-auto">Grant By</h1>
            </div>
            <div className="card-body flex flex-row bg-green-300 w-[1300px] border rounded-lg h-[200px] justify-center items-center mx-auto">
                <Image src="" alt="Mina protocol logo" />
                <h2 className="card-title justify-center items-center "> Mina Protocol</h2>

            </div>
           
        </div>
    )
}