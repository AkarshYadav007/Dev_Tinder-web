import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch,useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import axios from 'axios'

const Body = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

const user = useSelector((state) => state.user)


  const fetchdata = async() => 
    {try{
      const res = await axios.get("/api/profile/view",{withCredentials:true})

      dispatch(addUser(res.data))
    }
    catch (err)
    {
      navigate("/login")
      console.error(err)
    }
  }

    useEffect(() => {
      if (!user || Object.keys(user).length === 0) {
  fetchdata();
}
    },[])

  return (
        <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </div>
  )
}

export default Body