import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../Firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const EmailLogin_m = () => {
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
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      padding: '20px',
      borderRadius: '5px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
      marginBottom: '20px',
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#000',
    },
    input: {
      marginBottom: '15px',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '3px',
      border: '1px solid #ccc',
    },
    forgotPassword: {
      marginBottom: '20px',
      fontSize: '14px',
      color: '#00aaff',
      textAlign: 'right',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: '#aaa',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
    },
  };
  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.header}>Log in to your account</div>
        <input type="email" value={email}
          onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={styles.input} />
        <input value={password}
          onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" style={styles.input} />
        <Link style={styles.forgotPassword}>Forgot Password?</Link>
        <button type="submit" style={styles.button}>LOGIN</button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default EmailLogin_m
