import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <>
      <nav className="tracking-widest items-center flex w-full fixed z-50 bg-gray-50 p-2 rounded-b">
        <Image src="/../public/logo.png" width={50} height={50} />

        <ul className="font-semibold mx-auto w-60 flex justify-between items-center uppercase">
          <li className="hover:text-gray-700 transition-all ease-in-out cursor-pointer border-b-4 border-gray-50 mt-1 hover:border-yellow-500">
            Home
          </li>
          <li className="hover:text-gray-700 transition-all ease-in-out cursor-pointer border-b-4 border-gray-50 mt-1 hover:border-yellow-500">
            About
          </li>
          <li className="hover:text-gray-700 transition-all ease-in-out cursor-pointer border-b-4 border-gray-50 mt-1 hover:border-yellow-500">
            Menu
          </li>
        </ul>

        <button className="cta-btn">Reservation</button>
      </nav>
      <div className="rounded top-12 left-2 right-2 h-6 opacity-50 absolute z-40 bg-gray-400"></div>
    </>
  );
}
