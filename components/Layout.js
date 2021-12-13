import Head from "next/head";
import Nav from "./Nav";
import Image from "next/image";
import Menu from "../components/Menu";
import ReservationModal from "../components/ReservationModal";
import Footer from "../components/Footer";
import { useContext, useRef } from "react";
import React from "react";
import { MenuContext } from "../components/context/MenuContext";
import bodyBackground from "../public/body-background.jpg";
import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

export default function Layout({ menu, children }) {
  const {
    setShowMenu,
    setShowModal,
    showMenu,
    showModal,
    showReservationModal,
    setShowReservationModal,
  } = useContext(MenuContext);

  const topRef = useRef(null);

  function scrollToTop() {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Head>
        <title>Deli Delights</title>
        <script
          src="https://kit.fontawesome.com/43989a61ac.js"
          crossOrigin="anonymous"
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&family=Playfair+Display:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <div ref={topRef} id="mainwrapper" className="relative">
        {showMenu && (
          <Menu
            setShowModal={setShowModal}
            setShowMenu={setShowMenu}
            menu={menu}
          />
        )}
        {showReservationModal && (
          <ReservationModal
            setShowReservationModal={setShowReservationModal}
            setShowModal={setShowModal}
          />
        )}

        {showModal && (
          <div className="absolute inset-0 modal bg-black opacity-70"></div>
        )}
        <Nav
          setShowModal={setShowModal}
          setShowMenu={setShowMenu}
          setShowReservationModal={setShowReservationModal}
        />

        <main className="relative">{children}</main>
        <Footer scrollToTop={scrollToTop} />

        <div id="body-background" className="inset-0 fixed">
          <Image src={bodyBackground} layout="fill" />
        </div>
      </div>
    </LocalizationProvider>
  );
}
