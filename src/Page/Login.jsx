import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup } from "firebase/auth";
import { auth, provider } from '../Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const auth = getAuth();
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // Handle successful authentication here
      toast.success(`Successfully Login!`, {
        position: "top-right"
      })
      console.log(result.user);
    } catch (error) {
      // Handle errors here
      toast.warning(error.message, {
        position: "top-right",
      })
    }

  };

  return (
    <div className="login-signup-container" style={{ paddingTop: "150px" }}>
      <div className="welcome-section">
        <h1>Welcome to the world of Bewakoof®!</h1>
        <div className="image-container">
          <img src="https://images.bewakoof.com/web/group-19-1617704502.png" alt="Shopping" />
        </div>
      </div>
      <div className="login-section">
        <h2>Log in / Sign up</h2>
        <p>for Latest trends, exciting offers and everything Bewakoof®!</p>
        <div className="login-form">
          <div className="input-container">
            <img src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt="Flag" />
            <input type="text" placeholder="Enter Mobile Number" />
          </div>
          <button className="continue-button">CONTINUE</button>
          <div className="divider">OR</div>
          <Link to={"/Loginwithemail"}>
            <button className="email-button">CONTINUE WITH EMAIL</button>
          </Link>
          <div className="social-buttons">
            <button className="google-button" onClick={handleGoogleSignIn}>GOOGLE</button>
            <button className="facebook-button">FACEBOOK</button>
          </div>
          <p className="terms">
            By creating an account or logging in, you agree with Bewakoof®'s <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
      <ToastContainer style={{ paddingTop: "40px" }} />
    </div>
  );
};

export default Login;
