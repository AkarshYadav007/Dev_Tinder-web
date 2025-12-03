const ProfileSkeleton = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "40px" }}>
      
      {/* Left side skeleton */}
      <div style={{ width: "55%" }}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <div className="skeleton skeleton-text" style={{ width: "120px", height: "16px" }}></div>
            <div className="skeleton skeleton-box" style={{ width: "100%", height: "45px" }}></div>
          </div>
        ))}

        <div className="skeleton skeleton-button" style={{ width: "180px", height: "50px", borderRadius: "12px" }}></div>
      </div>

      {/* Right side image preview skeleton */}
      <div style={{ width: "40%", marginLeft: "20px" }}>
        <div className="skeleton" style={{ width: "100%", height: "350px", borderRadius: "12px" }}></div>
      </div>

    </div>
  );
};

export default ProfileSkeleton;
