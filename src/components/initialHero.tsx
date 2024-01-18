"use client"

import Typed from "typed.js"
import React from "react"



export default function InitialHero(){
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current,{
            strings:['Wormhole', 'Gateway '],
            typeSpeed:140,
            loop:true,
            startDelay: 2,
            backDelay:1000,
            backSpeed:150,
        });
        return () => {
            typed.destroy();
        }
    },[]);

    return (
        <>
            <div className="flex flex-row justify-between">
            <div className='flex justify-center items-center py-4'>
                    <p className='pt-2 md:text-4xl sm:text-xl text-l font-bold'>xChain Everything with </p>
                    <span className="pt-2 pl-2 md:text-4xl sm:text-xl text-l font-bold md:pl-2" ref={el} />
                
                    
                </div>
            <div>

            </div>
            </div>
        </>
    )

}