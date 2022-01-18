import React, {useState} from "react";
import logochico from '../logochico.png';
import ProductCardFoods from "./ProductCardFoods";
import ProductCardBar from "./ProductCardBar";
import Order from "./Order";

const Menu = () =>{
    const [menu, seeMenu] = useState(false);
    const [add, addToOrder] = useState([]);


    return (
        <>
    <div className="grid place-content-start h-48">
        <header className="grid grid-cols-3 gap-4">
        <img className="grid grid-cols-2 gap-4 place-content-center h-48" src={logochico}></img>
        </header>
        <button className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg 
        focus:shadow-outline hover:bg-green-800" onClick={() => seeMenu(true)}>BAR</button>
        { menu && <ProductCardBar/>}
        <button className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg 
        focus:shadow-outline hover:bg-green-800" onClick={() => seeMenu(true)}>FOOTS</button>
        { menu && <ProductCardFoods/>}    
    </div>
    <aside className="Order">
        <Order add={add}/>

    </aside>
    </>
    )
}

export default Menu;