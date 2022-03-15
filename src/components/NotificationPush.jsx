import React, { useContext} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ContextProducts } from '../App';
import "./snackbar.css";


const NotificationPush = ({state, children}) => {

    let snackbar = document.getElementById("snackbar");
    console.log(snackbar)
    // snackbar.classList.add("show");
    // setTimeout(() => {snackbar.classList.remove("show")}, 8000);
    console.log("funciona")
    
    return (
        <>
         {state && (
           
          <div id="snackbar" className='show'>Nuevo pedido listo para entregar{children}</div>
          
         )}
              </>

          )
}

export default NotificationPush;