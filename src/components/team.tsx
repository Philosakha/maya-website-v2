import Image from "next/image"


export default function TeamComponent(){
    return (
        <>

<div className=" ">
                <div className="justify-center items-center ">
                    <h1 className="text-3xl w-full pb-5  ">Meet the Team</h1>
                </div>
    
                <div className="flex flex-row justify-around items-center pt-5">
                   
                    <div className="card w-96 bg-secondary text-primary-content">
                    <div className="card-body">
                    <div className=" justify-center w-full items-center">
                        <Image src="/images/kaushik.jpg" alt="Kaushik choudhury" width={100} height={100} className="rounded-full justify-center items-center"/>
                    </div>
                        <h2 className="card-title text-white">Kaushik Choudhury </h2>
                        <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                        </div>
                    </div>
                    </div>
                    <div className="card w-96 bg-primary text-primary-content">
                    <div className="card-body">
                    <Image src="" alt="Kaushik choudhury" className="justify-center" />
                        <h2 className="card-title">Harsh Ghodkar</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                        </div>
                    </div>
                    </div>
                </div>
</div>
        </>
    )
}