import React from 'react'

const UserCardEdit = ({datu}) => {
    const {firstName,lastName,age,gender} = datu
  return (
    <div className="useredit-card-container">
        <div className="useredit-card">
            <div className="useredit-image">
            </div>
            <h1 className="username">{firstName + " "+ lastName}</h1>
            <h2 className='username'>{age + ", "+ gender}</h2>
        </div>
    </div>
  )
}

export default UserCardEdit;
