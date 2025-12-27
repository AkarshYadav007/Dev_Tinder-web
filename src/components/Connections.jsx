import React, { useEffect } from 'react'
import axios from 'axios'
import ReqConCard from "./ReqConCard"
import { useDispatch, useSelector } from 'react-redux'
import {addConnect} from "../utils/connectionSlice"
import EmptyPage from './EmptyPage'
import { BASE_URL } from '../utils/constants'

const Connections = () => {

    const dispatch = useDispatch();

    const userdata = useSelector((store) =>store.connections)

const fetchConnections = async () => {
  if (userdata.length > 0) return;

  try {
    const res = await axios.get(
      BASE_URL + "/user/connections",
      { withCredentials: true }
    );

    const datu = res?.data?.data;
    dispatch(addConnect(datu));
  } catch (err) {
    console.error("ERROR:", err);
  }
};


        useEffect(() => {fetchConnections()},[userdata])

        if (userdata.length === 0) {
  return (<div className="connect-div1"><EmptyPage
    title="No Connections Found"
    message="Get a Life!!!"
  /></div>)}

  return (
    <div className="connect-div2">
        <div className="profile-container">
        <div className="profile-box">Connections</div>
      </div>
      {userdata.map((item) => (
  <ReqConCard key={item._id} id={item._id} Photo={item.photo} firstName={item.FirstName+ " "+item.LastName} mode = "connections" />
))}
    </div>
  )
}

export default Connections;