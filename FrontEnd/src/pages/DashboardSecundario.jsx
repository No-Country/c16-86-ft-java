import NavBar from "../components/Dashboard/NavBar";
import SideBar from "../components/Dashboard/SideBar";
import { Outlet } from "react-router";

import Navegador from "../components/Dashboard/Navegador";

function DashboardSecundario() {
    
    return (
        <div className="w-full flex flex-col h-screen sm:flex-row sm:gap-5 sm:px-5 sm:py-5">
            
            <div className="w-full sm:hidden">
                <NavBar/>
            </div>

            <div className="hidden sm:flex sm:w-4/12 xl:w-3/12">
                <SideBar/>
            </div>

            <div className="w-full overflow-scroll h-full sm:w-8/12 xl:w-9/12 bg-gray-200 rounded-lg shadow-2xl px-5 py-5 border-2 border-gray-300">
                <div className="hidden sm:block">
                    <Navegador
                        type='dashboard'
                    />
                </div>
                <Outlet/>
            </div>
            
        </div>
    )
}

export default DashboardSecundario;
