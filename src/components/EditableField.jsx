import React, { useState } from "react";

const EditableField = ({ value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="profile-edits">
      <div>
      <input
        className={`profile-input ${isEditing ? "editable" : ""}`}
        type="text"
        value={value}
        readOnly={!isEditing}
        onChange={(e) => onChange(e.target.value)}
          />
          <button
          className={`profile-button ${isEditing ? "editing" : ""}`} onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Save" : "Edit"}
          </button>
          </div>
</div>
  );
};

export default EditableField;

