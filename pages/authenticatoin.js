import { useState } from "react";
import classes from "../styles/cssModules/authentication.module.scss";
export default function Authentication() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <nav className={`center ${classes.nav}`}>
        <div className="container">
          <h1>Helping U</h1>
        </div>
      </nav>
      <div className={`center container ${classes.buttons}`}>
        <button>Login</button>
        <button>Register</button>
      </div>
    </>
  );
}
