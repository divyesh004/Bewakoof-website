import React from 'react'
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup } from "firebase/auth";
import { auth, provider } from '../Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login_m = () => {
  const auth = getAuth();
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      toast.success("Successfully Login!", {
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
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '85vh',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif',
    },
    card: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      textAlign: 'center',
      width: '300px',
    },
    logo: {
      marginBottom: '20px',
    },
    heading: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#00bfa5',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    divider: {
      margin: '20px 0',
      textAlign: 'center',
      position: 'relative',
    },
    dividerLine: {
      position: 'absolute',
      top: '50%',
      left: '0',
      width: '100%',
      height: '1px',
      backgroundColor: '#ccc',
    },
    dividerText: {
      position: 'relative',
      backgroundColor: '#fff',
      padding: '0 10px',
      zIndex: '1',
    },
    socialButton: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#3b5998',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      marginBottom: '10px',
    },
    googleButton: {
      backgroundColor: '#db4a39',
    },
    footer: {
      marginTop: '20px',
      fontSize: '12px',
      color: '#777',
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img style={styles.logo} src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg" alt="Bewakoof Logo" />
        <h2 style={styles.heading}>Join us now to be a part of Bewakoof® family!</h2>
        <input style={styles.input} type="tel" placeholder="Enter Mobile Number" />
        <button style={styles.button}>CONTINUE</button>
        <div style={styles.divider}>
          <span style={styles.dividerLine}></span>
          <span style={styles.dividerText}>OR</span>
        </div>
        <Link to={"/EmailLogin_m"}> <button style={styles.socialButton}>CONTINUE WITH EMAIL</button></Link>
        <button style={{ ...styles.socialButton, ...styles.googleButton }} onClick={handleGoogleSignIn}>GOOGLE</button>
        <button style={styles.socialButton}>FACEBOOK</button>
        <div style={styles.footer}>
          By creating an account or logging in, you agree with our Terms & Conditions.
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login_m
