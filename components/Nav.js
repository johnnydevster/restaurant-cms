import Link from "next/link";
import Image from "next/image";
import { useOutsideAlerter } from "../utils/Hooks";
import { useRef, useState } from "react";

export default function Nav({ setShowModal, setShowMenu }) {
  const [showNav, setShowNav] = useState(false);

  const navRef = useRef(null);
  useOutsideAlerter(navRef, () => setShowNav(false));

  function handleMenu() {
    setShowModal(true);
    setShowMenu(true);
    setShowNav(false);
  }

  function handleNav() {
    setShowNav(!showNav);
  }
  return (
    <>
      <nav className="tracking-widest justify-between items-center flex w-full fixed z-50 bg-gray-50 p-2 rounded-b">
        <Image src="/../public/logo.png" width={50} height={50} />

        <ul className="hidden sm:flex font-semibold mx-auto w-60 justify-between items-center uppercase">
          <li>
            <Link href="./">
              <a className="hover:text-gray-700 transition-all ease-in-out cursor-pointer border-b-4 border-gray-50 mt-1 hover:border-yellow-500">
                Home
              </a>
            </Link>
          </li>

          <li>
            <Link href="./about">
              <a className="hover:text-gray-700 transition-all ease-in-out cursor-pointer border-b-4 border-gray-50 mt-1 hover:border-yellow-500">
                About
              </a>
            </Link>
          </li>

          <li
            onClick={() => handleMenu()}
            className="hover:text-gray-700 transition-all ease-in-out cursor-pointer border-b-4 border-gray-50 mt-1 hover:border-yellow-500"
          >
            Menu
          </li>
        </ul>
        <button className="hidden sm:block cta-btn">Reservation</button>
        <div className="sm:hidden relative w-10 h-10 z-10 top-1 mx-2">
          <div
            className={`w-full h-full absolute z-20 rounded cursor-pointer ${
              showNav ? "block" : "hidden"
            }`}
          ></div>
          <span
            onClick={handleNav}
            class={`absolute material-icons text-3xl px-1 ${
              showNav ? "bg-gray-800" : "bg-gray-200"
            } text-gray-500 rounded cursor-pointer select-none`}
          >
            menu
          </span>
        </div>
        <div
          ref={navRef}
          className={`bg-gray-800 absolute h-screen top-0 right-0 left-1/2 flex items-center transition-all transform ease-in-out duration-500 ${
            showNav ? "" : "translate-x-full"
          }`}
        >
          <ul className="ml-5 h-36 justify-between font-semibold text-2xl uppercase text-yellow-400 flex flex-col">
            <li className="hover:text-yellow-300 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="hover:text-yellow-300 transition-all ease-in-out cursor-pointer">
              About
            </li>
            <li
              onClick={() => handleMenu()}
              className="hover:text-yellow-300 transition-all ease-in-out cursor-pointer"
            >
              Menu
            </li>
          </ul>
        </div>
      </nav>
      <div className="rounded shadow top-12 left-2 right-2 h-6 opacity-30 fixed z-40 bg-gray-400"></div>
    </>
  );
}
