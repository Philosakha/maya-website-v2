import Image from "next/image"
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


export default function TeamComponent(){
    return (
        <>

<div className=" ">
                <div className="justify-center items-center text-center ">
                    <h1 className="text-3xl w-full pb-5 ">Meet the Team</h1>
                </div>
    
                <div className="flex flex-row justify-around items-center pt-5 pb-10">
                   
                    <div className="card w-96 bg-secondary text-primary-content">
                    <div className="card-body">
                    <div className=" justify-center w-full items-center flex flex-row space-x-5">
                        <Image src="/images/kaushik.jpg" alt="Kaushik choudhury" width={100} height={100} className="rounded-full justify-center items-center"/>
                        <p className="text-2xl ">FullStack developer</p>
                    </div>
                        <h2 className="card-title text-white">Kaushik Choudhury </h2>
                        <div className="card-actions justify-start space-x-5">
                        <CiLinkedin size={50}/>
                        <CiTwitter size={50}/>
                        <FaGithub size={50}/>
                        </div>
                    </div>
                    </div>
                    <div className="card w-96 bg-primary text-primary-content">
                    <div className="card-body">
                    <div className=" justify-center w-full items-center flex flex-row space-x-5">
                        <Image src="/images/kaushik.jpg" alt="Kaushik choudhury" width={100} height={100} className="rounded-full justify-center items-center"/>
                        <p className="text-2xl ">BlockChain developer</p>
                    </div>
                        <h2 className="card-title">Harsh Ghodkar</h2>
                        <div className="card-actions justify-start space-x-5">
                        <CiLinkedin size={50}/>
                        <CiTwitter size={50}/>
                        <FaGithub size={50}/>
                        </div>
                    </div>
                    </div>
                </div>
</div>
        </>
    )
}