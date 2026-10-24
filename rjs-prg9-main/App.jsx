
import React from "react";
import StudentCard from "./StudentCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Student Marks Card</h2>

      <div className="row">
        <div className="col-md-4">
          <StudentCard
            name="Afzal"
            rollNo="101"
            department="BCA"
            marks="90"
            image="https://placehold.co/300x200?text=Afzal"
          />
        </div>

        <div className="col-md-4">
          <StudentCard
            name="Rahul"
            rollNo="102"
            department="BCA"
            marks="85"
            image="https://placehold.co/300x200?text=Rahul"
          />
        </div>

        <div className="col-md-4">
          <StudentCard
            name="Arun"
            rollNo="103"
            department="BCA"
            marks="95"
            image="https://placehold.co/300x200?text=Arun"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
