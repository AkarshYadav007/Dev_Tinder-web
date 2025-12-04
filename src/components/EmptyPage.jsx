import React from "react";

const EmptyPage = ({ 
  title = "No Data Found", 
  message = "There is nothing to show here." 
}) => {
  return (
    <div className="empty-container">
      <div className="empty-icon">📭</div>

      <h2 className="empty-title">{title}</h2>
      <p className="empty-message">{message}</p>
    </div>
  );
};

export default EmptyPage;
