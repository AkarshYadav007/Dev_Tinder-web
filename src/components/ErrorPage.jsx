import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-message">Oops! Page Not Found</h2>

      <p className="error-description">
        The page you're looking for doesn’t exist or was removed.
      </p>

      <button className="back-btn" onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
