import Head from "next/head";
import Nav from "./Nav";
import Image from "next/image";
import { useState } from "react";

export default function Layout({ children }) {
  const [menu, setMenu] = useState(null);
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
        <Nav />

        <main className="relative">{children}</main>

        <div id="body-background" className="inset-0 fixed z-0">
          <Image src="/../public/body-background.jpg" layout="fill" />
        </div>
      </div>
    </>
  );
}
