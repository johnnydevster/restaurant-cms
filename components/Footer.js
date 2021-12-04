import Head from "next/head";

export default function Footer() {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/43989a61ac.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <footer className="w-full h-96 bg-gray-900 relative z-10">
        <div className="w-full h-full px-10 flex flex-col justify-between">
          <div className="flex w-full h-16 items-center justify-between border-b-4 border-dotted border-opacity-10">
            <div className=" text-white text-xl">
              Deli <span className="text-yellow-400">delights</span>
            </div>
            <div>
              <i
                aria-hidden
                className="transition-all hover:text-gray-300 cursor-pointer text-gray-400 text-2xl fab fa-facebook-square"
              ></i>
              <i
                aria-hidden
                className="transition-all hover:text-gray-300 cursor-pointer ml-4 text-gray-400 text-2xl fab fa-instagram-square"
              ></i>
            </div>
          </div>
          <div className="flex w-full h-16 items-center justify-between border-t-4 border-dotted border-opacity-10">
            <h4 className="text-gray-400">
              Deli delights {`${new Date().getFullYear()}`}. All Rights
              Reserved.
            </h4>
            <div className=" text-yellow-400 flex items-center hover:text-yellow-300 cursor-pointer">
              <h4>Back to top</h4>
              <span class="material-icons text-3xl">keyboard_arrow_up</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
