import React from 'react'

const UserCardEdit = ({datu}) => {
    const {firstName,lastName,age,gender,about, Photo} = datu
  return (
    <div className="useredit-card-container">
        <div className="useredit-card">
            <div className="useredit-image"
            style={{ backgroundImage: `url(${Photo})` }}>
            </div>
            <h1 className="username">{firstName + " "+ lastName}</h1>
            <h2 className='username'>{age + ", "+ gender}</h2>
            <p className="username69">{about}</p>
        </div>
    </div>
  )
}

export default UserCardEdit;
