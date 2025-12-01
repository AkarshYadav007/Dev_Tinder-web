import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from "./utils/userSlice";
import { useNavigate } from 'react-router-dom';
 
const Login = () => {
  const [emailId, setemailId] = useState("");
const [Password, setPassword] = useState("");

const dispatch = useDispatch()

const navigate = useNavigate()

const handleLogin = async () => 
  {
   try{const res = await axios.post("http://localhost:3000/login",{Email: emailId,
  Password: Password},{withCredentials: true})
  const datu = res.data
  dispatch(addUser(datu))
  navigate("/feed")
  }
   catch(err)
   {
    console.error(err);
   }
  }
  return (
    <div
      className="
        h-screen flex justify-center items-center
        bg-center bg-cover
        bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('https://images.wallpapersden.com/image/download/windows-10-clean-dark_a2htamaUmZqaraWkpJRmbmdlrWZlbWU.jpg')]
      "
    >
      <div className="bg-white w-[90%] h-[350px] max-w-[450px] min-w-[350px] shadow-[-2px 2px 15px rgba(0,0,0,0.5)] rounded-lg p-[55px] text-center">
        
        {/* Heading */}
        <h1 className="text-[30px] text-green-700">
          Sign In
        </h1>

        {/* Email */}
        <div className="inputfield">
          <i class="fa-solid fa-user"></i>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setemailId(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="inputfield">
          <i class="fa-solid fa-key"></i>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p>Do not have an account?<a href='#'> Click Here!</a></p>

        {/* Button */}
        <div className="buton">
        <button className="w-[80%] h-[100%] bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition" onClick={handleLogin}>
          Login
        </button>
        </div>

        
      </div>
    </div>
  );
};

export default Login;
