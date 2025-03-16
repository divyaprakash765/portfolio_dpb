import { NavLink, useLocation } from "react-router-dom";

function SideNav(){
  const location = useLocation();
    return(
        <div className="relative flex flex-col items-center mt-10">
        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-black"></div>
      
        <NavLink to="/" className={`font-semibold text-xl relative bg-[#EAB751] px-2 ${location.pathname === "/" ? "text-white" : "text-black"}`}>
          HOME
        </NavLink>
        <div className="w-2 h-2 bg-black rounded-full my-3"></div>
      
        <NavLink to="/about" className={`font-semibold text-xl relative bg-[#EAB751] px-2 ${location.pathname === "/about" ? "text-white" : "text-black"}`}>
          ABOUT ME
        </NavLink>
        <div className="w-2 h-2 bg-black rounded-full my-3"></div>
      
        <NavLink to="/resume" className={`font-semibold text-xl relative bg-[#EAB751] px-2 ${location.pathname === "/resume" ? "text-white" : "text-black"}`}>
          RESUME
        </NavLink>
        <div className="w-2 h-2 bg-black rounded-full my-3"></div>
      
        <NavLink to="/portfolio" className={`font-semibold text-xl relative bg-[#EAB751] px-2 ${location.pathname === "/portfolio" ? "text-white" : "text-black"}`}>
          PORTFOLIO
        </NavLink>
        <div className="w-2 h-2 bg-black rounded-full my-3"></div>
      
        <NavLink to="/testimonials" className={`font-semibold text-xl relative bg-[#EAB751] px-2 ${location.pathname === "/testimonials" ? "text-white" : "text-black"}`}>
          TESTIMONIALS
        </NavLink>
        <div className="w-2 h-2 bg-black rounded-full my-3"></div>
      
        <NavLink to="/contact" className={`font-semibold text-xl relative bg-[#EAB751] px-2 ${location.pathname === "/contact" ? "text-white" : "text-black"}`}>
          CONTACT
        </NavLink>
        <div className="w-2 h-2 bg-black rounded-full my-3"></div>
      </div>
      
    )
}

export default SideNav;