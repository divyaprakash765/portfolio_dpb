
import { NavLink } from "react-router-dom"
import 'remixicon/fonts/remixicon.css';

function Nav(){
    return(
        <div className="ml-5 h-[50vh] w-[6vh] bg-[#EAB751] rounded-md py-5">
        <NavLink to = "/" className="mt-7">
        <i class="ri-home-2-fill text-[3vh] ml-3 text-white"></i>
        </NavLink>
        <NavLink to = "/about" className="block mt-7">
        <i className="ri-user-6-fill text-[3vh] ml-3"></i>
        </NavLink>
        <NavLink to = "/resume" className="block mt-7">
        <i class="ri-briefcase-4-fill text-[3vh] ml-3"></i>
        </NavLink>
        <NavLink to = "/portfolio" className="block mt-7">
        <i className="ri-tv-2-fill text-[3vh] ml-3"></i>
        </NavLink>
        <NavLink to = "/testimonials" className="block mt-7">
        <i className="ri-megaphone-fill text-[3vh] ml-3"></i>
        </NavLink>
        <NavLink to = "/contact" className="block mt-7">
        <i className="ri-send-plane-fill text-[3vh] ml-3"></i>
        </NavLink>
       </div>
    )
}

export default Nav