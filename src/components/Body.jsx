import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector((state) => state.user);

  const fetchdata = async () => {
    try {
      const res = await axios.get(
        BASE_URL + "/profile/view",
        { withCredentials: true }
      );

      dispatch(addUser(res.data.user));
    } catch (err) {
      if (location.pathname !== "/login") {
        navigate("/login");
      }
      console.error(err);
    }
  };

  useEffect(() => {
    // fetch user only once & not on login page
    if (!user && location.pathname !== "/login") {
      fetchdata();
    }
  }, [user, location.pathname]); // ✅ correct dependencies

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
