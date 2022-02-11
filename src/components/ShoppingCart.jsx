import { useContext } from "react";
import { ContextProducts } from "../App";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const ShoppingCart = () => {
  const globalContext = useContext(ContextProducts);
  const totalOrder = globalContext.totalOrderAmount;
  
  const refreshPage = () => {
     window.location.reload(false);
 }

  const onSubmit = async (e) => {
    e.preventDefault(); 
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    try {
      const docRef = await addDoc(collection(db, "orders"), {
        orderTime: time,
        client: globalContext.name,
        table: globalContext.table,
        order: globalContext.products.resumeOrder,
        totalAmount: globalContext.totalOrderAmount,
        status: "Pendiente",
      });
      console.log('Document written with ID: ', docRef.id);

    } catch (err) {

      console.log(err);
    }
    
    refreshPage(); 
    globalContext.setName('');
    globalContext.setTable('');
 
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1 className="flex justify-center text-lg pb-2">Resumen de compras</h1>
        <div>
          {globalContext.products.resumeOrder.map((dish) => (
              <div key={dish.id} className="flex justify-center p-2 h-24">
                <div className="w-full grid grid-cols-10 border-1 border-solid rounded-md border-slate-300 shadow-md 	">
                  <div className=" col-span-8 p-2 space-y-2">
                    <h1>{dish.name}</h1>
                    <h1>${dish.price}</h1>
                  </div>
                  <section className="col-span-1 flex flex-col relative top-2">
                    <button
                      type="button"
                      className="h-3 "
                      onClick={() => globalContext.increase(dish.id)}
                    >
                      <i className="fas fa-caret-up fa-2x"></i>
                    </button>
                    <div className="button-2 flex justify-center">
                      <p className="text-xs relative top-[10px]  ">{dish.count}</p>
                    </div>
                    <button
                      type="button"
                      className="h-3 "
                      onClick={() => globalContext.decrease(dish.id)}
                    >
                      <i className="fas fa-caret-down fa-2x"></i>
                    </button>
                    
                  </section>
                  <div className="col-span-1">
                  <button
                      type="button"
                      className="flex relative items-end h-2  float-right top-3 p-1"
                      onClick={() => globalContext.removeFromOrder(dish.id)}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </div>
          ))}
        </div>
        <div>
          <h2>Total ${totalOrder}</h2>
        </div>
       <div className="flex justify-end p-4">
          <button
            type="submit"
            className=" p-2 sm:font-weight: 200 md:font-weight: 500 shadow-md bg-[#feab6b] rounded-md hover:bg-[#e76f3d] text-white"
            onClick= {onSubmit}
         >
            Tomar pedido
          </button>
        </div> 
      </form>
    </>
  );
};

export default ShoppingCart;
