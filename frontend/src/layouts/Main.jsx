import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const Main = () => {
    return (
        <div className="flex flex-col h-screen w-full bg-[#0A0A0B] overflow-y-scroll">
            <Navbar/>
            <div className="flex flex-col flex-1 px-8 pt-8">
                <Outlet/>
            </div>
        </div>
     );
}
 
export default Main;