import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="grid justify-items-center w-[100%]">
        <img src={viteLogo} className="logo text-4xl" alt="Vite logo" />

        <div className="center-contents">
          <p className="text-4xl  md:text-6xl font-medium">
            Modern ways to
            <br />
            Complete tasks
          </p>

          <p className=" mt-4 md:text-2xl text-gray-500">Boost your Productivty by Setting Daily Goals.</p>
          <button className="bg-[#646cff] p-3 text-white font-medium rounded-full mt-3">
            <Link to="/app">
            Get Started

            </Link>                        
            </button>
        </div>
      </div>
    </>
  );
}

export default Home;

