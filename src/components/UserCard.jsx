import React from 'react'
import { useDispatch } from 'react-redux';
import {removeUserFromFeed} from "../utils/feedSlice"
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const UserCard = ({user}) => {
    const {FirstName,LastName,Age,Gender,_id,photo,about} = user;

   const dispatch = useDispatch()

    const handleFeedClick = async(status, _id) => 
      {
        try
        {
          await axios.post(BASE_URL+"/request/send/"+status+"/"+_id,{},{withCredentials:true})

          dispatch(removeUserFromFeed(_id))
        }
        catch (err)
        {
          console.error("FEED ACTION ERROR:", err);
        }}

  return (
    <div className="user-card-container">
        <div className="user-card">
            <div 
  className="user-image"
  style={{ backgroundImage: `url(${photo})` }}
>
            </div>
            <h1 className="username">{FirstName + " "+ LastName}</h1>
            <h2 className="username">{Age + ", "+ Gender}</h2>
            <p className="username69">{about}</p>
            <div className="user-button">
                <button className="ignorebtn" onClick={() => {handleFeedClick("ignored",_id)}}>Ignore<i className="fa-solid fa-thumbs-down"></i></button>
                <button className="interestbtn" onClick={() => {handleFeedClick("interested",_id)}}>Interested<i className="fa-solid fa-thumbs-up"></i></button>
            </div>
        </div>
    </div>
  )
}

export default UserCard;