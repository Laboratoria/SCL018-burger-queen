import React from "react";

const Order = ({add}) => {
    
return (
<div className="">
    <h1 className="font-bold text-xl mb-2">Orden:</h1>
    {add.length > 0 ?
    add.map((element, index) =>{
        return (
            <div key={index}>
                <p>{element.name} {element.price + "$"}</p>
            </div>
        )
    })
    :
    <p>Aun no haz agregado productos.</p>
    }
</div>
)
}
export default Order;