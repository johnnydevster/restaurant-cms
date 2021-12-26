import Link from "next/link";
import Image from "next/image";
import { useOutsideAlerter } from "../utils/Hooks";
import { useRef, useState } from "react";
import logo from "../public/logo.png";
import DateTimePicker from "react-datepicker";

export default function Nav({
  setShowModal,
  setShowMenu,
  setShowReservationModal,
}) {
  const [showSidebar, setShowSidebar] = useState(false);

  const navRef = useRef(null);
  useOutsideAlerter(navRef, () => setShowSidebar(false));

  function handleMenu() {
    setShowModal(true);
    setShowMenu(true);
    setShowSidebar(false);
    setShowReservationModal(false);
  }

  function handleReservationModal() {
    setShowReservationModal(true);
    setShowSidebar(false);
    setShowMenu(false);
  }

  function handleNav() {
    setShowSidebar(!showSidebar);
  }
  return (
    <>
      <nav className="tracking-widest justify-between items-center flex w-full fixed z-50 bg-gray-50 p-2 rounded-b">
        <Link href="/">
          <a>
            <Image src={logo} width={50} height={50} />
          </a>
        </Link>
        <ul className="hidden sm:flex font-semibold mx-auto w-60 justify-between items-center uppercase">
          <li>
            <Link href="/">
              <a className="hover:text-gray-700 transition-all ease-in-out cursor-pointer border-b-4 border-gray-50 mt-1 hover:border-yellow-500">
                Home
              </a>
            </Link>
          </li>

          <li>
            <Link href="/about">
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
        <button
          onClick={handleReservationModal}
          className="hidden sm:block cta-btn"
        >
          Reservation
        </button>
        <div className="sm:hidden relative w-10 h-10 z-10 top-1 mx-2">
          <div
            className={`w-full h-full absolute z-20 rounded cursor-pointer ${
              showSidebar ? "block" : "hidden"
            }`}
          ></div>
          <span
            onClick={handleNav}
            className={`absolute material-icons text-3xl px-1 ${
              showSidebar ? "bg-gray-800" : "bg-gray-200"
            } text-gray-500 rounded cursor-pointer select-none`}
          >
            menu
          </span>
        </div>

        {/* Mobile friendly version of navigation menu */}
        <div
          ref={navRef}
          className={`bg-gray-800 absolute h-screen top-0 right-0 left-1/2 flex items-center transition-all transform ease-in-out duration-500 ${
            showSidebar ? "" : "translate-x-full"
          }`}
        >
          <ul className="ml-5 h-48 justify-between font-semibold text-2xl uppercase text-yellow-400 flex flex-col">
            <li>
              <Link href="/">
                <a className="hover:text-yellow-300 transition-all ease-in-out cursor-pointer">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:text-yellow-300 transition-all ease-in-out cursor-pointer">
                  About
                </a>
              </Link>
            </li>
            <li
              onClick={() => handleMenu()}
              className="hover:text-yellow-300 transition-all ease-in-out cursor-pointer"
            >
              Menu
            </li>
            <button
              onClick={handleReservationModal}
              className="cta-btn text-gray-800 text-base w-36"
            >
              Reservation
            </button>
          </ul>
        </div>
        {/* / Mobile friendly nav menu */}
      </nav>
      <div className="rounded shadow top-12 left-2 right-2 h-6 opacity-30 fixed z-40 bg-gray-400"></div>
    </>
  );
}
