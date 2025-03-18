import { NavLink, useLocation, Outlet } from "react-router-dom";
import SideNav from "../template/Side_nav";

function Portfolio(){
    const location = useLocation();
    return(
        <div className="w-full h-[100vh] bg-[#B8B8B8] text-black flex">
            {/* Left Sidebar */}
            <div className="left-side w-[16.5%] bg-[#EAB751] h-screen">
                <img src="public/portfolio_web_img.png" className="w-[35vh] h-[32vh] rounded-md" />
                <SideNav />
            </div>
            
            {/* Main Content */}
            <div className="w-[80%]">
                <h1 className="uppercase text-7xl ml-[20vh] mt-[3vh] font-bold px-60 py-5 border-2 border-black border-dashed text-center tracking-wider">
                    Portfolio
                </h1>

                {/* Navigation Links */}
                <div className="flex gap-44 text-3xl font-semibold mt-6 ml-44">
                    <NavLink 
                        to="/portfolio" 
                        className={`${location.pathname === "/portfolio" || location.pathname === "/portfolio/all" ? "text-white" : "text-black"}`}>
                        All
                    </NavLink>
                    <NavLink 
                        to="/portfolio/web_design"
                        className={`${location.pathname === "/portfolio/web_design" ? "text-white" : "text-black"}`}>
                        Web Design
                    </NavLink>
                    <NavLink 
                        to="/portfolio/dsa"
                        className={`${location.pathname === "/portfolio/dsa" ? "text-white" : "text-black"}`}>
                        DSA
                    </NavLink>    
                </div>    

                {/* Render child route components here */}
                <div className="mt-10 flex justify-center">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
