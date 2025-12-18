import React, { useState, useEffect } from "react";
import EditableField from "./EditableField";
import { useDispatch, useSelector } from "react-redux";
import UserCardEdit from "./UserCardEdit";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import ProfileSkeleton from "./ProfileSkeleton";
import { BASE_URL } from "../utils/constants";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  // Local editable state
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");
  const [file, setFile] = useState("");

  // 1️⃣ Fetch user on page load
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(BASE_URL+"/profile/view", {
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
      setAge(user.Age || "");
      setGender(user.Gender || "");
      setAbout(user.about || "");
      setFile(user.photo)
    }
  }, [user]);

  // 3️⃣ Save profile changes
const saveprofile = async () => {
  try {
    const formData = new FormData();
    formData.append("Age", age);
    formData.append("Gender", gender);
    formData.append("about", about);

    // Only append if user selected a file
    if (file instanceof File) {
      formData.append("photo", file);
    }

    const res = await axios.post(
      BASE_URL+"/profile/edit",
      formData,
      {
        withCredentials: true
      }
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

          <p className="para-pro">Age</p>
          <EditableField value={age} onChange={setAge} />

          <p className="para-pro">Gender</p>
          <EditableField value={gender} onChange={setGender} />

          <p className="para-pro">About</p>
          <EditableField value={about} onChange={setAbout} />

          <p className="para-pro">Upload Photo</p>
      <div className="profile-edits">
  <div>

    <input
      type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])}
    />
    <button className="upload-button">Upload</button>
  </div>
</div>

          <div className="change-save-button">
            <button onClick={saveprofile}>Save Changes</button>
          </div>
        </div>

        <div className="profile-mc-div">
          <UserCardEdit 
  datu={{ 
    firstName: user.FirstName, 
    lastName: user.LastName, 
    age, 
    Photo: file instanceof File ? URL.createObjectURL(file) : user.photo,
    gender, 
    about
  }} 
/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
