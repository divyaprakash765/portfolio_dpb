import { NavLink, useLocation } from "react-router-dom";
import 'remixicon/fonts/remixicon.css';

function Nav() {
    const location = useLocation();  // Get current path

    return (
        <div className="ml-5 h-[50vh] w-[6vh] bg-[#EAB751] rounded-md py-5">
            <NavLink to="/" className="mt-10">
                <i className={`ri-home-2-fill text-[3vh] ml-3 ${location.pathname === "/" ? "text-white" : "text-black"}`}></i>
            </NavLink>
            <NavLink to="/about" className="block mt-10">
                <i className={`ri-user-6-fill text-[3vh] ml-3 ${location.pathname === "/about" ? "text-white" : "text-black"}`}></i>
            </NavLink>
            <NavLink to="/resume" className="block mt-10">
                <i className={`ri-briefcase-4-fill text-[3vh] ml-3 ${location.pathname === "/resume" ? "text-white" : "text-black"}`}></i>
            </NavLink>
            <NavLink to="/portfolio" className="block mt-10">
                <i className={`ri-tv-2-fill text-[3vh] ml-3 ${location.pathname === "/portfolio" ? "text-white" : "text-black"}`}></i>
            </NavLink>
            
            <NavLink to="/contact" className="block mt-10">
                <i className={`ri-send-plane-fill text-[3vh] ml-3 ${location.pathname === "/contact" ? "text-white" : "text-black"}`}></i>
            </NavLink>
        </div>
    );
}

export default Nav;
