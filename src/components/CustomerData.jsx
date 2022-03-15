import React from "react";

const CustomerData = (props) => {
  return (
    <>
      <section className="grid justify-center py-4">
        <div className=" bg-[#fdec4a] w-60 grid grid-cols-2 items-center shadow-sm p-2 rounded-md">
          <div>
            <h1 className="font-bold">Pedido para: </h1>
          </div>
          <div>{props.name}</div>
          <div className="font-bold">
            <h1>Mesa: </h1>
          </div>
          <div>{props.number}</div>
        </div>
      </section>
    </>
  );
};

export default CustomerData;
