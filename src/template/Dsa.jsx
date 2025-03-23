

function Dsa(){

    return(
        <div className="mt-20 flex w-[135vh] gap-20 ml-20">
        {/* code chef */}
        <div
          className="bg-white w-[40vh] h-[35vh] rounded-md cursor-pointer transform transition-transform duration-300 hover:scale-110 shadow-lg"
          onClick={() => {
            window.open("https://www.codechef.com/users/divya878", "_blank");
          }}
        >
          <img
            src="https://www.justalternativeto.com/wp-content/uploads/2021/07/CodeChef-735x400.jpg"
            className="w-full h-[25vh] rounded-t-md"
          />
          <div className="p-3 text-center">
            <h2 className="text-lg font-semibold">Code Chef</h2>
            <p className="text-sm text-gray-600">
              2⭐ with rating 1502
            </p>
          </div>
        </div>
  
        {/* Leet code */}
        <div
          className="bg-white w-[40vh] h-[35vh] rounded-md cursor-pointer transform transition-transform duration-300 hover:scale-110 shadow-lg"
          onClick={() => {
            window.open("https://leetcode.com/u/dpb937/", "_blank");
          }}
        >
          <img
            src="https://th.bing.com/th/id/OIP.DENauUixUf2DS-VfgKCXlAHaD2?rs=1&pid=ImgDetMain"
            className="w-full h-[25vh] rounded-t-md"
          />
          <div className="p-3 text-center">
            <h2 className="text-lg font-semibold">Leet Code</h2>
            <p className="text-sm text-gray-600">
              Solve 500+ problems in DSA
            </p>
          </div>
        </div>

        {/* Code forces */}
        <div
          className="bg-white w-[40vh] h-[35vh] rounded-md cursor-pointer transform transition-transform duration-300 hover:scale-110 shadow-lg"
          onClick={() => {
            window.open("https://movie-app-jet-nine.vercel.app/", "_blank");
          }}
        >
          <img
            src="https://miro.medium.com/v2/resize:fit:1200/1*iPZ00kImJY8oVioV5Dy75A.jpeg"
            className="w-full h-[25vh] rounded-t-md"
          />
          <div className="p-3 text-center">
            <h2 className="text-lg font-semibold">Code Forces</h2>
            <p className="text-sm text-gray-600">
              Highest rating is 1153
            </p>
          </div>
        </div>
      </div>
    )

}

export default Dsa;