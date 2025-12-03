import React from 'react'

const UserCard = ({user}) => {
    const {FirstName,LastName,Age,Gender} = user
  return (
    <div className="user-card-container">
        <div className="user-card">
            <div className="user-image">
            </div>
            <h1 className="username">{FirstName + " "+ LastName}</h1>
            <h2 className='username'>{Age + ", "+ Gender}</h2>
            <div className="user-button">
                <button className="ignorebtn">Ignore<i className="fa-solid fa-thumbs-down"></i></button>
                <button className="interestbtn">Interested<i className="fa-solid fa-thumbs-up"></i></button>
            </div>
        </div>
    </div>
  )
}

export default UserCard;