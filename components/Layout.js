import Head from "next/head";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Local Restaurant</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&family=Playfair+Display:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="relative">
        <Nav />

        <main className="relative">{children}</main>

        <div id="body-background" className="h-screen w-full fixed z-20"></div>
      </div>
    </>
  );
}
