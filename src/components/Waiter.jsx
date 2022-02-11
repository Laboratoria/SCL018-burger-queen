import React, { useContext } from "react";
import Modal from "./Modal";
import CustomerData from "./CustomerData";
import NavMenu from "./NavMenu";
import {ContextProducts} from '../App'

const Waiter = () => {

  const globalContext = useContext(ContextProducts);

  return (
    <>
      <Modal state={globalContext.stateModal} changeState={globalContext.setStateModal}>
        <form>
          <section className="flex items-center flex-col gap-4">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold border-b-2">
                Ingrese nombre del cliente
              </h2>
              <input
                type="text"
                name="name"
                placeholder="Nombre Cliente"
                value={globalContext.name}
                onChange={(event) => globalContext.setName(event.target.value)} //recupera el valor de la entrada
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold border-b-2">
                Ingrese numero de mesa
              </h2>
              <input
                type="number"
                name="number"
                placeholder="N° Mesa"
                value={globalContext.table}
                onChange={(event) => globalContext.setTable(event.target.value)}
              />
            </div>

            <button
              onClick={() => globalContext.setStateModal(false)}
              type="button"
              className="p-2  font-weight: 500 shadow-md bg-indigo-500 rounded-md hover:bg-indigo-700 text-white"
            >
              Ingresar
            </button>
          </section>
        </form>
      </Modal>
      <section className="bg-emerald-50">
        <CustomerData name={globalContext.name} number={globalContext.table} />

        <div className="flex justify-center gap-2 space-x-3 w-screen">
          <NavMenu />
        </div>

        
      </section>
    </>
  );
};

export default Waiter;
