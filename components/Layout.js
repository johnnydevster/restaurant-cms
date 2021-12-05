import Head from "next/head";
import Nav from "./Nav";
import Image from "next/image";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { useContext } from "react";
import React from "react";
import { MenuContext } from "../components/context/MenuContext";

export default function Layout({ menu, children }) {
  const { setShowMenu, setShowModal, showMenu, showModal } =
    useContext(MenuContext);

  return (
    <>
      <Head>
        <title>Deli Delights</title>
        <script
          src="https://kit.fontawesome.com/43989a61ac.js"
          crossorigin="anonymous"
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&family=Playfair+Display:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <div id="mainwrapper" className="relative">
        {showMenu && (
          <Menu
            setShowModal={setShowModal}
            setShowMenu={setShowMenu}
            menu={menu}
          />
        )}

        {showModal && (
          <div className="absolute inset-0 modal bg-black opacity-70"></div>
        )}
        <Nav setShowModal={setShowModal} setShowMenu={setShowMenu} />

        <main className="relative">{children}</main>
        <Footer />

        <div id="body-background" className="inset-0 fixed">
          <Image src="/../public/body-background.jpg" layout="fill" />
        </div>
      </div>
    </>
  );
}
