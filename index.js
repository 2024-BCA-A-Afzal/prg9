
function StudentCard(props) {
  return (
    <div className="card m-3 shadow" style={{ width: "18rem" }}>
      <img
        src={props.image}
        className="card-img-top"
        alt={props.name}
        style={{
          height: "180px",
          objectFit: "cover"
        }}
      />

      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          Register No: {props.registerNo}
        </p>
        <p className="card-text">
          Department: {props.department}
        </p>
        <p className="card-text">
          Marks: {props.marks}
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        Student Marks Card
      </h2>

      <div className="d-flex flex-wrap justify-content-center">
        <StudentCard
          name="Arun Kumar"
          registerNo="23BCA001"
          department="BCA"
          marks="485"
          image="https://raw.githubusercontent.com/2024-BCA-A-Afzal/prg9/main/rjs-prg9-main/images1.jpg"
        />

        <StudentCard
          name="Rahul"
          registerNo="23BCA002"
          department="BCA"
          marks="450"
          image="https://raw.githubusercontent.com/2024-BCA-A-Afzal/prg9/main/rjs-prg9-main/image2.jpg"
        />

        <StudentCard
          name="Afzal"
          registerNo="23BCA003"
          department="BCA"
          marks="470"
          image="https://raw.githubusercontent.com/2024-BCA-A-Afzal/prg9/main/rjs-prg9-main/image3.jpg"
        />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
