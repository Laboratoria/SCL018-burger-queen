import React, {useState} from 'react';
import  db  from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

const Update = ({id, orderTime, client, table, order, totalAmount, status }) => {

    const [statusCook, setStatusCook] = useState({
        status: {status: "Pendiente"}
    })

    const changeStatusCook = () => {
        setStatusCook({
            ...statusCook,
            status:"Listo para servir"
        })
    }

    const updateStatus = async (e) => {
        e.preventDefault();
        console.log('se actualiza');
        try {
            await updateDoc(doc(db, 'orders', id), {
                status: statusCook,
            });

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={updateStatus}>
                <div key={id}>
                    <p>mesa:{table}</p>
                    <p>cliente:{client}</p>
                    <span>{order.map((item) => (
<ul key={item.id}>
    <li>{item.count} {item.order}</li>
     </ul>
                    ))}</span>
                </div>
            </form>
        </div>
    )
}

export default Update;