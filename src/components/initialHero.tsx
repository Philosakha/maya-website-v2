"use client"
import Typed from "typed.js";
import React, { useRef, useEffect } from "react";

export default function InitialHero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['FRAMEWORK', 'CLI'],
      typeSpeed: 140,
      loop: true,
      startDelay: 2,
      backDelay: 1000,
      backSpeed: 150,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-row justify-between pt-5">
    {/* First div */}
    <div className="flex flex-col justify-center items-center py-4" style={{ width: '50%' }}>
      <p className="pt-2 md:text-4xl sm:text-xl text-l font-bold">Maya simplicity</p>
      <span className="pt-2 pl-2 md:text-4xl sm:text-xl text-l font-bold md:pl-2" ref={el} />
      <div className="flex flex-row space-x-4 justify-center">
        <button className="btn btn-accent">Get Started</button>
        <button className="btn btn-ghost">Why Maya?</button>
        <button className="btn">View on Github</button>
      </div>
    </div>
  
    {/* Second div */}
    <div className="container justify-center items-center" style={{ width: '50%' }}>
      <div
        style={{
          background:
            'radial-gradient(100% 100% at 10% 10%, rgba(2,0,36,1) 0%, rgba(156,95,170,1) 35%, rgba(0,212,255,1) 100%)',
          padding: '20px', // Add padding or adjust as needed
          borderRadius: '50%',
          width: '400px',
          height: '400px',
          display: 'flex',
          alignItems: 'center', // Center vertically
          justifyContent: 'center',
          animation: 'shine 4s ease-in-out',
        }}
      >
        <h1 className="text-5xl justify-center items-center">Maya</h1>
      </div>
    </div>
  </div>
  
  );
}
