import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styles from "./loginForm.module.scss";
import { useLoginMutation } from "../../Services/userSlice";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isSuccess, data }] = useLoginMutation();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };
    login(credentials);
  };
  if (isSuccess) {
    localStorage.setItem("token", data!);
    return <Navigate to='/' />;
  }
  return (
    <div className={styles.login}>
      <div className={styles.window}>
        <div className={styles.wrapper}>
          <form className={styles.Form} onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className={styles.formField}>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={event => setEmail(event.target.value)}
                required
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={event => setPassword(event.target.value)}
                required
              />
            </div>
            <button className={styles.button} type='submit' onClick={() => {}}>
              Login
            </button>
            <span className={styles.or}>or</span>
            <Link to='/registration' style={{ textDecoration: "none" }}>
              <button className={styles.createButton}>Signup</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
