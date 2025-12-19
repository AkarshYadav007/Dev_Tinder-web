import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { removeUser } from "../utils/userSlice";
import { removeConnect } from '../utils/connectionSlice';
import { removeFeed } from '../utils/feedSlice';
import { removeRequests } from '../utils/requestSlice';
import { BASE_URL } from '../utils/constants';

const Navbar = () => {

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const fetchdatu = async() => 
    {
      await axios.post(BASE_URL+"/logout",{},{withCredentials:true})
      dispatch(removeUser())
      dispatch(removeFeed())
      dispatch(removeConnect())
      dispatch(removeRequests())
    }

    const handleLogout = async () => {
    await fetchdatu();
    navigate("/login");
  };

  return (
    <div className="navbar bg-base-300 shadow-sm">
  {user && (<div className="logo">
    <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
  </div>)}
  {user && (<p className="namepara">Hello, {user.FirstName}</p>)}
  {user && (<div className="flex gap-2">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
            <img
  alt="Tailwind CSS Navbar component"
  src={user.photo || "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"}
/>

        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">Profile</Link>
        </li>
        <li>
          <Link to="/requests" className="justify-between">Requests</Link>
        </li>
        <li>
          <Link to="/connections">Connections</Link>
          </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  </div>)}
</div>
  )
}

export default Navbar;