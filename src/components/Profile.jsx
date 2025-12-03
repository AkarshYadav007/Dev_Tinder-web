import React, { useState, useEffect } from "react";
import EditableField from "./EditableField";
import { useDispatch, useSelector } from "react-redux";
import UserCardEdit from "./UserCardEdit";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import ProfileSkeleton from "./ProfileSkeleton";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  // Local editable state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  // 1️⃣ Fetch user on page load
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:3000/profile/view", {
          withCredentials: true,
        });
        dispatch(addUser(res.data));
      } catch (err) {
        console.log("Profile fetch error:", err);
      }
    };

    fetchProfile();
  }, [dispatch]);

  // 2️⃣ Sync local state when Redux user updates
  useEffect(() => {
    if (user) {
      setFirstName(user.FirstName || "");
      setLastName(user.LastName || "");
      setAge(user.Age || "");
      setGender(user.Gender || "");
    }
  }, [user]);

  // 3️⃣ Save profile changes
  const saveprofile = async () => {
    try {
      const res = await axios.patch(
        "http://localhost:3000/profile/edit",
        {
          FirstName: firstName,
          LastName: lastName,
          Age: age,
          Gender: gender,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res.data));
      alert("Profile updated!");
    } catch (err) {
      console.log("Update error:", err);
      alert("Failed to update profile");
    }
  };

  // 4️⃣ While user is loading
if (!user || Object.keys(user).length === 0) {
  return <ProfileSkeleton />;
}


  return (
    <div>
      <div className="profile-container">
        <div className="profile-box">Edit Profile</div>
      </div>

      <div className="temp-3">
        <div className="temp-1">

          <p className="para-pro">First Name</p>
          <EditableField value={firstName} onChange={setFirstName} />

          <p className="para-pro">Last Name</p>
          <EditableField value={lastName} onChange={setLastName} />

          <p className="para-pro">Age</p>
          <EditableField value={age} onChange={setAge} />

          <p className="para-pro">Gender</p>
          <EditableField value={gender} onChange={setGender} />

          <div className="change-save-button">
            <button onClick={saveprofile}>Save Changes</button>
          </div>
        </div>

        <div className="profile-mc-div">
          <UserCardEdit datu={{ firstName, lastName, age, gender }} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
