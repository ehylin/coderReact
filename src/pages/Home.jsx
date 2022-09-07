import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from 'react-router-dom' 


const Home = () => {
    return (
        <>
         <NavBar /> 
         <div className='home-sidebar'>
                <main>
                    <Outlet /> 
                </main>
          </div>
        </>
     );
}
 
export default Home;