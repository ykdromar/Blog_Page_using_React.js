import styles from "../css/login.module.css";
import { useAuth } from "../hooks";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const auth = useAuth();
  const readEmail = (event) => {
    setEmail(event.target.value);
  };

  const readPass = (event) => {
    setPass(event.target.value);
  };

  const login = async () => {
    auth.login(email, pass);
    setEmail("");
    setPass("");
  };
  return (
    <div className={styles.loginPage}>
      <span className={styles.title}>Login</span>
      <input type="text" placeholder="Email" onChange={readEmail}></input>
      <input type="password" placeholder="Password" onChange={readPass}></input>
      <div>
        {auth.user == null && (
          <button className={styles.signBtn} onClick={login}>
            Login
          </button>
        )}
        {auth.user && (
          <button className={styles.signBtn} onClick={auth.logout}>
            Log out
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
