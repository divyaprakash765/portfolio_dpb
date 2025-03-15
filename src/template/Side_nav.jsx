import { NavLink } from "react-router-dom";

function SideNav(){
    return(
        <div className="relative flex flex-col items-center mt-10">
        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-black"></div>
      
        <NavLink to="/" className="font-semibold text-xl relative bg-[#EAB751] px-2">
          HOME
        </NavLink>
        <div className="w-2 h-2 bg-black rounded-full my-3"></div>
      
        <NavLink to="/about" className="font-semibold text-xl text-white relative bg-[#EAB751] px-2">
          ABOUT ME
        </NavLink>
        <div className="w-2 h-2 bg-black rounded-full my-3"></div>
      
        <NavLink to="/resume" className="font-semibold text-xl relative bg-[#EAB751] px-2">
          RESUME
        </NavLink>
        <div className="w-2 h-2 bg-black rounded-full my-3"></div>
      
        <NavLink to="/portfolio" className="font-semibold text-xl relative bg-[#EAB751] px-2">
          PORTFOLIO
        </NavLink>
        <div className="w-2 h-2 bg-black rounded-full my-3"></div>
      
        <NavLink to="/testimonials" className="font-semibold text-xl relative bg-[#EAB751] px-2">
          TESTIMONIALS
        </NavLink>
        <div className="w-2 h-2 bg-black rounded-full my-3"></div>
      
        <NavLink to="/contact" className="font-semibold text-xl relative bg-[#EAB751] px-2">
          CONTACT
        </NavLink>
        <div className="w-2 h-2 bg-black rounded-full my-3"></div>
      </div>
      
    )
}

export default SideNav;