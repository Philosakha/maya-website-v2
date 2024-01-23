import InitialHero from "./initialHero";
import CardComponents from "./cardingcomp";
import TeamComponent from "./team";
export default function Hero(){
    return(
        <>
           <div className="flex flex-col ">
               <div className="bg-base-100">
               <InitialHero />
               </div>
               <div className="bg-base-100 justify-center">
                    <CardComponents />
               </div>
               <div className="bg-base-100 justify-center items-center pt-10">
                <TeamComponent />
               </div>
           </div>
        </>
    )
}