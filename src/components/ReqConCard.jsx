import React from 'react'

const ReqConCard = ({firstName, age, gender, mode, id, onReview}) => {
  return (
    <div className="req-con-container">
        <div className="req-con-box">
            <div className="req-con-photo"></div>
            <div className="req-con-para">
          {/* Always show firstname */}
          {firstName}

          {/* Show age + gender ONLY if both exist */}
          {age && gender && (
            <span>{`${age}, ${gender}`}</span>
          )}
        </div>
        {mode === "connections" ? (
        <>
          <button className="req-con-btn-1">View Profile</button>
          <button className="req-con-btn-2">Chat</button>
        </>
      ) : (
        <>
          <button className="req-con-btn-3" onClick={() => onReview("accepted", id)}>Accept</button>
          <button className="req-con-btn-4" onClick={() => onReview("rejected", id)}>Reject</button>
        </>
      )}
        </div>
        </div>
  )
}

export default ReqConCard
