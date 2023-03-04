import { useState } from "react";
import Content from "./components/Content";
import {
  RiHome3Line,
  RiFirefoxLine,
  RiLayoutGridFill,
  RiTeamLine,
  RiBaseStationLine,
  RiDownload2Fill,
  RiSettings2Line,
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
  RiNotification3Line,
  RiSearchLine,
} from "react-icons/ri";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#141414] min-h-screen">
      <sidebar
        className={`fixed top-0 w-80 h-full z-50 bg-[#141414] border-r border-gray-800 p-8 flex flex-col justify-between transition-all duration-300 lg:left-0 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        <div>
          <h1 className="text-gray-300 text-bold uppercase text-2xl tracking-[5px] mb-10">
            GamerBeast
          </h1>
          <ul>
            <li>
              <a
                href="#"
                className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
              >
                <RiHome3Line />
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
              >
                <RiFirefoxLine />
                Store
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
              >
                <RiLayoutGridFill />
                Library
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
              >
                <RiTeamLine />
                Friends
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
              >
                <RiBaseStationLine />
                Live
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a
                href="#"
                className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
              >
                <RiDownload2Fill />
                Downloads
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
              >
                <RiSettings2Line />
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors relative"
              >
                <img
                  src="https://img.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg"
                  alt="foto"
                  className="w-6 h-6 object-cover rounded-full"
                />
                <RiCheckboxBlankCircleFill className="absolute text-green-600 bottom-3 left-8 text-[8px]" />
                Marc Groosp
              </a>
            </li>
          </ul>
        </div>
        {/* button mobile */}
        <button
          className=" lg:hidden bg-blue-600 fixed bottom-8 right-6 p-2 text-lg rounded-full z-50"
          onClick={handleToggle}
        >
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </sidebar>
      <header className="fixed lg:pl-[340px] w-full text-white flex flex-col md:flex-row items-center justify-between p-8 gap-4">
        <nav className="flex items-center gap-4 order-1 lg:order-none md:order-none">
          <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-full">
            Discover
          </a>
          <a href="#" className=" text-gray-500 py-2 px-4 rounded-full">
            Browse
          </a>
          <a href="#" className=" text-gray-500 py-2 px-4 rounded-full">
            WishList
          </a>
        </nav>
        <ul className="flex items-center gap-4">
          <li>
            <a href="" className="text-gray-500 text-lg">
              <RiNotification3Line />
            </a>
          </li>
          <li>
            <form className="relative">
              <RiSearchLine className="text-gray-500 absolute top-3 left-2" />
              <input
                type="text"
                className="bg-[#232323] outline-none text-gray-300  py-2 pl-8 pr-4 rounded-full w-full"
                placeholder="Search"
              />
            </form>
          </li>
        </ul>
      </header>
      <Content/>
    </div>
  );
};

export default App;
