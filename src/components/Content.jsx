import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";

const Content = () => {
  return (
    <main className="lg:pl-[340px] p-8 pt-36 flex justify-between">
      <div className="grid grid-cols-6 w-full">
        <div className="col-span-5 relative">
          <img
            src="https://i.redd.it/nihjzcd9lvu81.png"
            className="w-full h-[500px] object-cover"
            alt="World of Warcraft"
          />
          <p className="font-bold absolute top-72 left-64 text-3xl text-white">
            Las Islas Dragón te esperan
          </p>
          <button className="font-bold absolute bottom-14 left-16 text-3xl text-white bg-blue-600 rounded-full px-2 py-1 flex gap-2 items-center group">
            <RiShoppingCartLine className="" />
            Comprar Ahora
          </button>
        </div>

        <div className="">
          <ul className="p-4 flex flex-col gap-4 ">
            <li>
              <a
                href="#"
                className="flex items-center gap-4 text-white text-center"
              >
                <img
                  src="https://cdn-3.expansion.mx/dims4/default/c5cde74/2147483647/strip/true/crop/1920x1080+0+0/resize/1800x1013!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F87%2Ff5%2F39dee60340d5a265a8706a3c04e0%2Fmw2-beta-hero.jpg"
                  alt="COD2"
                  className="w-32 h-full object-cover "
                />
                Modern Warfare II
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 text-white text-center"
              >
                <img
                  src="https://image.api.playstation.com/vulcan/ap/rnd/202211/1408/Qe0zu6219zkHO626HLg0STuT.png"
                  alt="Street fighter VI"
                  className="w-32 h-full object-cover "
                />
                Street Fighter VI
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 text-white text-center"
              >
                <img
                  src="https://www.cronista.com/files/image/445/445542/61f5f904a41b5.jpg"
                  alt="Fortnite"
                  className="w-32 h-full object-cover "
                />
                Fortnite
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 text-white text-center"
              >
                <img
                  src=" https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt197bfce3b1cb7880/6286c2cccf13bb4bbe6278ad/open-graph.jpg"
                  alt="Street fighter VI"
                  className="w-32 h-full object-cover "
                />
                Diablo IV
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 text-white text-center"
              >
                <img
                  src="https://cdn.akamai.steamstatic.com/steam/apps/990080/capsule_616x353.jpg?t=1676056674"
                  alt="Hogwarts Legacy"
                  className="w-32 h-full object-cover "
                />
                Hogwarts Legacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 text-white text-center"
              >
                <img
                  src="https://cdn.mmoculture.com/mmo-images/2022/12/Throne-and-Liberty.png"
                  alt="Throne and Liberty"
                  className="w-32 h-full object-cover "
                />
                Throne And Liberty
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Content;
