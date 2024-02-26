import NavBar from "../components/Dashboard/NavBar";
import SideBar from "../components/Dashboard/SideBar";
import { Outlet } from "react-router";

function DashboardSecundario() {
    
    return (
        <div className="w-full flex flex-col h-screen sm:flex-row sm:gap-5 sm:px-5 sm:py-5 bg-slate-50">
            
            <div className="w-full sm:hidden">
                <NavBar/>
            </div>

            <div className="hidden sm:flex sm:w-4/12 xl:w-3/12">
                <SideBar/>
            </div>

            <div className="w-full overflow-scroll h-full sm:w-8/12 xl:w-9/12 bg-white rounded-lg shadow-2xl px-5 py-5">
                <div className="w-full hidden sm:block text-center">
                    <h1 className="text-3xl xl:text-4xl font-bold">ParkingOut Ectasis</h1>
                </div>
                <Outlet/>
            </div>
            
        </div>
    )
}

export default DashboardSecundario;
