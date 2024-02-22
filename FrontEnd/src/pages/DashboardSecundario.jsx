import NavBar from "../components/Dashboard/NavBar";
import SideBar from "../components/Dashboard/SideBar";
import { Outlet } from "react-router";

function DashboardSecundario() {
    
    return (
        <div className="w-full flex flex-col px-5 py-8 gap-10 sm:flex-row sm:gap-0 sm:px-0 sm:py-0">
            
            <div className="w-full sm:hidden">
                <NavBar/>
            </div>

            <div className="hidden sm:flex sm:w-4/12 xl:w-3/12">
                <SideBar/>
            </div>

            <div className="w-full sm:w-8/12 xl:w-9/12">
                <div className="w-full hidden sm:block text-center pt-5">
                    <h1 className="text-3xl xl:text-4xl font-bold">ParkingOut Ectasis</h1>
                </div>
                <Outlet/>
            </div>
            
        </div>
    )
}

export default DashboardSecundario;
