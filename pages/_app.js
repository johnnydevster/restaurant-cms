import "../styles/global.css";
import { MenuProvider } from "../components/context/MenuContext";

function MyApp({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Component {...pageProps} />
    </MenuProvider>
  );
}

export default MyApp;
