import "@/styles/globals.scss";
import classes from "../styles/cssModules/authentication.module.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav className={`center ${classes.nav}`}>
        <div className="container">
          <h1>Helping U</h1>
        </div>
      </nav>
      <Component {...pageProps} />{" "}
    </>
  );
}
