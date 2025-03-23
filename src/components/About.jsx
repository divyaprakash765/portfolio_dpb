import { NavLink } from "react-router-dom";
import SideNav from "../template/Side_nav.jsx";
import Nav from "../template/nav.jsx";
function About(){

    return(
       <div className="w-full h-[100vh] bg-zinc-200 text-black flex">
        
        <div className="left-side w-[16.5%] bg-[#EAB751] h-screen">
        <img src="portfolio_web_img.png" className="w-[35vh] h-[32vh] rounded-md" />
       <SideNav />
        </div>
        <div className="w-[80%]">
         <h1 className="uppercase text-7xl ml-[32vh] mt-[3vh] font-bold px-60 py-5 border-2 border-black border-dashed text-center">about me</h1>
        <div className="text-left ml-60 mt-10 flex">
            <div className="w-[90%]">
            <h1 className="text-3xl">I'm <span className="font-semibold">Divya Prakash,</span> Fullstack Developer / Problem Solver</h1>
            <p className="mt-7 w-[80%]">Passionate Fullstack Developer with a strong foundation in both frontend and backend technologies.
With a deep interest in problem-solving, I enjoy tackling complex coding challenges and continuously improving my skills in algorithms, data structures, and system design. My expertise spans across modern frameworks like React, Node.js, and Express, along with database management using SQL and MongoDB.
</p>
<div className="ml-[70vh] mt-[7vh]">
<h3 className="font-semibold text-xl ">Bringing Ideas to Life</h3>
<div className="mt-4 flex"><i className="text-8xl ri-reactjs-fill"></i>
<div>
<h1 className="font-bold ml-2 underline">React.JS</h1>
<p className="mt-2 ml-2 font-normal">Building dynamic, scalable, and user-friendly web applications using React.js.</p>
</div>
</div>
<div className="mt-8 flex"><i className="text-8xl ri-window-2-line font"></i>
<div className="">
<h1 className="font-bold ml-2 underline">Web Design</h1>
<p className="mt-2 ml-2 font-normal">Crafting visually appealing and user-friendly web experiences with design and functionality.</p>
</div>
</div>
</div>

</div>
<div className="ml-20">
<Nav />
</div>
    </div>
    <div className="h-[35vh] w-[65vh] bg-black ml-60 relative bottom-[38vh] relative flex flex-col">
        <h1 className="text-[#EAB751] text-3xl relative left-20 top-7">500+</h1>
        <h4 className="text-white text-md relative left-20 top-6">Problem solved <br /><h4 className="relative bottom-2">on Leetcode</h4></h4>
        <h1 className="text-[#EAB751] text-3xl relative left-[42vh] bottom-[7.5vh]">1700+</h1>
        <h4 className="text-white text-md relative left-[43vh] bottom-[8vh]">Rating on<br /><h4 className="relative bottom-2"> Leetcode</h4></h4>
        <h1 className="text-[#EAB751] text-3xl relative left-20 bottom-[3vh]">2⭐</h1>
        <h4 className="text-white text-md relative left-20 bottom-[3.5vh]">at codechef</h4>
    <div className="absolute top-[10%] left-[50%] transform -translate-x-1/2 w-0.5 h-[80%] border-[#EAB751] rounded-full border-dashed border-[1px]"></div>
    <div className="absolute top-1/2 left-[5%] transform -translate-y-1/2 w-[40%] h-0.5 border-[#EAB751] rounded-full border-dashed border-[1px] rounded-full"></div>
    <div className="absolute top-1/2 left-[55%] transform -translate-y-1/2 w-[40%] h-0.5 border-[#EAB751] rounded-full border-dashed border-[1px] rounded-full"></div>

    </div>
        </div>

       </div>
    )
}

export default About;