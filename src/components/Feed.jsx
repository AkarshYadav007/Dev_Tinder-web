import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import axios from 'axios';
import UserCard from './UserCard';

const Feed = () => {

  const dispatch = useDispatch();
  const datu = useSelector((store) => store.feed);

  const getfeed = async() => 
  { if (datu && datu.length > 0) return;


    const res = await axios.get("http://localhost:3000/user/feed",{withCredentials:true})
    dispatch(addFeed(res.data))
  }

  useEffect(() => {getfeed()},[])
  return datu && (
    <div><UserCard user={datu[6]}/></div>
  )
}

export default Feed;