import { NavLink } from "react-router-dom";
import 'remixicon/fonts/remixicon.css';
import Nav from "../template/nav.jsx";

function Home() {
    return (
      <div className="w-full min-h-screen bg-[#B8B8B8] text-black flex items-center justify-center">
        <div className="flex items-center justify-center gap-60">
          
          {/* First Half */}
          <div className="first-half flex flex-col items-start justify-center text-left w-[50%] px-16">
          <h3 className="text-[4vh] font-bold">HI THERE!</h3>
          <h1 className="text-[7vh] font-extrabold">I'M DIVYA
          </h1>
          <div className="bg-[#EAB751] rounded-md">
          <h6 className="font-semibold px-2 text-lg">UI/UX Developer / Backend Developer / Problem Solver</h6>
          </div>
          <p className="text-[17px] my-3">Passionate Fullstack Developer with a strong foundation in both frontend and backend technologies. I specialize in building dynamic and responsive web applications that provide seamless user experiences.
With a deep interest in problem-solving, I enjoy tackling complex coding challenges and continuously improving my skills in algorithms and data structures. My expertise spans across modern frameworks like React, Node.js, and Express, along with database management using SQL and MongoDB.
</p>
<NavLink to = "/about">
          <button className="px-4 py-2 bg-[#EAB751] font-semibold rounded-full mt-3"> more about me</button>
          </NavLink>
        </div>
  
          {/* Second Half */}
          <div className="second-half flex items-center justify-center w-[50%]">
            <img className="h-[70vh] w-[70vh] rounded-md" src="public/portfolio_web_img.png" alt="Portfolio Image"/>
          <Nav/>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default Home;
  