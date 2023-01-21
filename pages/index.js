import { useState } from "react";
import styles from "@/styles/Home.module.scss";
import Authentication from "./authenticatoin";
import Dashboard from "./dashboard";
export default function Home() {
  const [isLogin, setIsLogin] = useState(false);

  return <>{isLogin ? <Dashboard /> : <Authentication />}</>;
}
