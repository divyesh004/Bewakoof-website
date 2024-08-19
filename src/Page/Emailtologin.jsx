import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { auth } from '../Firebase'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Emailtologin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        toast.success("Successfully Login!", {
          position: "top-right"
        })
      })
      .catch((err) => {
        toast.warning(err.message, {
          position: "top-right",
        })
      })
    console.log(email, password)

  };
  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log in to your account</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <Link>Forgot Password?</Link>
        </div>
        <button type="submit">LOGIN</button>
      </form>
      <ToastContainer style={{ paddingTop: "40px" }} />
    </div>

  );
}

export default Emailtologin;