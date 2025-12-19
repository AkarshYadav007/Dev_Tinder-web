import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from "../utils/userSlice";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
 
const Login = () => {
  const [emailId, setemailId] = useState("");
const [password, setPassword] = useState("");
const [firstname, setfirstname] = useState("");
const [lastname, setlastname] = useState("");
const [alreadyUser, setAlreadyUser] = useState(true);
const [error,seterror] = useState("");

const dispatch = useDispatch()

const navigate = useNavigate()

const handleLogin = async () => 
  {
    if (!emailId || !password) {
  return seterror("Please enter email and password.");
}

   try{const res = await axios.post(BASE_URL+"/login",{Email: emailId,
  Password: password},{withCredentials: true})
  const datu = res?.data
  dispatch(addUser(datu))
  navigate("/")
  }
   catch (err) {
  const data = err?.response?.data;

  const msg =
    typeof data === "string"
      ? data.replace("ERROR: ", "")
      : data?.message?.replace("ERROR: ", "") || "Something went wrong";

  seterror(msg);
}

  }

  const handleSignUp = async () => 
  {
    if (!firstname || !lastname || !emailId || !password) {
  return seterror("Please Input all the details");
}

   try{const res = await axios.post(BASE_URL+"/signup",{FirstName:firstname, LastName:lastname, Email: emailId,
  Password:password},{withCredentials: true})
  const datu = res?.data
  dispatch(addUser(datu))
  navigate("/profile")
  }
   catch(err)
   {
    const msg = err?.response?.data.replace("ERROR: ", "") || "Something went wrong";
    seterror(msg);
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
      <div className="bg-white w-[90%] h-auto max-w-[450px] min-w-[350px] shadow-[-2px 2px 15px rgba(0,0,0,0.5)] rounded-lg p-[55px] text-center">
        
        {/* Heading */}
        <h1 className="text-[30px] text-green-700">
          {alreadyUser ? "Sign In" : "Sign Up"}
        </h1>

        {/* firstname */}
        { !alreadyUser && <><div className="inputfield">
          <input
            type="text"
            placeholder="Enter FirstName"
            onChange={(e) => setfirstname(e.target.value)}
          />
        </div>

        {/* lastname */}
        <div className="inputfield">
          <input
            type="text"
            placeholder="Enter LastName"
            onChange={(e) => setlastname(e.target.value)}
          />
        </div></>}

        {/* Email */}
        <div className="inputfield">
          <i className="fa-solid fa-user"></i>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setemailId(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="inputfield">
          <i className="fa-solid fa-key"></i>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p>{alreadyUser ? "Do not have an account?" : "Already a user?" }<a className="anchor-button" onClick={() => {setAlreadyUser((value) => !value)}}> Click Here!</a></p>
        <p className="paro">{error}</p>

        {/* Button */}
        <div className="in-up-button">
        <button className="w-[80%] h-[100%] bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition" 
        onClick={alreadyUser ? handleLogin : handleSignUp}>
          {alreadyUser ? "Sign In" : "Sign Up"}
        </button>
        </div>

        
      </div>
    </div>
  );
};

export default Login;
