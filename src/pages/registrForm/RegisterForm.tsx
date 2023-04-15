import React, { useState } from "react";
import styles from "../Login/loginForm.module.scss";
import { Navigate } from "react-router-dom";
import { useRegistrationMutation } from "../../Services/userSlice";
function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [registration, { isSuccess, data }] = useRegistrationMutation();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const credentials = {
      email,
      password,
      name: nickname,
    };
    registration(credentials);
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
            <h2>Create an Account</h2>
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
            <div className={styles.formField}>
              <label htmlFor='nickname'>Nickname</label>
              <input
                type='text'
                id='nickname'
                name='nickname'
                value={nickname}
                onChange={event => setNickname(event.target.value)}
                required
              />
            </div>
            <button className={styles.button} type='submit' onClick={() => {}}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
