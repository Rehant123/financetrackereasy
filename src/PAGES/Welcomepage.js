import React from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../Config/firebase';
import { useNavigate } from 'react-router-dom';

import './styles/welcomepage.css'; // Create a separate CSS file for styling

export default function Welcomepage() {
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      console.log(result);
      

      const authInfo  = {
        userID:result.user.uid,
        name:result.user.displayName,
        profilePhoto:result.user.photoURL,
        isAuth:true,
      };
  
     
   localStorage.setItem("auth",JSON.stringify(authInfo));
    
      
      
      navigate('/main');
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <div className="welcome-container">
      <p className="welcome-text">Sign in With Google</p>
      <button onClick={handleSignin} className="signin-button">
        Sign in
      </button>
    </div>
  );
}
