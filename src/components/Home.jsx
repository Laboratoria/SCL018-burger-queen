import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Home = () => {

  return (
    <>
      <section className="w-screen h-screen bg-emerald-50">
        <div className="flex justify-center ">
          <img src={logo} alt="" className="w-3/4 " />
        </div>
        <div className="w-full flex flex-col items-center p-5 gap-5 ">
        <Link to="/waiter">
          <button
            type="button"
            className="btn btn-danger font-weight: 500 shadow-md bg-[#feab6b] rounded-md hover:bg-[#e76f3d] text-white"
          >
            Acceso Garzon
          </button>
          </Link>
          <Link to="/kitchen">
            <button
              type="button"
              className="btn btn-info p-2  font-weight: 500 shadow-md bg-indigo-500 rounded-md hover:bg-indigo-700 text-white"
            >
              Acceso Cocina
            </button>
          </Link>
        </div>
      </section>
      
    </>
  );
};
export default Home;
