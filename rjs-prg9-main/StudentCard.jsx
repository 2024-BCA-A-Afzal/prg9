
import React from "react";

function StudentCard({ name, rollNo, department, marks, image }) {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img
        src={image}
        className="card-img-top"
        alt={name}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Roll No: {rollNo}</p>
        <p className="card-text">Department: {department}</p>
        <p className="card-text">Marks: {marks}</p>
      </div>
    </div>
  );
}

export default StudentCard;
