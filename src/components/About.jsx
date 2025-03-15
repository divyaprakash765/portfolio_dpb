import { NavLink } from "react-router-dom";
import SideNav from "../template/Side_nav.jsx";
import Nav from "../template/nav.jsx";
function About(){

    return(
       <div className="w-full min-h-screen bg-[#B8B8B8] text-black flex">
        
        <div className="left-side w-[16%] bg-[#EAB751] h-screen">
        <img src="public/portfolio_web_img.png" className="w-[35vh] h-[32vh] rounded-md" />
       <SideNav />
        </div>
        <div className="w-[80%]">
         <h1 className="uppercase text-7xl ml-[32vh] mt-[3vh] font-bold px-60 py-5 border-2 border-black border-dashed text-center">about me</h1>
        <div className="text-left ml-60 mt-10 flex">
            <div className="w-[90%]">
            <h1 className="text-3xl">I'm <span className="font-semibold">Divya Prakash,</span> Fullstack Developer / Problem Solver</h1>
            <p className="mt-7 w-[80%]">Passionate Fullstack Developer with a strong foundation in both frontend and backend technologies. I specialize in building dynamic and responsive web applications that provide seamless user experiences.
With a deep interest in problem-solving, I enjoy tackling complex coding challenges and continuously improving my skills in algorithms, data structures, and system design. My expertise spans across modern frameworks like React, Node.js, and Express, along with database management using SQL and MongoDB.
</p>
</div>
<Nav />
    </div>
    <div className="h-[35vh] w-[65vh] bg-black ml-60 relative bottom-32 relative flex flex-col">
        <h1 className="text-[#EAB751] text-3xl relative left-20 top-7">500+</h1>
        <h4 className="text-white text-md relative left-20 top-6">Problem solved <br /><h4 className="relative bottom-2">on DSA</h4></h4>
        <h1 className="text-[#EAB751] text-3xl relative left-[42vh] bottom-[7.5vh]">1700+</h1>
        <h4 className="text-white text-md relative left-[43vh] bottom-[8vh]">Rating on<br /><h4 className="relative bottom-2"> Leetcode</h4></h4>
    <div className="absolute top-[10%] left-[50%] transform -translate-x-1/2 w-0.5 h-[80%] border-[#EAB751] rounded-full border-dashed border-[1px]"></div>
    <div className="absolute top-1/2 left-[5%] transform -translate-y-1/2 w-[40%] h-0.5 border-[#EAB751] rounded-full border-dashed border-[1px] rounded-full"></div>
    <div className="absolute top-1/2 left-[55%] transform -translate-y-1/2 w-[40%] h-0.5 border-[#EAB751] rounded-full border-dashed border-[1px] rounded-full"></div>

    </div>
        </div>

       </div>
    )
}

export default About;