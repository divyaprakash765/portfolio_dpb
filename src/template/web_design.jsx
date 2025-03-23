function Web_design() {
    return (
      <div className="mt-20 flex gap-20 ml-20">
        {/* Movie Web App Card */}
        <div
          className="bg-white w-[60vh] h-[40vh] rounded-md cursor-pointer transform transition-transform duration-300 hover:scale-110 shadow-lg"
          onClick={() => {
            window.open("https://movie-app-jet-nine.vercel.app/", "_blank");
          }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1720610706902-f92d98fb8b35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW92aWUlMjBhcHBzfGVufDB8fDB8fHww"
            className="w-full h-[30vh] rounded-t-md"
          />
          <div className="p-3 text-center">
            <h2 className="text-lg font-semibold">Movie Web App</h2>
            <p className="text-sm text-gray-600">
              Discover and watch trailers of your favorite movies & TV shows.
            </p>
          </div>
        </div>
  
        {/* Dev Recruit Card */}
        <div
          className="bg-white w-[60vh] h-[40vh] rounded-md cursor-pointer transform transition-transform duration-300 hover:scale-110 shadow-lg"
          onClick={() => {
            window.open("https://movie-app-jet-nine.vercel.app/", "_blank");
          }}
        >
          <img
            src="https://kwebdesign.in/wp-content/uploads/2020/04/Job-Portal-Website-in-Guwahati-.jpg"
            className="w-full h-[30vh] rounded-t-md"
          />
          <div className="p-3 text-center">
            <h2 className="text-lg font-semibold">Dev Recruit</h2>
            <p className="text-sm text-gray-600">
              A job portal for developers to find their dream job.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Web_design;
  