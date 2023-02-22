import React, { useEffect, useState } from "react";
import "./registerForm.scss";
import { Navigate } from "react-router-dom";
import app from "../../http/ApiHtpp";
function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const [answer, setAnswer] = useState({} as { token: string });
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = {
      email,
      password,
      name: nickname,
    };
    app
      .post("/auth/register", data)
      .then(ans => {
        setAnswer(ans.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };
  useEffect(() => {
    localStorage.setItem("token", answer.token);
  }, [answer]);
  if (answer.token) {
    return <Navigate to='/' />;
  }
  return (
    <form className='registration-form' onSubmit={handleSubmit}>
      <h2>Create an Account</h2>
      <div className='form-field'>
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
      <div className='form-field'>
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
      <div className='form-field'>
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
      <button type='submit' onClick={() => {}}>
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
