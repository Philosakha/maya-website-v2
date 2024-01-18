import Image from "next/image"


export default function Navbar(){
    return(
        <>
        <div className="navbar bg-black-100 justify-between">
            <div>
               
            <a className="btn btn-ghost text-xl">Maya</a>

            </div>

            <div className="flex flex-row pl-5">
                <ul className="flex flex-row space-x-5">
                    <li>
                        React
                    </li>
                    <li>
                        CLI
                    </li>
                    <li>
                        Hooks
                    </li>

                </ul>

            </div>
        
        </div>
        </>
    )
}