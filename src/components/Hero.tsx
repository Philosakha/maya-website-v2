import InitialHero from "./initialHero";
import CardComponents from "./cardingcomp";
import TeamComponent from "./team";
import Grant from "./grant";
export default function Hero(){
    return(
        <>
           <div className="flex flex-col ">
               <div className="bg-base-100">
               <InitialHero />
               </div>
               <div className="bg-base-100 justify-center pb-10">
                    <CardComponents />
               </div>
               <div className="bg-base-100 justify-center items-center pt-10 border-y-2  ">
                <TeamComponent />
               </div>
               <div className="bg-base-100 justify-center items-center pt-10">
                <Grant />
               </div>
           </div>
        </>
    )
}