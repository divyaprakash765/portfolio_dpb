import SideNav from "../template/Side_nav";
import Nav from "../template/nav";
import "remixicon/fonts/remixicon.css"; // Import Remix Icons

function Contact() {
    return (
        <div className="w-full h-[100vh] bg-[#B8B8B8] text-black flex">
            <div className="left-side w-[16.5%] bg-[#EAB751] h-screen">
                <img src="portfolio_web_img.png" className="w-[35vh] h-[32vh] rounded-md" />
                <SideNav />
            </div>
            <div className="flex flex-col items-center gap-[10vh] text-black justify-center min-h-screen">
                {/* Contact Heading */}
                <h1 className="uppercase text-7xl ml-[20vh] mt-[3vh] font-bold px-60 py-5 border-2 border-black border-dashed text-center tracking-wider">
                    Contact me
                </h1>

                {/* Subtext */}
                <div>
                    <p className="text-gray-700 ml-[38vh] text-lg mb-6">
                        Feel <span className="font-bold">free</span> to contact me!
                    </p>

                    {/* Contact Box */}
                    <div className="bg-white p-8 rounded-lg bg-zinc-200 shadow-lg w-[50vw] text-center">
                        <p className="text-gray-600 text-sm mb-6">
                            Reach out to me via email or phone. Whether you have a project idea or just want to say hello, I'm always open to discussions!
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {/* Email */}
                            <div className="text-center">
                                <i className="ri-mail-line text-5xl text-gray-700 mb-2"></i>
                                <p className="font-semibold">divyaprakshburnwal2@gmail.com</p>
                            </div>

                            {/* Phone */}
                            <div className="text-center">
                                <i className="ri-phone-line text-5xl text-gray-700 mb-2"></i>
                                <p className="font-semibold">+91 8709024652</p>
                            </div>

                            {/* GitHub */}
                            <div className="text-center">
                                <a href="https://github.com/divyaprakash765" target="_blank" rel="noopener noreferrer">
                                    <i className="ri-github-fill text-5xl text-gray-700 mb-2 cursor-pointer"></i>
                                </a>
                                <p className="font-semibold">divyaprakash765</p>
                            </div>

                            {/* LinkedIn */}
                            <div className="text-center">
                                <a href="https://www.linkedin.com/in/divya-prakash-050362261/" target="_blank" rel="noopener noreferrer">
                                    <i className="ri-linkedin-box-fill text-5xl text-blue-600 mb-2 cursor-pointer"></i>
                                </a>
                                <p className="font-semibold">Divya Prakash</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-xl font-bold text-zinc-500 mt-6 ml-[38vh]">THANKS FOR PATIENCE!</p>
                </div>
            </div>

            <div className="ml-[8vh] mt-[22vh]">
                <Nav />
            </div>
        </div>
    );
}

export default Contact;
