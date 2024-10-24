// // AuthContext.js
// import { createContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   // const navigate = useNavigate();

//   // Simulated login/signup/logout API calls
//   const login = async (credentials) => {
//     // API call to login
//     const response = await fetch('https://naunidh.shreeradhatechnology.com/naunidh/astro_signin', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(credentials),
//     });
//     const data = await response.json();
//     setUser(data.user);
//     localStorage.setItem('user', JSON.stringify(data.user));
//     // navigate('/profile');
//   };

//   const signup = async (userInfo) => {
//     // API call to signup
//     const response = await fetch('https://naunidh.shreeradhatechnology.com/naunidh/astro_signup', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(userInfo),
//     });
//     const data = await response.json();
//     setUser(data.user);
//     localStorage.setItem('user', JSON.stringify(data.user));
//     // navigate('/profile');
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//     // navigate('/');
//   };

//   useEffect(() => {
//     const savedUser = localStorage.getItem('user');
//     if (savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, login, signup, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// AuthContext.js
// const [token, setToken] = useState('')
import React, { createContext, useContext, useState } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

