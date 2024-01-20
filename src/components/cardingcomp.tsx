import React from "react"



interface CardComponent{
    index: number;
    img:string
    title:string
    description:string
    link:string
}

interface AllCard {
    EachCard:CardComponent[]
}

const objectValues: CardComponent = {
    index:0,
    img: "HTTP/images/",
    title: "Maya",
    description: "Started with Maya",
    link: "http://",
  };

const ArrayObjet:AllCard =  {
    EachCard:[objectValues]
}



export default function CardComponents() {
    return (
        <>
            <div className="justify-center flex flex-row mt-10">
                {
                    ArrayObjet.EachCard.map((cardCompo,index) =>{
                        return (
                            <>
                            <div key={cardCompo.index} className="card w-96 border ">
                            <div className="card-body">
                                <h2 className="card-title">{cardCompo.title}</h2>
                                <p>{cardCompo.description}</p>
                                <div className="card-actions justify-start">
                                <button className="btn">{cardCompo.link}</button>
                                </div>
                            </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>

        </>
    )
}