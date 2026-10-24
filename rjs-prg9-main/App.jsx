
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function StudentCard({ name, rollNo, department, marks, image }) {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img
        src={image}
        className="card-img-top"
        alt={name}
        style={{ height: "200px", objectFit: "cover" }}
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

function App() {
  const students = [
    {
      name: "Afzal",
      rollNo: "101",
      department: "BCA",
      marks: 90,
      image: "https://placehold.co/300x200?text=Student+1"
    },
    {
      name: "Rahul",
      rollNo: "102",
      department: "BCA",
      marks: 85,
      image: "https://placehold.co/300x200?text=Student+2"
    },
    {
      name: "Arun",
      rollNo: "103",
      department: "BCA",
      marks: 95,
      image: "https://placehold.co/300x200?text=Student+3"
    }
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center">Student Marks Card</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {students.map((student) => (
          <StudentCard key={student.rollNo} {...student} />
        ))}
      </div>
    </div>
  );
}

export default App;
