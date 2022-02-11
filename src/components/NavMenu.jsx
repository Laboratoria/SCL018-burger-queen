import React, { useState, useContext } from "react";
import items from "./data.json";
import ShoppingCart from "./ShoppingCart.jsx";
import { ContextProducts } from "../App.jsx";

const NavMenu = () => {
  const globalContext = useContext(ContextProducts);

  const filteredProducts = items.productos.filter((e) => e.type === "Menu");

  const [menuItems, setMenuitems] = useState(filteredProducts);
 
  const filterData = (option) => {

    // eslint-disable-next-line default-case
    switch (option) {
      case "Menu":
        const menu = items.productos.filter((e) => e.type === option);
        setMenuitems(menu);
        break; 
      case "Bebestible":
        const drinks = items.productos.filter((e) => e.type === option);
        setMenuitems(drinks);
        break;
      case "Promociones":
        const promotions = items.productos.filter((e) => e.type === option);
        setMenuitems(promotions);
        break;
    }
  };

  return (
    <>
      <section className="w-screen">
        <div className="space-x-6 flex justify-center h-10">
          <button
            type="button"
            className="p-2  font-weight: 500 shadow-md bg-[#feab6b] rounded-md active:bg-[#e76f3d] text-white"
            onClick={() => filterData("Menu")}
          >
            Menu principal
          </button>
          <button
            type="button"
            className="p-2  font-weight: 500 shadow-md bg-[#feab6b] rounded-md active:bg-[#e76f3d] text-white"
            onClick={() => filterData("Bebestible")}
          >
            Bebestible
          </button>
          <button
            type="button"
            className="p-2  font-weight: 500 shadow-md bg-[#feab6b] rounded-md active:bg-[#e76f3d] text-white"
            onClick={() => filterData("Promociones")}
          >
            Promociones
          </button>
        </div>
        <div className="grid grid-cols-[2fr,1fr] gap-4 p-4 h-auto ">
          <section className="grid sm:grid-rows-3 content-between md:grid-cols-3 gap-3	">
            {menuItems.map((producto, index) => (
              <div className=" border-2 rounded h-full " key={index}> {/*key se debe incluir para crear listas de elementos, ayuda a identificar si los items han cambiado */}
                <div className="flex justify-center ">
                  <h1 className="">{producto.name}</h1>
                </div>
                <div className="grid sm:grid-cols-4 md:grid-col-9  p-1 gap-2">
                  <div className="sm:col-span-2   ">
                    <img className="sm:w-" src={producto.img} />
                  </div>
                  <div className="sm:col-span-2   divide-y divide-orange-600">
                    <p className="">{producto.description}</p>
                    <p className="">${producto.price}</p>
                    
                  </div>
                  <div className="flex sm:col-start-4 justify-center sm:px-10 md:px-8">
                    <button onClick={()=> globalContext.addCarrito(producto)} className="flex items-end justify-end sm:px-4 md:p-1   font-weight: 500 shadow-md bg-indigo-500 rounded-md hover:bg-indigo-700 text-white">
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <div className="border-2 rounded h-min w-full ">
            <ShoppingCart/>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavMenu;

