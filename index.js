
function StudentCard(props) {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img
        src={props.image}
        className="card-img-top"
        alt={props.name}
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Roll No: {props.rollNo}</p>
        <p className="card-text">Department: {props.department}</p>
        <p className="card-text">Marks: {props.marks}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container mt-4">
      <h2>Student Marks Card</h2>

      <div className="row">
        <StudentCard
          name="Afzal"
          rollNo="101"
          department="BCA"
          marks="90"
          image="https://placehold.co/300x200?text=Afzal"
        />

        <StudentCard
          name="Rahul"
          rollNo="102"
          department="BCA"
          marks="85"
          image="https://placehold.co/300x200?text=Rahul"
        />

        <StudentCard
          name="Arun"
          rollNo="103"
          department="BCA"
          marks="95"
          image="https://placehold.co/300x200?text=Arun"
        />
      </div>
    </div>
  );
}

export default App;
