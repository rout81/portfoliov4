import Footer from "../component/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Component {...pageProps} />
      <Footer />{" "}
    </>
  );
}

export default MyApp;
