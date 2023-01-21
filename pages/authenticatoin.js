import { useState } from "react";
import Link from "next/link";
import classes from "../styles/cssModules/authentication.module.scss";

export default function Authentication() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className={`center container ${classes.buttons}`}>
        <button>
          <Link href="login">Login</Link>
        </button>
        <button>
          <Link href="register">Register</Link>
        </button>
      </div>
    </>
  );
}
