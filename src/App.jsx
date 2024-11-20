import { useState } from 'react';
import axios from 'axios'; 
import { GoogleLogin } from '@react-oauth/google'; 
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  console.log(userData, user);
   
  const handleLoginSuccess = async () => {
    window.location.href = 'https://oauth.habibullodev.uz/api/auth/google';
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => {
            console.log('Login Failed');
          }}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </>
  );
}

export default App;
