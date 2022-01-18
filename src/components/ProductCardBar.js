import React from "react";
import data from "../data.json";

const ProductCardBar = () =>{
const menuBar = data.bar;

    return (
        <>
           <div className="grid grid-rows-4 grid-flow-col gap-4">
             {menuBar.map((element, index) =>{
                 return ( 
                    <>
                     <div className="font-bold text-xl mb-2" key={index}>
                         <p>{element.name}</p>
                         {element.price + "$"}
                     </div>
                     <button className="bg-violet-500 hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg" type="submit">Agregar</button>
                     </>
                 )
             })}
               </div> 
      
        </>
)
}

export default ProductCardBar;