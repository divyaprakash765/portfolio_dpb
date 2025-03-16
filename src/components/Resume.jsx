import SideNav from "../template/Side_nav.jsx";
import Nav from "../template/nav.jsx";


function Resume(){

    return(
       <div className="w-full h-[100vh] bg-[#B8B8B8] text-black flex">
        <div className="left-side w-[16%] bg-[#EAB751] h-screen">
        <img src="public/portfolio_web_img.png" className="w-[35vh] h-[32vh] rounded-md" />
       <SideNav />
        </div>
        <div className="w-[80%]">
        <h1 className="uppercase text-7xl ml-[20vh] mt-[3vh] font-bold px-60 py-5 border-2 border-black border-dashed text-center tracking-wider">resume</h1>
        {/* Education */}
        <div className="ml-32">
        <h1 className="uppercase text-3xl font-[650] mt-8">Education</h1>
        <div className="mt-2 flex gap-36">
        <div className="w-[24%]">
        <h3 className="font-semibold bg-[#EAB751] px-2 text-zinc-700 py-1 text-center rounded-md uppercase text-xl w-[28vh]">nit jamshedpur</h3>
        <h2 className="uppercase font-semibold text-2xl mt-2 ml-2 text-zinc-800 ">B.tech</h2>
        <p className="ml-2">Civil Engineering graduate with a passion for software development, combining analytical thinking with coding to build efficient and scalable applications.</p>
        </div>
        <div className="w-[24%]">
        <h3 className="font-semibold bg-[#EAB751] px-2 text-zinc-700 py-1 text-center rounded-md uppercase text-xl w-[28vh]">dav kusunda</h3>
        <h2 className="uppercase font-semibold text-2xl mt-2 ml-2 text-zinc-800 ">AISSCE</h2>
        <p className="ml-2">Achieved 87% in Class 12 with a strong foundation in Physics, Chemistry, Mathematics, and Biology, showcasing analytical skills and problem-solving abilities.</p>
        </div>
        <div className="w-[24%]">
        <h3 className="font-semibold bg-[#EAB751] px-2 text-zinc-700 py-1 text-center rounded-md uppercase text-xl w-[28vh]">st. thomas</h3>
        <h2 className="uppercase font-semibold text-2xl mt-2 ml-2 text-zinc-800 ">aisse</h2>
        <p className="ml-2">Secured 88.2% in Class 10, demonstrating a strong academic foundation and a consistent learning approach.</p>
        </div>
        </div>
        </div>
        
        {/* PROJECTS */}
        
        </div>
       </div>
    )
}

export default Resume;