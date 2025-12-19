import React, { useEffect } from "react";
import axios from "axios";
import ReqConCard from "./ReqConCard";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";
import EmptyPage from "./EmptyPage";
import { BASE_URL } from "../utils/constants";

const Requests = () => {
  const dispatch = useDispatch();
  const userdata = useSelector((store) => store.requests);

  const reviewRequest = async (status, _id) => {
    try {
      await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );

      dispatch(removeRequest(_id));
    } catch (err) {
      console.error("REVIEW REQUEST ERROR:", err);
    }
  };

  const fetchRequests = async () => {
    if (userdata && userdata.length > 0) return;

    try {
      const res = await axios.get(
        BASE_URL + "/user/requests/received",
        { withCredentials: true }
      );

      const datu = res?.data?.data || [];
      dispatch(addRequest(datu));
    } catch (err) {
      console.error("FETCH REQUESTS ERROR:", err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, [userdata]);

  if (!userdata) return null;

  if (userdata.length === 0) {
    return (
      <div className="connect-div1">
        <EmptyPage
          title="No Requests Found"
          message="You currently have no pending requests."
        />
      </div>
    );
  }

  return (
    <div className="connect-div2">
      <div className="profile-container">
        <div className="profile-box">Requests</div>
      </div>

      {userdata.map((item) => (
        <ReqConCard
          key={item._id}
          firstName={item.FirstName + " " + item.LastName}
          age={item.Age}
          gender={item.Gender}
          mode="requests"
          id={item._id}
          Photo={item.photo}
          onReview={reviewRequest}
        />
      ))}
    </div>
  );
};

export default Requests;
